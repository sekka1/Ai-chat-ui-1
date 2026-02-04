# Agent Context Files

This document provides an overview of the agent instruction and context files in this repository.

## Files Created

### 1. `.github/agents.md`
**Purpose**: Main instruction file for AI agents working on this repository.

**Contents**:
- Repository overview and technology stack
- Project structure and file organization
- Development commands (dev, build, lint)
- Code style guidelines and best practices
- Static export configuration details
- CI/CD workflow information
- Common tasks and examples
- Security considerations

**Use**: AI agents should read this file to understand the project structure, conventions, and development workflow.

### 2. `.github/copilot-instructions.md`
**Purpose**: Specific instructions for GitHub Copilot when providing code suggestions.

**Contents**:
- Quick project context
- Key points about the tech stack
- Code style rules
- Static export constraints
- Common patterns and examples
- Testing checklist

**Use**: GitHub Copilot reads this file to provide contextually appropriate code suggestions.

### 3. `CONTRIBUTING.md`
**Purpose**: Contribution guidelines for both human developers and AI agents.

**Contents**:
- Getting started instructions
- Development workflow
- Code style guidelines
- Testing requirements
- Pull request process and template
- Project structure explanation
- Environment variables setup
- Deployment information

**Use**: Anyone contributing to the project (human or AI) should follow these guidelines.

### 4. `.github/workflows/pr-checks.yml`
**Purpose**: GitHub Actions workflow that runs automated checks on every pull request.

**Contents**:
- Lint check (ESLint)
- Build verification (Next.js static export)
- Build output validation
- Artifact upload for review

**Use**: Automatically runs on every PR to ensure code quality and build success before merging.

## How These Files Work Together

1. **For AI Agents**: Read `.github/agents.md` for comprehensive project understanding, then follow guidelines in `CONTRIBUTING.md` for making changes.

2. **For GitHub Copilot**: Automatically uses `.github/copilot-instructions.md` for contextual code suggestions while developers work.

3. **For Contributors**: Follow `CONTRIBUTING.md` for development workflow and contribution guidelines.

4. **For CI/CD**: The PR checks workflow ensures all changes pass linting and build verification before being merged.

## ESLint Configuration

The project uses ESLint 9 with a flat config file (`eslint.config.mjs`). The configuration includes:
- TypeScript support via `typescript-eslint`
- React and React Hooks rules
- Custom rules for Next.js development
- Ignores for build directories and config files

## Key Points for AI Agents

✅ **Always run before committing**:
```bash
npm run lint   # Check code quality
npm run build  # Verify static export works
```

✅ **Follow existing patterns**: Use TypeScript, functional components, and Tailwind CSS.

✅ **Respect static export limitations**: No SSR, no API routes, no dynamic routes with fallback.

✅ **Test changes**: Build and serve the static site locally to verify changes.

## Updates and Maintenance

- Update `.github/agents.md` when project structure or conventions change
- Update `.github/copilot-instructions.md` when coding patterns or rules change
- Update `CONTRIBUTING.md` when development workflow or requirements change
- Update `.github/workflows/pr-checks.yml` when CI/CD requirements change

## Questions?

If you have questions about these files or suggestions for improvement, please open an issue in the repository.
