# 🔌 API Integration Guide

## Overview

This guide explains how to integrate the Missoma frontend with the backend API.

## API Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Base URL
VITE_API_URL=http://localhost:5124

# API Timeout (milliseconds)
VITE_API_TIMEOUT=30000

# API Version
VITE_API_VERSION=v1
```

## API Client Setup

### Creating API Client

**Location:** `src/lib/api.ts`

```typescript
import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

## API Endpoints

### Products

#### Get All Products
```typescript
GET /api/products

Response:
{
  "data": [
    {
      "id": "1",
      "name": "Bracelet",
      "price": 99.99,
      "image": "url",
      "category": "bracelets",
      "description": "...",
      "rating": 4.5
    }
  ],
  "total": 100,
  "page": 1,
  "pageSize": 10
}
```

#### Get Product by ID
```typescript
GET /api/products/:id

Response:
{
  "id": "1",
  "name": "Bracelet",
  "price": 99.99,
  "image": "url",
  "images": ["url1", "url2"],
  "category": "bracelets",
  "description": "...",
  "rating": 4.5,
  "reviews": [],
  "inStock": true,
  "sizes": ["S", "M", "L"],
  "colors": ["Gold", "Silver"]
}
```

#### Search Products
```typescript
GET /api/products/search?q=bracelet&category=bracelets&minPrice=50&maxPrice=200

Query Parameters:
- q: Search query
- category: Product category
- minPrice: Minimum price
- maxPrice: Maximum price
- sortBy: Sort field (price, rating, newest)
- sortOrder: asc or desc
- page: Page number
- pageSize: Items per page
```

### Orders

#### Create Order
```typescript
POST /api/orders

Request Body:
{
  "items": [
    {
      "productId": "1",
      "quantity": 2,
      "price": 99.99
    }
  ],
  "shippingAddress": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "paymentMethod": "credit_card",
  "total": 199.98
}

Response:
{
  "id": "order-123",
  "status": "pending",
  "items": [...],
  "total": 199.98,
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### Get Order by ID
```typescript
GET /api/orders/:id

Response:
{
  "id": "order-123",
  "status": "shipped",
  "items": [...],
  "total": 199.98,
  "shippingAddress": {...},
  "trackingNumber": "TRACK123",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-02T00:00:00Z"
}
```

#### Get User Orders
```typescript
GET /api/orders?userId=user-123

Response:
{
  "data": [
    {
      "id": "order-123",
      "status": "shipped",
      "total": 199.98,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "total": 5,
  "page": 1,
  "pageSize": 10
}
```

### Users

#### Register User
```typescript
POST /api/auth/register

Request Body:
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}

Response:
{
  "id": "user-123",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "token": "jwt-token"
}
```

#### Login User
```typescript
POST /api/auth/login

Request Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "id": "user-123",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "token": "jwt-token"
}
```

#### Get User Profile
```typescript
GET /api/users/profile

Headers:
Authorization: Bearer jwt-token

Response:
{
  "id": "user-123",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "addresses": [...]
}
```

## Using React Query

### Setup Query Client

**Location:** `src/main.tsx`

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

### Fetching Data

```typescript
import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api';

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await apiClient.get('/api/products');
      return response.data;
    },
  });
};

// Usage in component
const { data, isLoading, error } = useProducts();
```

### Mutating Data

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api';

const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (orderData) => {
      const response = await apiClient.post('/api/orders', orderData);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate orders query to refetch
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};

// Usage in component
const { mutate, isPending } = useCreateOrder();

const handleCreateOrder = (orderData) => {
  mutate(orderData);
};
```

## Error Handling

### Global Error Handler

```typescript
// In API client setup
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          console.error('Bad Request:', data.message);
          break;
        case 401:
          console.error('Unauthorized');
          // Redirect to login
          break;
        case 404:
          console.error('Not Found');
          break;
        case 500:
          console.error('Server Error');
          break;
        default:
          console.error('Error:', data.message);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);
```

### Component Error Handling

```typescript
const { data, isLoading, error } = useProducts();

if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;

return <ProductList products={data} />;
```

## Authentication

### Storing Token

```typescript
// After login
const { token } = await apiClient.post('/api/auth/login', credentials);
localStorage.setItem('authToken', token);
```

### Using Token in Requests

```typescript
// Automatically added by interceptor
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Logout

```typescript
const handleLogout = () => {
  localStorage.removeItem('authToken');
  window.location.href = '/login';
};
```

## Rate Limiting

The API implements rate limiting. Handle 429 responses:

```typescript
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      console.error('Rate limit exceeded. Please try again later.');
      // Implement retry logic or show user message
    }
    return Promise.reject(error);
  }
);
```

## Testing API Calls

### Mock API Responses

```typescript
import { vi } from 'vitest';

vi.mock('@/lib/api', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: mockData })),
    post: vi.fn(() => Promise.resolve({ data: mockResponse })),
  },
}));
```

### Test Component with API

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

test('renders products', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText('Product Name')).toBeInTheDocument();
  });
});
```

## Troubleshooting

### CORS Issues
Ensure backend has CORS enabled for frontend URL.

### 401 Unauthorized
Check if token is valid and not expired.

### 404 Not Found
Verify API endpoint URL is correct.

### Timeout
Increase `VITE_API_TIMEOUT` if needed.

---

For more information, see the [Setup Guide](./SETUP.md).
