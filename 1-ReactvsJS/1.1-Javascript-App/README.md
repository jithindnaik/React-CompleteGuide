# React-CompleteGuide

## Overview

This project demonstrates a simple interactive tabbed UI using vanilla JavaScript, SCSS, and Parcel as the build tool. It is designed as a learning resource for understanding core web development concepts without relying on a UI framework like React.

## Features

- Tabbed interface with three sections:
  - **Why React?**: Highlights the benefits of using React.
  - **Core Features**: Lists React's main features.
  - **Related Resources**: Provides links to official React resources and related frameworks.
- Responsive and modern UI styled with SCSS.
- Accessible tab navigation with keyboard and screen reader support improvements.
- Uses Parcel v2 for zero-config bundling of HTML, JS, and SCSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
   ```sh
   npm install
   ```


2. Run tests:
   ```sh
   npm test
   ```
   This will run the Jest test suite. Sample tests are provided in `index.test.js`.

   **Troubleshooting:**
   - If you see errors about `jest-environment-jsdom` or Babel version mismatches, ensure all dependencies are installed and up to date:
     ```sh
     npm install
     ```
   - The project requires `@babel/core` version 7.22.0 or higher for Jest compatibility.

3. Start the development server:
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

4. Build for production:
   ```sh
   npm run build
   ```
   The output will be in the `dist/` folder.

## Project Structure

```
1-Javascript-App/
├── index.html         # Main HTML file
├── index.js           # JavaScript logic for tabbed UI
├── styles.scss        # SCSS styles (compiled by Parcel)
├── js-logo-xs.png     # Logo image
├── package.json       # Project configuration and scripts
└── README.md          # Project documentation
```

## Customization

- To change the port, edit the `start` script in `package.json` (default: 3000).
- SCSS is automatically compiled and bundled with your HTML and JS by Parcel.

## Accessibility

The tab navigation uses `aria-selected` and proper class toggling for better accessibility. Further improvements can be made as needed.

## License

This project is for educational purposes.