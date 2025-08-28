// head-settings.js

const headHTML = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">


<title>Aura Orientalis - Giải pháp công nghệ</title>

<meta name="description" content="Aura là công ty cung cấp giải pháp công nghệ sáng tạo, giúp doanh nghiệp phát triển bền vững trong kỷ nguyên số.">
<meta name="keywords" content="Aura, Công ty Aura, Giải pháp công nghệ, Công nghệ thông tin, Aura Web, Aura Company">
<meta name="author" content="Aura Company">

<link href="assets/img/logo.png" rel="icon">
<link href="assets/img/logo.png" rel="apple-touch-icon">

<link href="https://fonts.googleapis.com" rel="preconnect">
<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;...&display=swap" rel="stylesheet">

<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="assets/vendor/aos/aos.css" rel="stylesheet">
<link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
<link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
<link href="assets/css/main.css" rel="stylesheet">

<meta property="og:title" content="Aura Orientalis - Giải pháp công nghệ">
<meta property="og:description" content="Aura cung cấp giải pháp công nghệ sáng tạo, đồng hành cùng doanh nghiệp trong kỷ nguyên số.">
<meta property="og:image" content="https://yourdomain.com/logo.png">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Aura - Giải pháp công nghệ">
<meta name="twitter:description" content="Aura cung cấp giải pháp công nghệ sáng tạo, đồng hành cùng doanh nghiệp.">
<meta name="twitter:image" content="https://yourdomain.com/logo.png">
`;

export function injectHead() {
  const container = document.createElement('div');
  container.innerHTML = headHTML;
  document.head.append(...container.children);
}
