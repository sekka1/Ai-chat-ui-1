# Deployment Guide

## GitHub Pages Setup

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/sekka1/Ai-chat-ui-1
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to the `main` branch

### 2. Deployment Process

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Install dependencies
2. Build the Next.js static site
3. Deploy to GitHub Pages

### 3. Access Your Site

After deployment, your site will be available at:
```
https://sekka1.github.io/Ai-chat-ui-1/
```

## Local Development

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open http://localhost:3000

### Build Static Site
```bash
npm run build
```
Output will be in the `out/` directory

### Preview Production Build
```bash
npx serve out
```

## API Configuration

To connect to your AI backend:

1. Edit `lib/api.ts`
2. Update the `API_ENDPOINT` constant
3. Replace the mock implementation with actual API calls
4. Optionally, use environment variables:

```bash
# Create .env.local
NEXT_PUBLIC_API_ENDPOINT=https://your-api.com/chat
```

## Customization

### Change Repository Name
If your repository name is different, update `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
```

### Styling
- Edit `app/globals.css` for global styles
- Modify Tailwind classes in components for specific styling
- Update `tailwind.config.js` for custom theme

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18.x or higher)
- Clear cache: `rm -rf .next out`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

### GitHub Pages Not Working
- Verify GitHub Pages is enabled in repository settings
- Check that the source is set to "GitHub Actions"
- Review the Actions tab for deployment logs

### Styles Not Loading
- Ensure `.nojekyll` file exists in `public/` directory
- Verify `basePath` and `assetPrefix` in `next.config.js` match your repository name
