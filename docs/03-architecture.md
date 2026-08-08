# Architecture

## Principle
The application is a static-first web application. Core functionality should execute in the browser.

## High-Level Flow
GitHub Repository
→ Next.js static build
→ GitHub Actions
→ GitHub Pages
→ User Browser

## Suggested Structure
```text
src/
├── app/
├── components/
│   ├── articles/
│   ├── layout/
│   ├── ui/
│   ├── visualization/
│   └── simulation/
├── content/
├── lib/
├── data/
└── types/
```

## Content
Articles are MDX files stored in the repository.

## Component Architecture
Create reusable components for article cards, article layouts, category headers, navigation, search, tables, callouts, equations, interactive components, visualization containers, and related articles.

## Interactive Components
Interactive components should receive configuration through React props and remain independent from article pages.

## State
Use React state for local interactive features. Do not introduce a state-management library without a demonstrated need.

## Performance
Lazy-load heavy interactive components. Do not load Three.js on pages that do not require 3D.
