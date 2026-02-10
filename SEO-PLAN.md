# SEO Improvement Plan - Aura Orientalis

**Domain:** https://auraorientalis.vn/
**Server IP:** 103.77.162.18
**Date:** 2026-02-10

---

## Current SEO Status

### Already Implemented
- [x] Meta title, description, keywords on all 5 pages
- [x] Open Graph tags (og:type, og:title, og:description, og:image, og:url)
- [x] Canonical URLs on all pages
- [x] sitemap.xml (5 URLs)
- [x] robots.txt with sitemap reference
- [x] JSON-LD Organization schema on homepage
- [x] Responsive mobile-friendly design
- [x] Semantic HTML (h1/h2/h3 structure)
- [x] SSL/HTTPS enabled
- [x] Fast loading (static HTML, no server-side rendering)
- [x] Google Search Console verified (DNS TXT, 2026-02-10)
- [x] Sitemap submitted to Google Search Console
- [x] All 5 pages indexed / requested indexing (2026-02-10)
- [x] Google Analytics 4 added (G-P4P0NB18V3)

---

## Monitoring Dashboards

| Tool | URL | Notes |
|------|-----|-------|
| **Google Search Console** | https://search.google.com/search-console?resource_id=sc-domain:auraorientalis.vn | Lập chỉ mục trang, sơ đồ trang web, kiểm tra URL |
| **Google Analytics 4** | https://analytics.google.com/analytics/web/#/a366166832p514800125/reports/intelligenthome | Measurement ID: `G-P4P0NB18V3` |

### Quick Navigation (Google Search Console)
- **Lập chỉ mục trang:** Menu trái → "Trang"
- **Sơ đồ trang web:** Menu trái → "Sơ đồ trang web"
- **Kiểm tra URL:** Ô tìm kiếm phía trên
- **Hiệu suất tìm kiếm:** Menu trái → "Hiệu suất"

---

## Phase 1: Technical SEO (Priority: HIGH)

### 1.1 Submit Sitemap to Google Search Console ✅ DONE (2026-02-10)
- ~~Go to https://search.google.com/search-console~~
- ~~Add property: `https://auraorientalis.vn`~~
- ~~Verify ownership (DNS TXT record)~~ — Verified via PA Vietnam DNS
- ~~Submit sitemap: `https://auraorientalis.vn/sitemap.xml`~~ — Submitted
- Monitor indexing status

### 1.2 Submit to Bing Webmaster Tools
- Go to https://www.bing.com/webmasters
- Add site and submit sitemap
- Bing also powers Yahoo search

### 1.3 Server-side Optimizations
- **GZIP compression**: Enable on hosting for HTML/CSS/JS files
- **Cache headers**: Set `Cache-Control` for static assets (images, CSS, JS)
  - Images: `max-age=2592000` (30 days)
  - CSS/JS: `max-age=604800` (7 days)
  - HTML: `max-age=3600` (1 hour)
- **HTTP/2**: Check if hosting supports HTTP/2 for faster loading

### 1.4 HTTPS Redirect
- Ensure `http://auraorientalis.vn` redirects to `https://auraorientalis.vn`
- Ensure `www.auraorientalis.vn` redirects to `https://auraorientalis.vn`
- All internal links use HTTPS

---

## Phase 2: On-Page SEO (Priority: HIGH)

### 2.1 Image Optimization
- Convert large images (nen.jpg, about photos) to WebP format
- Add descriptive `alt` text to all images
- Compress images (target < 200KB each)
- Replace service placeholder images with real images when available
- Add `width` and `height` attributes to prevent layout shift

### 2.2 Page Speed Optimization
- Minify CSS (`main.css`) and JS files for production
- Lazy load images below the fold: `<img loading="lazy">`
- Preload critical resources:
  ```html
  <link rel="preload" href="assets/css/main.css" as="style">
  <link rel="preload" href="assets/img/nen.jpg" as="image">
  ```
- Consider self-hosting Google Fonts to reduce DNS lookups

### 2.3 Content Improvements
- Add more descriptive text to each page (Google prefers 300+ words)
- Use target keywords naturally in headings and body text
- Add internal links between pages (e.g., About page links to Services)

---

## Phase 3: Local SEO (Priority: HIGH)

### 3.1 Google Business Profile
- Create profile at https://business.google.com
- Company name: Aura Orientalis Co., LTD.
- Address: 314/6 Dien Bien Phu Street, Vuon Lai Ward, Ho Chi Minh City
- Phone: +84 935 088 346
- Website: https://auraorientalis.vn
- Category: Business Consulting / Manufacturing
- Add photos, business hours, description

