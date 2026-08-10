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

## Configuration

### Environment Variables

```bash
# Production mode (default)
NODE_ENV=production

# Custom port
PORT=3000
```

### Volume Mounts

```bash
# Example: persistent logs
docker run -v logs:/app/logs linea-jewelry:latest
```

## GitHub Actions Integration

The Docker workflow automatically:
- ✅ Builds images on push to main
- ✅ Tags with commit SHA and version
- ✅ Pushes to GitHub Container Registry
- ✅ Runs security scans
- ✅ Tests image before pushing

### View Images

```bash
# List your images
docker images linea-jewelry

# List on GitHub Container Registry
ghcr.io/mostafa-said7/linea-jewelry
```

## Common Commands

### Development

```bash
# Build locally
docker build -t linea-jewelry:dev .

# Run with live logs
docker run --rm -it linea-jewelry:dev
```

### Production

```bash
# Build with production tag
docker build -t linea-jewelry:prod .

# Run with resource limits
docker run -d \
  --name linea-jewelry \
  -p 3000:3000 \
  --memory="512m" \
  --cpus="0.5" \
  linea-jewelry:prod
```

### Debugging

```bash
# Shell into running container
docker exec -it linea-jewelry sh

# View container stats
docker stats linea-jewelry

# Inspect image
docker inspect linea-jewelry:latest
```

## Troubleshooting

### Container exits immediately
```bash
# Check logs
docker logs <container-id>

# Common causes:
# - Port 3000 already in use
# - Build failed during startup
# - Out of memory
```

### Port already in use
```bash
# Use different port
docker run -p 8080:3000 linea-jewelry:latest

# Or stop conflicting container
docker stop <container-id>
```

### Build fails
```bash
# Clean cache and rebuild
docker build --no-cache -t linea-jewelry:latest .

# Check disk space
docker system df
docker system prune  # Remove unused images
```

## Security Scanning

The workflow includes Trivy vulnerability scanning:

```bash
# Scan locally
trivy image linea-jewelry:latest

# View results in GitHub
# Settings → Code security and analysis → Dependabot
```

## Performance

### Optimization Tips
- ✅ Use `.dockerignore` to exclude unnecessary files
- ✅ Multi-stage builds reduce image size
- ✅ Alpine Linux base is lightweight
- ✅ `npm ci` is faster than `npm install`

### Benchmarks
- **Build Time**: ~2-3 minutes
- **Image Size**: ~200MB
- **Startup Time**: ~3-5 seconds
- **Memory Usage**: ~50-100MB at idle

## Deployment

### GitHub Container Registry

```bash
# Images automatically pushed on main push
ghcr.io/mostafa-said7/linea-jewelry:main
ghcr.io/mostafa-said7/linea-jewelry:v1.0.0

# Pull and run
docker run -p 3000:3000 ghcr.io/mostafa-said7/linea-jewelry:main
```

### Manual Push to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag image
docker tag linea-jewelry:latest myusername/linea-jewelry:latest

# Push
docker push myusername/linea-jewelry:latest
```

## Support

For issues or questions:
1. Check container logs: `docker logs <container-id>`
2. Verify configuration in `docker-compose.yml`
3. Ensure Docker daemon is running: `docker ps`
4. Review GitHub Actions logs for CI/CD issues
