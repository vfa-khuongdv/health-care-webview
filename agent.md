# AGENTS.md

This file provides guidance for AI coding agents working on this project.

## Project Context
This is a modern web application built with React, TypeScript, and Vite. The project focuses on providing a user interface for managing events, records, and user profiles, likely in a healthcare or personal management context.

## Project Structure
The project follows a standard React directory structure:

- `src/components/`: Reusable components organized by domain.
    - `healthcare/`: Components specific to healthcare data.
    - `profile/`: Components for user profile management (PersonalInfo, Security, etc.).
    - `layout/`: Layout components like Header and Footer.
    - `ui/`: Base UI components (Inputs, Buttons, etc.).
    - `common/`: Shared utility components.
- `src/pages/`: Top-level page components (`Events.tsx`, `Profile.tsx`, `Records.tsx`).
- `src/styles/`: Global styles and Tailwind CSS configurations.
- `public/`: Static assets.

## Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)

## Core Commands
- `npm run dev`: Starts the development server with HMR.
- `npm run build`: Compiles the project for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## Development Guidelines
- **Component Design**: Favor functional components and React Hooks. Use the `src/components/ui` directory for generic, reusable UI elements.
- **Styling**: Use Tailwind CSS 4 utility classes for styling. Avoid writing custom CSS unless absolutely necessary.
- **TypeScript**: Ensure proper typing for all props and state variables. Avoid using `any`.
- **Naming Conventions**:
    - Components: PascalCase (e.g., `PersonalInfo.tsx`).
    - Hooks: camelCase starting with `use` (e.g., `useAuth.ts`).
    - Utilities/Constants: camelCase or UPPER_CASE.

## Verification Guidelines
Before submitting changes, ensure:
1. The project builds without errors: `npm run build`.
2. There are no linting errors: `npm run lint`.
3. The application runs correctly in the development environment.
