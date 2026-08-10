# 🐳 Docker Guide - Linea Jewelry

This guide explains how to use the Docker image for the Linea Jewelry e-commerce application.

## 📦 Available Packages

Your Docker image is published to two registries:

### 1. **Docker Hub**
```bash
docker pull msaid356/linea-jewelry:main
```

### 2. **GitHub Container Registry (Packages)**
```bash
docker pull ghcr.io/Mostafa-SAID7/linea-jewelry:main
```

## 🚀 Quick Start

### Run with Docker Hub image:
```bash
docker run -p 4545:4545 msaid356/linea-jewelry:main
```

Then open: **http://localhost:4545**

### Run with GitHub Packages image:
```bash
docker run -p 4545:4545 ghcr.io/Mostafa-SAID7/linea-jewelry:main
```

## 📋 Available Tags

- `main` - Latest from main branch
- `v*` - Semantic version tags (e.g., v0.0.15)
- `sha-*` - Specific commit SHA

## 🐳 Docker Compose

Use `docker-compose.yml` for easier management:

```bash
docker-compose up
```

This starts the app on **http://localhost:4545** with health checks.

## 🛑 Stop Container

```bash
# Stop running container
docker stop linea-jewelry

# Remove container
docker rm linea-jewelry
```

## 🔍 View Logs

```bash
docker logs -f linea-jewelry
```

## 📊 Image Details

- **Base Image**: Node.js 24-Alpine
- **Port**: 4545 (production)
- **Size**: ~81 MB compressed / ~299 MB uncompressed
- **Server**: `serve` package (simple static server)

## 🔄 Automatic Publishing

Docker images are automatically built and pushed on:
- Push to `main` branch
- Any git tag (`v*`)
- Manual trigger via GitHub Actions

## 🛠 Build Locally

```bash
# Build the image
docker build -t linea-jewelry:local .

# Run locally
docker run -p 4545:4545 linea-jewelry:local
```

## ⚙️ Environment

The app requires a pre-built `dist/` folder. Build locally first:

```bash
npm install
npm run build
docker build -t linea-jewelry .
```

## 📲 Container Ports

| Port | Service |
|------|---------|
| 4545 | Web App |

## 🏥 Health Check

The container includes a health check that runs every 30 seconds:

```bash
docker inspect --format='{{.State.Health.Status}}' linea-jewelry
```

## 🚨 Troubleshooting

### Image not found?
Make sure you're pulling from the correct registry:
```bash
# List available tags
docker search msaid356/linea-jewelry
# or
docker pull ghcr.io/Mostafa-SAID7/linea-jewelry --dry-run
```

### Port already in use?
Use a different port:
```bash
docker run -p 3000:4545 msaid356/linea-jewelry:main
```

### Container exits immediately?
Check logs:
```bash
docker logs <container-id>
```

---

**Published by**: GitHub Actions Docker Build & Push workflow  
**Last Updated**: August 2026
