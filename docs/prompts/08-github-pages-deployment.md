# Prompt 08: GitHub Pages Deployment

Read:
- `/AGENTS.md`
- `/docs/08-github-pages.md`

Configure the project for GitHub Pages deployment.

Requirements:
- Static Next.js export
- GitHub Actions
- GitHub Pages
- No Vercel
- No external hosting

Create the GitHub Actions workflow.

The workflow must:
1. Checkout the repository.
2. Install Node dependencies.
3. Run linting.
4. Run TypeScript checks.
5. Build the application.
6. Upload the static build.
7. Deploy to GitHub Pages.

Ensure the application works under:
`https://USERNAME.github.io/REPOSITORY_NAME/`

Do not assume the application is hosted at `/`.

Test the production build locally.

Document any manual GitHub repository settings required.
