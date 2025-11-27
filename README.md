# Product Landing Page

A modern, responsive product landing page built with React, TypeScript, and SCSS.

## Features

- **Custom UI Library**: Reusable components (Button, Input, Card, Modal, Accordion) built from scratch.
- **Responsive Design**: Mobile-first approach ensuring great experience on all devices.
- **Theming**: Light and Dark mode support using CSS variables.
- **Interactive Elements**: Smooth animations, modal dialogs, and accordion FAQs.
- **Form Validation**: Custom JavaScript validation for the contact form.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS (Modules + Global Architecture)
- **Icons**: Lucide React
- **Linting**: ESLint + Prettier

## Project Structure

```
src/
├── components/
│   ├── ui/          # Generic reusable components
│   └── sections/    # Page-specific sections
├── styles/
│   ├── abstracts/   # Variables, mixins
│   └── base/        # Reset, typography
├── hooks/           # Custom hooks
└── utils/           # Helper functions
```

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

4.  **Docker Build & Run**:
    ```bash
    # Build the image
    docker build -t product-landing-page .

    # Run the container
    docker run -p 8080:80 product-landing-page
    ```

## Architecture Decisions

- **SCSS Modules**: Used for component-level styling to prevent class name conflicts.
- **CSS Variables**: Used for theming to allow dynamic runtime theme switching without extra overhead.
- **Compound Components**: Used for complex components like Accordion to provide flexibility.
- **Portal**: Used for Modal to ensure proper z-index stacking context.
