#!/usr/bin/env python3
"""
Odstraní všechny duplicitní obrázky mimo hlavní grid
"""
import os
from bs4 import BeautifulSoup
import re

def remove_duplicate_images(file_path):
    """Odstraní všechny obrázky mimo hlavní grid"""
    if not os.path.exists(file_path):
        print(f"[CHYBA] Soubor {file_path} nenalezen.")
        return False

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        soup = BeautifulSoup(content, 'html.parser')
        gallery_section = soup.find('section', class_='py-8 bg-gray-50')

        if gallery_section:
            main_gallery_div = gallery_section.find('div', class_='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6')
            
            if main_gallery_div:
                # Najít všechny obrázky v hlavním gridu
                grid_images = set()
                for img in main_gallery_div.find_all('img'):
                    src = img.get('src', '')
                    if src:
                        grid_images.add(src)
                
                # Najít konec gridu
                grid_end = main_gallery_div.find_next_sibling()
                
                # Odstranit všechny divy s obrázky, které jsou za gridem a nejsou v gridu
                removed_count = 0
                current = grid_end
                while current:
                    next_sibling = current.find_next_sibling()
                    
                    # Pokud je to div s obrázkem a obrázek není v gridu
                    if current.name == 'div' and 'relative' in current.get('class', []):
                        img = current.find('img')
                        if img:
                            img_src = img.get('src', '')
                            # Pokud obrázek není v gridu nebo je to starý obrázek z 3xel.pl
                            if img_src not in grid_images or '3xel.pl' in img_src:
                                current.decompose()
                                removed_count += 1
                    
                    current = next_sibling
                    
                    # Zastavit, když narazíme na konec sekce
                    if current and current.name == 'section':
                        break
                
                # Také použít regex pro odstranění zbývajících divů s obrázky z 3xel.pl
                content = str(soup)
                # Najít všechny divy s obrázky z 3xel.pl, které jsou mimo grid
                pattern = r'<div class="relative aspect-\[4/3\] overflow-hidden bg-gray-100 group cursor-pointer">\s*<img[^>]*src="https://3xel\.pl[^"]*"[^>]*/>\s*</div>'
                matches = re.findall(pattern, content)
                if matches:
                    for match in matches:
                        content = content.replace(match, '', 1)
                        removed_count += 1
                
                if removed_count > 0:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"[OK] {file_path} - odstraněno {removed_count} duplicitních obrázků")
                    return True
                else:
                    print(f"[OK] {file_path} - bez změn")
                    return False
            else:
                print(f"[CHYBA] Hlavní galerie div nenalezen v {file_path}")
                return False
        else:
            print(f"[CHYBA] Sekce galerie nenalezena v {file_path}")
            return False

    except Exception as e:
        print(f"[CHYBA] Chyba při zpracování {file_path}: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    # Opravit všechny nové portfolio stránky (5-23)
    portfolio_files = [f"portfolio-{i}.html" for i in range(5, 24)]
    
    print("Odstraňuji všechny duplicitní obrázky...\n")
    
    fixed_count = 0
    for file_path in portfolio_files:
        if remove_duplicate_images(file_path):
            fixed_count += 1
    
    print(f"\nHotovo! Opraveno {fixed_count} souborů.")

if __name__ == "__main__":
    main()



