# Antigravity prompt — research + image generation for SANTOSH Global HSE Academy

Copy everything inside the box below into Antigravity.

```text
You are helping with the website of "SANTOSH Global HSE Academy" — a premium international
training academy that provides TRAINING / COACHING / EXAMINATION PREPARATION for the ASP®, CSP®
and CRSP® safety certifications, plus professional HSE courses (HSE, Fire & Safety, Risk
Assessment, Incident Investigation, Safety Management, Emergency Response).

The site is a static React + Vite + Tailwind project. Palette: Deep Navy #063B78, Blue #0757B8,
Teal #00A6B4, Cyan #18C6D9, Light background #F3F8FC, Orange CTA #FF7A00.

IMPORTANT RULES
- The academy does NOT award ASP/CSP/CRSP. Never create images or text implying it does, and
  never reproduce official BCSP / BCRSP logos, seals or badges.
- No fake "real" people: images of people must be generic, clearly illustrative professionals.
  Do not create fake student photos for testimonials.
- No readable fake brand names, fake certificates, or fake statistics inside images.
- No text baked into images (the website adds its own text). Leave clean negative space.

PART 1 — RESEARCH (do this first, write results to /docs/RESEARCH.md)
Research accurately from official sources (bcsp.org for ASP and CSP; bcrsp.ca for CRSP):
1. ASP®: what it is, typical eligibility, exam format, domains/blueprint topics.
2. CSP®: same, plus how it relates to ASP.
3. CRSP®: same, Canada-specific context (legislation, provincial/territorial focus).
4. For each, list the official exam-blueprint domains in plain language that a coaching
   academy can safely teach to (no copyrighted exam questions).
5. Fees, renewal and recertification rules ONLY if you can cite the official page; otherwise
   write "verify with the official body".
6. What 5 top competing exam-prep academies show on their sites (sections, tone, claims) —
   summarise patterns only, do not copy text.
7. A list of claims we must NOT make (to stay compliant and credible).
Cite every source URL. Mark anything uncertain as "unverified".

PART 2 — IMAGE GENERATION
Style for all images: premium international corporate photography, photorealistic, natural
light, shallow depth of field, navy/teal colour grade, diverse professionals, correct PPE
(white hard hat, hi-vis vest, safety glasses), no logos, no text, 16:9 unless stated,
high resolution, optimised to under 400 KB each as .jpg (use 1920x1080 for wide shots).

Generate and save into /public/images/ with EXACTLY these filenames:

1. hero_refinery.jpg (1920x1080) — one safety professional in a white helmet and hi-vis vest
   in a refinery/industrial plant at golden-hour sunset, looking confidently off-camera,
   subject on the RIGHT third, clear dark-blue space on the LEFT for headline text.
2. card_asp.jpg (800x1000) — early-career safety professional, white helmet, hi-vis vest,
   arms crossed, friendly, plain light-blue/teal-tinted industrial background.
3. card_csp.jpg (800x1000) — experienced woman safety professional, white helmet, orange
   hi-vis vest, confident smile, same background style as card_asp.
4. card_crsp.jpg (800x1000) — safety professional with a subtle Canadian context (maple-leaf
   styled colour accent only, no flag text), same background style.
5. classroom_training.jpg (1600x1000) — instructor presenting to a small class of
   professionals in hi-vis vests; a screen shows a generic blank "exam strategy" slide
   (no readable text).
6. mock_exam.jpg (1600x1000) — learners at laptops taking a computer-based mock exam in a
   modern training room.
7. online_training.jpg (1600x1000) — professional on a video call with an instructor, headset,
   laptop, study notes, home-office setting.
8. cta_sunset_plant.jpg (1920x1080) — two safety professionals pointing toward an industrial
   plant at sunset, silhouette-friendly, dark space on the LEFT for text.
9. og_share.jpg (1200x630) — clean navy/teal abstract background with a subtle safety-shield
   motif and plenty of empty space (for social sharing).

Do NOT generate: instructor portrait (the founder's real photo will be supplied), testimonial
learner photos, or any official certification logos.

PART 3 — WIRE UP
- Add short descriptive alt text for every image in /docs/IMAGE_ALT_TEXT.md.
- Update src/data/academyData.js `heroImage` to /images/hero_refinery.jpg and use the card_*.jpg
  images in the three program cards on src/pages/HomePage.jsx (image on the right of each card,
  object-contain, bottom-aligned), classroom_training.jpg in the "Why SANTOSH" section and
  cta_sunset_plant.jpg in the final call-to-action section.
- Keep mobile layouts working (no horizontal scroll at 390px). Run `npm run build`.
- Commit to the current branch with a clear message. Do not open a pull request.

Finish by summarising: files created, sources used, and anything unverified.
```
