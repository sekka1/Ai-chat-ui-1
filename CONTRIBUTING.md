# Contributing to AI Chat UI

Thank you for your interest in contributing to AI Chat UI! This document provides guidelines for both human developers and AI agents working on this project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)
- Git

### Setup

1. **Fork the repository** (for external contributors)

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Ai-chat-ui-1.git
   cd Ai-chat-ui-1
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** to `http://localhost:3000`

## Development Workflow

### Making Changes

1. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following the [Code Style Guidelines](#code-style-guidelines)

3. **Test your changes**:
   ```bash
   # Run linter
   npm run lint
   
   # Build the static site
   npm run build
   
   # Test the build locally
   npx serve out
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Brief description of your changes"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## Code Style Guidelines

### TypeScript

- ✅ Use TypeScript for all `.ts` and `.tsx` files
- ✅ Define interfaces for all component props and data structures
- ✅ Use proper type annotations (avoid `any`)
- ✅ Import types using `import type` when importing only types

Example:
```typescript
import type { Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
  onDelete?: (id: string) => void;
}

export default function ChatMessage({ message, onDelete }: ChatMessageProps) {
  // Component implementation
}
```

### React Components

- ✅ Use functional components with hooks
- ✅ Add `"use client"` directive for components using hooks or browser APIs
- ✅ Use descriptive component and variable names
- ✅ Keep components focused and single-purpose
- ❌ Don't use class components

Example:
```typescript
"use client";

import { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Styling

- ✅ Use Tailwind CSS utility classes
- ✅ Use responsive design classes (`sm:`, `md:`, `lg:`)
- ✅ Follow the existing dark theme color scheme
- ❌ Avoid inline styles unless absolutely necessary
- ❌ Don't add custom CSS unless required

Example:
```typescript
<div className="rounded-lg bg-gray-800 p-4 shadow-md hover:bg-gray-700">
  {/* Content */}
</div>
```

### File Organization

```
ai-chat-ui-1/
├── app/              # Next.js pages and layouts
├── components/       # Reusable React components
├── lib/             # Utility functions and helpers
├── types/           # TypeScript type definitions
└── public/          # Static assets
```

- Place React components in `/components`
- Place utility functions in `/lib`
- Place type definitions in `/types`
- Place pages in `/app`

## Testing Requirements

Before submitting a PR, ensure:

### 1. Linting
```bash
npm run lint
```
Must pass with no errors.

### 2. Build
```bash
npm run build
```
Must complete successfully and generate static files in `./out`.

### 3. Manual Testing
If you made UI changes:
```bash
npx serve out
```
Test the functionality in your browser at `http://localhost:3000`.

### 4. No Console Errors
Check browser console for errors during testing.

## Pull Request Process

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] `npm run lint` passes
- [ ] `npm run build` completes successfully
- [ ] Manual testing completed (if applicable)
- [ ] Commit messages are clear and descriptive
- [ ] No unnecessary files included (check `.gitignore`)

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Other (please describe)

## Testing
Describe how you tested your changes:
- [ ] Ran `npm run lint`
- [ ] Ran `npm run build`
- [ ] Tested locally with `npx serve out`
- [ ] Verified in browser

## Screenshots (if applicable)
Add screenshots for UI changes.

## Related Issues
Closes #issue_number (if applicable)
```

### Review Process

1. **Automated Checks**: GitHub Actions will run linting and build checks
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any requested changes
4. **Merge**: Once approved and checks pass, your PR will be merged

## Project Structure

### Configuration Files

- `next.config.js` - Next.js configuration (static export settings)
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration (ESLint 9 flat config)

### Key Files

- `app/page.tsx` - Main chat interface page
- `components/ChatMessages.tsx` - Messages display component
- `components/ChatInput.tsx` - Message input component
- `components/ChatMessage.tsx` - Individual message component
- `lib/api.ts` - API integration (currently mock)
- `types/chat.ts` - Chat-related TypeScript types

## Static Export Limitations

This project uses Next.js static export (`output: 'export'`). Be aware of these limitations:

- ❌ No Server-Side Rendering (SSR)
- ❌ No API routes in `/app/api`
- ❌ No dynamic routes with `getStaticPaths` fallback
- ❌ No Image Optimization API
- ✅ All pages must be statically generated at build time

## Environment Variables

For local development, create a `.env.local` file:

```bash
# Example environment variables
NEXT_PUBLIC_API_ENDPOINT=https://your-api-endpoint.com
```

**Note**: Only variables prefixed with `NEXT_PUBLIC_` are accessible in the browser.

## Deployment

Deployment is handled automatically via GitHub Actions:
- Push to `main` branch triggers deployment
- The built site is deployed to GitHub Pages
- URL: `https://sekka1.github.io/Ai-chat-ui-1/`

## Questions?

If you have questions or need help:
1. Check existing [Issues](https://github.com/sekka1/Ai-chat-ui-1/issues)
2. Create a new Issue with your question
3. Reach out to the maintainers

## Code of Conduct

- Be respectful and considerate
- Provide constructive feedback
- Focus on the code, not the person
- Help create a welcoming environment

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

---

Thank you for contributing to AI Chat UI! 🎉
