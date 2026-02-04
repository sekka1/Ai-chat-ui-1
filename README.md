# AI Chat UI

A modern, responsive AI chat interface built with Next.js 14, TypeScript, and Tailwind CSS. Configured for static site generation and deployment to GitHub Pages.

## Features

- 🎨 **Dark Theme Interface** - Modern, clean design with dark background
- 💬 **Real-time Chat Experience** - Interactive chat interface with user and AI messages
- 📱 **Responsive Design** - Works seamlessly on mobile and desktop devices
- ⚡ **Static Site Generation** - Fast, optimized static site built with Next.js
- 🚀 **GitHub Pages Deployment** - Automated deployment via GitHub Actions
- 🔌 **API Integration Ready** - Placeholder structure for backend API integration
- ⌨️ **Keyboard Support** - Press Enter to send messages
- 🔄 **Auto-scroll** - Automatically scrolls to latest messages
- 💾 **TypeScript** - Full type safety throughout the application

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sekka1/Ai-chat-ui-1.git
cd Ai-chat-ui-1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the static site:

```bash
npm run build
```

This will generate a static site in the `out` directory.

To test the production build locally:

```bash
# Serve the out directory with any static file server
npx serve out
```

## API Integration

The application includes a placeholder API integration structure. To connect to your actual AI backend:

1. Open `lib/api.ts`
2. Replace the mock implementation with your actual API call:

```typescript
export async function sendMessage(message: string): Promise<Message> {
  const response = await fetch(YOUR_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any authentication headers here
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  const data = await response.json();
  return {
    id: data.id,
    content: data.content,
    role: 'assistant',
    timestamp: new Date(data.timestamp),
  };
}
```

3. Optionally, set the API endpoint via environment variable:
```bash
# Create .env.local file
NEXT_PUBLIC_API_ENDPOINT=https://your-api-endpoint.com/chat
```

## Deployment to GitHub Pages

### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup Steps

1. Go to your repository settings on GitHub
2. Navigate to **Pages** under "Code and automation"
3. Under **Source**, select "GitHub Actions"
4. Push your code to the `main` branch
5. The workflow will automatically build and deploy your site
6. Your site will be available at `https://[username].github.io/Ai-chat-ui-1/`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Upload the contents of the 'out' directory to your hosting provider
```

## Project Structure

```
ai-chat-ui-1/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main chat page
├── components/            # React components
│   ├── ChatInput.tsx     # Message input component
│   ├── ChatMessage.tsx   # Individual message component
│   └── ChatMessages.tsx  # Messages list component
├── lib/                   # Utility functions
│   └── api.ts            # API integration functions
├── types/                 # TypeScript type definitions
│   └── chat.ts           # Chat-related types
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment workflow
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Configuration

### Next.js Configuration

The `next.config.js` is configured for static site generation:

- `output: 'export'` - Enables static export
- `basePath` and `assetPrefix` - Configured for GitHub Pages
- `images.unoptimized` - Required for static export

### Customization

To customize the base path for your repository:

1. Update `next.config.js`:
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static site for production
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)
