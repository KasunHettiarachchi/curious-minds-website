# GitHub Pages Deployment

The website must be hosted entirely using GitHub Pages.

## Requirements
The application must generate a static export suitable for GitHub Pages.

Do not depend on:
- Server-side runtime
- API routes
- Server actions
- Backend
- Database

## Deployment
Use GitHub Actions to:
1. Install dependencies.
2. Run linting.
3. Run type checks.
4. Run tests.
5. Build the static site.
6. Deploy to GitHub Pages.

## Repository URL
The site must work under:
`https://USERNAME.github.io/REPOSITORY_NAME/`

The application must correctly handle the repository base path.

## Deployment Safety
A failed build must not deploy a broken website.
