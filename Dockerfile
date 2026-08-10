# Production stage - serves pre-built application
FROM node:24-alpine

WORKDIR /app

# Install serve to run the production build
RUN npm install -g serve

# Copy pre-built application (dist folder must be committed to git)
COPY dist ./dist

# Copy package.json for reference
COPY package.json .

# Expose port
EXPOSE 4545

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4545/ || exit 1

# Start the application
CMD ["serve", "-s", "dist", "-l", "4545"]
