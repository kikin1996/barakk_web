#!/usr/bin/env python3
"""
Odstraní duplicitní obrázky mimo hlavní grid v nových portfolio stránkách
"""
import os
from bs4 import BeautifulSoup

def fix_portfolio_gallery(file_path):
    """Opraví galerii v portfolio stránce"""
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
                # Najít všechny divy s obrázky, které jsou mimo hlavní grid
                # Tyto divy jsou přímí sourozenci main_gallery_div nebo jsou za ním
                removed_count = 0
                
                # Odstranit všechny divy s třídou 'relative aspect-[4/3]', které jsou mimo grid
                for sibling in list(main_gallery_div.find_next_siblings()):
                    if sibling.name == 'div' and 'relative' in sibling.get('class', []):
                        if 'aspect-[4/3]' in sibling.get('class', []):
                            sibling.decompose()
                            removed_count += 1
                
                # Také zkontrolovat, jestli nejsou nějaké divy přímo za uzavíracím tagem gridu
                # Najít konec gridu a odstranit vše za ním, dokud nenarazíme na </div> sekce
                parent = main_gallery_div.parent
                if parent:
                    # Najít pozici main_gallery_div v parent
                    children = list(parent.children)
                    grid_index = -1
                    for i, child in enumerate(children):
                        if child == main_gallery_div:
                            grid_index = i
                            break
                    
                    if grid_index >= 0:
                        # Odstranit všechny následující divy s obrázky
                        for i in range(grid_index + 1, len(children)):
                            child = children[i]
                            if isinstance(child, str):
                                continue
                            if child.name == 'div' and 'relative' in child.get('class', []):
                                if 'aspect-[4/3]' in child.get('class', []):
                                    child.decompose()
                                    removed_count += 1
                
                if removed_count > 0:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(str(soup))
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
        return False

def main():
    # Opravit všechny nové portfolio stránky (5-23)
    portfolio_files = [f"portfolio-{i}.html" for i in range(5, 24)]
    
    print("Opravuji galerie v nových portfolio stránkách...\n")
    
    fixed_count = 0
    for file_path in portfolio_files:
        if fix_portfolio_gallery(file_path):
            fixed_count += 1
    
    print(f"\nHotovo! Opraveno {fixed_count} souborů.")

if __name__ == "__main__":
    main()

