# SHINE NATIVE — Website Redesign Roadmap
### *Clarity That Stays With You*

> **Product:** 15 Stock Market E-Books + 3 Bonus Trading Courses — ₹375  
> **Brand DNA:** Growth · Organic wisdom · Deep trust · Calm confidence  
> **Logo:** Rising bar chart (blue gradient) crowned with gold leaves — markets meet nature  
> **Tagline:** Clarity that stays with you  
> **Design North Star:** Bloomberg clarity × Ayurvedic patience × Indian market authenticity

---

## Brand Identity — Extracted from Logo

| Token | Value | Usage |
|---|---|---|
| Blue (bar base) | `#2563EB` | CTAs, active states, links |
| Blue (bar top) | `#60A5FA` | Gradient stop, hover accents |
| Leaf Gold (deep) | `#C9A84C` | Price anchors, star ratings, leaf motif |
| Leaf Gold (light) | `#F0C96B` | Hover glow, badge backgrounds |
| Deep Navy | `#0F172A` | Hero bg, navbar, dark sections |
| Charcoal | `#1E293B` | Body text, card text |
| Off-white | `#F8FAFC` | Alternating section backgrounds |
| Headline font | `Playfair Display` | H1–H2 — authority and trust |
| Body font | `Plus Jakarta Sans` | Body, nav, cards — modern, readable |
| Impact font | `Bebas Neue` | Price callouts, large stats |

---

## Current Site Audit

| Area | Status | Problem |
|---|---|---|
| Brand expression | ❌ None | Logo exists but palette is never used on-site |
| Visual hierarchy | ❌ Flat | Elementor image dump — no sections, no rhythm |
| Trust signals | ❌ Missing | No testimonials, buyer count, or guarantees |
| Checkout | ⚠️ Off-site | Redirects to superprofile.bio — trust and conversion drop |
| Value framing | ❌ Weak | ₹375 shown raw with no ₹3,999 anchor |
| Performance | ⚠️ Slow | Elementor ships ~800KB unused CSS/JS |
| SEO | ❌ Bare | No meta description, no schema, title = domain name |

---

## Phase 01 — Brand System
**Week 1 · Foundation**

Build the design language directly from the logo. Every color, font, and
shape on the page must feel like a natural extension of the rising bar + gold leaf mark.

- [ ] Finalise exact hex values from logo (blue gradient, gold, navy)
- [ ] Define 3 surface levels: dark navy (hero), white (content), off-white (alternating)
- [ ] Set type scale — Playfair Display for headings, Plus Jakarta Sans for body, Bebas Neue for stats
- [ ] Recreate logo as inline SVG (scalable, retina-ready, no PNG dependency)
- [ ] Create favicon using leaf + bar mark alone (legible at 16px)
- [ ] Define spacing scale: 4px base unit, all margins/paddings in multiples of 4
- [ ] Wireframe all page sections (low-fidelity, 6 sections minimum)

**Deliverable:** `brand.css` with all CSS custom properties + wireframe sketch

---

## Phase 02 — Page Architecture & Copy
**Week 2 · Conversion Structure**

Every section serves one job. No decoration without function.

### Section Order

```
1.  NAVBAR        Sticky · SVG logo left · "Get ₹375 Bundle" CTA right
2.  HERO          Headline + tagline + animated bar chart + CTA + trust line
3.  TRUST BAR     4 stats: 15 E-Books · 3 Courses · Lifetime Access · PDF Format
4.  WHAT'S INSIDE E-book card grid (all 15 books with real titles + stats)
5.  VALUE ANCHOR  ₹3,999 struck · ₹375 gold · "You save ₹3,624 today"
6.  BONUS         3 premium course callout cards
7.  SOCIAL PROOF  Buyer count stat row + 3 testimonial cards
8.  FAQ           5 accordion questions — objection handling
9.  FINAL CTA     Full-width dark navy · gold price · buy button
10. FOOTER        Logo · tagline · copyright · policy links
```

