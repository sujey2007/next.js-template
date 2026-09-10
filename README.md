# Next.js Project Template

Reusable Next.js + Turborepo starter for new web projects.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Turborepo
- pnpm

## Structure

```text
apps/
  web/                  Next.js application
packages/
  ui/                   Reusable UI components and design tokens
  utils/                Shared utilities
  config/
    eslint/             Shared ESLint configuration
    typescript/         Shared TypeScript configuration
scripts/
  extract-assets.mjs    Website asset extraction utility
.github/
  workflows/ci.yml      CI checks
```

## Setup

Requirements: Node.js 20.9+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Commands

```bash
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm format
```

## Start a New Project

1. Copy or fork this repository.
2. Rename the root/app package names.
3. Update the application metadata and branding.
4. Replace the sample page content.
5. Customize design tokens in `packages/ui/src/styles.css`.
6. Add reusable components to `packages/ui`.
7. Add project-specific packages under `packages/`.
8. Run lint, typecheck, build, and deploy.

## Website Asset Extraction

```bash
pnpm extract:assets -- https://example.com ./tmp/example-assets
```

The utility discovers publicly reachable:

- Images
- CSS stylesheets
- Color values and CSS variables
- Font-family declarations
- Font URLs

Output is written to the specified directory.

Review licenses and usage rights before reusing assets.

## Deployment

`apps/web` is the deployable Next.js application. Use the hosting platform's standard Next.js deployment flow and configure the monorepo/workspace as required by the platform.
