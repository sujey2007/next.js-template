# Claude Instructions

## Purpose
This repository is a reusable Next.js + Turborepo starter template. Changes should preserve its role as a generic foundation that can be adapted to future projects.

## Project Structure
- `apps/web`: main Next.js application.
- `packages/ui`: reusable UI components and shared styles.
- `packages/utils`: shared utilities.
- `packages/config/eslint`: shared ESLint configuration.
- `packages/config/typescript`: shared TypeScript configuration.
- `scripts`: repository automation such as asset extraction.

## Working Rules
1. Prefer reusable components over page-specific duplication.
2. Keep business/project-specific logic inside `apps/web` unless it is clearly reusable.
3. Keep shared packages framework-light where practical.
4. Preserve TypeScript strictness and existing linting conventions.
5. Use accessible semantic HTML and keyboard-friendly interactions.
6. Keep styling consistent with the shared design tokens in `packages/ui`.
7. Do not commit secrets; use `.env.example` for documented environment variables.
8. Before finishing a change, run the relevant lint, type-check, and build/dev validation available in the workspace.

## Commands
- `pnpm install` — install dependencies.
- `pnpm dev` — run the workspace in development mode.
- `pnpm lint` — run linting across the workspace.
- `pnpm build` — build workspace applications/packages.

## Template Changes
When adding a reusable capability, consider whether it belongs in `packages/ui`, `packages/utils`, or a shared config package. Update `README.md` and `Changelog.md` when the template's usage or capabilities change.
