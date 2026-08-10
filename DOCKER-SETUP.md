# Docker Hub Setup Guide - Complete Steps

## What You Need to Do

### Step 1: Create Docker Hub Account (If You Don't Have One)
- Go to https://hub.docker.com
- Sign up or log in
- Username should be: `msaid356` (your Docker Hub username)

### Step 2: Create Docker Hub Personal Access Token
1. Go to https://hub.docker.com/settings/security
2. Click "New Access Token"
3. Name it: `github-ci-token`
4. Copy the token (you'll use this as `DOCKER_PASSWORD`)

### Step 3: Add GitHub Secrets
1. Go to your GitHub repo: https://github.com/Mostafa-SAID7/linea-jewelry
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**

**Add these TWO secrets:**

**Secret 1:**
- Name: `DOCKER_USERNAME`
- Value: `msaid356`

**Secret 2:**
- Name: `DOCKER_PASSWORD`
- Value: `<paste-your-token-here>`

### Step 4: Ensure Workflow File is Pushed
The `.github/workflows/docker.yml` file must be in main branch:
```bash
git status
git add .github/workflows/docker.yml DOCKER.md DOCKER-SETUP.md
git commit -m "feat: Add Docker Hub CI/CD setup"
git push origin main
```

### Step 5: Push to Trigger the Workflow
Any push to `main` branch will now:
1. ✅ Build the Docker image
2. ✅ Login to Docker Hub (using secrets)
3. ✅ Push image with tags (main, sha, version)
4. ✅ Run security scans

## What Gets Published

After the workflow runs, your images will be at:
- `msaid356/linea-jewelry:main` (latest main branch)
- `msaid356/linea-jewelry:sha-abc123` (specific commit)
- `msaid356/linea-jewelry:v1.0.0` (tagged releases)

View at: https://hub.docker.com/r/msaid356/linea-jewelry

## How to Run the Published Image

```bash
# Pull and run
docker pull msaid356/linea-jewelry:main
docker run -p 3000:3000 msaid356/linea-jewelry:main

# Or use docker-compose
docker-compose up
```

## Manual Push (If You Want to Test Locally)

```bash
# Build locally
docker build -t msaid356/linea-jewelry:test .

# Login to Docker Hub
docker login

# Push
docker push msaid356/linea-jewelry:test
```

## Troubleshooting

### Workflow doesn't run
- Check: `.github/workflows/docker.yml` exists
- Check: Secrets are set (DOCKER_USERNAME, DOCKER_PASSWORD)
- Check: You pushed to main branch

### Login fails in GitHub Actions
- Verify token is valid in Docker Hub
- Check token hasn't expired
- Confirm secrets names match exactly

### Image doesn't appear on Docker Hub
- Check GitHub Actions logs: Actions tab → docker workflow
- Look for error messages in "Log in to Docker Hub" step
- Verify credentials are correct

## Success Indicators

✅ You'll see in GitHub Actions:
- Workflow "Docker Build & Push" runs on push
- "Log in to Docker Hub" succeeds
- "Build and push Docker image" succeeds
- Image appears in your Docker Hub packages

✅ You can see on Docker Hub:
- Your repository at https://hub.docker.com/r/msaid356/linea-jewelry
- Image tags listed
- Pull command working
