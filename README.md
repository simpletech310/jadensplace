# Jaden's Place — Official Website

> No child held back by economic scarcity.

The official site for [Jaden's Place](https://www.jadensplace2014.org/) — a Paramount, CA 501(c)(3) nonprofit providing school supplies, meals, clothing, mentorship, and community programs to children in need.

## Stack

Plain HTML/CSS/JS — zero build step. Deployed as a static site.

- **14 pages** · Home, About, Programs, Events, Donate, Contact, Journal, 6 blog posts, 404
- **Design system** · Editorial magazine meets community movement. Fraunces display serif + DM Sans body. Ink / Paper / Orange palette.
- **SEO-ready** · Schema.org JSON-LD on every page, canonical URLs, OG/Twitter meta, sitemap, robots.txt
- **Mobile-first** · Fluid typography, responsive breakpoints at 600/800/900/960px
- **Accessibility** · Semantic HTML, ARIA labels, keyboard focus states, reduced-motion support
- **Performance** · WebP images, inlined critical CSS, lazy-loaded media, prefetched fonts

## Project structure

```
/
├── index.html              Home
├── about.html              Our Story
├── programs.html           Programs
├── events.html             Events
├── donate.html             Donate (Givebutter integration)
├── contact.html            Get Involved
├── 404.html                Error page
├── blog/
│   ├── index.html          Journal index
│   ├── back-to-school-impact.html
│   ├── why-we-fight-poverty.html
│   ├── volunteer-stories.html
│   ├── nutrition-matters.html
│   ├── five-ways-to-help.html
│   ├── heritage-matters.html
│   └── meet-ronald.html
├── assets/
│   ├── css/style.css       Canonical stylesheet (also inlined per page)
│   ├── js/main.js          Interactions
│   └── images/             Photography (WebP)
├── vercel.json             Clean URLs, caching, redirects
├── sitemap.xml
└── robots.txt
```

## Donation flow

All donate CTAs route to: `https://givebutter.com/m0BH4v`

## Deploy (Vercel)

```bash
# From project root
vercel
# or push to GitHub + connect to Vercel dashboard
```

The `vercel.json` enables:
- Clean URLs (`/about` instead of `/about.html`)
- Aggressive caching on `/assets/*`
- Security headers (X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Shortcut redirects: `/give`, `/givebutter`, `/instagram`, `/volunteer`

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Contact

- Web · [jadensplace2014.org](https://www.jadensplace2014.org/)
- Email · info@jadensplace2014.org
- Instagram · [@jadensplace2014](https://www.instagram.com/jadensplace2014)
- Address · 14155 Paramount Blvd, Paramount, CA 90723

## License

Content © Jaden's Place. Website source code is proprietary to the organization.
