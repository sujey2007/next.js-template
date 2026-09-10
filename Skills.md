# Skills and Repository Conventions

## Next.js
Use the App Router and colocate route-specific code under `apps/web/src/app`. Prefer server components by default and add `"use client"` only when browser interactivity or client-only APIs are required.

## UI Development
Reusable visual building blocks belong in `packages/ui`. Components should accept typed props, avoid hard-coded project branding where possible, and remain easy to compose.

## Styling
Use Tailwind CSS utilities and the shared stylesheet/design tokens. Avoid creating one-off global styles unless the behavior is genuinely global.

## Shared Utilities
Place generic, application-independent helpers in `packages/utils`. Keep domain-specific logic in the consuming application or a dedicated package created for that domain.

## Configuration
Shared ESLint and TypeScript settings live under `packages/config`. Extend those configurations instead of duplicating large configuration files across packages.

## Asset Extraction
The repository includes `scripts/extract-assets.mjs` for extracting visual assets from an existing website. Treat downloaded assets as project-specific inputs and review licensing/usage rights before shipping them.

## Documentation
Keep setup and usage instructions in `README.md`. Record material template changes in `Changelog.md`. Keep these instruction files concise and actionable so both developers and coding agents can follow them.