### 3.2 Local Business Schema
- Add LocalBusiness JSON-LD schema to contact page:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aura Orientalis Co., LTD.",
    "address": { ... },
    "geo": { "latitude": "...", "longitude": "..." },
    "openingHours": "Mo-Fr 08:00-17:00"
  }
  ```

### 3.3 Business Directory Listings
- Register on Vietnamese business directories
- Register on Japanese business directories (for Japan market)
- Ensure NAP (Name, Address, Phone) is consistent everywhere

---

## Phase 4: Off-Page SEO (Priority: MEDIUM)

### 4.1 Backlinks
- LinkedIn company page: https://www.linkedin.com/company/auraorientalis/
- Post regular updates on LinkedIn with links to website
- Partner websites: request backlinks from business partners
- Vietnamese-Japanese business association directories
- Chamber of Commerce listings

### 4.2 Social Media Presence
- Share website content on LinkedIn regularly
- Consider creating Facebook page for Vietnamese audience
- Consider creating content on note.com for Japanese audience

---

## Phase 5: Content SEO (Priority: MEDIUM)

### 5.1 Blog/News Section
- Publish articles regularly (at least 2x/month)
- Topics:
  - Company news and milestones
  - Vietnam-Japan business insights
  - Product introductions
  - Industry trends
- Each post should be 500+ words with relevant keywords
- Add structured data for blog posts (Article schema)

### 5.2 Multilingual SEO
- Current: single URL with client-side i18n (EN/JP/VN)
- Limitation: search engines only see default language (EN)
- Future consideration: separate URL paths per language
  - `/en/`, `/ja/`, `/vi/` with hreflang tags
  - This allows Google to index all 3 language versions
  - More complex to implement but significant SEO benefit

---

## Phase 6: Monitoring & Analytics (Priority: MEDIUM)

### 6.1 Google Analytics 4 ✅ DONE (2026-02-10)
- ~~Add GA4 tracking code to all pages~~ — Measurement ID: `G-P4P0NB18V3`
- Track: page views, user demographics, traffic sources
- Set up goals: contact form submissions, page engagement

### 6.2 Google Search Console Monitoring
- Monitor: search queries, click-through rate, average position
- Check for: crawl errors, mobile usability issues, indexing problems
- Review monthly and optimize based on data

### 6.3 Performance Monitoring
- Use Google PageSpeed Insights monthly
- Target scores: Mobile 90+, Desktop 95+
- Use GTmetrix for detailed performance analysis

---

## Phase 7: Advanced SEO (Priority: LOW)

### 7.1 Rich Snippets
- Add FAQ schema for common questions
- Add BreadcrumbList schema for navigation
- Add Service schema for each business area

### 7.2 404 Page
- Create custom 404.html page
- Include navigation links back to main pages
- Track 404 errors in Search Console

### 7.3 Security Headers
- Add `X-Content-Type-Options: nosniff`
- Add `X-Frame-Options: DENY`
- Add `Content-Security-Policy` header
- These improve trust signals for search engines

---

## Priority Action Items (Next Steps)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| ~~1~~ | ~~Submit sitemap to Google Search Console~~ | ~~30 min~~ | ~~HIGH~~ ✅ |
| 2 | Create Google Business Profile | 1 hour | HIGH |
| ~~3~~ | ~~Add Google Analytics 4~~ | ~~30 min~~ | ~~HIGH~~ ✅ |
| 4 | Optimize & compress images | 1 hour | MEDIUM |
| 5 | Enable GZIP on server | 30 min | MEDIUM |
| 6 | Add lazy loading to images | 30 min | MEDIUM |
| 7 | Post on LinkedIn weekly | Ongoing | MEDIUM |
| 8 | Publish first blog post | 2 hours | MEDIUM |
| 9 | Register on business directories | 2 hours | LOW |
| 10 | Set up server cache headers | 1 hour | LOW |

---

## Target Keywords

### English
- Aura Orientalis
- Vietnam Japan company
- system development Vietnam
- manufacturing retail Vietnam
- trading company Ho Chi Minh City
- calming lifestyle products

### Japanese
- ベトナム 日本 会社
- システム開発 ベトナム
- ベトナム 製造 小売
- 貿易会社 ホーチミン

### Vietnamese
- công ty Việt Nhật
- phát triển hệ thống
- sản xuất bán lẻ
- thương mại quốc tế
- Aura Orientalis
