# PLAN.md - Kế hoạch Thiết kế & Triển khai Website Aura Orientalis

## 1. Tổng quan dự án

**Mục tiêu:** Xây dựng website giới thiệu công ty Aura Orientalis - công ty Việt-Nhật, với thiết kế thanh lịch, an yên (calming), hỗ trợ đa ngôn ngữ (EN/JP/VN).

**Slogan:** "A calming way of life"

**Approach:** Sử dụng template BootstrapMade "Aura" (Bootstrap 5.3.3) đã có sẵn tại `template/` làm khung sườn, tùy biến nội dung và giao diện cho phù hợp.

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

### 3.1 Tech Stack (dựa trên template có sẵn)
| Thành phần | Công nghệ | Ghi chú |
|------------|-----------|---------|
| Base Template | **BootstrapMade "Aura"** | Template có sẵn tại `template/` |
| CSS Framework | **Bootstrap 5.3.3** | Responsive grid, components |
| Fonts | **Roboto, Poppins, Raleway** | Google Fonts (đã cấu hình) |
| Animation | **AOS (Animate On Scroll)** | Fade-in, zoom effects |
| Lightbox | **GLightbox** | Image/video popup |
| Slider | **Swiper** | Carousel/slider components |
| Counter | **PureCounter** | Animated number counters |
| Icons | **Bootstrap Icons** | Icon library |
| CSS Custom | **assets/css/main.css** | Tùy biến brand colors, layout |
| i18n | **JavaScript switcher** | Chuyển ngôn ngữ bằng JS hoặc trang riêng |

### 3.2 Cấu trúc thư mục
```
auraWeb/
├── template/              # Template gốc (tham khảo, không sửa)
├── assets/
│   ├── css/
│   │   └── main.css       # CSS chính (customize từ template)
│   ├── js/
│   │   └── main.js        # JS chính
│   ├── vendor/            # Bootstrap, AOS, Swiper, etc.
│   │   ├── bootstrap/
│   │   ├── bootstrap-icons/
│   │   ├── aos/
│   │   ├── glightbox/
│   │   ├── swiper/
│   │   ├── purecounter/
│   │   ├── waypoints/
│   │   ├── imagesloaded/
│   │   ├── isotope-layout/
│   │   └── php-email-form/
│   └── img/
│       ├── logo.png           # Logo Aura Orientalis
│       ├── logo-white.png     # Logo trắng (cho nền xanh)
│       ├── favicon.png
│       ├── hero-bg.jpg        # Hero background
│       ├── about.jpg
│       ├── story.jpg
│       ├── services-1.jpg     # Manufacturing & Retail
│       ├── services-2.jpg     # Trading
│       ├── services-3.jpg     # System Development
│       └── services-4.jpg     # Business Support
├── index.html             # Trang chủ (Home)
├── about.html             # Về chúng tôi (About Us)
├── services.html          # Lĩnh vực hoạt động (Our Business)
├── blog.html              # Tin tức (News)
├── contact.html           # Liên hệ (Contact)
├── 404.html               # Trang lỗi
├── CLAUDE.md
├── PLAN.md
└── .gitignore
```

### 3.3 Mapping Template → Trang Aura Orientalis
| Template page | → | Aura page | Nội dung |
|---------------|---|-----------|----------|
| `index.html` | → | **Home** | Hero + Founder's Message |
| `about.html` | → | **About Us** | Our Company, Story, Philosophy, Profile |
| `services.html` | → | **Our Business** | 4 mảng kinh doanh |
| `blog.html` | → | **News** | Tin tức (placeholder) |
| `contact.html` | → | **Contact** | Form + Info + Map |
| `404.html` | → | **404** | Trang lỗi |

---

## 4. Thiết kế chi tiết từng trang

### 4.1 Layout chung
- **Header (sticky):** Logo (trái) | Nav links (giữa) | Language + Contact (phải)
- **Footer:** Logo + Địa chỉ + Phone/Email + LinkedIn icon + Copyright
- **Navigation items:** Home | About Us | Our Business | News | Language ▼ | Contact
- **Color Palette:**
  - Primary: `#1268b3` (brand blue)
  - Primary Light: `#1a7fd4`
  - Primary Dark: `#0e5290`
  - Background: `#ffffff` (trắng)
  - Background Alt: `#f8fafb` (xám nhạt)
  - Text: `#1a1a2e` (gần đen)
  - Text Light: `#555555`
  - Accent: `#e8f4fd` (xanh rất nhạt)

### 4.2 Trang Home (index.html)
```
┌──────────────────────────────────────────┐
│  Logo  | Home About Business News | Lang │  ← Header (sticky)
├──────────────────────────────────────────┤
│                                          │
│  Page Title (dark-background)            │
│  "Aura Orientalis" (h1 lớn)             │
│  "A calming way of life"                │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  Founder's Message Section               │
│  『A calming way of life』               │
│  Thông điệp về 95% vũ trụ vô hình...   │
│  (EN / JP / VN tùy ngôn ngữ)           │
│                                          │
├──────────────────────────────────────────┤
│  Newsletter + Footer                     │
└──────────────────────────────────────────┘
```

