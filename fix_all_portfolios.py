#!/usr/bin/env python3
"""
Opraví všechny portfolio soubory - odstraní duplicitní obrázky mimo grid a opraví kódování
"""
import pathlib
import re

def fix_portfolio(file_path):
    """Opraví portfolio soubor"""
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Opravit kódování znaků v URL (Â© -> ©)
    content = content.replace('Â©', '©')
    
    # Najít konec gridu
    grid_end_pattern = r'(</div>\s*</div>\s*</div>\s*</div>\s*</section>)'
    
    # Pokud najdeme duplicitní obrázky mimo grid (po uzavíracím </div> gridu)
    # Pattern: </div> (konec gridu) následovaný obrázky mimo grid
    pattern = r'(</div>\s*<div class="relative aspect-\[4/3\].*?</div>\s*</div>\s*</div>\s*</section>)'
    
    # Najdeme konec gridu a odstraníme vše mezi ním a </section>
    # Nejprve najdeme pozici konce gridu
    grid_end_match = re.search(r'</div>\s*(?=<div class="relative aspect-\[4/3\]|</div>\s*</div>\s*</section>)', content)
    
    if grid_end_match:
        # Najdeme všechny obrázky mimo grid
        # Pattern: po </div> gridu jsou ještě obrázky před </section>
        section_start = content.find('<!-- Image Gallery -->')
        section_end = content.find('<!-- Navigation to other projects -->', section_start)
        if section_end == -1:
            section_end = content.find('</section>', section_start) + 9
        
        gallery_section = content[section_start:section_end]
        
        # Najdeme grid
        grid_start = gallery_section.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">')
        if grid_start == -1:
            return False
        
        # Najdeme konec gridu - poslední </div> před dalšími obrázky mimo grid
        grid_content = gallery_section[grid_start:]
        
        # Počítáme otevřené divy
        div_count = 1
        grid_end_pos = None
        
        for i in range(len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">'), len(grid_content)):
            if grid_content[i:i+4] == '<div':
                div_count += 1
            elif grid_content[i:i+6] == '</div>':
                div_count -= 1
                if div_count == 0:
                    grid_end_pos = section_start + grid_start + i + 6
                    break
        
        if grid_end_pos:
            # Všechno mezi grid_end_pos a section_end, co obsahuje obrázky, odstranit
            # Ale zachovat uzavírací divy pro max-w-7xl a section
            content_before = content[:grid_end_pos]
            content_after = content[section_end:]
            
            # Najdeme uzavírací divy pro max-w-7xl
            # Mezi grid_end_pos a section_end by měly být jen uzavírací divy
            temp_section = content[grid_end_pos:section_end]
            
            # Odstranit všechny obrázky a jejich divy
            lines = temp_section.split('\n')
            new_lines = []
            skip_image_block = False
            
            for line in lines:
                if 'relative aspect-[4/3]' in line or ('<img' in line and 'lightbox' not in line and 'logo' not in line):
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
            
            if new_content != original:
                file_path.write_text(new_content, encoding='utf-8')
                return True
    
    # Pokud jsme neudělali změny výše, zkusíme opravit jen kódování
    if content != original:
        file_path.write_text(content, encoding='utf-8')
        return True
    
    return False

def main():
    print("Opravuji všechny portfolio soubory...\n")
    
    fixed_count = 0
    for path in sorted(pathlib.Path('.').glob('portfolio-*.html')):
        if fix_portfolio(path):
            print(f"[OK] {path.name} opraveno")
            fixed_count += 1
        else:
            print(f"[OK] {path.name} bez zmen")
    
    print(f"\nHotovo! Opraveno {fixed_count} souboru.")

if __name__ == "__main__":
    main()



