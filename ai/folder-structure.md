# Project Folder Structure

This document outlines the folder structure for our project, designed to promote scalability, maintainability, and align with best practices for AI-assisted development.

## Root Directory Structure

```plaintext
your-app-name/
├── .ai/
├── public/
├── src/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
└── vite.config.js
```

## Detailed Structure

### .ai/
Contains all AI-related documentation and session files.

```plaintext
.ai/
├── masterplan.md
├── development-plan.md
├── codex.md
├── learn.md
├── project-structure.md
├── folder-structure.md
└── sessions/
    └── session-1.md
```

- `masterplan.md`: Overall project vision and objectives.
- `development-plan.md`: Detailed development phases and tasks.
- `codex.md`: Code explanations, decisions, and guidelines.
- `learn.md`: Notes on learnings, tutorials, and resources.
- `project-structure.md`: Detailed explanation of the project structure.
- `folder-structure.md`: This file, describing the folder structure.
- `sessions/`: Individual AI development session files.

### public/
Contains static files served directly.

```plaintext
public/
└── index.html
```

### src/
The main source code of the application.

```plaintext
src/
├── assets/
│   ├── images/
│   └── styles/
│       └── global.css
├── components/
│   ├── common/
│   ├── forms/
│   ├── layout/
│   ├── navigation/
│   └── charts/
├── contexts/
├── hooks/
├── locales/
│   ├── en/
│   │   └── translation.json
│   └── tr/
│       └── translation.json
├── pages/
├── routes/
├── services/
├── utils/
├── tests/
├── App.jsx
├── i18n.js
└── main.jsx
```

#### components/
Reusable components used throughout the application.

```plaintext
components/
├── common/
│   ├── Button.jsx
│   └── InputField.jsx
├── forms/
│   ├── LoginForm.jsx
│   └── SignupForm.jsx
├── layout/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Sidebar.jsx
├── navigation/
│   └── LanguageSwitcher.jsx
└── charts/
    ├── ProductionChart.jsx
    └── InventoryChart.jsx
```

#### contexts/
Context API providers for state management.

```plaintext
contexts/
├── AuthContext.jsx
├── ThemeContext.jsx
└── LanguageContext.jsx
```

#### hooks/
Custom React hooks.

```plaintext
hooks/
├── useAuth.js
├── useFetch.js
└── useFormValidation.js
```

#### pages/
Components representing pages in the application.

```plaintext
pages/
├── Home.jsx
├── Dashboard.jsx
├── Login.jsx
├── Signup.jsx
├── Reports.jsx
├── Inventory.jsx
└── NotFound.jsx
```

#### services/
Modules to interact with external services or APIs.

```plaintext
services/
├── api.js
└── supabaseClient.js
```

#### utils/
Utility functions and constants.

```plaintext
utils/
├── helpers.js
└── constants.js
```

## Additional Configuration Files

- `.env`: Environment variables (not committed to version control).
- `.gitignore`: Specifies files and folders ignored by Git.
- `package.json`: Lists dependencies and scripts for the project.
- `package-lock.json`: Lockfile for npm dependencies.
- `README.md`: Project information and setup instructions.
- `LICENSE`: License information for the project.
- `vite.config.js`: Configuration file for Vite.

## Alignment with Development Plan

This folder structure aligns with our development plan by:

1. Organizing code into modular, reusable components.
2. Supporting internationalization with dedicated `locales/` folder.
3. Separating concerns with distinct folders for components, pages, services, etc.
4. Facilitating AI-assisted development with the `.ai/` folder for documentation.
5. Supporting testing with a dedicated `tests/` directory.
6. Enabling easy routing configuration with the `routes/` folder.
7. Centralizing API and external service interactions in the `services/` folder.

## Best Practices

- Keep components small and focused on a single responsibility.
- Use consistent naming conventions across the project.
- Regularly update documentation in the `.ai/` folder.
- Write tests for components and critical functionality.
- Use environment variables for sensitive information.
- Commit changes frequently with meaningful messages.

## Next Steps

1. Set up the folder structure as outlined.
2. Initialize the Git repository and make an initial commit.
3. Configure ESLint and Prettier for code quality.
4. Begin implementing the phases from the development plan.
5. Regularly update documentation as the project progresses.
