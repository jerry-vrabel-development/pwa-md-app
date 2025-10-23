# pwa‑md‑app

A tiny **Progressive Web App** that turns every `.mdx` file in `src/content/` into a full‑featured route.
Built with **React 18**, **Vite 7**, **MDX**, and **React‑Router**, it gives you a zero‑config, “drop‑and‑go” blog/notes system that’s installable on mobile devices.

> **Why this repo?**
> * Drop an MDX file into `src/content/` → automatically becomes `/posts/:slug`.
> * Live React components can live inside the same MDX file.
> * Service worker & manifest are pre‑configured – the app is offline‑ready.
> * Strong TypeScript & linting guarantees a maintainable code base.

---

## 📂 Project Layout

The code lives inside the `src/` folder.  (The root contains the usual `package.json`, `vite.config.ts`, `tsconfig.json`, and a few other boilerplate files – they’re omitted here for brevity.)

```
src/
├─ App.css          # Global CSS for the app
├─ App.tsx          # Main entry point that renders the router
├─ assets/          # Static assets (icons, etc.)
│   └─ react.svg
├─ components/
│   ├─ Spinner.css
│   └─ Spinner.tsx          # Small loading spinner component
├─ content/
│   └─ hello.mdx              # Example MDX post – drop any .mdx here
├─ global.d.ts
├─ index.css
├─ main.tsx          # Vite bootstrap file
└─ pages/
    ├─ HelloPage.tsx   # Static example page
    ├─ MdxPage.tsx     # Dynamic MDX route handler
    └─ Posted.tsx      # Lists all MDX posts
```

> **Tip** – The slug used in the URL is the file name without the extension.
> e.g. `hello.mdx` → `/posts/hello`.

---

## ⚙️ Tech Stack

| Category | Library |
|----------|---------|
| **UI** | React 18 (`react`, `react-dom`) |
| **Routing** | `react-router-dom` 7.9.4 |
| **Markdown/MDX** | `@mdx-js/mdx`, `@mdx-js/react`, `@mdx-js/rollup` |
| **Build** | Vite 7 + `@vitejs/plugin-react` |
| **Linting** | ESLint 9 + `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` |
| **Types** | TypeScript 5.9.3 + `@types/react`, `@types/react-dom`, `@types/react-router-dom`, `@types/mdx` |
| **PWA** | `vite-plugin-pwa` 1.1.0 |
| **Others** | `remark`, `remark-html` (optional HTML conversion) |

---

## 🛠️ Prerequisites

| Tool | Minimum Version |
|------|-----------------|
| Node.js | **20.0+** (LTS) |
| npm | **10.0+** (or yarn / pnpm – just run `npm install`) |

---

## 🚀 Quickstart

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Run the development server (HMR + Vite dev preview)
npm run dev

# 3️⃣ Build the production bundle
npm run build

# 4️⃣ Preview the built app locally
npm run preview
```

> The `build` script also runs TypeScript’s `tsc -b` to generate type‑checked output before Vite bundles the final assets.

---

## 📦 Adding a New Post

1. Create a new file in `src/content/`.
   ```mdx
   ---
   title: "My First Post"
   date: 2024‑09‑21
   ---

   # Hello, MDX

   Here you can use any React component:

   ```tsx
   <Button label="Click Me" />
   ```
   ```

2. Start the dev server (`npm run dev`).
3. Open `http://localhost:5173/posts/my-first-post` – the route is derived from the file name (`my-first-post.mdx → /posts/my-first-post`).

> **Front‑matter** – You can add any key/value pair (e.g., `title`, `date`, `tags`).
> The app currently uses only `title` for the list page; feel free to extend the logic in `pages/Posted.tsx` to render dates, tags, etc.

---

## 📦 PWA Configuration

The PWA manifest and service worker are configured automatically by `vite-plugin-pwa`.
During a production build (`npm run build`) a `manifest.webmanifest` and a service worker are generated and registered in `src/main.tsx`.

You can customize the PWA settings by editing `vite.config.ts`.  A minimal example is already included in the repository.

---

## 📚 Linting & Type‑Checking

* **ESLint** – runs with `npm run lint`.
* **TypeScript** – `tsc -b` compiles the project and emits type diagnostics.

> The repo ships with the necessary `.eslintrc.cjs`, `tsconfig.json`, and `vite.config.ts` in the root folder (not shown in the snippet above).

---

## 🎯 What’s next?

- Add more MDX files under `src/content/`.
- Use React components inside MDX – just import them as you would in any component file.
- Deploy to Netlify, Vercel, or serve the `dist/` folder with any static host.
- Enable offline mode by visiting the site on a mobile device, tapping “Add to Home Screen,” and browsing while disconnected.

---

## 🤝 Contributing

Feel free to open issues or pull requests.  Please run `npm run lint` before submitting a PR so that the code base stays clean.

---

## 📜 License

This project is **private** (`"private": true`) – you’re free to fork it for personal use, but it’s not intended to be a public open‑source library.

---
