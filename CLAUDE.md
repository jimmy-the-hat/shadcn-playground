# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev         # Start all workspaces (Next.js dev with Turbopack)
bun build       # Production build
bun lint        # ESLint across all workspaces
bun format      # Prettier across all workspaces
bun typecheck   # TypeScript checking across all workspaces
```

All root commands run via Turbo. There are no tests configured.

## Architecture

Bun monorepo with Turbo orchestration. Four workspaces:

- **`apps/web`** — Next.js 16 app (App Router, React 19, RSC-enabled)
- **`packages/ui`** — Shared shadcn/ui component library (radix-luma style, 55+ components)
- **`packages/eslint-config`** — Shared ESLint configs
- **`packages/typescript-config`** — Shared TypeScript configs

### Key cross-package wiring

The UI package is not bundled separately — Next.js transpiles it directly (`transpilePackages` in `next.config.mjs`). Global styles (Tailwind v4 with OKLch CSS custom properties) live in `packages/ui/src/styles/globals.css` and are imported by the web app's layout.

The UI package exports via `package.json` exports map:
- `@workspace/ui/components/*` — React components
- `@workspace/ui/lib/*` — Utilities (notably `cn()` from `lib/utils`)
- `@workspace/ui/hooks/*` — Custom hooks
- `@workspace/ui/globals.css` — Global styles

### Adding shadcn components

shadcn CLI is configured via `components.json` files in both `apps/web` and `packages/ui`. Components install into `packages/ui/src/components`:

```bash
bunx shadcn@latest add <component> -c apps/web
```

### Styling

- Tailwind CSS v4 with PostCSS
- Dark mode via class strategy (next-themes), toggled with `d` key
- Use `cn()` (clsx + tailwind-merge) for class composition
- CVA (class-variance-authority) for component variants
- Prettier auto-sorts Tailwind classes (configured for `cn` and `cva` functions)
