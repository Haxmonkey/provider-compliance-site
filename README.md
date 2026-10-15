# Provider Compliance Bureau website

Static website built with [Eleventy](https://www.11ty.dev/), hosted on Netlify, with a content editor ([Decap CMS](https://decapcms.org/)) at `/admin/` for publishing Resources articles.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm start` | Local server with live reload at http://localhost:8080 |
| `npm run build` | Build the site into `_site/` (Netlify runs this) |
| `npm run preview` | Build a click-through preview with relative links into `preview/` |

## Where things live

- `src/*.njk`, `src/*/` – pages
- `src/_data/services.js` – service catalogue (Home, Services page, form pre-selection)
- `src/_data/segments.js` – Who We Serve segments; each gets `/who-we-serve/<slug>/`
- `src/_data/site.json` – name, tagline, and required identity / disclaimer statements
- `src/_data/contact.json` – website address, email, phone, hours (editable in the editor)
- `src/_data/team.json` – leadership bios (editable; About page section appears when filled)
- `src/_data/checklist.js` – HIPAA Readiness Checklist content
- `src/resources/articles/*.md` – articles (editable in the editor)
- `src/assets/` – CSS, JavaScript, logo
- `src/admin/` – content editor
- `netlify.toml` – build settings and security headers

## Images

All site photos are listed in `src/_data/images.json`. The site currently uses labeled placeholders in `src/assets/img/placeholders/`; each one names the suggested subject and size.

To replace a photo, either:

- **In the content editor:** Site settings → Site images → pick the image → upload the new photo and update its description, or
- **In the code:** add the photo to `src/uploads/` (or `src/assets/img/`) and change its `src` in `images.json`.

Use landscape photos around 1600 × 1000 (the home page hero is portrait, around 1200 × 1500), saved as JPG or WebP under about 400 KB. Photos are cropped to fit, so keep the subject near the center. Use real client or licensed photography, and avoid "hacker" or padlock stock images. `node scripts/make-placeholders.mjs` regenerates placeholders if needed.

## Deploying

1. Push this folder to a GitHub repository.
2. In Netlify, create a site from that repository. Build command and publish folder come from `netlify.toml`.
3. **Forms:** Netlify detects the two forms (`compliance-review`, `readiness-checklist`) on deploy. Under Forms → Notifications, add an email notification so submissions reach the team.
4. **Domain (GoDaddy):** add the domain under Netlify → Domain management, then in GoDaddy DNS set the records Netlify shows (an `A` record for the root domain and a `CNAME` for `www`). Netlify issues the HTTPS certificate automatically.
5. Set the website address in `src/_data/contact.json` (or in the editor) so canonical URLs and the sitemap use the real domain, and add `Sitemap: https://<domain>/sitemap.xml` to `src/robots.txt`.

## Content editor

**Try it on your own computer:** run `npm start` in one terminal and `npm run editor` in a second, then open http://localhost:8080/admin/. No sign-in is needed locally, and saved changes are written straight to the files in `src/`.


Staff sign in at `https://<domain>/admin/`. They can create and edit articles, update contact details, and add leadership bios. Changes are saved as drafts for review, then published; the site rebuilds automatically.

Authentication is configured for Netlify Identity with Git Gateway: enable Identity (registration: invite only) and Git Gateway in the Netlify site settings, then invite editors by email. Netlify has kept Identity as a supported option, but Git Gateway is in maintenance mode. If it is unavailable for a new site, switch `backend` in `src/admin/config.yml` to `github` with Netlify as the OAuth provider; editors then need GitHub accounts.

## Before launch

- [ ] Client review of all copy, especially regulatory statements in articles and on the HIPAA Compliance page
- [ ] Privacy Policy and Terms of Use reviewed by counsel
- [ ] Contact email, phone, and website address filled in
- [ ] Confirm the services described match what the client actually provides (e.g. "PHI Protection & Monitoring")
- [ ] All placeholder images replaced (search the built site for `placeholders/`)
- [ ] Leadership bios, credentials, and any testimonials: only real, verifiable, and permissioned
- [ ] Form email notifications tested end to end

## Notes

- Do not use this public website or its forms to collect PHI. Forms carry a visible warning.
- A future client portal (open items, training status, documents, BAA tracking) should be a separate, separately assessed application, not part of this site.
- Fonts load from Google Fonts. To avoid that third-party request, self-host the font files in `src/assets/fonts/` and update `base.njk` and the CSP.
