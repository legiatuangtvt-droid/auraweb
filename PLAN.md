# PLAN.md - Kế hoạch Thiết kế & Triển khai Website Aura Orientalis

## 1. Tổng quan dự án

**Mục tiêu:** Xây dựng website giới thiệu công ty Aura Orientalis - công ty Việt-Nhật, với thiết kế thanh lịch, an yên (calming), hỗ trợ đa ngôn ngữ (EN/JP/VN).

**Slogan:** "A calming way of life"

---

## 2. Thông tin thu thập từ tài liệu

### 2.1 Brand Identity (từ AO_Logo.pdf)
- **Logo:** Biểu tượng mặt trời mọc kết hợp sóng nước - thể hiện "Eastern Breeze/Brilliance"
- **Màu chính:** `#1268b3` (xanh dương đậm)
- **Hai phiên bản logo:** Logo xanh trên nền trắng + Logo trắng trên nền xanh
- **Font chữ logo:** Sans-serif, thanh lịch

### 2.2 Nội dung Website (từ Excel)
| Sheet | Nội dung |
|-------|----------|
| first page | Thông điệp sáng lập (EN/JP) + Logo |
| company, vision, mission, story | Our Company, Vision, Mission, Story (EN/JP) |
| company profile | Thông tin công ty: tên, địa chỉ, lãnh đạo, liên hệ |
| company products | 4 mảng: Manufacturing & Retail, System Development, Trading, Business Support (EN/JP) |

### 2.3 Layout & Thiết kế (từ Word)
- **Navigation:** Home | About Us | Our Business | News | Language | Contact
- **Trang chủ:** Hero section với thông điệp + hình ảnh (cần bổ sung)
- **About Us:** Our Company → Our Story (text trái, hình phải) → Philosophy (Vision/Mission ngang) → Company Profile
- **Our Business:** 4 mảng kinh doanh với hình minh họa bên phải
- **Footer:** Địa chỉ + LinkedIn
- **Đa ngôn ngữ:** EN, JP, VN (toggle trên navigation)

---

## 3. Kiến trúc & Công nghệ

### 3.1 Tech Stack đề xuất
| Thành phần | Công nghệ | Lý do |
|------------|-----------|-------|
| Framework | **Next.js 14+ (App Router)** | SSG cho tốc độ, SEO tốt, i18n built-in |
| Styling | **Tailwind CSS** | Nhanh, responsive, dễ customize brand colors |
| Language | **TypeScript** | Type safety, maintainability |
| i18n | **next-intl** | Đa ngôn ngữ EN/JP/VN dễ dàng |
| Animation | **Framer Motion** | Hiệu ứng mượt, phù hợp "calming" theme |
| Icons | **Lucide React** | Nhẹ, đẹp, phù hợp design minimal |
| Deployment | **Vercel** | Zero-config cho Next.js |

### 3.2 Cấu trúc thư mục
```
auraWeb/
├── public/
│   ├── images/          # Logo, hero images, product images
│   ├── fonts/           # Custom fonts (nếu cần)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── [locale]/        # Dynamic locale routing
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx         # Home
│   │   │   ├── about/
│   │   │   │   └── page.tsx     # About Us
│   │   │   ├── business/
│   │   │   │   └── page.tsx     # Our Business
│   │   │   ├── news/
│   │   │   │   └── page.tsx     # News
│   │   │   └── contact/
│   │   │       └── page.tsx     # Contact
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Navigation + Language switcher
│   │   │   ├── Footer.tsx       # Address + LinkedIn + Copyright
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   └── FounderMessage.tsx
│   │   ├── about/
│   │   │   ├── OurCompany.tsx
│   │   │   ├── OurStory.tsx
│   │   │   ├── Philosophy.tsx
│   │   │   └── CompanyProfile.tsx
│   │   ├── business/
│   │   │   ├── BusinessCard.tsx
│   │   │   └── BusinessSection.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── SectionTitle.tsx
│   ├── i18n/
│   │   ├── routing.ts
│   │   └── request.ts
│   └── lib/
│       └── utils.ts
├── messages/
│   ├── en.json              # English translations
│   ├── ja.json              # Japanese translations
│   └── vi.json              # Vietnamese translations
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── CLAUDE.md
└── PLAN.md
```