### Copy Tasks
- [ ] Hero headline — 3 variants for A/B test (e.g. "Master the Market Before It Masters You")
- [ ] Sub-headline anchored to tagline: "Clarity that stays with you — long after the trade is done"
- [ ] 1-line description per e-book (15 total)
- [ ] 2-line description per bonus course (3 total)
- [ ] 5 FAQ answers: format, delivery, beginner suitability, lifetime access, refund policy
- [ ] Social proof copy: buyer count, outcome statements, city diversity line

---

## Phase 03 — Visual Design & Components
**Week 3 · Production**

Every component built around the core metaphor: **growth that is earned, not rushed.**

### Components to Build

- [ ] **Hero** — deep navy bg, animated rising bar chart (CSS keyframes mirroring the logo bars), gold leaf crown on tallest bar, headline in Playfair, CTA in primary blue
- [ ] **CSS marquee ticker** — horizontal scroll of concepts: "Candlesticks · Fibonacci · Options · Swing Trading · Risk Management ·" (CSS only, no JS)
- [ ] **E-book card** — dark card, blue bar chart watermark bg, gold leaf corner icon, title in Playfair, chapter/page count badges, 1-line description, gold border on hover
- [ ] **Trust bar** — 4 icon+stat blocks, icons use leaf or chart motif, thin dividers
- [ ] **Value anchor block** — large Bebas Neue `~~₹3,999~~` struck in muted tone, ₹375 in gold, "You save ₹3,624" pill badge in green
- [ ] **Bonus course card** — 3 cards with distinct left-border accents (blue, gold, teal), icon, title, description, "FREE with bundle" badge
- [ ] **Testimonial card** — blue gradient initials avatar, name, Indian city, 5 gold stars, serif italic quote
- [ ] **FAQ accordion** — smooth `max-height` CSS transition, `+` → `×` icon toggle, open state: left border in primary blue
- [ ] **Sticky mobile CTA bar** — appears after 600px scroll, full-width "Get All 15 E-Books — ₹375" button
- [ ] **Final CTA** — deep navy, gold leaf SVG icon, large gold price, benefit recap, single prominent button

---

## Phase 04 — Technical Build & Payments
**Week 4 · Engineering**

### Stack Recommendation

| Option | Best for |
|---|---|
| Single HTML file | Fastest to ship, zero infra, perfect for this product |
| Next.js static | SEO + scalability if product line grows |
| **Start here →** | **Single HTML → migrate to Next.js after validating conversion** |

### Performance Targets
- [ ] Replace Elementor entirely — target < 50KB total page weight
- [ ] All images as WebP, max 200KB per image
- [ ] Lazy load everything below the fold
- [ ] Lighthouse Mobile Performance ≥ 90
- [ ] Host on Cloudflare Pages (free tier, global CDN, auto SSL)

### Payments — Critical Fix
- [ ] Embed Razorpay checkout on-site as a modal (no redirect to superprofile.bio)
- [ ] On success: show download link or trigger email delivery via Resend / EmailJS
- [ ] Test full payment flow on Android Chrome + iOS Safari

### SEO
- [ ] `<title>`: "15 Stock Market E-Books + 3 Courses for ₹375 | Shine Native"
- [ ] `<meta description>`: "Master candlestick patterns, options strategy, Fibonacci & swing trading. 15 e-books + 3 premium courses. Lifetime PDF access for ₹375."
- [ ] OG image (1200×630) — dark navy bg, logo centred, "₹375" in gold Bebas Neue
- [ ] JSON-LD `Product` schema: name, description, price `375`, priceCurrency `INR`
- [ ] Google Search Console setup + sitemap.xml submission

### Analytics
- [ ] GA4 — page_view, scroll_depth (25 / 50 / 75 / 100%), purchase event
- [ ] Meta Pixel — PageView + Purchase standard events
- [ ] Hotjar — heatmap to identify drop-off points post-launch

---

