# Abdurrahman Muhammad Bello — Portfolio

My personal portfolio site, built with plain HTML, CSS and JavaScript
(no framework, no build step — it just works when you open it).

## Structure

```
.
├── index.html      # Page content and structure
├── css/
│   └── style.css   # All styling, organized by section
└── js/
    └── script.js   # Two small behaviors: footer year, active nav link
```

Keeping HTML, CSS and JS in separate files (instead of one big file)
means each one does a single job: HTML describes *what* is on the
page, CSS describes *how it looks*, and JS describes *how it behaves*.
That makes each file easier to scan, and easier to change later
without breaking the others.

## Running it locally

No build tools needed. Either:

- Double-click `index.html` to open it in your browser, or
- Use a local server (recommended, avoids some browser quirks):
  ```
  npx serve .
  ```

## Deployment

See the step-by-step GitHub Pages guide in the chat, or in short:
push this folder to a GitHub repo, then enable Pages in the repo's
Settings → Pages, pointing at the `main` branch, root folder.