---

## 4. Thiết kế chi tiết từng trang

### 4.1 Layout chung
- **Header (sticky):** Logo (trái) | Nav links (giữa) | Language + Contact (phải)
- **Footer:** Logo + Địa chỉ + Phone/Email + LinkedIn icon + Copyright
- **Color Palette:**
  - Primary: `#1268b3` (brand blue)
  - Primary Light: `#1a7fd4`
  - Primary Dark: `#0e5290`
  - Background: `#ffffff` (trắng)
  - Background Alt: `#f8fafb` (xám nhạt)
  - Text: `#1a1a2e` (gần đen)
  - Text Light: `#555555`
  - Accent: `#e8f4fd` (xanh rất nhạt cho background sections)

### 4.2 Trang Home
```
┌──────────────────────────────────────────┐
│  Logo  | Home About Business News | Lang │  ← Header
├──────────────────────────────────────────┤
│                                          │
│       [Hero Image / Video BG]            │
│                                          │
│    "A calming way of life"               │
│                                          │
│    Aura Orientalis Logo (lớn)            │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  Thông điệp sáng lập                    │
│  (Founder's Message)                     │
│  - AI & universe analogy                 │
│  - Invisible feelings                    │
│  - Why founded Aura Orientalis           │
│                                          │
├──────────────────────────────────────────┤
│  Footer                                  │
└──────────────────────────────────────────┘
```

### 4.3 Trang About Us
```
┌──────────────────────────────────────────┐
│  Header                                  │
├──────────────────────────────────────────┤
│  Section: OUR COMPANY                    │
│  - Ý nghĩa tên Aura Orientalis          │
│  - "Eastern Breeze/Brilliance"           │
├──────────────────────────────────────────┤
│  Section: OUR STORY                      │
│  ┌─────────────────┬────────────────┐    │
│  │  Nội dung text   │   Hình ảnh    │    │
│  │  (bên trái)      │   (bên phải)  │    │
│  └─────────────────┴────────────────┘    │
│  - Vietnamese & Japanese founders        │
│  - Cultural fusion                       │
│  - Supporting young entrepreneurs        │
├──────────────────────────────────────────┤
│  Section: PHILOSOPHY (layout ngang)      │
│  ┌──────────────────┬──────────────────┐ │
│  │ 🔭 OUR VISION    │ 🎯 OUR MISSION  │ │
│  │ (icon màu brand) │ (icon màu brand) │ │
│  │ Nội dung...      │ Nội dung...      │ │
│  └──────────────────┴──────────────────┘ │
├──────────────────────────────────────────┤
│  Section: COMPANY PROFILE                │
│  - Bảng thông tin công ty                │
│  - Layout theo mẫu Excel                 │
├──────────────────────────────────────────┤
│  Footer                                  │
└──────────────────────────────────────────┘
```

### 4.4 Trang Our Business
```
┌──────────────────────────────────────────┐
│  Header                                  │
├──────────────────────────────────────────┤
│  Section: MANUFACTURING & RETAIL         │
│  ┌─────────────────┬────────────────┐    │
│  │  Nội dung text   │   Hình ảnh    │    │
│  └─────────────────┴────────────────┘    │
├──────────────────────────────────────────┤
│  Section: SYSTEM DEVELOPMENT             │
│  ┌────────────────┬─────────────────┐    │
│  │  Nội dung text  │   Hình ảnh     │    │
│  └────────────────┴─────────────────┘    │
├──────────────────────────────────────────┤
│  Section: TRADING                        │
│  ┌─────────────────┬────────────────┐    │
│  │  Nội dung text   │   Hình ảnh    │    │
│  └─────────────────┴────────────────┘    │
├──────────────────────────────────────────┤
│  Section: BUSINESS SUPPORT               │
│  ┌─────────────────┬────────────────┐    │
│  │  Nội dung text   │   Hình ảnh    │    │
│  └─────────────────┴────────────────┘    │
├──────────────────────────────────────────┤
│  Footer (+ LinkedIn)                     │
└──────────────────────────────────────────┘
```

