# React Complete Guide

This repository contains two implementations of the same UI component - one in vanilla JavaScript and another in React. This demonstrates the differences between both approaches and highlights React's benefits.

## Project Structure

```
├── 1-Javascript-App/     # Vanilla JavaScript implementation
│   ├── index.html
│   ├── index.js
│   ├── index.test.js
│   └── styles.scss
│
└── 2-React-App/         # React implementation
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── App.test.js
        ├── index.js
        └── styles.css
```

## Features

- Interactive tab-based UI
- Three content sections:
  - Why React?
  - Core Features
  - Related Resources
- Dynamic content switching
- Active tab highlighting
- Responsive design

## Getting Started

### 1. JavaScript Version

```bash
cd 1-Javascript-App
npm install
npm start
```

The app will be available at `http://localhost:3000`

To run tests:
```bash
npm test
```

### 2. React Version

```bash
cd 2-React-App
npm install
npm start
```

The app will be available at `http://localhost:3000`

To run tests:
```bash
npm test
```

## Testing

Both versions include comprehensive test suites:

### JavaScript Version Tests
- Content rendering
- Tab switching
- Active tab state management
- DOM manipulation

### React Version Tests
- Component rendering
- State management
- User interactions
- Class name assertions

## Technology Stack

### JavaScript Version
- Vanilla JavaScript
- SCSS for styling
- Parcel for bundling
- Jest for testing

### React Version
- React 18.2.0
- Create React App
- CSS for styling
- Jest + React Testing Library

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### IDE Setup
VS Code is recommended with the following extensions:
- ESLint
- Prettier
- Jest
- React Developer Tools

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project is part of the React Complete Guide course
- Thanks to all contributors and maintainers
