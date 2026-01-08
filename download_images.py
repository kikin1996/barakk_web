#!/usr/bin/env python3
"""
Skript pro stahování obrázků z loft-kolasinski.pl
UPOZORNĚNÍ: Použití obrázků bez povolení může porušovat autorská práva.
"""

import os
import requests
from urllib.parse import urlparse
import time

# Seznam URL obrázků z network requests
image_urls = [
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/78_DSC00951_2024_hiszpania_web-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/11/04_DSC00021_2025_loft_kolasinski_warszawa_m-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/BAK1334_archi-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/04/23_2025_DSC00881_loftkolasinski_warszawa_m-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2025/03/15_DSC00500_2025_kamien_pomorski_media-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/10/4-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/05/9_DSC05402_2023_warszawa_w-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2021/02/2021_5_warszawa_loftkolasinski_joelhauck_DSC08755-HDR-Edit-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/07/DSC06477_2023_krakow_w-1-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2023/05/okladka_t-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/10/11-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2023/03/02-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/06/limone2.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2023/06/Project_Kolasinski-PaZSmall21-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2022/10/021-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2022/02/2022_01_DSC03891-Edit_restauracja_punkt_szczecin-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/10/L1620237-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2021/10/2021_filtrowa_DSC03366-Edit-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/06/konstancin_archilovers_t-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2020/10/2020_05_ochota_loftkolasinski_joelhauck_DSC08234-HDR-Edit-1-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/07/01-DSC03216-Edit_2-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/08/DSC04410-HDR-Edit_2-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2019/08/DSC03731-Edit_2-2-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2019/02/mokotow.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2019/02/DSC01143-Edit-Edit_2-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2018/06/mieszkanie_filtrowa-1460842-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2017/10/L1420633-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2017/05/089_BERLIN_PRNZLBRG-%C2%A9-K.BAK_L1250664-1-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2017/07/013_loft_kolasinki-%C2%A9-karolinabak.com-_L1290351-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2017/07/L1290741-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2017/02/jk-%C2%A9-karolinabak.com_2-10-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2016/12/Loft-Kolasinski-%C2%A9-Karolina-B%C4%85k-Guest-house-in-the-countryside-2-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2016/03/Letnie-mieszkanie-pod-Berlinem-1-5-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2016/03/Restauracja-Kontrast-w-Koszalinie-1-3-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2016/01/marmolada-miniatura.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2016/01/dom_berlin-miniatura.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2016/03/Loft-pod-Berlinem-1-3-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/10/kuznia08-archi-t-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2025/11/17_DSC01245_2025_loft_kolasinski_warszawa_m-600x403.jpg",
]

# Vytvořit složku pro obrázky
os.makedirs("public/images", exist_ok=True)

def download_image(url, folder="public/images"):
    """Stáhne obrázek a uloží ho do složky"""
    try:
        # Získat název souboru z URL
        parsed = urlparse(url)
        filename = os.path.basename(parsed.path)
        
        # Pokud soubor neexistuje, stáhnout ho
        filepath = os.path.join(folder, filename)
        if os.path.exists(filepath):
            print(f"✓ Již existuje: {filename}")
            return filepath
        
        print(f"Stahuji: {filename}...")
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"✓ Staženo: {filename}")
        return filepath
    except Exception as e:
        print(f"✗ Chyba při stahování {url}: {e}")
        return None

# Stáhnout všechny obrázky
print(f"Stahuji {len(image_urls)} obrázků...")
for i, url in enumerate(image_urls, 1):
    download_image(url)
    time.sleep(0.5)  # Pauza mezi požadavky

print("\nHotovo! Obrázky jsou v složce public/images/")

