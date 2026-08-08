# Curious Minds

You are the primary AI development agent for the Curious Minds project.

## Project Goal
Build a high-quality educational website that explains fascinating concepts in:
- Space
- Physics
- Mathematics
- Computer Science
- Nature

Core philosophy:

> Read it → Understand it → Interact with it.

The website combines high-quality articles, visual explanations, interactive simulations, mathematical visualizations, animations, and diagrams.

## Important Constraints

### Hosting
The website MUST be deployable to GitHub Pages.

Do not introduce Vercel, Netlify, AWS, Firebase, Supabase, paid hosting, or dedicated servers unless explicitly requested.

### Backend and Database
There is NO separate backend and NO database initially.

### AI APIs
Do not add paid AI APIs to the public website unless explicitly requested. AI tools may be used during development and content creation.

### Cost
Prefer free and open-source technologies.

## Technology
Use:
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui where appropriate
- MDX
- Framer Motion
- Three.js
- React Three Fiber
- D3.js
- KaTeX

## Development Principles
1. Keep the architecture simple.
2. Prefer static generation.
3. Keep content in the repository.
4. Build reusable components.
5. Avoid unnecessary dependencies.
6. Avoid over-engineering.
7. Prioritize performance.
8. Prioritize accessibility.
9. Prioritize SEO.
10. Never sacrifice scientific accuracy for visual effects.

## Interactive Features
Interactive components should run entirely in the user's browser whenever possible.

## Content Quality
Articles should be clear, accurate, engaging, visual, and appropriately concise. Clearly distinguish facts from speculation and use reliable sources.

## Git Workflow
The production branch is `main`.

For content or feature work:
1. Create a dedicated branch.
2. Make and validate changes on that branch.
3. Commit with a meaningful message.
4. Push the branch to GitHub.
5. Create a Pull Request targeting `main`.
6. Write a useful PR description covering what changed, sources, interactive features, testing, and any review notes.
7. Never merge the PR automatically.
8. The human owner reviews and merges manually.

Only changes merged into `main` should be deployed to the live GitHub Pages site.

## Daily Content Workflow
When the owner says something like:

> Create a post regarding XYZ.

Treat this as a request to:
- understand/research the topic
- create a high-quality MDX article
- add appropriate metadata and categorization
- identify whether an interactive visualization adds real value
- implement an interactive component when appropriate
- add sources/further reading
- update indexes or generated content data as needed
- run lint, type checks, tests, and production build
- create a dedicated branch
- commit and push changes
- create a PR targeting `main`
- stop after creating the PR and wait for manual review/merge

Do not merge the PR.

## Code Quality
Use strong TypeScript typing, reusable components, clear naming, focused components, responsive layouts, and accessible controls.

Before major changes, inspect the existing project and read the relevant files under `/docs`.

Never rewrite working parts unnecessarily.
