# Multi-Step Form React Application

A modern, responsive multi-step form built with React, TypeScript, and Tailwind CSS.

## Architecture Overview

### Folder Structure

- `app/routes`: Centralized routing with lazy-loaded components
- `components/guards`: Route protection and navigation guards
- `features/landing`: Feature-based organization with steps and schemas
- `stores/slices`: Modular state management with Zustand
- `services`: API and external service integrations

### State Management

We chose Zustand over Redux/Context for its:

- Minimal boilerplate
- Built-in TypeScript support
- Simple integration with React
- Modular store design using slices

### Routing Strategy

- Protected routes using StepGuard
- Form step validation before navigation
- Lazy-loaded components for optimal performance

## Implementation Details

### Key Technical Decisions

1. **Zustand for State Management**

   - Simpler than Redux for our use case
   - Better TypeScript integration
   - Easy state persistence

2. **Form Validation**

   - Zod for type-safe schema validation
   - Real-time validation with error messages
   - Step-specific validation rules

3. **Component Architecture**
   - Shadcn UI for consistent design
   - Modular step components
   - Shared UI components

### Trade-offs Made

- Chose client-side validation over API validation for better UX
- Used lazy loading for better initial load time
- Implemented step guards for data integrity

## Extra Features

### Theme System

- Tailwind CSS for styling
- Responsive design patterns
- Custom animations and transitions

### Form Persistence

- State persists across page reloads
- Automatic form cleanup after submission
- Timed redirect with countdown

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/multi-step-react.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Project Structure:

src/
├── app/
│ └── routes/
├── components/
│ ├── guards/
│ └── ui/
├── features/
│ └── landing/
│ ├── steps/
│ └── schemas/
├── stores/
│ └── slices/
└── services/
