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
    
    # Najít sekci galerie
    gallery_start = content.find('<!-- Image Gallery -->')
    if gallery_start == -1:
        gallery_start = content.find('<section class="py-8 bg-gray-50">')
    
    if gallery_start == -1:
        print("[CHYBA] Galerie sekce nenalezena")
        return False
    
    # Najít konec sekce galerie
    gallery_end = content.find('<!-- Navigation to other projects -->', gallery_start)
    if gallery_end == -1:
        gallery_end = content.find('</section>', gallery_start) + 9
    
    # Najít grid
    grid_start = content.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">', gallery_start)
    if grid_start == -1:
        print("[CHYBA] Grid nenalezen")
        return False
    
    # Najít konec gridu
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
    
    if grid_end_pos is None:
        print("[CHYBA] Konec gridu nenalezen")
        return False
    
    # Všechno mezi grid_end_pos a gallery_end, co obsahuje obrázky, odstranit
    # Ale zachovat uzavírací divy pro max-w-7xl a section
    content_before = content[:grid_end_pos]
    content_after = content[gallery_end:]
    
    # Mezi grid_end_pos a gallery_end by měly být jen uzavírací divy
    temp_section = content[grid_end_pos:gallery_end]
    
    # Odstranit všechny obrázky a jejich divy
    lines = temp_section.split('\n')
    new_lines = []
    skip_image_block = False
    
    for line in lines:
        if 'relative aspect-[4/3]' in line or ('<img' in line and 'lightbox' not in line and 'logo' not in line and 'alt="Obrazek' in line):
            skip_image_block = True
            continue
        
        if skip_image_block and '</div>' in line:
            skip_image_block = False
            # Přeskočit tento </div> také
            continue
        
        if not skip_image_block:
            new_lines.append(line)
    
    cleaned_section = '\n'.join(new_lines)
    new_content = content_before + cleaned_section + content_after
    
    # Opravit kódování znaků v URL (Â© -> ©)
    new_content = new_content.replace('Â©', '©')
    
    if new_content != original:
        path.write_text(new_content, encoding='utf-8')
        print("[OK] portfolio-3.html opraveno")
        return True
    else:
        print("[OK] portfolio-3.html bez zmen")
        return False

if __name__ == "__main__":
    fix_portfolio3()

