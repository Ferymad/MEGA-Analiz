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

## Internationalization (i18n) Setup

We use `react-i18next` for multilingual support.

### Adding New Translations

1. Locate the translation files in `src/locales/{language}/translation.json`.
2. Add new key-value pairs for each language.
3. Use the new keys in your components with the `t` function: `t('your_new_key')`.

### Switching Languages

Use the `LanguageSwitcher` component to allow users to change languages.

### Best Practices

- Keep translation keys descriptive and consistent.
- Use interpolation for dynamic content: `t('hello_name', { name: userName })`.
- Consider using namespaces for large projects to organize translations.

### Troubleshooting

- If a translation is missing, check if the key exists in all language files.
- Ensure `i18n.js` is imported before using translations in your app.

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
1. Connected GitHub repository to Vercel.
2. Configured automatic deployments for the `main` branch.
3. Set necessary environment variables in the Vercel dashboard.

Configuration:
- Framework Preset: Vite
- Build Command: `npm run build` (or `vite build`)
- Output Directory: `dist`

Deployment Process:
- Automatic deployments are triggered on pushes to the `main` branch.
- Vercel builds the project and deploys it to their global CDN.

Troubleshooting:
- If deployment fails, check Vercel logs for error messages.
- Ensure all required environment variables are set correctly.
- Verify that the build command and output directory are correctly configured in Vercel.

Accessing the Deployed Application:
- The production URL is: [Your Vercel Project URL]
- Preview deployments are created for pull requests.

Environment Variables:
- Managed through the Vercel dashboard.
- Ensure all necessary variables for production are set.

Remember to never commit sensitive information directly to the repository.

### Managing Environment Variables and Secrets

- For GitHub Actions: Use GitHub Secrets to store sensitive information. Access them in the workflow file using `${{ secrets.SECRET_NAME }}`.
- For Vercel: Add environment variables through the Vercel dashboard. They will be automatically available during build and runtime.

## CI/CD Troubleshooting

### Common CI Issues
1. **Build Failures**: 
   - Check if all dependencies are correctly listed in `package.json`.
   - Ensure Node.js version in CI matches your local development version.
2. **Test Failures**: 
   - Run tests locally to reproduce the issue.
   - Check if tests depend on environment variables not set in CI.

### Common CD Issues
1. **Deployment Failures**: 
   - Verify build settings in Vercel dashboard.
   - Check if all required environment variables are set.
2. **Runtime Errors**: 
   - Review Vercel deployment logs.
   - Ensure compatibility between local and production environments.

## Managing Environment Variables and Secrets

### GitHub Actions
1. Go to your GitHub repository settings.
2. Navigate to Secrets and Variables > Actions.
3. Click "New repository secret" to add a secret.
4. In your workflow file, use secrets like this: `${{ secrets.SECRET_NAME }}`

### Vercel
1. Go to your project in the Vercel dashboard.
2. Navigate to Settings > Environment Variables.
3. Add your environment variables here.
4. For sensitive information, ensure "Encrypt" is selected.

Remember: Never commit sensitive information directly to the repository.
