"""Generate PNG logos using Pillow - matching the SVG logo design."""
import math
import os
from PIL import Image, ImageDraw, ImageFont

base = os.path.join(os.path.dirname(__file__), 'assets', 'img')


def draw_logo(draw, cx, cy, scale, color):
    """Draw the Aura Orientalis sun+waves logo."""
    sw = max(1, round(22 * scale))  # circle stroke
    rw = max(1, round(17 * scale))  # ray stroke
    ww = max(1, round(16 * scale))  # wave stroke
    r = round(100 * scale)  # circle radius

    # Sun arc (open at bottom, ~120° gap)
    bbox = [cx - r, cy - r, cx + r, cy + r]
    draw.arc(bbox, start=-210, end=30, fill=color, width=sw)

    # 9 rays at -90° to +90° from vertical, spaced 22.5°
    r_inner = round(121 * scale)
    r_outer = round(163 * scale)
    for angle_deg in [-90, -67.5, -45, -22.5, 0, 22.5, 45, 67.5, 90]:
        a = math.radians(angle_deg)
        x1 = cx + r_inner * math.sin(a)
        y1 = cy - r_inner * math.cos(a)
        x2 = cx + r_outer * math.sin(a)
        y2 = cy - r_outer * math.cos(a)
        # Draw thick line with round caps using multiple lines
        draw.line([(x1, y1), (x2, y2)], fill=color, width=rw)
        # Round caps
        cap_r = rw // 2
        draw.ellipse([x1 - cap_r, y1 - cap_r, x1 + cap_r, y1 + cap_r], fill=color)
        draw.ellipse([x2 - cap_r, y2 - cap_r, x2 + cap_r, y2 + cap_r], fill=color)

    # Waves - draw as series of connected arcs
    for wave_idx, wave_y_offset in enumerate([127, 165]):
        wy = cy + round(wave_y_offset * scale)
        amp = round(25 * scale)
        half_period = round(54 * scale)
        start_x = cx - round(82 * scale) - (wave_idx * round(-12 * scale))
        num_half = 3
        points = []
        for i in range(num_half * 8 + 1):
            t = i / (num_half * 8)
            x = start_x + t * num_half * half_period
            y = wy + amp * math.sin(t * num_half * math.pi)
            points.append((x, y))
        if len(points) > 1:
            draw.line(points, fill=color, width=ww, joint='curve')
            # Round end caps
            cap_r = ww // 2
            draw.ellipse([points[0][0] - cap_r, points[0][1] - cap_r,
                          points[0][0] + cap_r, points[0][1] + cap_r], fill=color)
            draw.ellipse([points[-1][0] - cap_r, points[-1][1] - cap_r,
                          points[-1][0] + cap_r, points[-1][1] + cap_r], fill=color)


def create_logo_png(filename, size, bg_color, logo_color):
    """Create a logo PNG at given size."""
    img = Image.new('RGBA', (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    scale = size / 400
    cx = size // 2
    cy = round(185 * scale)
    draw_logo(draw, cx, cy, scale, logo_color)
    path = os.path.join(base, filename)
    img.save(path, 'PNG')
    print(f"OK: {filename} ({size}x{size})")
    return img


def create_favicon_png(filename, size):
    """Create favicon with blue background and white logo."""
    img = Image.new('RGBA', (size, size), (18, 104, 179, 255))
    draw = ImageDraw.Draw(img)
    # Add rounded corners
    corner_r = size // 5
    # Draw logo smaller and centered
    scale = size / 500  # Slightly smaller to fit
    cx = size // 2
    cy = round(185 * scale)
    draw_logo(draw, cx, cy, scale, (255, 255, 255))
    path = os.path.join(base, filename)
    img.save(path, 'PNG')
    print(f"OK: {filename} ({size}x{size})")


# Generate logos
brand_blue = (18, 104, 179)
transparent = (0, 0, 0, 0)
white = (255, 255, 255)

create_logo_png('logo.png', 400, transparent, brand_blue)
create_logo_png('logo-white.png', 400, transparent, white)
create_favicon_png('favicon.png', 64)

# Create OG image (1200x630)
og_width, og_height = 1200, 630
og = Image.new('RGB', (og_width, og_height), brand_blue)
og_draw = ImageDraw.Draw(og)

# Draw white logo centered
scale = 0.5
cx = og_width // 2
cy = round(185 * scale) + 40
draw_logo(og_draw, cx, cy, scale, white)

# Add text
try:
    font_large = ImageFont.truetype("arial.ttf", 48)
    font_small = ImageFont.truetype("arial.ttf", 26)
except:
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()

text = "Aura Orientalis"
bbox = og_draw.textbbox((0, 0), text, font=font_large)
tw = bbox[2] - bbox[0]
og_draw.text(((og_width - tw) // 2, 380), text, fill='white', font=font_large)

slogan = '"A calming way of life"'
bbox2 = og_draw.textbbox((0, 0), slogan, font=font_small)
sw = bbox2[2] - bbox2[0]
og_draw.text(((og_width - sw) // 2, 445), slogan, fill=(180, 210, 235), font=font_small)

# Add website URL
try:
    font_url = ImageFont.truetype("arial.ttf", 20)
except:
    font_url = ImageFont.load_default()
url = "auraorientalis.vn"
bbox3 = og_draw.textbbox((0, 0), url, font=font_url)
uw = bbox3[2] - bbox3[0]
og_draw.text(((og_width - uw) // 2, 510), url, fill=(140, 180, 210), font=font_url)

og.save(os.path.join(base, 'og-image.png'), 'PNG')
print(f"OK: og-image.png ({og_width}x{og_height})")
