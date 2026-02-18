# Fixing "Not Found" on Page Refresh (SPA Routing)

If you get "Not Found" when refreshing a page (e.g. `/about`, `/contact`), the hosting server needs to serve `index.html` for all routes so React Router can handle them.

## Already configured
- **Netlify**: `public/_redirects` is included
- **Vercel**: `vercel.json` is included

## Render.com
Add this in your static site's **Dashboard → Redirects/Rewrites**:

| Source   | Destination  | Action   |
|----------|--------------|----------|
| `/*`     | `/index.html`| Rewrite  |

## Local production build
When testing with `npx serve build`, use the SPA flag:
```bash
npx serve -s build
```
The `-s` flag enables fallback to `index.html` for all routes.
