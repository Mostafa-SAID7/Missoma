# 💎 Missoma - Premium Jewelry E-commerce

Minimalist jewelry crafted for the modern individual. A sophisticated e-commerce platform showcasing premium jewelry collections with a seamless shopping experience.

## 🎯 Project Overview

Missoma is a modern, responsive e-commerce application built with cutting-edge web technologies. It features a curated collection of premium jewelry including bracelets, earrings, and rings with an intuitive user interface and smooth shopping experience.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or Bun package manager

### Installation

```bash
npm install
# or
bun install
```

### Development Server

```bash
npm run dev
# or
bun run dev
```

The app will run on **http://localhost:5173**

### Build for Production

```bash
npm run build
# or
bun run build
```

### Preview Production Build

```bash
npm run preview
# or
bun run preview
```

## 📚 Documentation

For detailed documentation, please refer to the [docs](./docs) folder:

- [Architecture](./docs/ARCHITECTURE.md) - Project structure and design patterns
- [Components](./docs/COMPONENTS.md) - Component documentation
- [Setup Guide](./docs/SETUP.md) - Detailed setup instructions
- [Contributing](./docs/CONTRIBUTING.md) - Contribution guidelines
- [API Integration](./docs/API_INTEGRATION.md) - Backend API integration guide

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | UI Components |
| **React Router** | Client-side Routing |
| **React Query** | Data Fetching & Caching |
| **React Hook Form** | Form Management |
| **Zod** | Schema Validation |

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist interface
- 📱 **Responsive Layout** - Works seamlessly on all devices
- 🛍️ **Product Catalog** - Browse jewelry collections
- 🛒 **Shopping Cart** - Add/remove items with ease
- 🔍 **Product Search** - Find items quickly
- 💳 **Checkout Process** - Smooth payment flow
- 🌙 **Dark Mode** - Eye-friendly dark theme support
- ✅ **Form Validation** - Robust client-side validation
- 🔐 **Type Safety** - Full TypeScript support
- ⚡ **Performance** - Optimized for speed

## 📁 Project Structure

```
Missoma/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/           # Page components
│   ├── contexts/        # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── assets/          # Images and static files
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── docs/                # Documentation
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Collections

### Featured Collections
- **Bracelets** - Elegant wrist jewelry
- **Earrings** - Statement and everyday pieces
- **Rings** - Timeless ring designs

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_API_URL=http://localhost:5124
VITE_APP_NAME=Missoma
```

## 📦 Dependencies

### Core Dependencies
- react@^18.0.0
- react-dom@^18.0.0
- react-router-dom@^6.0.0
- @tanstack/react-query@^5.0.0
- react-hook-form@^7.0.0
- zod@^3.0.0

### UI & Styling
- tailwindcss@^3.0.0
- @shadcn/ui@latest
- lucide-react@latest

### Development Dependencies
- typescript@^5.0.0
- vite@^5.0.0
- @vitejs/plugin-react@^4.0.0
- tailwindcss@^3.0.0
- postcss@^8.0.0
- autoprefixer@^10.0.0

## 🚀 Deployment

### Build Optimization
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment Platforms
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

**Missoma** is developed and maintained by the Missoma Jewelry team.

## 📞 Support

For support, please open an issue on GitHub or contact our team.

## 🔗 Links

- [GitHub Repository](https://github.com/Mostafa-SAID7/Missoma)
- [Live Demo](https://missoma-jewelry.com)
- [Documentation](./docs)

---

**Made with 💎 by the Missoma Team**