### 4.3 Trang About Us (about.html)
```
┌──────────────────────────────────────────┐
│  Header                                  │
├──────────────────────────────────────────┤
│  Page Title: "About Us"                  │
├──────────────────────────────────────────┤
│  Section: OUR COMPANY                    │
│  ┌─────────────────┬────────────────┐    │
│  │  Hình ảnh        │  Nội dung     │    │
│  │  (bên trái)      │  (bên phải)   │    │
│  └─────────────────┴────────────────┘    │
│  - Ý nghĩa "Aura Orientalis"           │
│  - "Eastern Breeze/Brilliance"          │
├──────────────────────────────────────────┤
│  Section: OUR STORY                      │
│  ┌─────────────────┬────────────────┐    │
│  │  Nội dung text   │   Hình ảnh    │    │
│  │  (bên trái)      │   (bên phải)  │    │
│  └─────────────────┴────────────────┘    │
│  - Vietnamese & Japanese founders        │
│  - Cultural fusion VN-JP                 │
│  - Supporting young entrepreneurs        │
├──────────────────────────────────────────┤
│  Section: PHILOSOPHY (layout ngang)      │
│  ┌──────────────────┬──────────────────┐ │
│  │  OUR VISION       │  OUR MISSION    │ │
│  │  (icon màu brand) │  (icon brand)   │ │
│  │  Nội dung...      │  Nội dung...    │ │
│  └──────────────────┴──────────────────┘ │
├──────────────────────────────────────────┤
│  Section: COMPANY PROFILE                │
│  Bảng thông tin: Tên, Địa chỉ,          │
│  Lãnh đạo, Năm thành lập, Ngành nghề,  │
│  Liên hệ                                │
├──────────────────────────────────────────┤
│  Footer                                  │
└──────────────────────────────────────────┘
```

### 4.4 Trang Our Business (services.html)
```
┌──────────────────────────────────────────┐
│  Header                                  │
├──────────────────────────────────────────┤
│  Page Title: "Our Business"              │
│  Mô tả ngắn về Aura Orientalis         │
├──────────────────────────────────────────┤
│  Featured Services (4 icon cards)        │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐        │
│  │製品│  │貿易│  │開発│  │支援│        │
│  └────┘  └────┘  └────┘  └────┘        │
├──────────────────────────────────────────┤
│  Detail: MANUFACTURING & RETAIL          │
│  ┌──────────────┬───────────────┐        │
│  │  Image        │  Description │        │
│  └──────────────┴───────────────┘        │
├──────────────────────────────────────────┤
│  Detail: SYSTEM DEVELOPMENT              │
│  ┌──────────────┬───────────────┐        │
│  │  Image        │  Description │        │
│  └──────────────┴───────────────┘        │
├──────────────────────────────────────────┤
│  Detail: TRADING                         │
│  ┌──────────────┬───────────────┐        │
│  │  Image        │  Description │        │
│  └──────────────┴───────────────┘        │
├──────────────────────────────────────────┤
│  Detail: BUSINESS SUPPORT                │
│  ┌──────────────┬───────────────┐        │
│  │  Image        │  Description │        │
│  └──────────────┴───────────────┘        │
├──────────────────────────────────────────┤
│  Footer (+ LinkedIn)                     │
└──────────────────────────────────────────┘
```

### 4.5 Trang Contact (contact.html)
- Thông tin: Địa chỉ, Phone, Email
- Form liên hệ (Name, Email, Subject, Message)
- Google Maps embed (vị trí HCM)
- LinkedIn link

### 4.6 Trang News (blog.html)
- Danh sách bài tin (placeholder ban đầu)
- Layout grid cards
- Blog detail page

---

## 5. Đa ngôn ngữ (i18n)

### Ngôn ngữ hỗ trợ:
1. **English (en)** - Mặc định
2. **日本語 (ja)** - Tiếng Nhật
3. **Tiếng Việt (vi)** - Tiếng Việt

### Cách triển khai (2 phương án):

**Phương án A: JS-based switcher (đơn giản)**
- Lưu nội dung 3 ngôn ngữ trong JSON hoặc data attributes
- JavaScript toggle hiển thị ngôn ngữ tương ứng
- Ưu: ít file, dễ maintain | Nhược: SEO kém hơn

**Phương án B: Trang riêng cho từng ngôn ngữ (tốt cho SEO)**
- Folder cấu trúc: `/en/`, `/ja/`, `/vi/`
- Mỗi ngôn ngữ có bộ HTML riêng
- Ưu: SEO tốt | Nhược: nhiều file hơn

**Khuyến nghị:** Phương án A cho giai đoạn đầu, nâng cấp sang B nếu cần SEO.

### Nội dung đã có sẵn 3 ngôn ngữ:
- ✅ Founder's Message (EN/JP/VN)
- ✅ Our Company (EN/JP/VN)
- ✅ Our Story (EN/JP/VN)
- ✅ Vision & Mission (EN/JP/VN)
- ✅ Company Profile (EN/JP)
- ✅ Company Products (EN/JP/VN)

