# Stellar Portfolio

A premium, award‑inspired GitHub Pages portfolio showcasing modern UI, glassmorphism, dark mode, and micro‑animations.

## Features
- **Dynamic Gradient Hero** with animated background.
- **Glassmorphism UI** – frosted‑glass panels that adapt to light/dark mode.
- **Micro‑Animations** – hover effects, fade‑ins, and smooth transitions.
- **Responsive Layout** – mobile‑first design that looks stunning on any screen.
- **Contact Form** – ready to integrate with Formspree (replace `your-form-id`).

## Project Structure
```
/ (root)
├─ index.html          # Main page
├─ style.css           # Premium styling
├─ script.js           # Dark‑mode toggle
├─ assets/
│   └─ hero_background.png   # Hero background image
├─ README.md           # This file
└─ .nojekyll           # Prevent Jekyll processing on GitHub Pages
```

## Setup & Deploy to GitHub Pages
1. **Create a new repository** on GitHub (e.g., `yourusername/your-portfolio`).
2. Clone the repo locally:
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```
3. Copy the generated files into the repository root (replace any existing files):
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/hero_background.png`
   - `README.md`
   - `.nojekyll`
4. Commit and push:
   ```bash
   git add .
   git commit -m "Add premium portfolio site"
   git push origin main
   ```
5. **Enable GitHub Pages**:
   - Go to the repository Settings → Pages.
   - Choose the `main` branch and `/ (root)` folder.
   - Save. Your site will be live at `https://yourusername.github.io/your-portfolio/`.

## Customisation
- Replace the hero background or add more images to the **Gallery** section by placing them in the `assets/` folder and updating the HTML.
- Update the **Contact Form** action URL with your Formspree form ID.
- Tweak colours in `style.css` – modify the `--color-primary` variable for a different accent.

Enjoy your stunning GitHub Pages site! 🎉
