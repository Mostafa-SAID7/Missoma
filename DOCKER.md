# 🐳 Docker Guide - Linea Jewelry

This guide explains how to use the Docker image for the Linea Jewelry e-commerce application.

## 📦 Package Location

Your Docker image is published to **GitHub Container Registry (Packages)**.

Pull the image:
```bash
docker pull ghcr.io/mostafa-said7/linea-jewelry:main
```

## 🚀 Quick Start

Run the container:
```bash
docker run -p 4545:4545 ghcr.io/mostafa-said7/linea-jewelry:main
```

Then open: **http://localhost:4545**

## 📋 Available Tags

- `main` - Latest from main branch ✅
- `v*` - Semantic version tags (e.g., v0.0.17, v0.0.18, etc.)
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

- **Registry**: GitHub Container Registry (ghcr.io)
- **Image**: `ghcr.io/mostafa-said7/linea-jewelry`
- **Base Image**: Node.js 24-Alpine
- **Port**: 4545 (production)
- **Size**: ~81 MB compressed / ~299 MB uncompressed
- **Server**: `serve` package (simple static server)

## 🔄 Automatic Publishing

Docker images are automatically built and pushed on:
- ✅ Push to `main` branch
- ✅ Any git tag (`v*`)
- ✅ Manual trigger via GitHub Actions (workflow_dispatch)

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
docker run -p 4545:4545 linea-jewelry
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
Make sure you're using the correct registry:
```bash
docker pull ghcr.io/mostafa-said7/linea-jewelry:main
```

### Port already in use?
Use a different port:
```bash
docker run -p 3000:4545 ghcr.io/mostafa-said7/linea-jewelry:main
```
# App will be on http://localhost:3000

### Container exits immediately?
Check logs:
```bash
docker logs <container-id>
```

### Authentication error?
GitHub Packages requires authentication. For public images, use:
```bash
docker login ghcr.io
# Enter your GitHub username and personal access token (if needed)
```

---

**Published by**: GitHub Actions Docker Build & Push workflow  
**Registry**: GitHub Container Registry (ghcr.io)  
**Last Updated**: August 2026
