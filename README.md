# HCPD Witness Archive

HCPD Witness Archive is a static, in-universe fan submission page for OUT OF ORDER, a non-commercial Five Nights at Freddy’s fan game project. It is styled like an old Hurricane Police Department witness statement file and uses only HTML, CSS, and plain JavaScript.

This project does not use cookies, login, analytics, tracking, frameworks, build tools, npm, or external dependencies.

## Configure Formspree

1. Create an account or form at [formspree.io](https://formspree.io).
2. Copy the form endpoint provided by Formspree.
3. Open `index.html`.
4. Find this form action:

```html
action="https://formspree.io/f/xqennwrn"
```

5. Replace that URL with your own Formspree endpoint if you want to use a different form.

The JavaScript in `script.js` intercepts the form submission, sends it with `fetch`, and shows success or error messages without reloading the page.

## Access Locally

You can open the page directly in a browser:

1. Open the project folder.
2. Double-click `index.html`.
3. The page should load from a local `file:///` URL.

If your browser blocks local JavaScript behavior, use a tiny local static server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload these files to the repository root:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Go to `Settings > Pages`.
4. Under source, choose `Deploy from a branch`.
5. Select the `main` branch and `/root`.
6. Save the settings.

GitHub Pages will publish the static site after the deployment finishes.

## Privacy Notice

This page is for fictional fan submissions only. Do not collect or submit real personal information. Visitors should use fictional names and fictional statements.
