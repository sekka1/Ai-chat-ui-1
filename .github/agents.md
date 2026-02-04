# AI Agent Instructions for Ai-chat-ui-1

## Repository Overview

This repository contains a **Next.js static website** for an AI chat interface, built with TypeScript and Tailwind CSS. The site is deployed to **GitHub Pages** using GitHub Actions.

## Project Type & Technology Stack

- **Framework**: Next.js 16 (App Router) with static export (`output: 'export'`)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4.1
- **Deployment**: GitHub Pages via GitHub Actions
- **Node Version**: 20.x (used in CI/CD)

## Key Project Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
```

### Building & Testing
```bash
npm run build        # Build static site (outputs to ./out directory)
npm run lint         # Run ESLint to check code quality
```

### Testing the Build Locally
```bash
npx serve out        # Serve the production build locally
```

## Important Configuration Details

### Static Export Configuration
The project is configured for static site generation in `next.config.js`:
- `output: 'export'` - Enables static HTML export
- `basePath: '/Ai-chat-ui-1'` - GitHub Pages repository path (production only)
- `assetPrefix: '/Ai-chat-ui-1/'` - Asset path prefix for GitHub Pages
- `images.unoptimized: true` - Required for static export
- `trailingSlash: true` - Ensures proper routing on static hosts

### Project Structure
```
ai-chat-ui-1/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main chat page
├── components/            # React components
│   ├── ChatInput.tsx     # Message input component
│   ├── ChatMessage.tsx   # Individual message component
│   └── ChatMessages.tsx  # Messages list component
├── lib/                   # Utility functions
│   └── api.ts            # API integration (currently mock)
├── types/                 # TypeScript type definitions
│   └── chat.ts           # Chat-related types
├── public/               # Static assets
├── .github/
│   ├── workflows/        # GitHub Actions workflows
│   ├── agents.md         # This file
│   └── copilot-instructions.md
└── [config files]        # Various configuration files
```

## Guidelines for AI Agents

### Code Style & Best Practices

1. **TypeScript**: Always use proper TypeScript typing. Avoid `any` types.
2. **React**: Use functional components with hooks (no class components).
3. **Next.js App Router**: Follow App Router conventions (use `app/` directory).
4. **Client Components**: Mark components with `"use client"` when they use hooks or browser APIs.
5. **Styling**: Use Tailwind CSS classes for styling. Avoid inline styles unless absolutely necessary.
6. **ESLint**: Follow the existing ESLint configuration (`next/core-web-vitals`).

### Making Changes

1. **Always run lint and build before committing**:
   ```bash
   npm run lint
   npm run build
   ```

2. **Test locally**: After building, test the static site:
   ```bash
   npx serve out
   ```

3. **Minimal changes**: Make surgical, focused changes. Don't refactor unrelated code.

4. **Preserve configuration**: Don't modify the static export configuration unless specifically asked.

### GitHub Pages Deployment

- The site is deployed from the `out/` directory after `npm run build`
- Base path is `/Ai-chat-ui-1/` in production
- Never commit the `out/` directory (it's in `.gitignore`)
- Deployment happens automatically via GitHub Actions on push to `main`

### CI/CD Workflows

**Deployment Workflow** (`.github/workflows/deploy.yml`):
- Triggers on push to `main` branch
- Runs `npm ci`, `npm run build`, and deploys to GitHub Pages

**PR Checks Workflow** (`.github/workflows/pr-checks.yml`):
- Runs on all pull requests
- Executes linting and build verification
- Must pass before PR can be merged

### Dependencies

- Use `npm` for package management (not yarn or pnpm)
- Use `npm ci` in CI/CD (not `npm install`)
- Only add dependencies when absolutely necessary
- Prefer using existing dependencies over adding new ones

### Common Tasks

#### Adding a New Component
```typescript
// components/MyComponent.tsx
"use client"; // If using hooks or browser APIs

import React from 'react';

interface MyComponentProps {
  // Define props
}

export default function MyComponent({ }: MyComponentProps) {
  return (
    <div className="...">
      {/* Component content */}
    </div>
  );
}
```

#### Adding a New Page
```typescript
// app/my-page/page.tsx
export default function MyPage() {
  return (
    <div>
      {/* Page content */}
    </div>
  );
}
```

#### Adding Types
```typescript
// types/my-types.ts
export interface MyType {
  id: string;
  name: string;
}
```

### Testing Requirements

Before any PR is merged:
1. ✅ ESLint must pass: `npm run lint`
2. ✅ Build must succeed: `npm run build`
3. ✅ The built site should be manually verified (if UI changes)

### Security Considerations

- Never commit API keys or secrets
- Use environment variables for configuration (via `.env.local` in development)
- Validate all user inputs
- Be cautious with dangerouslySetInnerHTML

### Questions or Issues?

If you encounter build errors or configuration issues:
1. Check Node.js version (should be 20.x)
2. Delete `node_modules` and `.next`, then run `npm install`
3. Verify `next.config.js` static export configuration
4. Check that you're not using features incompatible with static export

## Repository Purpose

This is a modern AI chat interface that can be extended to connect to various AI backends. The current implementation includes:
- Chat message display with user/assistant roles
- Message input with keyboard support
- Responsive design
- Mock API integration (ready to be replaced with real API)
- Type-safe TypeScript implementation

The goal is to maintain a clean, performant, and easily deployable static site while allowing for future enhancements.