## Phase 05 — Launch & Growth Loop
**Week 5 · Scale**

### Launch Checklist
- [ ] Cross-device test: Android Chrome · iOS Safari · Desktop Chrome · Firefox
- [ ] All CTAs confirmed pointing to Razorpay on-site modal
- [ ] GA4 events verified in DebugView · Meta events verified in Events Manager
- [ ] 301 redirect set from any old Elementor page slugs

### Growth Experiments
- [ ] **A/B test** — Hero headline variant A vs B, measure CTA click-through
- [ ] **Lead magnet** — Chapter 1 of "Profitable Candlestick Patterns" as free PDF → email capture → nurture sequence → upsell to ₹375 bundle
- [ ] **WhatsApp broadcast** — Existing buyers → referral link → ₹50 Amazon voucher per successful referral
- [ ] **Retargeting ads** — Meta audience: page visitors who did not purchase → ₹99/day ad with urgency creative
- [ ] **Post-purchase upsell** — Redirect after payment to "Advance Your Edge" ₹999 mentorship or course page

---

## Conversion Targets

| Metric | Current (Elementor) | Post-Redesign Target |
|---|---|---|
| Mobile page load | 6–9 seconds | < 2 seconds |
| Lighthouse Performance | ~45 | ≥ 90 |
| Bounce rate | ~80% | < 55% |
| CTA click-through | ~3–5% | ≥ 12% |
| Checkout completion | ~40% (off-site) | ≥ 65% (on-site modal) |

---

## The Starter Prompt

Paste this into a fresh Claude conversation to build the full landing page:

