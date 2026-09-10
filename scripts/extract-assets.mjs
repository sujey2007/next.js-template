#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { URL } from 'node:url';

const [, , inputUrl, outputDir = './tmp/asset-extract'] = process.argv;

if (!inputUrl) {
  console.error('Usage: pnpm extract:assets -- https://example.com ./tmp/assets');
  process.exit(1);
}

const baseUrl = new URL(inputUrl);
const out = path.resolve(outputDir);
const imageDir = path.join(out, 'images');
const styleDir = path.join(out, 'styles');
await fs.mkdir(imageDir, { recursive: true });
await fs.mkdir(styleDir, { recursive: true });

const response = await fetch(baseUrl, { headers: { 'user-agent': 'nextjs-project-template-asset-extractor/1.0' } });
if (!response.ok) throw new Error(`Failed to fetch ${baseUrl}: ${response.status} ${response.statusText}`);
const html = await response.text();

function unique(values) { return [...new Set(values.filter(Boolean))]; }
function resolveUrl(value) { try { return new URL(value, baseUrl).href; } catch { return null; } }
function decodeHtml(value) {
  return value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>');
}

const images = unique([
  ...[...html.matchAll(/<img[^>]+(?:src|data-src)=["']([^"']+)["']/gi)].map(m => resolveUrl(decodeHtml(m[1]))),
  ...[...html.matchAll(/<source[^>]+srcset=["']([^"']+)["']/gi)].flatMap(m => m[1].split(',').map(v => resolveUrl(decodeHtml(v.trim().split(/\s+/)[0])))),
  ...[...html.matchAll(/url\((['"]?)(.*?)\1\)/gi)].map(m => resolveUrl(decodeHtml(m[2]))),
]);

const stylesheets = unique([
  ...[...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map(m => resolveUrl(decodeHtml(m[1]))),
  ...[...html.matchAll(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']stylesheet["']/gi)].map(m => resolveUrl(decodeHtml(m[1]))),
]);

const inlineCss = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
const cssSources = [...inlineCss];

for (let i = 0; i < stylesheets.length; i += 1) {
  try {
    const r = await fetch(stylesheets[i], { headers: { 'user-agent': 'nextjs-project-template-asset-extractor/1.0' } });
    if (r.ok) {
      const css = await r.text();
      cssSources.push(css);
      await fs.writeFile(path.join(styleDir, `stylesheet-${String(i + 1).padStart(2, '0')}.css`), css);
    }
  } catch (error) {
    console.warn(`Could not download stylesheet: ${stylesheets[i]}`, error.message);
  }
}

const css = cssSources.join('\n');
const hexColors = unique([...css.matchAll(/#[0-9a-f]{3,8}\b/gi)].map(m => m[0].toUpperCase()));
const rgbColors = unique([...css.matchAll(/rgba?\([^)]*\)/gi)].map(m => m[0]));
const cssVars = unique([...css.matchAll(/(--[a-zA-Z0-9_-]+)\s*:\s*([^;{}]+)/g)].map(m => `${m[1]}: ${m[2].trim()}`));
const fontFamilies = unique([
  ...[...css.matchAll(/font-family\s*:\s*([^;{}]+)/gi)].map(m => m[1].trim()),
  ...[...css.matchAll(/@font-face[\s\S]*?font-family\s*:\s*["']?([^;"'}]+)["']?/gi)].map(m => m[1].trim()),
]);
const fontUrls = unique([...css.matchAll(/url\((['"]?)(https?:\/\/[^)'"\s]+)\1\)/gi)].map(m => m[2]));

const report = {
  source: baseUrl.href,
  extractedAt: new Date().toISOString(),
  note: 'Only publicly reachable HTML/CSS was inspected. Verify licensing/permission before reusing assets.',
  counts: { images: images.length, stylesheets: stylesheets.length, fontUrls: fontUrls.length },
  colors: { hex: hexColors, rgb: rgbColors, cssVariables: cssVars },
  fonts: { families: fontFamilies, urls: fontUrls },
  images,
  stylesheets,
};

for (let i = 0; i < images.length; i += 1) {
  const imageUrl = images[i];
  try {
    const r = await fetch(imageUrl, { headers: { 'user-agent': 'nextjs-project-template-asset-extractor/1.0' } });
    if (!r.ok) continue;
    const contentType = r.headers.get('content-type') ?? 'application/octet-stream';
    const ext = contentType.includes('svg') ? 'svg' : contentType.includes('webp') ? 'webp' : contentType.includes('avif') ? 'avif' : contentType.includes('png') ? 'png' : contentType.includes('gif') ? 'gif' : contentType.includes('jpeg') ? 'jpg' : 'bin';
    const filename = `${String(i + 1).padStart(3, '0')}.${ext}`;
    await fs.writeFile(path.join(imageDir, filename), Buffer.from(await r.arrayBuffer()));
  } catch (error) {
    console.warn(`Could not download image: ${imageUrl}`, error.message);
  }
}

await fs.writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
console.log(`Extracted ${images.length} image URL(s), ${stylesheets.length} stylesheet URL(s), ${hexColors.length} hex color(s), and ${fontFamilies.length} font family declaration(s).`);
console.log(`Output: ${out}`);
