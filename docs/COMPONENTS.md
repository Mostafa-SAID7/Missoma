# 📦 Missoma Components Documentation

## Component Overview

This document provides detailed information about the components used in the Missoma application.

## Common Components

### Header
Main navigation component displayed at the top of every page.

**Location:** `src/components/common/Header.tsx`

**Props:**
- `onCartClick?: () => void` - Callback when cart icon is clicked
- `cartItemCount?: number` - Number of items in cart

**Features:**
- Logo and branding
- Navigation menu
- Search functionality
- Cart icon with badge
- Mobile responsive menu

### Footer
Footer component displayed at the bottom of every page.

**Location:** `src/components/common/Footer.tsx`

**Features:**
- Company information
- Quick links
- Social media links
- Newsletter subscription
- Copyright information

### Navigation
Main navigation menu component.

**Location:** `src/components/common/Navigation.tsx`

**Props:**
- `items: NavItem[]` - Navigation menu items
- `onItemClick?: (item: NavItem) => void` - Callback on item click

**Features:**
- Responsive menu
- Active link highlighting
- Mobile hamburger menu
- Dropdown support

## Product Components

### ProductCard
Individual product card component for displaying product information.

**Location:** `src/components/product/ProductCard.tsx`

**Props:**
```typescript
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  onAddToCart?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
}
```

**Features:**
- Product image
- Product name and price
- Rating display
- Add to cart button
- Quick view link

### ProductGrid
Grid layout component for displaying multiple products.

**Location:** `src/components/product/ProductGrid.tsx`

**Props:**
```typescript
interface ProductGridProps {
  products: Product[];
  columns?: number;
  onProductClick?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
}
```

**Features:**
- Responsive grid layout
- Customizable columns
- Loading state
- Empty state handling

### ProductDetail
Detailed product information component.

**Location:** `src/components/product/ProductDetail.tsx`

**Props:**
```typescript
interface ProductDetailProps {
  product: Product;
  onAddToCart?: (quantity: number) => void;
  onAddToWishlist?: () => void;
}
```

**Features:**
- Product images gallery
- Product description
- Price and availability
- Size/color selection
- Quantity selector
- Add to cart button
- Add to wishlist button

### ProductImages
Image gallery component for product details.

**Location:** `src/components/product/ProductImages.tsx`

**Props:**
```typescript
interface ProductImagesProps {
  images: string[];
  alt?: string;
  onImageChange?: (index: number) => void;
}
```

**Features:**
- Main image display
- Thumbnail navigation
- Zoom functionality
- Responsive layout

## Cart Components

### CartItem
Individual cart item component.

**Location:** `src/components/cart/CartItem.tsx`

**Props:**
```typescript
interface CartItemProps {
  item: CartItem;
  onQuantityChange?: (quantity: number) => void;
  onRemove?: () => void;
}
```

**Features:**
- Product image and name
- Price and quantity
- Quantity adjuster
- Remove button
- Subtotal calculation

### CartSummary
Cart summary component showing totals.

**Location:** `src/components/cart/CartSummary.tsx`

**Props:**
```typescript
interface CartSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  onCheckout?: () => void;
}
```

**Features:**
- Subtotal display
- Tax calculation
- Shipping cost
- Total amount
- Checkout button

### CartEmpty
Empty cart state component.

**Location:** `src/components/cart/CartEmpty.tsx`

**Features:**
- Empty state message
- Continue shopping button
- Suggested products

## Form Components

### ProductForm
Form for adding/editing products (admin only).

**Location:** `src/components/forms/ProductForm.tsx`

**Features:**
- Product name input
- Price input
- Description textarea
- Image upload
- Category selection
- Form validation

### CheckoutForm
Checkout form component.

**Location:** `src/components/forms/CheckoutForm.tsx`

**Features:**
- Shipping address form
- Payment information form
- Order review
- Form validation

### SearchForm
Search form component.

**Location:** `src/components/forms/SearchForm.tsx`

**Features:**
- Search input
- Category filter
- Price range filter
- Sort options

## UI Components (shadcn/ui)

### Button
Reusable button component.

```typescript
<Button variant="default" size="lg">
  Click me
</Button>
```

**Variants:** default, secondary, destructive, outline, ghost, link

**Sizes:** sm, default, lg

### Input
Text input component.

```typescript
<Input 
  type="text" 
  placeholder="Enter text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Select
Dropdown select component.

```typescript
<Select value={selected} onValueChange={setSelected}>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Dialog
Modal dialog component.

```typescript
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>
```

### Card
Card container component.

```typescript
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

## Custom Hooks

### useCart
Hook for managing cart state.

```typescript
const { items, addItem, removeItem, updateQuantity, total } = useCart();
```

### useProducts
Hook for fetching products.

```typescript
const { products, isLoading, error } = useProducts();
```

### useAuth
Hook for authentication.

```typescript
const { user, login, logout, isAuthenticated } = useAuth();
```

## Component Best Practices

### 1. Props Interface
Always define props interface:
```typescript
interface ComponentProps {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
```

### 2. Default Props
Use default values:
```typescript
const Component: React.FC<ComponentProps> = ({
  title,
  onClick,
  children,
}) => {
  // Component logic
};
```

### 3. Memoization
Use React.memo for performance:
```typescript
export const ProductCard = React.memo(({ product }: Props) => {
  // Component logic
});
```

### 4. Error Boundaries
Wrap components with error boundaries:
```typescript
<ErrorBoundary>
  <ProductDetail />
</ErrorBoundary>
```

## Component Testing

### Unit Tests
Test component rendering and props:
```typescript
describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
  });
});
```

### Integration Tests
Test component interactions:
```typescript
it('calls onAddToCart when button is clicked', () => {
  const onAddToCart = vi.fn();
  render(<ProductCard product={mockProduct} onAddToCart={onAddToCart} />);
  fireEvent.click(screen.getByText('Add to Cart'));
  expect(onAddToCart).toHaveBeenCalled();
});
```

---

For more information, see the [Architecture Guide](./ARCHITECTURE.md).
