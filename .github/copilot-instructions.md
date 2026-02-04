# GitHub Copilot Instructions

## Project Context

You are working on a **Next.js static website** for an AI chat interface. The site uses TypeScript, Tailwind CSS, and is deployed to GitHub Pages.

## Key Points

- **Framework**: Next.js 16 with App Router and static export
- **Language**: TypeScript (strict typing required)
- **Styling**: Tailwind CSS (use utility classes)
- **Deployment**: GitHub Pages (static site generation)
- **Base Path**: `/Ai-chat-ui-1/` in production

## Code Style

1. **Use TypeScript properly**: No `any` types, define interfaces for all props and data structures
2. **Functional components only**: Use React hooks, no class components
3. **Client components**: Add `"use client"` directive when using hooks or browser APIs
4. **Tailwind CSS**: Use utility classes for styling, avoid inline styles
5. **Follow ESLint**: Adhere to `next/core-web-vitals` configuration

## Important Constraints

### Static Export Limitations
- ❌ No Server-Side Rendering (SSR)
- ❌ No API routes (use `/app/api/*`)
- ❌ No dynamic routes with `getStaticPaths` fallback
- ❌ No Image Optimization (use `unoptimized: true`)
- ✅ All pages must be statically generated at build time

### Always Verify Changes
Before suggesting code:
1. Run `npm run lint` to check code quality
2. Run `npm run build` to ensure static export works
3. Test with `npx serve out` if making UI changes

## Common Patterns

### Component Structure
```typescript
"use client"; // Only if using hooks/browser APIs

interface ComponentProps {
  // Define props with proper types
}

export default function Component({ prop }: ComponentProps) {
  // Component logic
  return <div className="tailwind-classes">...</div>;
}
```

### Importing
```typescript
import { useState } from 'react'; // React imports
import type { MyType } from '@/types/my-type'; // Type imports
import Component from '@/components/Component'; // Component imports
```

### Type Definitions
Create interfaces in `/types` directory and import as needed:
```typescript
export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}
```

## File Locations

- **Components**: `/components/*.tsx`
- **Pages**: `/app/**/page.tsx`
- **Layouts**: `/app/**/layout.tsx`
- **Types**: `/types/*.ts`
- **Utilities**: `/lib/*.ts`
- **Styles**: `/app/globals.css`

## Testing Checklist

Before committing:
- [ ] TypeScript compiles without errors
- [ ] ESLint passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Static export generates correctly in `./out`

## Remember

- This is a **static site** - all content must be generated at build time
- Use environment variables via `NEXT_PUBLIC_*` prefix for client-side access
- Never commit `node_modules/`, `.next/`, or `out/` directories
- Keep changes minimal and focused
