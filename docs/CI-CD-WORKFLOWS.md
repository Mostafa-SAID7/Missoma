# CI/CD Workflows Documentation

Comprehensive automated CI/CD pipeline for Linea Jewelry e-commerce application.

## Table of Contents

1. [Overview](#overview)
2. [Workflow Architecture](#workflow-architecture)
3. [Individual Workflows](#individual-workflows)
4. [Configuration](#configuration)
5. [Secrets & Environment Variables](#secrets--environment-variables)
6. [Deployment](#deployment)
7. [Monitoring & Reports](#monitoring--reports)
8. [Troubleshooting](#troubleshooting)

---

## Overview

The CI/CD pipeline provides end-to-end automation for:

- ✅ **Code Quality** - Linting, type checking, builds
- ✅ **Security** - Vulnerability scanning, npm audit
- ✅ **Performance** - Lighthouse audits, bundle analysis
- ✅ **Accessibility** - axe-core, WCAG compliance
- ✅ **Visual Regression** - Screenshot comparison, Percy.io
- ✅ **Deployment** - Vercel, Netlify (staging, preview, production)
- ✅ **Versioning** - Automated version bumps, changelog generation
- ✅ **Git Flow** - Branch validation, release management

### Trigger Points

| Event | Workflows Triggered |
|-------|-------------------|
| Push to `main` | All (+ deployment, versioning) |
| Push to `develop` | Core + Extended + Staging Deploy |
| Push to `feature/*` | Core + Extended |
| Pull Request | Core + Extended + PR Validation |
| Manual Trigger | Individual workflows |

---

## Workflow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Git Flow Events                           │
│  (push/PR to main, develop, feature/*, etc.)                │
└────────────────┬────────────────────────────────────────────┘
                 │
         ┌───────▼────────┐
         │  gitflow-ci.yml │  ◄── Core Pipeline (Always Runs)
         │                 │
         │ • Lint          │
         │ • Build         │
         │ • Type Check    │
         │ • Security      │
         └───────┬────────┘
                 │
    ┌────────────┴────────────┬────────────────┬──────────────┐
    │                         │                │              │
    ▼                         ▼                ▼              ▼
┌──────────────┐    ┌──────────────┐   ┌──────────────┐  ┌──────────┐
│ deploy.yml   │    │performance.yml│   │ accessibility.yml │ │ visual- │
│              │    │               │   │                    │ │regression
│ • Vercel     │    │ • Lighthouse  │   │ • axe-core   │ │ .yml    │
│ • Netlify    │    │ • Bundle Size │   │ • WCAG AA    │ │         │
│              │    │ • Runtime     │   │ • Pa11y      │ │ • Percy │
└──────┬───────┘    └───────────────┘   └──────────────┘ │ • Screenshots
       │
    (On main only)
       │
    ┌──▼─────────────┐
    │ versioning.yml  │
    │                 │
    │ • Bump version  │
    │ • Generate      │
    │   changelog     │
    │ • Create        │
    │   release       │
    └─────────────────┘
```

---

## Individual Workflows

### 1. Core Pipeline (`gitflow-ci.yml`)

**Runs On:** All branches (feature, develop, main)  
**Status:** Required (blocks merge)

**Jobs:**
- `validate` - Build, lint, type check, security audit
- `validate-pr` - PR format validation
- `create-release` - Create GitHub release (main only)
- `notify-release-branch` - Release branch notification
- `alert-hotfix` - Hotfix priority alert
- `trigger-extended` - Starts extended workflows
- `deployment-gate` - Checks readiness for production
- `version-management` - Triggers versioning workflow

**Configuration:** `.gitflow.json`

**Example Output:**
```
✅ Lint passed (0 errors, 9 warnings)
✅ Build successful (567 KB JS, 87 KB CSS)
✅ Type check passed
✅ Security audit passed (2 moderate, 0 high)
```

---

### 2. Deployment Workflow (`deploy.yml`)

**Runs On:** Push to main/develop, Pull Requests  
**Environments:** Production (main), Staging (develop), Preview (PR)

**Jobs:**
- `determine-target` - Identifies target environment
- `build` - Builds with metadata
- `deploy-vercel` - Deploy to Vercel
- `deploy-netlify` - Deploy to Netlify
- `deployment-summary` - Reports deployment status

**Environment Variables Required:**
```
VERCEL_TOKEN              - Vercel authentication token
VERCEL_PROJECT_ID         - Vercel project ID
VERCEL_ORG_ID             - Vercel organization ID
NETLIFY_AUTH_TOKEN        - Netlify authentication token
NETLIFY_SITE_ID           - Netlify site ID
```

**Deployment Targets:**
```
Main Branch (Production)
├── Vercel Production URL
└── Netlify Production URL

Develop Branch (Staging)
├── Vercel Staging URL
└── Netlify Staging URL

Pull Requests (Preview)
├── Vercel Preview URL
└── Netlify Preview URL
```

**Example PR Comment:**
```
🚀 Vercel Preview Deployment Ready!
[Visit Preview → https://pr-123-linea-jewelry.vercel.app]

🌐 Netlify Preview Deployment Ready!
[Visit Preview → https://pr-123--linea-jewelry.netlify.app]
```

---

### 3. Performance Workflow (`performance.yml`)

**Runs On:** Push, Pull Requests, Daily Schedule (2 AM UTC)  
**Status:** Report only (doesn't block merge)

**Jobs:**
- `lighthouse-audit` - Lighthouse performance audit
- `bundle-analysis` - Bundle size analysis
- `runtime-performance` - Runtime performance testing
- `performance-check` - Threshold validation

**Metrics Tracked:**
- Performance Score (target: ≥75)
- Accessibility Score (target: ≥95)
- Best Practices Score (target: ≥90)
- SEO Score (target: ≥90)
- PWA Score (target: ≥80)
- First Contentful Paint (target: ≤3s)
- Largest Contentful Paint (target: ≤3s)
- Cumulative Layout Shift (target: ≤0.1)
- Total Blocking Time (target: ≤300ms)

**Bundle Size Limits:**
- Threshold: 200KB gzipped
- Current: 166KB gzipped ✅

**Example Report:**
```
| Metric | Score |
|--------|-------|
| Performance | 85 |
| Accessibility | 98 |
| Best Practices | 92 |
| SEO | 95 |
| PWA | 85 |
```

---

### 4. Accessibility Workflow (`accessibility.yml`)

**Runs On:** Push, Pull Requests, Weekly Schedule (Sundays 3 AM UTC)  
**Status:** Report only

**Jobs:**
- `axe-audit` - axe-core accessibility audit (7 pages, 3 viewports)
- `wcag-compliance` - WCAG 2.1 AA compliance check
- `accessibility-comment` - Reports on PR

**Pages Tested:**
- Home page
- Category page (Earrings)
- Product detail (Pantheon)
- Search results
- Checkout
- About page
- 404 page

**Standards Checked:**
- ✅ WCAG 2.1 Level A
- ✅ WCAG 2.1 Level AA
- ✅ Section 508
- ✅ HTML5 validation
- ✅ Color contrast ratios
- ✅ Heading hierarchy
- ✅ Form labels
- ✅ Image alt text
- ✅ Keyboard navigation
- ✅ ARIA attributes
- ✅ Focus indicators

**Note:** Manual testing with screen readers (NVDA, JAWS, VoiceOver) recommended

---

### 5. Visual Regression Workflow (`visual-regression.yml`)

**Runs On:** Push, Pull Requests  
**Status:** Report only

**Jobs:**
- `visual-regression` - Playwright visual snapshots
- `percy-visual` - Percy.io cloud comparison
- `screenshot-diff` - Local screenshot comparison
- `visual-summary` - Reports results

**Test Coverage:**
- 7 pages
- 3 viewports (mobile, tablet, desktop)
- Component-level tests
- State variations (open/closed dropdowns, etc.)

**Screenshot Breakpoints:**
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

**Example Artifacts:**
```
playwright-report/
├── product-card-mobile.png
├── product-card-tablet.png
├── product-card-desktop.png
├── filter-bar-desktop.png
└── ... (more screenshots)

screenshot-report.md
├── Home page: No significant changes ✅
├── Category: Size changed by 512 bytes ⚠️
└── ... (comparison summary)
```

---

### 6. Versioning Workflow (`versioning.yml`)

**Runs On:** Push to main/develop  
**Triggered By:** Commit analysis

**Jobs:**
- `analyze-commits` - Analyzes commits for bump type
- `bump-version` - Updates package.json version
- `generate-changelog` - Creates CHANGELOG entry
- `create-release` - Creates GitHub release

**Version Bump Rules:**

```
Commit Message        → Action
─────────────────────────────────────────
feat: new feature     → Minor bump (x.Y.0)
fix: bug fix          → Patch bump (x.y.Z)
BREAKING CHANGE:      → Major bump (X.0.0)
feat!: breaking       → Major bump (X.0.0)
refactor/style/perf   → No bump (manual only)
```

**Generated Files:**
- Updated `package.json` with new version
- Updated `CHANGELOG.md`
- Git tag `v{version}`
- GitHub Release with changelog

**Example Changelog Entry:**
```markdown
## [1.2.0] - 2026-08-10

### Added
- Filter/search/sort/pagination features
- Slug-based routing for SEO
- Accessibility testing

### Fixed
- Sort dropdown UI duplicates
- ESLint errors

### Changed
- Organized folder structure
- Centralized product data

### ⚠️ Breaking Changes
None
```

---

## Configuration

### Required Files

#### `.vercelignore`
Specifies files to exclude from Vercel deployment.
```bash
# Example:
node_modules
.env.local
tests/
docs/
```

#### `netlify.toml`
Netlify build and deployment configuration.
```toml
[build]
  command = "npm run build"
  publish = "dist"
  node_build_version = "20"
```

#### `.github/lighthouse.json`
Lighthouse performance thresholds.
```json
{
  "categories:performance": ["error", { "minScore": 0.75 }],
  "categories:accessibility": ["error", { "minScore": 0.95 }]
}
```

---

## Secrets & Environment Variables

### Required GitHub Secrets

Set these in **Settings → Secrets and variables → Actions**:

```
VERCEL_TOKEN              - https://vercel.com/account/tokens
VERCEL_PROJECT_ID         - From Vercel project settings
VERCEL_ORG_ID             - From Vercel organization settings

NETLIFY_AUTH_TOKEN        - https://app.netlify.com/user/applications/personal
NETLIFY_SITE_ID           - From Netlify site settings

PERCY_TOKEN               - https://percy.io/account/tokens (optional)
```

### Example Setup

```bash
# Get Vercel token
vercel login
vercel link
vercel env pull

# Get Netlify token
netlify login
netlify sites

# Save to GitHub
# Settings → Secrets and variables → Actions → New repository secret
```

---

## Deployment

### Manual Deployment

```bash
# Deploy to Vercel
npm run build
vercel deploy --prod

# Deploy to Netlify
npm run build
netlify deploy --prod --dir=dist
```

### Automatic Deployment

| Branch | Environment | Trigger |
|--------|-------------|---------|
| main | Production | On successful build |
| develop | Staging | On successful build |
| feature/* | Preview | On PR creation |

### Rollback

```bash
# Revert commit and push
git revert <commit-sha>
git push origin main

# Or reset to previous version
git reset --hard <previous-commit>
git push origin main --force
```

---

## Monitoring & Reports

### GitHub Actions Dashboard

View all workflow runs:
1. Repository → Actions
2. Select workflow to view history
3. Click run for detailed logs

### Artifacts

Available for download (7-30 day retention):
- Build artifacts (dist/)
- Performance reports
- Accessibility reports
- Screenshot reports
- Lighthouse reports

### PR Comments

Workflows automatically comment on PRs with:
- Deployment URLs
- Performance metrics
- Accessibility findings
- Visual regression results

### Email Notifications

Configure in **Settings → Notifications** to receive:
- Workflow failures
- Deployment completions
- Security alerts

---

## Troubleshooting

### Build Fails

**Problem:** ESLint errors  
**Solution:**
```bash
npm run lint --fix
git add .
git commit -m "fix: ESLint errors"
git push
```

**Problem:** Build size exceeded  
**Solution:**
```bash
# Check bundle
npm run build
du -sh dist/

# Optimize
npm install --save-dev webpack-bundle-analyzer
```

### Deployment Issues

**Problem:** Vercel deployment fails  
**Solution:**
1. Check `VERCEL_TOKEN` is set correctly
2. Verify build command in `vercel.json`
3. Check `.vercelignore` isn't excluding needed files
4. Review deployment logs in Vercel dashboard

**Problem:** Netlify build times out  
**Solution:**
```toml
# netlify.toml
[build]
  timeout = 300  # Increase timeout (seconds)
```

### Accessibility Test False Positives

**Problem:** axe reports violations that aren't real  
**Solution:**
1. Review violation in detail
2. Test manually with screen reader
3. Update test to ignore if confirmed false positive
4. Document reasoning

### Visual Regression False Positives

**Problem:** Screenshot comparison shows differences for minor styling  
**Solution:**
```javascript
// In visual-regression.yml:
await expect(page).toHaveScreenshot(
  'name.png',
  { maxDiffPixels: 100 }  // Allow up to 100px difference
);
```

---

## Best Practices

### Commit Messages

Follow conventional commits for proper version bumping:
```
feat: add new feature → triggers minor bump
fix: fix bug → triggers patch bump
BREAKING CHANGE: text → triggers major bump
docs: documentation → no bump
```

### PR Process

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes and push
3. Create PR (must follow title format: `feat:`, `fix:`, etc.)
4. Wait for all workflows to pass
5. Request review
6. Merge after approval

### Performance Optimization

- Monitor bundle size in performance workflow
- Keep performance scores above 75
- Aim for <3s First Contentful Paint
- Use code splitting for large routes

### Accessibility

- Fix violations reported by axe
- Test with actual screen readers
- Don't rely on automated testing alone
- Include accessibility in code reviews

---

## References

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deployment](https://docs.netlify.com)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright Testing](https://playwright.dev)
- [Conventional Commits](https://www.conventionalcommits.org)

---

**Last Updated:** August 10, 2026  
**Status:** ✅ Production Ready
