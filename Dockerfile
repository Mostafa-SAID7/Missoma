# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Increase npm timeout
RUN npm config set fetch-timeout 120000

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --prefer-offline --no-audit

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:24-alpine

WORKDIR /app

# Install serve to run the production build
RUN npm install -g serve

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy package.json for reference
COPY package.json .

# Expose port
EXPOSE 4545

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4545/ || exit 1

# Start the application
CMD ["serve", "-s", "dist", "-l", "4545"]
