# Aura Orientalis Website - Project Workflow

## Project Overview
Website giới thiệu công ty **Aura Orientalis Co., LTD.** - công ty Việt-Nhật chuyên về sản xuất bán lẻ, phát triển hệ thống, thương mại và hỗ trợ doanh nghiệp.

## Workflow - Khởi động phiên làm việc mới

### 1. Đồng bộ nhánh về local
```bash
git fetch --all
git pull origin main
# Nếu đang ở feature branch:
git checkout <branch-name>
git pull origin <branch-name>
git merge main  # đồng bộ code mới nhất từ main
```

### 2. Kiểm tra trạng thái
```bash
git status
git log --oneline -5
```

### 3. Cài đặt dependencies (nếu cần)
```bash
npm install
```

### 4. Chạy dev server
```bash
npm run dev
```

## Brand Guidelines

- **Tên công ty:** Aura Orientalis Co., LTD.
- **Slogan:** "A calming way of life"
- **Brand Color chính:** #1268b3 (CMYK: C90% M60% Y0% K0%)
- **Logo:** Mặt trời mọc với sóng nước, biểu tượng "Eastern Breeze/Brilliance"
- **Ngôn ngữ:** 3 ngôn ngữ - Tiếng Anh, Tiếng Nhật, Tiếng Việt

## Cấu trúc trang web

### Navigation
`Home | About Us | Our Business | News | Language | Contact`

### Các trang chính:
1. **Home (Trang chủ):** Logo + Thông điệp sáng lập + Hình ảnh
2. **About Us:** Our Company, Our Story, Philosophy (Vision & Mission), Company Profile
3. **Our Business:** Manufacturing & Retail, System Development, Trading, Business Support
4. **News:** Bản tin (TBD)
5. **Contact:** Thông tin liên hệ + LinkedIn

## Company Info
- **Địa chỉ:** 314/6 Dien Bien Phu Street, Vuon Lai Ward, Ho Chi Minh City, Vietnam
- **Founding Chairman:** Yoshihito Ito
- **President:** Nguyen Bui Kim Ngoc
- **Thành lập:** 2025
- **Phone:** +84 935088346
- **Email:** ngoc.nguyen@auraorientalis.vn

## Key Files
- `AO_Logo.pdf` - Logo và brand color
- `Aura Orinetalis Website 2026.02.05.xlsx` - Nội dung website (EN/JP/VN)
- `mô tả thiết kế web Aura.docx` - Mô tả layout và thiết kế
- `PLAN.md` - Kế hoạch thiết kế và triển khai

## Tech Stack
- **Base Template:** BootstrapMade "Aura" (Bootstrap 5.3.3) - folder `template/`
- **CSS:** Bootstrap 5 + custom `assets/css/main.css`
- **JS Libraries:** AOS, GLightbox, Swiper, PureCounter, Waypoints, Isotope
- **Fonts:** Roboto, Poppins, Raleway (Google Fonts) + Noto Sans JP (cho tiếng Nhật)
- **Icons:** Bootstrap Icons
- **Deployment:** Static hosting (GitHub Pages / Vercel / Netlify)

## Template Mapping
| Template file | → Aura page |
|---------------|-------------|
| `index.html` | Home (trang chủ) |
| `about.html` | About Us |
| `services.html` | Our Business |
| `blog.html` | News |
| `contact.html` | Contact |

## Conventions
- Commit messages bằng tiếng Anh
- Code comments bằng tiếng Anh
- Nội dung website: đa ngôn ngữ (EN/JP/VN)
- Responsive design: mobile-first
