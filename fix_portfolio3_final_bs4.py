#!/usr/bin/env python3
"""
Opraví portfolio-3.html - odstraní duplicitní obrázky mimo grid pomocí BeautifulSoup
"""
from bs4 import BeautifulSoup
import pathlib

def fix_portfolio3():
    """Opraví portfolio-3.html"""
    path = pathlib.Path('portfolio-3.html')
    content = path.read_text(encoding='utf-8')
    
    soup = BeautifulSoup(content, 'html.parser')
    
    # Najít sekci galerie
    gallery_section = soup.find('section', class_='py-8 bg-gray-50')
    if not gallery_section:
        print("[CHYBA] Galerie sekce nenalezena")
        return False
    
    # Najít grid
    grid = gallery_section.find('div', class_='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6')
    if not grid:
        print("[CHYBA] Grid nenalezen")
        return False
    
    # Najít všechny divy s obrázky v celé sekci
    all_image_divs = gallery_section.find_all('div', class_='relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer')
    
    # Najít divy v gridu
    grid_image_divs = grid.find_all('div', class_='relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer')
    
    # Odstranit všechny divy, které nejsou v gridu
    removed_count = 0
    for div in all_image_divs:
        if div not in grid_image_divs:
            # Tento div není v gridu, odstranit ho
            div.decompose()
            removed_count += 1
    
    # Opravit kódování znaků v URL (Â© -> ©)
    content_str = str(soup)
    content_str = content_str.replace('Â©', '©')
    
    # Uložit opravený obsah
    path.write_text(content_str, encoding='utf-8')
    print(f"[OK] portfolio-3.html opraveno - odstraneno {removed_count} duplicitnich obrazku")
    return True

if __name__ == "__main__":
    fix_portfolio3()

