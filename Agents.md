# Agent Guide

This file defines how coding agents should work in the template repository.

## Before Editing
- Inspect the relevant app/package and its `package.json`.
- Reuse existing components and utilities before creating new ones.
- Check nearby code for established naming and styling patterns.

## Implementation Guidelines
- Use TypeScript.
- Prefer small, composable React components.
- Keep server/client boundaries intentional in Next.js.
- Avoid unnecessary dependencies.
- Keep public APIs of shared packages stable.
- Make responsive behavior explicit for UI changes.
- Include appropriate loading, error, empty, and accessibility states when relevant.

## Validation
For changes affecting application code, run at least:

```bash
pnpm lint
pnpm build
```

For component-only changes, also verify the component in `apps/web` or the consuming application.

## Git Hygiene
- Keep commits focused on one logical change.
- Do not commit `.env` files, build output, or dependency directories.
- Update `Changelog.md` for meaningful template changes.
