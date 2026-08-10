# Docker Setup for Linea Jewelry

Complete Docker configuration for building, running, and deploying the Linea Jewelry application.

## Prerequisites

- Docker 20.10+
- Docker Compose 1.29+

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop the application
docker-compose down
```

The app will be available at `http://localhost:3000`

### Using Docker CLI

```bash
# Build the image
docker build -t linea-jewelry:latest .

# Run the container
docker run -d --name linea-jewelry -p 3000:3000 linea-jewelry:latest

# View logs
docker logs -f linea-jewelry

# Stop the container
docker stop linea-jewelry
docker rm linea-jewelry
```

## Docker Image Details

### Base Images
- **Build Stage**: `node:24-alpine` (lightweight build environment)
- **Runtime Stage**: `node:24-alpine` (minimal production image)

### Image Size
- **Final Image**: ~200MB (optimized multi-stage build)
- **Build Time**: ~2-3 minutes

### Ports
- **Internal**: 3000
- **External**: 3000 (configurable)

## Features

### Multi-Stage Build
- ✅ Smaller image size
- ✅ Faster deployment
- ✅ No build tools in production

### Health Checks
- ✅ Automatic health monitoring
- ✅ Container restart on failure
- ✅ 30-second intervals

### Security
- ✅ Non-root user (alpine node default)
- ✅ Minimal attack surface
- ✅ Regular image scanning

## Docker Hub Registry

Images are pushed to Docker Hub:

```bash
# Pull image from Docker Hub
docker pull msaid356/linea-jewelry:latest
docker pull msaid356/linea-jewelry:main
docker pull msaid356/linea-jewelry:v1.0.0

# Run
docker run -p 3000:3000 msaid356/linea-jewelry:latest
```

## Local Testing

### Build Locally
```bash
docker build -t linea-jewelry:test .
```

### Run Locally
```bash
docker run -d --name test -p 3000:3000 linea-jewelry:test
curl http://localhost:3000
docker stop test
```

## CI/CD Workflow

The GitHub Actions workflow automatically:
- ✅ Builds images on push to main
- ✅ Tags with commit SHA and version
- ✅ Pushes to Docker Hub (msaid356/linea-jewelry)
- ✅ Tests image before pushing
- ✅ Runs security scans

## Troubleshooting

### Container exits immediately
```bash
docker logs <container-id>
```

### Port already in use
```bash
docker run -p 8080:3000 linea-jewelry:latest
```

### Clean build
```bash
docker build --no-cache -t linea-jewelry:latest .
```
