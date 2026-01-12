#!/usr/bin/env python3
"""
Opraví HTML strukturu - odstraní přebytečné uzavírací divy
"""
import pathlib
import re

def fix_structure(file_path):
    """Opraví HTML strukturu"""
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Najít sekci galerie
    gallery_start = content.find('<!-- Image Gallery -->')
    if gallery_start == -1:
        gallery_start = content.find('<section class="py-8 bg-gray-50">')
    
    if gallery_start == -1:
        return False
    
    # Najít konec sekce galerie
    gallery_end = content.find('<!-- Navigation to other projects -->', gallery_start)
    if gallery_end == -1:
        gallery_end = content.find('</section>', gallery_start) + 9
    
    # Najít grid
    grid_start = content.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">', gallery_start)
    if grid_start == -1:
        return False
    
    # Najít konec gridu
    grid_end = content.find('</div>', grid_start + 100)
    
    # Najít správný konec - po gridu by měly být jen 2 uzavírací divy (max-w-7xl a section)
    # Ale section je uzavřený </section>, takže jen 1 uzavírací div pro max-w-7xl
    
    # Najdeme všechny </div> mezi grid_end a gallery_end
    section_between = content[grid_end:gallery_end]
    
    # Počítáme </div> tagy
    div_closes = section_between.count('</div>')
    
    # Mělo by být jen 1 </div> pro max-w-7xl
    if div_closes > 1:
        # Najdeme první </div> po gridu
        first_div_close = content.find('</div>', grid_end)
        
        # Najdeme </section>
        section_close = content.find('</section>', first_div_close)
        
        # Vytvoříme nový obsah: vše do grid_end, pak první </div>, pak </section>
        new_content = (
            content[:grid_end] +
            '\n                </div>\n            </div>\n        </section>'
        )
        
        # Najdeme pozici kde začíná další sekce
        next_section = content.find('<!-- Navigation', gallery_end)
        if next_section == -1:
            next_section = content.find('<section', gallery_end)
        
        if next_section != -1:
            new_content = content[:grid_end] + '\n                </div>\n            </div>\n        </section>\n\n        ' + content[next_section:]
        else:
            new_content = content[:grid_end] + '\n                </div>\n            </div>\n        </section>' + content[gallery_end + 9:]
        
        if new_content != original:
            file_path.write_text(new_content, encoding='utf-8')
            return True
    
    return False

def main():
    print("Opravuji HTML strukturu...\n")
    
    fixed_count = 0
    for path in sorted(pathlib.Path('.').glob('portfolio-*.html')):
        if fix_structure(path):
            print(f"[OK] {path.name} opraveno")
            fixed_count += 1
        else:
            print(f"[OK] {path.name} bez zmen")
    
    print(f"\nHotovo! Opraveno {fixed_count} souboru.")

if __name__ == "__main__":
    main()



