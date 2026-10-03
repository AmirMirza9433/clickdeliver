# ClickDeliver UI verification

Verified against the isolated Next.js production build on October 3, 2026.

- Production build: passed (`NEXT_BUILD_DIR=.next-verify npm run build`).
- TypeScript, ESLint, and `git diff --check`: passed.
- Chromium layouts: 320 × 740, 390 × 844, 768 × 1024, and 1440 × 1000, in light and dark themes.
- No horizontal page overflow or overflowing text found at those widths.
- Automated axe WCAG 2 A/AA and WCAG 2.1 AA checks: no violations in the scanned desktop dark, desktop light, and mobile light states. This is an automated scan, not a full accessibility certification.
- Mobile menu opening, Escape, focus handling, anchor offsets, keyboard FAQ expansion, FAQ filters, interactive steps, role switching, and Android/iPhone QR switching passed.
- Google Play and App Store buttons retain the original URLs. App installation was not performed.
- Contact form labels, role selection, WhatsApp message construction, confirmation, and reset passed. The browser intercepted `window.open`; no external message was sent.
- Hero rider movement, offscreen pause, desktop tilt, reduced-motion behavior, touch-device tilt suppression, and visible server-rendered content with JavaScript disabled passed.
- No page JavaScript errors were recorded.

Existing business statistics, reviews, prices, service statements, contact details, social URLs, and SEO metadata were preserved. Statistics remain static because no verification source is supplied in the project; `CountUp` now requires explicit `verified` opt-in before animating.

The existing FAQ says the iOS app is upcoming while the configured download section already links to the App Store. Those supplied business details were retained; the owner should confirm that copy before publishing.

Screenshots and the machine-readable results are in this directory. The site has not been deployed by this task.
