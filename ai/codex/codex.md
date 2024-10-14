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

## Continuous Integration and Deployment (CI/CD)

### Continuous Integration (CI)

- **Workflow File**: `.github/workflows/ci.yml`
- **Triggers**: Runs on push and pull requests to the `main` branch.
- **Steps**:
  1. **Checkout Code**: Uses `actions/checkout@v2` to clone the repository.
  2. **Setup Node.js**: Sets up Node.js environment using `actions/setup-node@v2` with Node.js version 16.x.
  3. **Install Dependencies**: Runs `npm install` to install project dependencies.
  4. **Build Project**: Executes `npm run build --if-present` if a build script is available.
  5. **Run Tests**: Runs `npm test` to execute the test suite.

### Continuous Deployment (CD)

- **Hosting Platform**: Vercel
- **Steps**:
  1. **Connect Repository**: Link your GitHub repository to Vercel via the Vercel dashboard.
  2. **Automatic Deployments**: Configure Vercel to automatically deploy on pushes to the `main` branch.
  3. **Environment Variables**: Set necessary environment variables in Vercel for production.

- **Risk Management**:
  - **Potential Risks**:
    - **CI Pipeline Failures**: Configuration errors may cause build or test failures.
    - **Deployment Issues**: Misconfigurations in Vercel may lead to failed deployments.
  - **Mitigation Strategies**:
    - **For CI**:
      - Validate YAML syntax using online validators.
      - Use sample configurations as templates.
      - Monitor CI runs and address issues promptly.
    - **For CD**:
      - Test deployments in a staging environment before production.
      - Monitor deployment logs for errors.
      - Ensure environment variables are correctly set.

## Code Quality Tools

### ESLint

- **Installation:**

  ```bash
  npm install eslint eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-prettier eslint-plugin-prettier --save-dev
  ```

- **Initialization:**

  ```bash
  npx eslint --init
  ```

- **Purpose:** Ensures code consistency and catches potential errors during development.

### Prettier

- **Installation:**

  ```bash
  npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev
  ```

- **Configuration:**
  - Created `.prettierrc` with preferred formatting rules.

- **Purpose:** Automatically formats code to maintain a consistent style across the codebase.

### Integration

- **ESLint and Prettier Integration:**
  - Configured ESLint to work with Prettier to avoid conflicts.
  - Added Prettier as an ESLint plugin.

## Why These Tools?

- **ESLint** helps in identifying and fixing problematic patterns in JavaScript code.
- **Prettier** ensures that all code follows a consistent style, enhancing readability and maintainability.