```
GODMODE — Shine Native Landing Page Redesign

You are a senior conversion-focused UI designer with deep knowledge of
Indian fintech and edtech markets. Redesign the full landing page for
Shine Native (shinenative.in) — a stock market education brand selling
a ₹375 bundle of 15 e-books + 3 bonus trading courses.

BRAND IDENTITY (from their actual logo):
- Logo mark: 3 rising bar chart bars in blue gradient (#2563EB to #60A5FA),
  with 3 gold leaves (#C9A84C) sprouting from the top of the tallest bar
- Tagline: "Clarity that stays with you"
- Tone: Calm authority, deep trust, educational — NOT aggressive or hype-driven
- Page feel: Bloomberg intelligence × Zerodha Varsity warmth × Indian authenticity

DESIGN TOKENS:
  --blue-dark:   #2563EB   (bar base, CTAs, active states)
  --blue-light:  #60A5FA   (gradient top, hover accents)
  --gold-deep:   #C9A84C   (leaves, price anchors, stars)
  --gold-light:  #F0C96B   (hover glow, badge backgrounds)
  --navy:        #0F172A   (hero bg, dark sections, navbar)
  --charcoal:    #1E293B   (body text)
  --surface:     #F8FAFC   (alternating section bg)
  --font-head:   'Playfair Display', serif
  --font-body:   'Plus Jakarta Sans', sans-serif
  --font-impact: 'Bebas Neue', sans-serif

Load from Google Fonts:
  Playfair Display (700) · Plus Jakarta Sans (400, 500, 600) · Bebas Neue (400)

BUILD a single production-ready HTML file with these 10 sections:

1. STICKY NAVBAR
   Left: inline SVG logo — 3 rising bars (blue gradient) + 3 gold leaves on top bar
         + "SHINE NATIVE" in charcoal Playfair Display
   Right: "Get ₹375 Bundle" button — blue bg, white text, rounded

2. HERO (navy bg, full viewport height)
   Center: animated rising bar chart (CSS keyframes, 3 bars growing
   from 0 to full height over 1.2s, gold leaf SVG on tallest bar at end)
   Below animation:
     H1 (Playfair Display, white, 52px): "Master the Stock Market
        Before It Masters You"
     Sub (Plus Jakarta Sans, #60A5FA, 20px): "Clarity that stays with
        you — 15 expert e-books + 3 premium trading courses, all for ₹375"
     CTA button (blue, large): "Get Instant Access — ₹375"
     Trust line (small, gold): "★★★★★  4,200+ traders enrolled across India"
   CSS marquee ticker below hero — scrolls: "Candlesticks · Fibonacci ·
   Options Strategies · Swing Trading · Risk Management · Day Trading ·
   Trading Psychology ·" — white text on slightly lighter navy strip

3. TRUST BAR (white bg, 4 equal columns with thin dividers)
   📚 15 E-Books  |  🎓 3 Bonus Courses  |  📄 PDF Format  |  ♾ Lifetime Access
   Icons in blue, labels in charcoal Playfair, stats in Bebas Neue gold

4. WHAT'S INSIDE (off-white bg)
   H2: "Everything Inside the ₹375 Bundle"
   Responsive grid (3 cols desktop, 2 tablet, 1 mobile) of 15 e-book cards.
   Each card: dark charcoal bg, subtle blue bar chart watermark pattern,
   small gold leaf SVG top-right corner, book title in Playfair white,
   chapter badge (blue pill), page badge (gold pill), 1-line description.
   Real titles and stats:
   1.  Profitable Candlestick Patterns — 17 ch · 375 pg
       "Pinpoint reversals before other traders even notice them"
   2.  Technical Analysis & Chart Interpretation — 29 ch · 380 pg
       "Cut through the noise and read charts with real conviction"
   3.  Complete Guide to Option Strategies — 32 ch · 730 pg
       "From covered calls to complex spreads — every strategy explained"
   4.  Timing Solution for Swing Traders — 9 ch · 220 pg
       "Combine technical indicators with market timing for precision entries"
   5.  The Complete Trading Course — 17 ch · 375 pg
       "A proven method to analyse markets and execute consistently"
   6.  How to Day Trade for a Living — 9 ch · 220 pg
       "Everything you need to build daily income from the markets"
   7.  Trading in the Zone — 14 ch · 240 pg
       "The mindset that separates consistently profitable traders"
   8.  Market Wizards — 18 ch · 320 pg
       "Interviews with the world's greatest traders — in their own words"
   9.  Reminiscences of a Stock Operator — 12 ch · 280 pg
       "The trading bible — timeless lessons from Jesse Livermore"
   10. The Intelligent Investor — 20 ch · 640 pg
       "Benjamin Graham's framework for rational, long-term wealth"
   11. One Up On Wall Street — 15 ch · 300 pg
       "How everyday investors can outperform professional fund managers"
   12. Little Book of Common Sense Investing — 10 ch · 216 pg
       "Why index strategy beats active management — with proof"
   13. Fibonacci Trading — 11 ch · 290 pg
       "Apply the golden ratio to identify high-probability trade setups"
   14. Options as a Strategic Investment — 25 ch · 900 pg
       "The definitive reference for serious options traders"
   15. Trading Psychology 2.0 — 13 ch · 320 pg
       "Rewire your decision-making so emotion never costs you again"

5. VALUE ANCHOR (navy bg, centered)
   Label (small, #60A5FA): "Everything above, plus 3 bonus courses"
   Struck price (Bebas Neue, 48px, muted gray strikethrough): ₹3,999
   Real price (Bebas Neue, 96px, gold #C9A84C): ₹375
   Savings pill (green bg): "You save ₹3,624 today"
   Copy (white, Plus Jakarta Sans): "Less than the cost of a single
   trading book on Amazon"
   CTA button (gold bg, dark text): "Yes — I Want Clarity · ₹375"

6. BONUS SECTION (white bg)
   H2: "3 Premium Courses — Included Free"
   3 cards side by side, each with a distinct left-border accent:
   Card 1 (blue border): 📈 Fibonacci Trading Course
     "Apply Fibonacci retracements to find exact entry and exit levels
     with confidence — in any market condition."
   Card 2 (gold border): 🎯 Options Mastery Course
     "Structure options trades that profit whether the market goes up,
     down, or sideways."
   Card 3 (teal border): 🔄 Swing Trading Blueprint
     "Capture multi-day moves systematically — hold less, earn more."
   Each: "FREE with bundle" badge top-right in blue pill

7. SOCIAL PROOF (off-white bg)
   Stat row: "4,200+ Students Enrolled | ₹3.6M+ Saved by Buyers | 15 Topics Mastered"
   3 testimonial cards:
   Card 1: Avatar "RS" (blue gradient circle), Rahul S., Mumbai
     "★★★★★ The candlestick book alone changed how I read charts.
     I finally trade with clarity instead of guessing."
   Card 2: Avatar "PK" (blue gradient circle), Priya K., Bengaluru
     "★★★★★ I bought three separate courses before this. This bundle
     gave me more in a week than all of them combined."
   Card 3: Avatar "AM" (blue gradient circle), Arjun M., Hyderabad
     "★★★★★ The options guide is worth ₹2,000 alone. At ₹375 for
     everything, this is the best investment I've made."

8. FAQ ACCORDION (white bg)
   H2: "Your Questions, Answered"
   5 questions with smooth CSS max-height transition (no JS frameworks),
   + icon toggles to × when open, open state has left border in --blue-dark:
   Q1: What format are the e-books in?
   A: All 15 e-books are in PDF format, compatible with every device —
      phone, tablet, laptop, Kindle. No special app required.
   Q2: How do I receive my purchase?
   A: Immediately after payment, you'll receive a download link on-screen
      and via email. Delivery is instant — no waiting.
   Q3: Is this suitable for complete beginners?
   A: Yes. The bundle is structured to work for all levels — from "what
      is a candlestick" to advanced options strategies.
   Q4: Do I get lifetime access?
   A: Absolutely. Once purchased, the PDFs are yours to keep forever.
      Download them and access them any time, anywhere.
   Q5: Is there a refund policy?
   A: Given the instant-access digital nature of this product, we do not
      offer refunds. We recommend reviewing the full book list above before purchasing.

9. FINAL CTA (navy bg, centered, generous padding)
   Gold leaf SVG icon (large, centered)
   H2 (Playfair Display, white): "Your Edge Starts Today"
   Copy (Plus Jakarta Sans, #60A5FA): "15 e-books. 3 courses. Lifetime access. One price."
   Large price (Bebas Neue, 80px, gold): ₹375
   Button (full-width max 400px, blue bg, white text, large):
     "Get Instant Access" → links to https://superprofile.bio/vp/15Ebooks (target="_blank")

10. FOOTER (charcoal bg)
    Left: SVG logo mark (small) + "SHINE NATIVE" + tagline "Clarity that stays with you"
    Right: Privacy Policy · Terms of Use
    Bottom: "© 2026 Shine Native. All rights reserved."

TECHNICAL REQUIREMENTS:
- Single page nextjs project.
- All custom CSS in globals css using CSS custom properties for all brand tokens.
- Vanilla JS only — max 30 lines total (sticky bar + accordion toggle + scroll)
- Google Fonts loaded via <link> in <head>
- Fully responsive: 375px to 1440px — CSS Grid + Flexbox only
- Sticky CTA bar on mobile: position fixed at bottom, visible after 600px scroll,
  hidden on desktop
- Hero bar chart animation: CSS @keyframes, bars grow from scaleY(0) to scaleY(1),
  transform-origin: bottom, staggered delays (0s, 0.2s, 0.4s)
- FAQ accordion: CSS max-height transition (0 → 400px), JS only toggles a class
- Smooth scroll: scroll-behavior: smooth on html element
- All CTAs open https://superprofile.bio/vp/15Ebooks in a new tab
- Page must feel like it was designed by a ₹1,00,000/month agency —
  premium, calm, confident, and built to convert every rupee of ad spend.
- Use lenis for smooth scrolling
```

---

*Shine Native · Clarity That Stays With You · Roadmap v2 · May 2026*