# Docker Quick Start - What to Do NOW

## TL;DR - 3 Steps to Get Docker Images Publishing

### Step 1️⃣: Add Docker Hub Credentials to GitHub

Go to: https://github.com/Mostafa-SAID7/linea-jewelry/settings/secrets/actions

Click **New repository secret** and add BOTH:

```
DOCKER_USERNAME = msaid356
DOCKER_PASSWORD = <your-docker-hub-token>
```

**How to get your Docker token:**
1. Go to https://hub.docker.com/settings/security
2. Click "New Access Token"
3. Copy the token

### Step 2️⃣: That's it! The workflow is already pushed

The file `.github/workflows/docker.yml` is already in the repo and will:
- ✅ Trigger on every push to main
- ✅ Build the Docker image
- ✅ Push to Docker Hub at: `msaid356/linea-jewelry`
- ✅ Tag it with: `main`, commit SHA, and version

### Step 3️⃣: Watch it build

1. Push any change to main
2. Go to: https://github.com/Mostafa-SAID7/linea-jewelry/actions
3. Click "Docker Build & Push" workflow
4. Watch it run!

## After Credentials are Set

Your images will appear at:
- Docker Hub: https://hub.docker.com/r/msaid356/linea-jewelry
- Each push creates: `msaid356/linea-jewelry:main`
- Releases create: `msaid356/linea-jewelry:v1.0.0`

## Run Your Published Image

```bash
# Pull from Docker Hub
docker pull msaid356/linea-jewelry:main

# Run it
docker run -p 4545:4545 msaid356/linea-jewelry:main

# View at http://localhost:4545
```

## Files Already in Repo

✅ `Dockerfile` - Multi-stage build
✅ `.dockerignore` - Excludes unnecessary files
✅ `docker-compose.yml` - One command to run everything
✅ `.github/workflows/docker.yml` - GitHub Actions workflow
✅ `DOCKER.md` - Full documentation

## Local Testing

```bash
# Build locally
docker build -t linea-jewelry:test .

# Run with docker-compose
docker-compose up

# App opens on http://localhost:4545
```

## Summary

| Task | Status |
|------|--------|
| Docker files created | ✅ Done |
| GitHub workflow created | ✅ Done |
| Workflow pushed to GitHub | ✅ Done |
| **Add secrets to GitHub** | ⏳ **YOUR TURN** |
| **Docker images appear on Docker Hub** | ⏳ After secrets added |

---

**Next Action:** Add the 2 secrets to GitHub Settings and push a new commit to trigger the workflow!
