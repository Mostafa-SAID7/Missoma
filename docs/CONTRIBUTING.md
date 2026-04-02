# 🤝 Contributing to Missoma

Thank you for your interest in contributing to Missoma! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## Getting Started

### 1. Fork the Repository
Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/Missoma.git
cd Missoma
```

### 3. Add Upstream Remote
```bash
git remote add upstream https://github.com/Mostafa-SAID7/Missoma.git
```

### 4. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-wishlist` - New feature
- `fix/cart-bug` - Bug fix
- `docs/update-readme` - Documentation
- `refactor/optimize-images` - Code refactoring

## Development Workflow

### 1. Make Changes
Edit files and implement your feature or fix.

### 2. Test Your Changes
```bash
npm run dev
```

Test the application in your browser.

### 3. Run Linting
```bash
npm run lint
```

Fix any linting errors.

### 4. Type Check
```bash
npm run type-check
```

Ensure no TypeScript errors.

### 5. Commit Changes
```bash
git add .
git commit -m "feat: add your feature description"
```

Use conventional commit messages:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test additions/changes
- `chore:` - Build/dependency changes

### 6. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 7. Create Pull Request
Go to GitHub and create a pull request with:
- Clear title describing the change
- Detailed description of what was changed
- Reference to related issues (if any)
- Screenshots (if UI changes)

## Pull Request Guidelines

### PR Title Format
```
[Type] Brief description of changes
```

Examples:
- `[Feature] Add product wishlist functionality`
- `[Fix] Resolve cart total calculation bug`
- `[Docs] Update API integration guide`

### PR Description Template
```markdown
## Description
Brief description of the changes.

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

## Related Issues
Closes #123

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
Describe how you tested the changes.

## Screenshots (if applicable)
Add screenshots for UI changes.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests passing
```

## Code Style Guidelines

### TypeScript
```typescript
// Use explicit types
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  // Implementation
};

// Use interfaces for props
interface ComponentProps {
  title: string;
  onClick?: () => void;
}

// Use const for components
const MyComponent: React.FC<ComponentProps> = ({ title, onClick }) => {
  return <div onClick={onClick}>{title}</div>;
};
```

### React
```typescript
// Use functional components
const Component = () => {
  const [state, setState] = useState<string>('');

  return <div>{state}</div>;
};

// Use hooks for side effects
useEffect(() => {
  // Effect logic
}, [dependencies]);

// Use custom hooks for logic reuse
const { data, isLoading } = useCustomHook();
```

### Tailwind CSS
```typescript
// Use utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Click me
  </button>
</div>

// Use @apply for reusable styles
<style>
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
</style>
```

## File Structure

### Component Files
```
src/components/
├── common/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── product/
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── ProductDetail.tsx
└── cart/
    ├── CartItem.tsx
    └── CartSummary.tsx
```

### Naming Conventions
- Components: PascalCase (e.g., `ProductCard.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useCart.ts`)
- Utilities: camelCase (e.g., `formatPrice.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

## Testing

### Write Tests
```typescript
describe('ProductCard', () => {
  it('renders product information', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
  });

  it('calls onAddToCart when button is clicked', () => {
    const onAddToCart = vi.fn();
    render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />);
    fireEvent.click(screen.getByText('Add to Cart'));
    expect(onAddToCart).toHaveBeenCalled();
  });
});
```

### Run Tests
```bash
npm run test
```

## Documentation

### Update README
If your changes affect the project setup or features, update `README.md`.

### Add Comments
Add comments for complex logic:
```typescript
// Calculate total price including tax
const total = subtotal * (1 + TAX_RATE);
```

### Update Docs
Update relevant documentation in the `docs/` folder.

## Common Issues

### Merge Conflicts
```bash
# Update your branch with latest changes
git fetch upstream
git rebase upstream/main

# Resolve conflicts in your editor
# Then continue rebase
git rebase --continue
```

### Lint Errors
```bash
# Fix linting issues automatically
npm run lint -- --fix
```

### TypeScript Errors
```bash
# Check for type errors
npm run type-check

# Fix type issues in your code
```

## Review Process

1. **Automated Checks**
   - Linting
   - Type checking
   - Tests

2. **Code Review**
   - Team members review code
   - Feedback provided
   - Changes requested if needed

3. **Approval**
   - PR approved by maintainers
   - Ready to merge

4. **Merge**
   - PR merged to main branch
   - Deployed to production

## Recognition

Contributors will be recognized in:
- GitHub contributors page
- Project README
- Release notes

## Questions?

- Check existing issues and discussions
- Create a new discussion
- Contact the team

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Missoma! 🎉**
