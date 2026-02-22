# Deploying to Render

This app uses **HashRouter** so that refresh and direct URLs work on static hosting (e.g. Render) without server configuration.

- **URLs:** Routes look like `https://yoursite.com/#/about`, `https://yoursite.com/#/media`, etc.
- **Refresh:** Refreshing any page loads the app correctly (the server always serves `index.html` for `/`).

## Optional: Clean URLs (no hash)

If you prefer URLs without the hash (e.g. `https://yoursite.com/about`):

1. In the Render Dashboard, open your **Static Site** service.
2. Go to **Redirects/Rewrites**.
3. Add a **Rewrite** rule:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** Rewrite
4. In code, change `HashRouter` back to `BrowserRouter` in `src/App.js`.

Without the rewrite, refreshing a path like `/about` would return "Not Found" from the server.
