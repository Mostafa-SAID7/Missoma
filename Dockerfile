# Multi-stage production build
# Stage 1: Node image with serve
FROM node:24-alpine

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy the pre-built application (build must be done locally with: npm run build)
COPY dist ./dist
COPY public ./public

# Expose port
EXPOSE 4545

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4545/ || exit 1

# Start serving the built application
CMD ["serve", "-s", "dist", "-l", "4545"]