---

## 6. Design Guidelines

### Typography (từ template)
- **Heading:** Raleway / Poppins
- **Body:** Roboto
- **CJK Support:** Cần thêm Noto Sans JP cho tiếng Nhật

### Animation (AOS - có sẵn trong template)
- `data-aos="fade-up"` - Fade in từ dưới lên
- `data-aos="zoom-in"` - Zoom in
- `data-aos-delay="100|200|300"` - Delay staggered
- Phù hợp "calming" theme - nhẹ nhàng, không flashy

### Responsive (Bootstrap 5 grid)
- `col-lg-*` - Desktop (≥992px)
- `col-md-*` - Tablet (≥768px)
- Default - Mobile (full width)

---

## 7. Kế hoạch triển khai (Phases)

### Phase 1: Setup & Foundation
- [ ] Copy template HTML sang root project
- [ ] Tải và setup vendor libraries (Bootstrap, AOS, Swiper, etc.)
- [ ] Chuẩn bị assets: convert logo PDF → PNG/SVG, favicon
- [ ] Customize `assets/css/main.css` với brand color `#1268b3`
- [ ] Setup Header chung: logo image, nav links đúng (Home, About Us, Our Business, News, Language, Contact)
- [ ] Setup Footer chung: địa chỉ đúng (314/6 Dien Bien Phu), phone, email, LinkedIn

### Phase 2: Trang Home (index.html)
- [ ] Hero section: logo lớn + slogan "A calming way of life"
- [ ] Founder's Message section (EN, có toggle JP/VN)
- [ ] Loại bỏ sections không cần từ template
- [ ] Responsive check

### Phase 3: Trang About Us (about.html)
- [ ] Our Company section (ý nghĩa tên, layout text + image)
- [ ] Our Story section (text trái, hình phải)
- [ ] Philosophy section (Vision + Mission - 2 columns ngang)
- [ ] Company Profile table
- [ ] Loại bỏ Stats, Clients, Skills, Testimonials sections

### Phase 4: Trang Our Business (services.html)
- [ ] Page title với mô tả Aura Orientalis
- [ ] 4 Featured service cards (icon + tên)
- [ ] 4 Detail sections với hình + mô tả
- [ ] Nội dung đúng: Manufacturing & Retail, System Development, Trading, Business Support
- [ ] Loại bỏ Pricing section

### Phase 5: Trang Contact & News
- [ ] Contact: cập nhật địa chỉ, phone, email thực
- [ ] Contact: Google Maps embed đúng vị trí HCM
- [ ] News/Blog: tạo skeleton placeholder
- [ ] 404 page

### Phase 6: i18n (Đa ngôn ngữ)
- [ ] Tạo language switcher trên header
- [ ] Implement JSON-based content cho 3 ngôn ngữ
- [ ] Test chuyển đổi EN/JP/VN

### Phase 7: Polish & Deploy
- [ ] SEO: meta tags, OG images, title đúng cho mỗi trang
- [ ] Performance: image optimization, lazy loading
- [ ] Thêm Noto Sans JP font cho tiếng Nhật
- [ ] Cross-browser testing
- [ ] Deploy

---

## 8. Lưu ý quan trọng

1. **Template gốc giữ nguyên:** Folder `template/` không sửa, chỉ tham khảo
2. **Hình ảnh cần bổ sung:** Tài liệu ghi "nhờ anh Tiến ghép lại 2 hình này" - dùng placeholder trước
3. **Địa chỉ mới:** 314/6 Dien Bien Phu Street (Excel) khác với template (77/4A Vo Thi Hoi) - dùng bản Excel
4. **Tone thiết kế:** "Calming" - nhẹ nhàng, thanh lịch, nhiều khoảng trắng
5. **LinkedIn:** Cần link LinkedIn thực tế của công ty
6. **Vendor libraries:** Template không có folder `assets/` - cần tải riêng hoặc dùng CDN
7. **index.html trong template:** Hiện tại title là "Services" và nav bị comment - cần sửa thành trang Home thực sự

---

## 9. Trạng thái hiện tại

| Hạng mục | Trạng thái |
|----------|-----------|
| Thu thập yêu cầu | ✅ Hoàn thành |
| Phân tích template | ✅ Hoàn thành |
| Lập kế hoạch | ✅ Hoàn thành |
| Phase 1: Setup & Foundation | ⬜ Chưa bắt đầu |
| Phase 2: Trang Home | ⬜ Chưa bắt đầu |
| Phase 3: Trang About Us | ⬜ Chưa bắt đầu |
| Phase 4: Trang Our Business | ⬜ Chưa bắt đầu |
| Phase 5: Contact & News | ⬜ Chưa bắt đầu |
| Phase 6: i18n | ⬜ Chưa bắt đầu |
| Phase 7: Polish & Deploy | ⬜ Chưa bắt đầu |
