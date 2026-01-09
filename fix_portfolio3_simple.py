#!/usr/bin/env python3
"""
Opraví portfolio-3.html - odstraní duplicitní obrázky mimo grid
"""
import pathlib
import re

def fix_portfolio3():
    """Opraví portfolio-3.html"""
    path = pathlib.Path('portfolio-3.html')
    content = path.read_text(encoding='utf-8')
    original = content
    
    # Opravit kódování znaků v URL (Â© -> ©)
    content = content.replace('Â©', '©')
    
    # Najít konec gridu a odstranit vše mezi ním a </section>
    # Pattern: </div> (konec gridu) následovaný obrázky mimo grid před </section>
    
    # Najdeme pozici konce gridu (poslední </div> před duplicitními obrázky)
    # Grid končí na řádku 152 s </div>
    # Duplicitní obrázky začínají na řádku 153
    
    # Najdeme sekci galerie
    gallery_start = content.find('<!-- Image Gallery -->')
    if gallery_start == -1:
        gallery_start = content.find('<section class="py-8 bg-gray-50">')
    
    gallery_end = content.find('<!-- Navigation to other projects -->', gallery_start)
    if gallery_end == -1:
        gallery_end = content.find('</section>', gallery_start) + 9
    
    # Najdeme grid
    grid_start = content.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">', gallery_start)
    if grid_start == -1:
        return False
    
    # Najdeme konec gridu - poslední </div> před duplicitními obrázky
    # Hledáme pattern: </div> následovaný <div class="relative aspect-[4/3]... (mimo grid)
    pattern = r'(</div>\s*<div class="relative aspect-\[4/3\].*?</div>\s*</div>\s*</div>\s*</div>\s*</section>)'
    
    # Jednodušší přístup - najdeme konec gridu a odstraníme vše až do </section>
    # Najdeme první </div> po gridu, který uzavírá grid
    grid_content = content[grid_start:gallery_end]
    
    # Počítáme otevřené divy
    div_count = 1
    grid_end_pos = None
    
    search_start = len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">')
    for i in range(search_start, len(grid_content)):
        if grid_content[i:i+4] == '<div':
            div_count += 1
        elif grid_content[i:i+6] == '</div>':
            div_count -= 1
            if div_count == 0:
                grid_end_pos = grid_start + i + 6
                break
    
    if grid_end_pos:
        # Všechno mezi grid_end_pos a gallery_end, co obsahuje obrázky, odstranit
        content_before = content[:grid_end_pos]
        content_after = content[gallery_end:]
        
        # Mezi grid_end_pos a gallery_end by měly být jen uzavírací divy
        temp_section = content[grid_end_pos:gallery_end]
        
        # Odstranit všechny obrázky a jejich divy pomocí regex
        # Pattern: <div class="relative aspect-[4/3]... až do </div>
        cleaned_section = re.sub(
            r'<div class="relative aspect-\[4/3\].*?</div>\s*',
            '',
            temp_section,
            flags=re.DOTALL
        )
        
        new_content = content_before + cleaned_section + content_after
        
        if new_content != original:
            path.write_text(new_content, encoding='utf-8')
            print("[OK] portfolio-3.html opraveno")
            return True
    
    # Pokud jsme neudělali změny výše, zkusíme opravit jen kódování
    if content != original:
        path.write_text(content, encoding='utf-8')
        print("[OK] portfolio-3.html opraveno (jen kódování)")
        return True
    
    print("[OK] portfolio-3.html bez zmen")
    return False

if __name__ == "__main__":
    fix_portfolio3()

