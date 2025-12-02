# React Starter Template (Webpack + Babel)

Minimal React 18 starter template powered by Webpack 5 and Babel, with dev server, source maps, and static asset handling for modern single-page applications.

## Requirements

- Node.js 18 or later
- npm (React and ReactDOM are already listed in `dependencies` and are installed with `npm install`)

This template uses the React 18 `createRoot` API from `react-dom/client`.

## Features

- React 18 and ReactDOM
- Webpack 5 with asset modules for images
- Babel with `@babel/preset-env` and `@babel/preset-react` (automatic runtime)
- Shared browser targets via `.browserslistrc`
- Development server on port 3000 (CSS updates hot reload; JavaScript changes currently trigger a full page reload unless React Refresh or module `accept` handlers are added)
- Source maps (`eval-source-map` in development, `source-map` in production)
  - Public folder handling (favicon, logo, and other static files)
  - Minimal global CSS example
  - Demonstrates both public-path assets (e.g., `/logo.svg`) and imported assets processed by Webpack asset modules

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open http://localhost:3000 in your browser.

To build for production:

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Scripts

- `npm start` – Starts Webpack Dev Server in development mode with fast CSS hot reloading and `eval-source-map`; JavaScript edits currently reload the page (add React Refresh for component-level HMR).
- `npm run build` – Builds the project in production mode, outputting optimized bundles and source maps to the `dist` folder.

## Project Structure

```
public/
  index.html           # HTML template used by HtmlWebpackPlugin
  favicon.svg          # Text-based favicon for the browser tab
  logo.svg             # Example logo used by the demo App
src/
  App.js               # Root React component
  App.css              # Sample global styles
  index.js             # Application entry; mounts React into #root
.babelrc               # Babel configuration
.browserslistrc        # Browser support matrix
webpack.config.js      # Webpack configuration (dev + prod)
package.json           # Scripts, dependencies, metadata
.gitignore             # Files and folders ignored by Git
```

## What to Change for Each New Project

- Update `package.json` metadata: `name`, `description`, `author`, and `license` (if needed).
- Update the HTML title and assets in `public/index.html`, and replace `favicon.svg` and `logo.svg`.
- Customize the root component by replacing the contents of `src/App.js` with your own UI.
- (Optional) Change the dev server port in `webpack.config.js` under `devServer.port`.

## Configuration Notes

### Babel

- Uses `@babel/preset-env` without inline targets; instead, it reads from `.browserslistrc`.
- Uses `@babel/preset-react` with `runtime: "automatic"` so you do not need to import React in every JSX file.

### Browserslist

`.browserslistrc`:

```
> 0.25%
not dead
```

This configuration defines which browsers are supported and is used by Babel and Webpack.

### Webpack

- `entry: "./src/index.js"` – Single entry point for the application.
- `output.filename: "bundle.[contenthash].js"` – Uses a content hash for better caching.
- JavaScript/JSX rule with `babel-loader` – Transpiles application code based on Babel configuration.
- CSS rule with `style-loader` and `css-loader` – Enables importing CSS files from JavaScript.
- Image rule with `type: "asset/resource"` – Handles imported images from `src`, emitting them to `dist` and returning their URLs.
- `HtmlWebpackPlugin` + `public/index.html` – Uses a template HTML file and injects the final bundle.
- `CopyWebpackPlugin` – Copies all assets from `public` into `dist` (except `index.html`).
- `devServer` with `open`, `hot`, and `historyApiFallback` – Provides a comfortable SPA dev environment; without React Refresh or `module.hot.accept`, JavaScript edits trigger full reloads.

### Assets

- You can reference static assets from `public/` with absolute paths such as `/logo.svg`. These files are copied as-is to `dist` by `copy-webpack-plugin`.
- The template ships text-based assets (like `.svg`) by default to avoid binary files in version control; `.ico` files are ignored via `.gitignore`.
- Alternatively, import assets from `src/` (for example, `import logo from "./logo.svg";`). Webpack's `asset/resource` rule emits the file to `dist` and returns a URL that you can use in JSX.

### Devtool rationale

- In development, `eval-source-map` provides quick rebuilds with line-accurate stack traces.
- In production, `source-map` creates external maps so errors can be traced back to original source without bloating the main bundle.

### Reusing this template

- Use the repository as a GitHub template or clone it, remove `.git`, and reinitialize for a new project.
- Update project metadata, branding assets, and entry component content per project.
- When tooling versions evolve, test upgrades in this template first before rolling them out to new projects.

## Dependencies and Maintenance

This template is intentionally minimal. Add libraries such as React Router, state management, testing tools, and styling frameworks per project as needed.

Periodically:

- Run `npm outdated` to see available updates.
- Run `npm audit` to check for security issues.
- Update and test core tooling dependencies (React, Webpack, Babel) in this template to keep it current for future projects.
