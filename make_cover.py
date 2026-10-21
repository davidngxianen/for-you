# Generates placeholder cover art + app icons. Replace cover.jpg with your own
# square image (at least 1024x1024) and re-run to regenerate the icons from it:
#   python3 make_cover.py --from-cover
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SIZE = 1024

def placeholder():
    img = Image.new("RGB", (SIZE, SIZE), "#1a1410")
    d = ImageDraw.Draw(img)
    # warm vertical gradient
    for y in range(SIZE):
        t = y / SIZE
        r = int(58 + (196 - 58) * t * 0.6)
        g = int(36 + (110 - 36) * t * 0.5)
        b = int(52 + (80 - 52) * t * 0.3)
        d.line([(0, y), (SIZE, y)], fill=(r, g, b))
    # soft sun
    glow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([262, 300, 762, 800], fill=(255, 196, 140, 210))
    glow = glow.filter(ImageFilter.GaussianBlur(40))
    img.paste(glow, (0, 0), glow)
    d = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Didot.ttc", 110)
        small = ImageFont.truetype("/System/Library/Fonts/Supplemental/Didot.ttc", 44)
    except OSError:
        font = small = ImageFont.load_default()
    d.text((SIZE / 2, 860), "for you", font=font, fill="#fff3e6", anchor="mm")
    d.text((SIZE / 2, 110), "VOLUME ONE", font=small, fill="#fff3e6", anchor="mm")
    img.save("cover.jpg", quality=90)
    return img

img = Image.open("cover.jpg").convert("RGB") if "--from-cover" in sys.argv else placeholder()
img = img.resize((SIZE, SIZE))
for s in (180, 192, 512):
    img.resize((s, s), Image.LANCZOS).save(f"icon-{s}.png")
print("cover.jpg + icons written")
