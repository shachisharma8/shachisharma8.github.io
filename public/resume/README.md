# Résumé — keep this private

The résumé is intentionally **not** published on the site. The "Get in touch"
button asks visitors to email instead, and the résumé is shared on request.

⚠️ **Do not drop your résumé PDF into this `public/` folder if you want it to
stay private.** Everything under `public/` is copied as-is into the build and is
world-readable — anyone who guesses the URL (e.g. `/resume/your-file.pdf`) can
download it. There is no login on a static site to protect it.

If you later decide you *do* want it publicly downloadable, add the PDF here and
re-introduce a download link in `src/pages/Home.tsx`. Until then, keep it off the
server.
