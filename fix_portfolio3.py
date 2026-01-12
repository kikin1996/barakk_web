#!/usr/bin/env python3
"""
Opraví portfolio-3.html - odstraní duplicitní obrázky mimo grid
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
    
    # Najít všechny obrázky v sekci galerie
    all_images_in_section = gallery_section.find_all('img')
    grid_images = grid.find_all('img')
    
    # Odstranit všechny obrázky, které nejsou v gridu
    for img in all_images_in_section:
        if img not in grid_images:
            # Najít rodičovský element a odstranit ho
            parent = img.find_parent()
            if parent and parent != grid and parent.name == 'div':
                parent.decompose()
    
    # Opravit kódování znaků v URL (Â© -> ©)
    content_str = str(soup)
    content_str = content_str.replace('Â©', '©')
    
    # Uložit opravený obsah
    path.write_text(content_str, encoding='utf-8')
    print("[OK] portfolio-3.html opraveno")
    return True

if __name__ == "__main__":
    fix_portfolio3()



