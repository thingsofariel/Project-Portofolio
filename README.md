# Ariel S Toi — Portfolio

Plain HTML/CSS/JS, no build step. Theme: "blueprint" (system-architecture
schematic look), with a dark/light toggle (saved in the browser, top-right
button).

## Run it locally

Just open `index.html` in a browser, or serve it:

```bash
cd ariel-portfolio
python3 -m http.server 8000
# visit http://localhost:8000
```

## Add your photos

Drop images at these exact paths and they'll appear automatically
(placeholders show until then, so nothing breaks if you skip one):

| Slot                     | Path                                     | Suggested size |
|---------------------------|-------------------------------------------|-----------------|
| Hero ID card photo         | `assets/images/profile.webp`              | ~800×600 (4:3)  |
| About section photo        | `assets/images/about.webp`                | ~1200×750 (16:10)|
| Payslip project thumbnail  | `assets/images/projects/payslip.webp`     | ~1280×720 (16:9)|
| Fortuna Center thumbnail   | `assets/images/projects/fortuna-center.webp`| 1280×720       |
| Wedding site thumbnail     | `assets/images/projects/wedding.webp`     | 1280×720        |
| Personal web thumbnail     | `assets/images/projects/personal-web.webp`| 1280×720        |

Images use WebP for smaller file sizes. Convert with `cwebp -q 82 input.jpg -o output.webp`
(install via `sudo dnf install libwebp-tools` on Fedora).

Your CV: add a PDF at `assets/CV-Ariel-S-Toi.pdf` (the Download CV button
already links there).

## Things I assumed — please double check

- **Fortuna Center Website**: I didn't have the exact tech stack, so I guessed
  Node.js/Express and flagged it with a "Confirm stack ✎" tag in the Projects
  section (`index.html`, search for "Confirm with Ariel"). Update the tag row
  and the GitHub link (I used `handfortunateam-dev/fortuna-center-app` from
  what I know — confirm it's public/correct).
- **Wedding Invitation** and **Personal Web Portfolio** cards have "Add link"
  placeholders since I didn't have repo/live URLs for those — search
  `link-disabled` in `index.html` to update them.
- Stats shown: GPA 3.47, and project count based on the 4 repos you listed.
  Adjust freely in the About section.

## Structure

```
index.html        → all content/sections
css/style.css      → theme tokens + layout (edit CSS variables in :root for colors)
js/main.js         → theme toggle + mobile nav
assets/images/      → put your photos here
```

## Deploying

Easiest free option: **GitHub Pages**. Push this folder to a repo, then in
repo Settings → Pages, set source to the `main` branch root. Or drag-and-drop
the folder into Netlify/Vercel for an instant URL.
# Project-Portofolio