### 4.5 Trang Contact
- Form liên hệ đơn giản
- Thông tin: Địa chỉ, Phone, Email
- LinkedIn link
- Google Maps embed (nếu cần)

### 4.6 Trang News
- Danh sách bài tin (placeholder ban đầu)
- Layout grid cards

---

## 5. Đa ngôn ngữ (i18n)

### Ngôn ngữ hỗ trợ:
1. **English (en)** - Mặc định
2. **日本語 (ja)** - Tiếng Nhật
3. **Tiếng Việt (vi)** - Tiếng Việt

### Cách triển khai:
- URL-based routing: `/en/about`, `/ja/about`, `/vi/about`
- Language switcher trên header
- Tất cả nội dung text đã có sẵn 3 ngôn ngữ trong file Excel

---

## 6. Design Guidelines

### Typography
- **Heading:** Inter hoặc Noto Sans (hỗ trợ JP/VN characters)
- **Body:** Noto Sans / Inter
- **Font weight:** Light (300) cho body, Regular (400), Medium (500) cho heading

### Spacing & Rhythm
- Section padding: `py-20` (80px)
- Container max-width: 1200px
- Component gap: 32-48px

### Animation (subtle, calming)
- Fade-in on scroll cho sections
- Smooth hover transitions (300ms ease)
- Không dùng animation quá nhanh/flashy

### Responsive Breakpoints
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (flexible)
- Desktop: > 1024px (full layout)

---

## 7. Kế hoạch triển khai (Phases)

### Phase 1: Setup & Foundation
- [ ] Khởi tạo Next.js project với TypeScript + Tailwind
- [ ] Cấu hình i18n (next-intl) cho EN/JP/VN
- [ ] Setup Tailwind theme (brand colors, fonts)
- [ ] Tạo layout components (Header, Footer, Navigation)
- [ ] Chuẩn bị assets: logo SVG, placeholder images

### Phase 2: Trang Home
- [ ] Hero Section với logo + slogan
- [ ] Founder's Message section
- [ ] Responsive layout
- [ ] Scroll animations

### Phase 3: Trang About Us
- [ ] Our Company section
- [ ] Our Story section (text + image layout)
- [ ] Philosophy section (Vision + Mission cards)
- [ ] Company Profile table

### Phase 4: Trang Our Business
- [ ] Business section component (reusable)
- [ ] Manufacturing & Retail
- [ ] System Development
- [ ] Trading
- [ ] Business Support

### Phase 5: Trang Contact & News
- [ ] Contact page với form + info
- [ ] News page (placeholder/skeleton)

### Phase 6: Polish & Deploy
- [ ] SEO optimization (meta tags, OG images)
- [ ] Performance optimization (image lazy loading, etc.)
- [ ] Cross-browser testing
- [ ] Deploy lên Vercel

---

## 8. Lưu ý quan trọng

1. **Hình ảnh placeholder:** Tài liệu ghi "nhờ anh Tiến ghép lại 2 hình này" - cần hình ảnh thực tế từ client
2. **Tone thiết kế:** "Calming" - nhẹ nhàng, thanh lịch, nhiều khoảng trắng, animation mượt mà
3. **Font tiếng Nhật:** Cần dùng font hỗ trợ CJK (Noto Sans JP)
4. **LinkedIn:** Cần link LinkedIn thực tế của công ty
5. **News page:** Nội dung chưa có, tạo skeleton trước

---

## 9. Trạng thái hiện tại

| Hạng mục | Trạng thái |
|----------|-----------|
| Thu thập yêu cầu | ✅ Hoàn thành |
| Lập kế hoạch | ✅ Hoàn thành |
| Setup project | ⬜ Chưa bắt đầu |
| Implementation | ⬜ Chưa bắt đầu |
| Testing | ⬜ Chưa bắt đầu |
| Deployment | ⬜ Chưa bắt đầu |
