# AI Codex

## Usage

- Review: @codex.md (silent load, no output)
- Update: @learn.md
- File paths: Always use absolute paths from project root

## Errors

E000:

- Context: [Relevant project area or file]
- Error: [Precise description]
- Correction: [Exact fix]
- Prevention: [Specific strategy]
- Related: [IDs of related errors/learnings]

E001:

- Context: File path suggestions
- Error: Relative path used instead of absolute
- Correction: Use absolute paths from project root
- Prevention: Always prefix paths with '/'
- Related: None

E002:

- Context: '/src/index.ts'
- Error: Suggested CommonJS import syntax
- Correction: Use ES module import syntax
- Prevention: Verify `"type": "module"` in '/package.json' or '.mjs' extension
- Related: L002

## Learnings

L007:

- Context: /apps/www/src/pro/components/user-dropdown.tsx
- Insight: UserDropdown component uses useLogout hook and handles loading state
- Application: Implement logout functionality with loading indicator in user-related components
- Impact: Improved user experience with visual feedback during logout process
- Related: L008, L005

L008:

- Context: /apps/www/src/pro/components/user-dropdown.tsx
- Insight: Component uses 'use client' directive for client-side rendering
- Application: Use 'use client' directive for components that require client-side interactivity
- Impact: Proper integration with Next.js 13+ server components architecture
- Related: L007

L000:

- Context: [Relevant project area or file]
- Insight: [Concise description]
- Application: [How to apply this knowledge]
- Impact: [Potential effects on project]
- Related: [IDs of related errors/learnings]

L001:

- Context: @codex.md usage
- Insight: @codex.md is for context, not for direct modification
- Application: Use @codex.md for silent loading and context only; execute subsequent commands separately
- Impact: Improved accuracy in responding to user intentions
- Related: None

L002:

- Context: Project architecture
- Insight: Repository pattern for data access
- Application: '/src' is root, '/src/auth' for authentication, '/src/database' for data access
- Impact: Organized code structure, separation of concerns
- Related: None

## CI/CD Setup

### Continuous Integration (CI)

Our CI pipeline is set up using GitHub Actions. The workflow file is located at `.github/workflows/ci.yml`.

Key points:
- Triggers on pushes and pull requests to the `main` branch.
- Uses Node.js 16.x.
- Installs dependencies, builds the project, and runs tests.

Troubleshooting:
- If CI fails, check the GitHub Actions log for specific error messages.
- Ensure all dependencies are correctly listed in `package.json`.
- Verify that build and test scripts in `package.json` are correct.

### Continuous Deployment (CD)

We use Vercel for continuous deployment.

Setup:
1. Connect your GitHub repository to Vercel.
2. Configure automatic deployments for the `main` branch.
3. Set necessary environment variables in the Vercel dashboard.

Troubleshooting:
- If deployment fails, check Vercel logs for error messages.
- Ensure all required environment variables are set correctly.
- Verify that the build command and output directory are correctly configured in Vercel.

### Managing Environment Variables and Secrets

- For GitHub Actions: Use GitHub Secrets to store sensitive information. Access them in the workflow file using `${{ secrets.SECRET_NAME }}`.
- For Vercel: Add environment variables through the Vercel dashboard. They will be automatically available during build and runtime.

Remember to never commit sensitive information directly to the repository.
