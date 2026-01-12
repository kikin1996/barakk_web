#!/usr/bin/env python3
"""
Opraví všechny galerie - odstraní duplicitní obrázky mimo grid
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
    grid_end_pos = grid_start + len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">')
    
    for i, char in enumerate(grid_content[len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">'):]):
        if grid_content[len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">') + i:].startswith('<div'):
            div_count += 1
        elif grid_content[len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">') + i:].startswith('</div>'):
            div_count -= 1
            if div_count == 0:
                grid_end_pos = grid_start + len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">') + i + 6
                break
    
    # Všechno mezi grid_end_pos a gallery_end, co obsahuje obrázky, odstranit
    content_before_grid_end = content[:grid_end_pos]
    content_after_gallery = content[gallery_end:]
    
    # Najít další </div> které uzavírají kontejnery
    # Ale musíme zachovat strukturu
    # Najdeme konec gridu a pak najdeme další </div> které uzavírají max-w-7xl a section
    temp_content = content[grid_end_pos:gallery_end]
    
    # Odstranit všechny obrázky mezi grid_end_pos a gallery_end
    # Ale zachovat uzavírací divy pro kontejnery
    lines = temp_content.split('\n')
    new_lines = []
    skip_until_div = False
    
    for line in lines:
        # Pokud je to uzavírací </div> pro max-w-7xl nebo section, zachovat
        if '</div>' in line and not skip_until_div:
            # Zkontrolovat, jestli před tím není obrázek
            if '<img' not in temp_content[max(0, temp_content.find(line) - 200):temp_content.find(line)]:
                new_lines.append(line)
                continue
        # Pokud je to obrázek mimo grid, přeskočit
        if '<img' in line or 'relative aspect-[4/3]' in line:
            skip_until_div = True
            continue
        if skip_until_div and '</div>' in line:
            skip_until_div = False
            # Zachovat jen uzavírací divy pro kontejnery
            if 'max-w-7xl' in content[grid_end_pos - 100:grid_end_pos] or 'section' in content[grid_end_pos - 100:grid_end_pos]:
                continue
            new_lines.append(line)
            continue
        if not skip_until_div:
            new_lines.append(line)
    
    cleaned_content = '\n'.join(new_lines)
    
    # Jednodušší přístup - najdeme grid_end a pak odstraníme vše až do </div> které uzavírá max-w-7xl
    # Ale zachováme </div> pro max-w-7xl a </section>
    
    # Najdeme pozici kde končí grid
    grid_end_marker = content.find('</div>', grid_end_pos)
    
    # Najdeme další </div> které uzavírá max-w-7xl div
    maxw_div_end = content.find('</div>', grid_end_marker + 6)
    
    # Najdeme </section>
    section_end = content.find('</section>', maxw_div_end)
    
    # Vytvoříme nový obsah: vše do grid_end_marker, pak uzavírací divy, pak zbytek
    new_content = (
        content[:grid_end_marker + 6] +  # grid uzavřený
        '\n                ' +
        content[maxw_div_end:section_end + 9]  # uzavírací divy a section
    )
    
    if new_content != original:
        file_path.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    print("Opravuji galerie ve všech portfolio souborech...\n")
    
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



