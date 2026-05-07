@AGENTS.md

# AI Agent Guide

**Stack**: Next.js 16, React 19, TypeScript (strict), CSS Modules, Bun, Biome, React Compiler ON.

## Critical Rules

These break the build or cause bugs if violated.

### 1. CSS Modules Imported as `s`

```tsx
import s from './component.module.css'
```

### 2. Path Aliases Required

```tsx
import { Image } from '@/components/ui/image'
import { useRect } from '@/hooks/use-rect'
import { clamp } from '@/utils/math'
```

Available aliases: `@/*`, `@/components/*`, `@/lib/*`, `@/hooks/*`, `@/styles/*`, `@/utils/*`.

Biome plugin `no-relative-parent-imports` enforces this -- no `../` imports.

### 3. Server Components by Default

Only add `'use client'` when you need hooks, event handlers, or browser APIs. Keep data fetching in Server Components and pass props down.

### 4. No Manual Memoization

React Compiler handles all optimization. **Never** use `useMemo`, `useCallback`, or `React.memo`.

**Exception**: Use `useRef` for class/object instantiation to prevent infinite loops:

```tsx
const instanceRef = useRef<SomeClass | null>(null)
if (!instanceRef.current) {
  instanceRef.current = new SomeClass(params)
}
```

### 5. No `any` Types

`noExplicitAny: error` in Biome. Use `unknown` + type narrowing instead.

### 6. `import type` for Type-Only Imports

`verbatimModuleSyntax: true` in tsconfig. `useImportType: error` and `useExportType: error` in Biome.

```tsx
import type { ComponentProps } from 'react'
```

## File Structure

```
app/                  # Routes only -- no components here
components/
  ui/                 # Reusable primitives (Image, Link, Form, etc.)
  layout/             # Page chrome (Wrapper, Header, Footer, Theme, Lenis)
lib/
  hooks/              # Custom hooks
  utils/              # Pure utilities (math, fetch, metadata, strings, animation, validation)
  styles/             # Design system, Tailwind config (CSS-based for v4)
```

## TypeScript

- `strict: true` plus: `noImplicitOverride`, `exactOptionalPropertyTypes`, `useUnknownInCatchVariables`, `noFallthroughCasesInSwitch`, `noImplicitReturns`, `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`, `noUncheckedSideEffectImports`
- Target: ES2023, module: ESNext, moduleResolution: bundler
- `verbatimModuleSyntax: true` -- use `import type` for type-only imports
- Prefer `interface` for object shapes, `type` for unions/intersections
- Props extend `ComponentProps<'element'>` when wrapping HTML elements
- React 19: `ref` is a regular prop, no `forwardRef` needed

## Styling

- **CSS Modules**: For complex animations, custom layouts, CSS specificity
- Combine with `cn()` from `clsx`
- Design tokens in `lib/styles/css/global.css`
- Custom viewport functions: `mobile-vw()`, `mobile-vh()`, `desktop-vw()`, `desktop-vh()`
- Column function: `columns(n)` for grid-based sizing
- Use `h-dvh` not `h-screen`
- Animate only `transform`, `opacity` (compositor properties)
- Desktop breakpoint: 800px

## Component Conventions

```tsx
// Standard component pattern
import s from './my-component.module.css'
import cn from 'clsx'
import type { ComponentProps } from 'react'

interface MyComponentProps extends ComponentProps<'div'> {
  variant?: 'primary' | 'secondary'
}

export default function MyComponent({ variant = 'primary', className, ...props }: MyComponentProps) {
  return <div className={cn(s.root, className)} {...props} />
}
```

- Named function declarations, not arrow functions
- Kebab-case filenames (`my-component.tsx`, `my-component.module.css`)
- CamelCase CSS class names (`.isPrimary`, `.isDisabled`)
- Zustand for global state, React state for component state
- `next/dynamic` for heavy components with `{ ssr: false }` when needed

## Key Libraries

| Package | Purpose |
|---------|---------|
| `lenis` | Smooth scroll (configured in layout) |
| `motion/react` | Complex animations (Framer motion) |
| `@base-ui/react` | Unstyled UI primitives |
| `clsx` | Class name composition (aliased as `cn`) |

## Git

- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`
- No force push to `main`
- No `--no-verify` unless explicitly requested
- Small, atomic commits
