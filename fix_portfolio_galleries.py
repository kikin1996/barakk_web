#!/usr/bin/env python3
"""
Opraví galerie v portfolio souborech - odstraní špatné obrázky
"""
import pathlib
import re

def fix_gallery(file_path):
    """Opraví galerii - odstraní obrázky s textem místo URL"""
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Najít všechny obrázky v galerii, které nemají http/https v src
    # Pattern pro img tagy, které nemají URL
    pattern = r'<div class="relative aspect-\[4/3\].*?<img src="(?!https?://)[^"]*".*?</div>\s*'
    
    # Odstranit všechny obrázky, které nemají validní URL
    lines = content.split('\n')
    new_lines = []
    skip_next_div = False
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Pokud je to div s obrázkem
        if 'relative aspect-[4/3]' in line:
            # Zkontrolovat, jestli následující img má validní URL
            img_line = lines[i+1] if i+1 < len(lines) else ''
            if 'src="' in img_line:
                # Extrahovat src
                src_match = re.search(r'src="([^"]*)"', img_line)
                if src_match:
                    src = src_match.group(1)
                    # Pokud src nezačíná http/https, přeskočit celý div blok
                    if not src.startswith('http://') and not src.startswith('https://'):
                        # Přeskočit tento div a jeho uzavírací tag
                        while i < len(lines) and '</div>' not in lines[i]:
                            i += 1
                        if i < len(lines):
                            i += 1  # Přeskočit uzavírací </div>
                        continue
        
        new_lines.append(line)
        i += 1
    
    new_content = '\n'.join(new_lines)
    
    if new_content != original:
        file_path.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    print("Opravuji galerie v portfolio souborech...\n")
    
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



