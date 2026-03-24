#!/usr/bin/env python3
"""生成 TabBar 占位图标（81×81，未选 #999 / 选中 #ff0844）。可替换为设计稿同名文件。"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

W = 81
C_UNSEL = "#999999"
C_SEL = "#ff0844"
OUT = Path(__file__).resolve().parent


def blank() -> Image.Image:
    return Image.new("RGBA", (W, W), (0, 0, 0, 0))


def save(name: str, im: Image.Image) -> None:
    p = OUT / name
    im.save(p, "PNG")
    print(p)


def icon_components(selected: bool) -> Image.Image:
    im = blank()
    d = ImageDraw.Draw(im)
    color = C_SEL if selected else C_UNSEL
    gap = 9
    s = 20
    ox = (W - 2 * s - gap) // 2
    oy = (W - 2 * s - gap) // 2
    for i in range(2):
        for j in range(2):
            x1 = ox + j * (s + gap)
            y1 = oy + i * (s + gap)
            if selected:
                d.rounded_rectangle([x1, y1, x1 + s, y1 + s], radius=5, fill=color, outline=color, width=2)
            else:
                d.rounded_rectangle([x1, y1, x1 + s, y1 + s], radius=5, fill=None, outline=color, width=3)
    return im


def icon_tools(selected: bool) -> Image.Image:
    im = blank()
    d = ImageDraw.Draw(im)
    color = C_SEL if selected else C_UNSEL
    width = 4
    # 扳手简形：斜向长条 + 开口端小 C
    d.line([(22, 58), (58, 22)], fill=color, width=width, joint="curve")
    d.arc([48, 14, 66, 32], start=200, end=320, fill=color, width=width)
    if selected:
        d.ellipse([20, 52, 30, 62], fill=color, outline=color)
    else:
        d.ellipse([20, 52, 30, 62], outline=color, width=2)
    return im


def icon_templates(selected: bool) -> Image.Image:
    im = blank()
    d = ImageDraw.Draw(im)
    color = C_SEL if selected else C_UNSEL
    pad = 14
    d.rounded_rectangle([pad, pad + 6, W - pad, W - pad], radius=6, fill=None, outline=color, width=3)
    # 折角
    d.polygon([(W - pad - 18, pad + 6), (W - pad, pad + 6), (W - pad, pad + 22)], fill=color if selected else None, outline=color, width=2)
    if not selected:
        d.line([(W - pad - 18, pad + 6), (W - pad, pad + 22)], fill=color, width=2)
    y = 32
    for _ in range(3):
        lw = W - pad * 2 - 20
        if selected:
            d.rounded_rectangle([pad + 8, y, pad + 8 + lw, y + 5], radius=2, fill=color)
        else:
            d.rounded_rectangle([pad + 8, y, pad + 8 + lw, y + 5], radius=2, outline=color, width=2)
        y += 11
    return im


def icon_user(selected: bool) -> Image.Image:
    im = blank()
    d = ImageDraw.Draw(im)
    color = C_SEL if selected else C_UNSEL
    cx, cy = W // 2, 30
    r = 12
    if selected:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color, outline=color)
    else:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color, width=3)
    # 肩弧
    d.arc([cx - 28, cy + 2, cx + 28, cy + 48], start=0, end=180, fill=color, width=4)
    return im


def main() -> None:
    pairs = [
        ("tab-components.png", "tab-components-active.png", icon_components),
        ("tab-tools.png", "tab-tools-active.png", icon_tools),
        ("tab-templates.png", "tab-templates-active.png", icon_templates),
        ("tab-user.png", "tab-user-active.png", icon_user),
    ]
    for normal, active, fn in pairs:
        save(normal, fn(False))
        save(active, fn(True))


if __name__ == "__main__":
    main()
