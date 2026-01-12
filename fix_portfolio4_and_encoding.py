#!/usr/bin/env python3
"""
Opraví portfolio-4.html - odstraní duplicitní obrázky a opraví kódování
"""
import pathlib
import re

def fix_portfolio4():
    """Opraví portfolio-4.html"""
    file_path = pathlib.Path("portfolio-4.html")
    content = file_path.read_text(encoding='utf-8')
    
    # Najít sekci galerie
    gallery_start = content.find('<!-- Image Gallery -->')
    gallery_end = content.find('</section>', gallery_start)
    
    if gallery_start == -1 or gallery_end == -1:
        print("Galerie sekce nenalezena")
        return False
    
    # Najít grid
    grid_start = content.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">', gallery_start)
    grid_end = content.find('</div>', grid_start + 200)
    
    # Najít všechny obrázky v gridu
    grid_content = content[grid_start:grid_end]
    
    # Najít všechny img tagy s P44 (správné obrázky)
    p44_images = re.findall(r'<div class="relative aspect-\[4/3\].*?<img src="([^"]*P44[^"]*)"[^>]*>.*?</div>', grid_content, re.DOTALL)
    
    # Vytvořit novou galerii jen s P44 obrázky
    gallery_items = []
    for i, url in enumerate(p44_images):
        # Opravit kódování v URL
        url = url.replace('Â©', '©')
        gallery_items.append(
            f'                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer">\n'
            f'                            <img src="{url}" alt="Obrazek {i+1}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />\n'
            f'                        </div>'
        )
    
    gallery_html = '\n'.join(gallery_items)
    
    # Nahradit obsah gridu
    new_content = (
        content[:grid_start + len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">')] +
        '\n' + gallery_html + '\n                ' +
        content[grid_end:]
    )
    
    # Opravit také kódování v celém souboru
    new_content = new_content.replace('Â©', '©')
    
    file_path.write_text(new_content, encoding='utf-8')
    return True

def fix_encoding_all():
    """Opraví kódování ve všech portfolio souborech"""
    for path in pathlib.Path('.').glob('portfolio-*.html'):
        content = path.read_text(encoding='utf-8')
        original = content
        
        # Opravit kódování
        content = content.replace('Â©', '©')
        
        if content != original:
            path.write_text(content, encoding='utf-8')
            print(f"[OK] {path.name} - kódování opraveno")

def main():
    print("Opravuji portfolio-4.html a kódování...\n")
    
    if fix_portfolio4():
        print("[OK] portfolio-4.html opraveno - odstraneny duplicitni obrazky")
    
    print("\nOpravuji kódování ve všech souborech...")
    fix_encoding_all()
    
    print("\nHotovo!")

if __name__ == "__main__":
    main()



