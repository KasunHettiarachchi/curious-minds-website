# Prompt 09: Daily Content Creation Workflow

Read:
- `/AGENTS.md`
- `/docs/05-content-system.md`
- `/docs/01-project-overview.md`
- `/docs/06-interactive-system.md`

When the owner asks:

> Create a post regarding XYZ.

Follow this workflow.

### 1. Inspect
Read the relevant project documentation and inspect the existing code/content structure.

### 2. Branch
Create a dedicated branch using a readable name, for example:
`article/what-happens-inside-a-black-hole`

Do not work directly on `main`.

### 3. Research
Research the topic using reliable sources available to the development environment.

Do not invent scientific facts.

Clearly distinguish established science from speculation.

### 4. Article
Create a high-quality MDX article with:
- Title
- Description
- Category
- Tags
- Publication metadata
- Strong opening question
- Clear explanation
- Intuitive mental model
- Scientific explanation
- Mathematics where useful
- Common misconceptions
- Summary
- Sources and further reading

### 5. Interactivity
Decide whether an interactive visualization genuinely improves the article.

If yes:
- Reuse an existing component when possible.
- Otherwise implement a focused reusable component.
- Ensure mobile support and accessibility.
- Keep calculations client-side.
- Clearly label simplified educational models.

Do not add interactivity merely for decoration.

### 6. Integration
Update article indexes, categories, related-content data, or other generated content structures as required.

### 7. Validation
Run:
- Lint
- TypeScript checks
- Tests
- Production build

Fix issues before creating the PR.

### 8. Commit
Create a meaningful commit message describing the article and related code.

### 9. Push
Push the branch to GitHub.

### 10. Pull Request
Create a Pull Request targeting `main`.

The PR description must include:
- Article title
- Summary
- Scientific concepts covered
- Interactive features added
- Sources used
- Files/components changed
- Validation performed
- Any assumptions or review points

### 11. Stop
Do NOT merge the PR.

Do NOT modify `main` directly.

Wait for the owner to review and merge manually.

After the PR is created, report:
- Branch name
- PR number/link
- Article created
- Interactive features
- Validation status
- Any points requiring human review
