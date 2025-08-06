# GEMINI.md

## Project Overview

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. The project showcases the developer's profile, skills, and a collection of projects. The portfolio data, including personal information, skills, and project details, is stored in separate TypeScript files within the `src/data` directory. The site is structured into several sections: Hero, About, Skills, and Projects, each represented by a corresponding component.

## Building and Running

To get the development server running, use the following command:

```bash
npm run dev
```

This will start the application in development mode with Turbopack, accessible at [http://localhost:3000](http://localhost:3000).

Other available scripts include:

*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts a production server.
*   `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** The UI is built with React components, organized by feature and type (layout, sections, UI).
*   **Data Management:** All portfolio data (profile, projects, skills) is managed in dedicated TypeScript files (`src/data/*.ts`). This allows for easy updates and maintenance of the portfolio content.
*   **Type Safety:** TypeScript is used throughout the project to ensure type safety. Interfaces are defined for data structures like `ProfileData` and `Project`.
