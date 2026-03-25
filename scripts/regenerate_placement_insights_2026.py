from PIL import Image, ImageDraw, ImageFont

W, H = 1600, 1200
BG = (237, 237, 237)
BLUE = (19, 82, 170)
GRID = (184, 184, 184)
TEXT = (17, 17, 17)


def load_font(size, bold=False):
    candidates = []
    if bold:
        candidates = [
            "C:/Windows/Fonts/arialbd.ttf",
            "C:/Windows/Fonts/seguisb.ttf",
            "C:/Windows/Fonts/calibrib.ttf",
        ]
    else:
        candidates = [
            "C:/Windows/Fonts/arial.ttf",
            "C:/Windows/Fonts/segoeui.ttf",
            "C:/Windows/Fonts/calibri.ttf",
        ]

    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def centered_text(draw, y, text, font, fill=TEXT):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    draw.text((x, y), text, fill=fill, font=font)


def draw_bar_chart(path, title_lines, labels, values, ymax, y_ticks):
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    title_font = load_font(72, bold=True)
    axis_font = load_font(56, bold=True)
    tick_font = load_font(40, bold=True)

    y = 95
    for line in title_lines:
        centered_text(draw, y, line, title_font)
        y += 80

    left, right, top, bottom = 140, W - 80, 360, H - 220
    chart_h = bottom - top
    chart_w = right - left

    for t in y_ticks:
        yy = bottom - int((t / ymax) * chart_h)
        draw.line((left, yy, right, yy), fill=GRID, width=2)
        txt = str(t)
        bbox = draw.textbbox((0, 0), txt, font=axis_font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        draw.text((left - 24 - tw, yy - th // 2), txt, fill=TEXT, font=axis_font)

    n = len(labels)
    slot = chart_w / n
    bar_w = int(slot * 0.5)

    for i, (lbl, val) in enumerate(zip(labels, values)):
        x_center = left + int((i + 0.5) * slot)
        x0 = x_center - bar_w // 2
        x1 = x_center + bar_w // 2
        y1 = bottom
        y0 = bottom - int((val / ymax) * chart_h)
        draw.rounded_rectangle((x0, y0, x1, y1), radius=12, fill=BLUE)

        bbox = draw.textbbox((0, 0), lbl, font=tick_font)
        tw = bbox[2] - bbox[0]
        draw.text((x_center - tw // 2, bottom + 24), lbl, fill=TEXT, font=tick_font)

    img.save(path, quality=95)


def draw_donut(path):
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    title_font = load_font(68, bold=True)
    label_font = load_font(40, bold=True)

    centered_text(draw, 95, "TOP RECRUITMENTS IN 2026", title_font)

    cx, cy = W // 2, 560
    outer_r, inner_r = 300, 155

    names = [
        "Lumina", "Mphasis", "TCS", "Aaradhya", "ADEPT", "HCL",
        "TechOrbit", "Capgemini", "Radharam", "Wipro", "Tech Mahindra", "Evolutyz"
    ]
    colors = [
        (121, 180, 189), (107, 158, 193), (113, 170, 217), (22, 150, 173),
        (18, 79, 173), (24, 36, 179), (45, 108, 153), (20, 166, 168),
        (27, 117, 138), (84, 157, 224), (52, 45, 120), (160, 206, 216)
    ]

    start = -90
    sweep = 360 / len(names)
    for i, (name, color) in enumerate(zip(names, colors)):
        a0 = start + i * sweep
        a1 = a0 + sweep
        draw.pieslice((cx - outer_r, cy - outer_r, cx + outer_r, cy + outer_r), a0, a1, fill=color)

    draw.ellipse((cx - inner_r, cy - inner_r, cx + inner_r, cy + inner_r), fill=BG)

    # Draw a clean, non-overlapping legend below the donut.
    legend_names = [
        "Lumina", "Mphasis", "TCS", "Aaradhya", "ADEPT", "HCL",
        "TechOrbit Inc", "Capgemini", "Radharam", "Wipro", "Tech Mahindra", "Evolutyz"
    ]
    legend_top = 900
    cols = 3
    col_w = 470
    row_h = 66
    sw = 28
    start_x = 95

    for i, (name, color) in enumerate(zip(legend_names, colors)):
        col = i % cols
        row = i // cols
        x = start_x + col * col_w
        y = legend_top + row * row_h
        draw.rounded_rectangle((x, y + 8, x + sw, y + 8 + sw), radius=5, fill=color)
        draw.text((x + sw + 14, y), name, fill=TEXT, font=label_font)

    img.save(path, quality=95)


def main():
    draw_bar_chart(
        "static/graph1.png",
        ["HIGHEST PACKAGES (2020-2026)"],
        ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
        [10, 11, 13, 30, 12, 15, 12],
        ymax=50,
        y_ticks=[0, 10, 20, 30, 40, 50],
    )

    draw_bar_chart(
        "static/graph2.png",
        ["NUMBER OF STUDENTS PLACED"],
        ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25", "2025-26"],
        [240, 198, 344, 344, 358, 372, 389],
        ymax=450,
        y_ticks=[0, 100, 200, 300, 400],
    )

    draw_bar_chart(
        "static/graph3.png",
        ["TOTAL NUMBER OF COMPANIES VISITED", "(2019-2026)"],
        ["2019-20", "2020-21", "2021-22", "2022-23", "2023-24", "2024-25", "2025-26"],
        [13, 12, 15, 18, 25, 15, 40],
        ymax=45,
        y_ticks=[0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
    )

    draw_donut("static/graph4.jpg")


if __name__ == "__main__":
    main()
