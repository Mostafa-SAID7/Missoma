# Linea Jewelry - Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or bun

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
- Opens at: http://localhost:8081/
- Hot reload enabled

### Linting
```bash
npm run lint
```
- 0 errors, 9 expected warnings

### Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── types/               # TypeScript interfaces (Product, CartItem, etc.)
├── data/               # Centralized product data & helpers
├── constants/          # UI strings and configuration
├── utils/              # Utility functions (slugify, parsePrice, etc.)
├── services/           # Business logic services
├── hooks/              # Custom React hooks
├── contexts/           # Global state (Cart, Filter)
├── pages/              # Page components
├── components/         # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── header/         # Navigation
│   ├── footer/         # Footer
│   ├── category/       # Filter, Sort, Pagination
│   ├── product/        # Product display
│   └── content/        # Content components
└── assets/             # Images and static files
```

---

## 🔗 Key Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page |
| `/category/:category` | Category page with filters |
| `/product/:slug` | Product detail page |
| `/search/:query` | Search results |
| `/checkout` | Checkout page |
| `/about/*` | About pages |
| `*` | 404 Not Found |

---

## 📦 Key Features

### ✅ Slug-Based Routing
- Products linked by readable slugs (e.g., `/product/pantheon`)
- All 24 products have slug values
- SEO-friendly URLs

### ✅ Filter/Search/Sort/Pagination
- Multi-select category filters
- Full-text search: `/search/:query`
- 5 sort options (featured, price, newest, name)
- Centered, responsive pagination
- Powered by FilterContext

### ✅ Responsive Design
- Mobile: 375px (2-col grid)
- Tablet: 768px (3-col grid)
- Desktop: 1440px (4-col grid)
- All components adapt automatically

### ✅ Professional UI
- shadcn/ui components
- Dark mode support
- Smooth animations
- Accessibility compliant (WCAG AA)

---

## 🛠️ Common Tasks

### Add a New Product
**File:** `src/data/products.ts`
```typescript
{
  id: 25,
  name: "New Product",
  slug: "new-product",
  category: "Earrings",
  price: "€1,500",
  priceNumeric: 1500,
  image: newProductImage,
  isNew: true
}
```

### Add a Filter Option
**File:** `src/contexts/FilterContext.tsx`
- Update FilterState interface
- Add handler in FilterProvider
- Update FilterSortBar UI

### Update Product Data
**File:** `src/data/products.ts`
- Single source of truth
- All components automatically reflect changes

### Customize Styles
**File:** `tailwind.config.ts`
- Tailwind CSS configured
- Extend colors, spacing, etc.

---

## 📊 Performance

### Build Size
- JS: 567 KB (166 KB gzipped)
- CSS: 87.75 KB (14.82 KB gzipped)
- Total: ~182 KB gzipped

### Optimization
- useMemo for filter calculations
- Lazy image loading
- Code splitting ready
- Asset compression

---

## 🔒 Security

### Latest Updates
- ✅ react-router-dom v7.18 (CVE-2025-68470 fixed)
- ✅ All dependencies up-to-date
- ✅ TypeScript strict mode
- ✅ ESLint compliance (0 errors)

### Current Status
- 0 high-severity vulnerabilities
- 2 moderate vulnerabilities (optional breaking-change fixes)

---

## 📝 Git Workflow

### Create Feature Branch
```bash
git checkout -b feature/my-feature
```

### Commit Changes
```bash
npm run lint          # Verify no errors
git add .
git commit -m "feat: Describe your change"
```

### Push & Create PR
```bash
git push origin feature/my-feature
# Create Pull Request on GitHub
```

### Merge to Main
```bash
git checkout main
git pull origin main
git merge develop
git push origin main
```

---

## 🚢 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Manual
```bash
npm run build
# Upload dist/ folder to hosting
```

---

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### ESLint Errors
```bash
npm run lint --fix
```

### Build Fails
```bash
npm run build -- --debug
# Check error messages
```

### 404 Page Shows
- Check if route exists in App.tsx
- Verify component path
- Ensure page component is exported

---

## 📚 Documentation

- `docs/REFACTOR-COMPLETE.md` - Full refactor summary
- `docs/SHOP-FEATURES-IMPLEMENTATION.md` - Filter/Search/Sort/Pagination details
- `docs/ARCHITECTURE.md` - Architecture decisions
- `docs/COMPONENT-GUIDE.md` - Component documentation
- `GITFLOW.md` - Git workflow guide

---

## 📞 Support

### Resources
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)

### Team
- For questions, check docs first
- Review existing code patterns
- Follow established conventions

---

## ✨ Next Steps

### Immediate
1. Review REFACTOR-COMPLETE.md
2. Test all features locally
3. Verify responsive design

### Short-term
1. Add price slider filter
2. Implement breadcrumbs
3. Add product reviews

### Long-term
1. Backend API integration
2. User authentication
3. Payment gateway
4. Advanced analytics

---

**Last Updated:** August 10, 2026  
**Status:** ✅ Production Ready
