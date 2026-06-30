# passing2961.github.io

Personal academic website for **Young-Jun Lee**, modeled on the clean
[al-folio](https://github.com/alshedivat/al-folio) academic layout (the template used by
[akariasai.github.io](https://akariasai.github.io/)), implemented as a dependency-free static
site so it deploys directly to GitHub Pages with **no build step**.

## Structure

```
.
├── index.html          # About (hero + news + selected publications)
├── publications.html   # Full publication list
├── awards.html         # Honors & awards + patents
├── talks.html          # Invited talks
├── teaching.html       # Teaching experience
├── service.html        # Academic service
├── cv.html             # Education / experience / skills + PDF download
└── assets/
    ├── css/style.css   # Theme (light + dark, responsive)
    ├── js/site.js      # Renders navbar, footer, and page content
    ├── data/data.js    # ← ALL content lives here. Edit this to update the site.
    ├── img/prof_pic.*  # Profile photo (drop prof_pic.jpg to replace the placeholder)
    └── cv/             # Put your compiled CV PDF here (Young-Jun-Lee-CV.pdf)
```

## Editing content

Open `assets/data/data.js` and edit the relevant array/object. Everything (bio, news,
publications, awards, patents, talks, teaching, service, skills, links) is driven from there.

## Adding your photo and CV

- Replace the placeholder by adding a real photo at `assets/img/prof_pic.jpg`.
- Compile your LaTeX CV and place the PDF at `assets/cv/Young-Jun-Lee-CV.pdf`
  to activate the CV page's download button.

## Local preview

```bash
cd passing2961.github.io
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

This repo is named `passing2961.github.io`, so pushing to the default branch publishes it at
`https://passing2961.github.io`. No Jekyll/Actions build is required (`.nojekyll` is included).

```bash
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/passing2961/passing2961.github.io.git
git push -u origin main
```

Then enable GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).
