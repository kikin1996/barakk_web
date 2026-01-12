#!/usr/bin/env python3
"""
Odstraní duplicitní obrázky mimo grid ve všech portfolio souborech
"""
import pathlib
import re

def fix_gallery(file_path):
    """Opraví galerii - odstraní obrázky mimo grid"""
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Najít sekci galerie
    gallery_start = content.find('<!-- Image Gallery -->')
    if gallery_start == -1:
        return False
    
    # Najít konec sekce galerie
    gallery_end = content.find('<!-- Navigation to other projects -->', gallery_start)
    if gallery_end == -1:
        gallery_end = content.find('</section>', gallery_start)
    
    # Najít grid
    grid_start = content.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">', gallery_start)
    if grid_start == -1:
        return False
    
    # Najít konec gridu - najdeme uzavírací </div> pro grid
    # Musíme najít správný </div> který uzavírá grid
    grid_content = content[grid_start:gallery_end]
    
    # Počítáme otevřené divy
    div_count = 1  # grid div je otevřený
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
        return False
    
    # Všechno mezi grid_end_pos a gallery_end, co obsahuje obrázky, odstranit
    # Ale zachovat uzavírací divy pro max-w-7xl a section
    content_before = content[:grid_end_pos]
    content_after_gallery = content[gallery_end:]
    
    # Najdeme uzavírací divy pro max-w-7xl a section
    # Mezi grid_end_pos a gallery_end by měly být jen uzavírací divy
    temp_section = content[grid_end_pos:gallery_end]
    
    # Odstranit všechny obrázky a jejich divy, ale zachovat uzavírací divy
    lines = temp_section.split('\n')
    new_lines = []
    skip_image_block = False
    
    for line in lines:
        # Pokud je to začátek obrázkového bloku
        if 'relative aspect-[4/3]' in line or '<img' in line:
            skip_image_block = True
            continue
        
        # Pokud je to konec obrázkového bloku
        if skip_image_block and '</div>' in line:
            skip_image_block = False
            # Přeskočit tento </div> také
            continue
        
        # Pokud není skip, přidat řádek
        if not skip_image_block:
            new_lines.append(line)
    
    cleaned_section = '\n'.join(new_lines)
    
    # Vytvořit nový obsah
    new_content = content_before + cleaned_section + content_after_gallery
    
    if new_content != original:
        file_path.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    print("Odstranuji duplicitni obrazky mimo grid...\n")
    
    fixed_count = 0
    for path in sorted(pathlib.Path('.').glob('portfolio-*.html')):
        if fix_gallery(path):
            print(f"[OK] {path.name} opraveno")
            fixed_count += 1
        else:
            print(f"[OK] {path.name} bez zmen")
    
    print(f"\nHotovo! Opraveno {fixed_count} souboru.")

if __name__ == "__main__":
    main()



