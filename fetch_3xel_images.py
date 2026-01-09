#!/usr/bin/env python3
"""
Stáhne všechny fotky z 3xel.pl pro 4 projekty
"""
import pathlib
import requests
from bs4 import BeautifulSoup
import re

# Mapování projektů: portfolio_id -> URL slug na 3xel.pl
PROJECT_URLS = {
    1: "https://3xel.pl/projekty/d_sie/",  # Dům w Sieradzu
    2: "https://3xel.pl/projekty/a-essen/",  # Apartmán w Essen
    3: "https://3xel.pl/projekty/m_sok/",  # Byt w Katowicach (Sokolska)
    4: "https://3xel.pl/projekty/m_ptk/",  # Byt w Łodzi (P44)
}

def extract_image_urls_from_html(html_content):
    """Extrahuje všechny URL obrázků z HTML obsahu"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    image_urls = set()
    
    # Hledat všechny img tagy
    for img in soup.find_all('img', src=True):
        src = img['src']
        if 'wp-content/uploads' in src or '3xel.pl' in src:
            # Převést relativní URL na absolutní
            if src.startswith('//'):
                src = 'https:' + src
            elif src.startswith('/'):
                src = 'https://3xel.pl' + src
            elif not src.startswith('http'):
                continue
            
            # Odstranit velikostní sufixy pro full-res
            url_clean = re.sub(r'-\d+x\d+\.(jpg|jpeg|png)$', r'.\1', src, flags=re.IGNORECASE)
            url_clean = re.sub(r'-\d+x\d+\.(jpg|jpeg|png)$', r'.\1', url_clean, flags=re.IGNORECASE)
            image_urls.add(url_clean)
    
    # Také hledat v data-src nebo data-lazy-src
    for img in soup.find_all(attrs={'data-src': True}):
        src = img.get('data-src', '')
        if 'wp-content/uploads' in src or '3xel.pl' in src:
            if src.startswith('//'):
                src = 'https:' + src
            elif src.startswith('/'):
                src = 'https://3xel.pl' + src
            elif not src.startswith('http'):
                continue
            url_clean = re.sub(r'-\d+x\d+\.(jpg|jpeg|png)$', r'.\1', src, flags=re.IGNORECASE)
            image_urls.add(url_clean)
    
    # Seřadit a vrátit jako seznam
    return sorted(list(image_urls))

def update_portfolio_gallery(portfolio_file, image_urls):
    """Aktualizuje galerii v portfolio HTML souboru"""
    content = portfolio_file.read_text(encoding='utf-8')
    
    # Najít sekci galerie
    gallery_start = content.find('<!-- Image Gallery -->')
    if gallery_start == -1:
        print(f"  [WARN] Galerie sekce nenalezena v {portfolio_file.name}")
        return False
    
    # Najít začátek gridu
    grid_start = content.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">', gallery_start)
    if grid_start == -1:
        print(f"  [WARN] Grid sekce nenalezena v {portfolio_file.name}")
        return False
    
    # Najít konec gridu (před </div>)
    grid_end = content.find('</div>', grid_start + 100)
    if grid_end == -1:
        print(f"  [WARN] Konec gridu nenalezen v {portfolio_file.name}")
        return False
    
    # Vytvořit HTML pro všechny obrázky
    gallery_items = []
    for i, url in enumerate(image_urls):
        gallery_items.append(
            f'                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer">\n'
            f'                            <img src="{url}" alt="Obrazek {i+1}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />\n'
            f'                        </div>'
        )
    gallery_html = '\n'.join(gallery_items)
    
    # Nahradit obsah gridu
    new_content = (
        content[:grid_start + len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">')] +
        '\n' + gallery_html + '\n                ' +
        content[grid_end:]
    )
    
    portfolio_file.write_text(new_content, encoding='utf-8')
    return True

def main():
    print("Stahovani fotek z 3xel.pl pro 4 projekty...\n")
    
    # Pro každý projekt
    for portfolio_id, project_url in PROJECT_URLS.items():
        portfolio_file = pathlib.Path(f"portfolio-{portfolio_id}.html")
        
        if not portfolio_file.exists():
            print(f"  [SKIP] {portfolio_file.name} neexistuje, preskoceno")
            continue
        
        print(f"Projekt {portfolio_id}: {project_url}")
        
        try:
            # Načíst HTML stránku
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            response = requests.get(project_url, headers=headers, timeout=10)
            response.raise_for_status()
            
            # Extrahovat URL obrázků
            image_urls = extract_image_urls_from_html(response.text)
            
            if not image_urls:
                print(f"   [WARN] Zadne obrazky nenalezeny")
                continue
            
            print(f"   [OK] Nalezeno {len(image_urls)} obrazku")
            
            # Aktualizovat portfolio soubor
            if update_portfolio_gallery(portfolio_file, image_urls):
                print(f"   [OK] Portfolio {portfolio_id} aktualizovano")
            else:
                print(f"   [ERROR] Chyba pri aktualizaci portfolio {portfolio_id}")
        
        except requests.RequestException as e:
            print(f"   [ERROR] Chyba pri nacitani: {e}")
        except Exception as e:
            print(f"   [ERROR] Neocekavana chyba: {e}")
    
    print("\nHotovo!")

if __name__ == "__main__":
    main()

