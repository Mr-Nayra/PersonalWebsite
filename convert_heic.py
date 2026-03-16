import os
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

input_dir = r"c:\Users\rawth\OneDrive\Desktop\TheFounder\PersonalWebsite"
output_dir = os.path.join(input_dir, "public", "images", "dogs")
os.makedirs(output_dir, exist_ok=True)

heic_path = os.path.join(input_dir, "IMG_1297.HEIC")
output_path = os.path.join(output_dir, "temp_0.webp")

try:
    print(f"Opening {heic_path}")
    image = Image.open(heic_path)
    image.save(output_path, format="webp", quality=80)
    print(f"Successfully converted to {output_path}")
except Exception as e:
    print(f"Error converting: {e}")
