# 🚀 Missoma Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (v7 or higher) or **Bun** - [Download Bun](https://bun.sh/)
- **Git** - [Download](https://git-scm.com/)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Mostafa-SAID7/Missoma.git
cd Missoma
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Bun:
```bash
bun install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5124
VITE_API_TIMEOUT=30000

# App Configuration
VITE_APP_NAME=Missoma
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_DARK_MODE=true
VITE_ENABLE_ANALYTICS=false
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at **http://localhost:5173**

## Development Workflow

### Running the App

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run type-check
```

## Project Configuration Files

### vite.config.ts
Vite configuration for build and dev server settings.

### tailwind.config.ts
Tailwind CSS configuration for styling.

### tsconfig.json
TypeScript compiler options.

### components.json
shadcn/ui configuration for component generation.

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies Installation Issues

Clear npm cache and reinstall:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Ensure TypeScript is properly configured:
```bash
npm run type-check
```

### Build Failures

Check for TypeScript errors:
```bash
npm run type-check
```

Then try building again:
```bash
npm run build
```

## IDE Setup

### VS Code

Recommended extensions:
- **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
- **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
- **TypeScript Vue Plugin** - Vue.volar
- **ESLint** - dbaeumer.vscode-eslint
- **Prettier** - esbenp.prettier-vscode

### WebStorm

- Built-in support for React, TypeScript, and Tailwind CSS
- Enable ESLint in Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint

## Git Workflow

### Clone Repository
```bash
git clone https://github.com/Mostafa-SAID7/Missoma.git
```

### Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Commit Changes
```bash
git add .
git commit -m "feat: add your feature description"
```

### Push to Remote
```bash
git push origin feature/your-feature-name
```

### Create Pull Request
Open a PR on GitHub for code review.

## API Integration

### Backend Server

Ensure the backend API is running on the configured URL:

```
http://localhost:5124
```

### API Endpoints

The app expects the following endpoints:

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Testing API Calls

Use the browser DevTools Network tab to inspect API calls.

## Performance Tips

### 1. Development
- Use React DevTools for component profiling
- Use Chrome DevTools for performance analysis
- Monitor bundle size with `npm run build`

### 2. Production
- Enable gzip compression
- Use CDN for static assets
- Implement lazy loading for images
- Monitor Core Web Vitals

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Next Steps

1. Read the [Architecture Guide](./ARCHITECTURE.md)
2. Review [Component Documentation](./COMPONENTS.md)
3. Check [Contributing Guidelines](./CONTRIBUTING.md)
4. Explore the [API Integration Guide](./API_INTEGRATION.md)

## Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Contact the development team

---

**Happy coding! 🎉**
