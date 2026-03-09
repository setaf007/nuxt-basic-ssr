# Mini Store Nuxt 3 SSR Demo

Minimal Nuxt 3 app with SSR, layouts, pages, and routing. Built for Nuxt 3 store demo.

## Features
- Home page with featured products
- Product list page (`/products`)
- Dynamic product detail page (`/products/[id]`)
- Shared layout with navigation
- Static mock data (ready for API integration)
- SSR‑first rendering

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev
```

## Project Structure
```text
project/
  app/
    app.vue
    pages/
      index.vue        # /
      products/
        index.vue      # /products
        [id].vue       # /products/:id
    layouts/
      default.vue
    data/
      products.ts
```

## Deployment
```bash
# Build
npm run build

# Preview production build
npm run preview

# Deploy to Vercel/Netlify (auto‑detects Nuxt)
vercel --prod
```

Vercel site:
https://nuxt-basic-ssr.vercel.app/

Built by Md Taskin Hossain
