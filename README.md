# Minimalist Taiwan Weather App

A high-contrast, minimalist weather application for Taiwan, built with Vite and React.

## Features
- **Minimalist Design**: Black & white aesthetics with line icons.
- **Dark/Light Mode**: Automatic system detection with manual toggle.
- **Full Taiwan Coverage**: Weather data for all major cities and counties.
- **Real-time Data**: Powered by Open-Meteo API.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Deploying to GitHub Pages

This project is set up to be easily deployed to GitHub Pages using GitHub Actions.

### Step 1: Push to GitHub
1. Create a new repository on GitHub.
2. Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

### Step 2: Configure `vite.config.js`
Open `vite.config.js` and add the `base` property with your repository name:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<REPO_NAME>/', // Replace <REPO_NAME> with your actual repository name
})
```
*Example: If your repo is `weather-app`, set `base: '/weather-app/'`.*

### Step 3: Set up GitHub Actions
1. In your repository on GitHub, go to **Settings** > **Pages**.
2. Under "Build and deployment", select **GitHub Actions** as the source.
3. Create a new file in your project at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4: Deploy
1. Commit and push the `vite.config.js` change and the new workflow file:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push
   ```
2. Go to your GitHub repository's **Actions** tab to see the deployment progress.
3. Once finished, your site will be live at `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`.
