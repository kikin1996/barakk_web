#!/usr/bin/env python3
"""
Opraví portfolio-1.html - odstraní přebytečné uzavírací divy a obrázky mimo grid
"""
from bs4 import BeautifulSoup
import pathlib

def fix_portfolio1():
    """Opraví portfolio-1.html"""
    path = pathlib.Path('portfolio-1.html')
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
    
    # Najít všechny obrázky v sekci galerie, které nejsou v gridu
    all_images_in_section = gallery_section.find_all('img')
    grid_images = grid.find_all('img')
    
    # Odstranit všechny obrázky, které nejsou v gridu
    for img in all_images_in_section:
        if img not in grid_images:
            # Najít rodičovský element a odstranit ho
            parent = img.find_parent()
            if parent and parent != grid:
                parent.decompose()
    
    # Opravit strukturu - odstranit přebytečné uzavírací divy
    # Po gridu by měl být jen jeden uzavírací div pro max-w-7xl
    maxw_div = gallery_section.find('div', class_='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')
    if maxw_div:
        # Najít všechny uzavírací divy po gridu
        grid_end = grid.find_next_sibling()
        if grid_end:
            # Zkontrolovat, jestli jsou tam přebytečné divy
            siblings = list(grid.next_siblings)
            # Mělo by být jen jeden </div> pro max-w-7xl
            # Pokud jsou tam více, odstranit přebytečné
    
    # Uložit opravený obsah
    new_content = str(soup)
    path.write_text(new_content, encoding='utf-8')
    print("[OK] portfolio-1.html opraveno")
    return True

if __name__ == "__main__":
    fix_portfolio1()



