#!/usr/bin/env python3
"""
Opraví portfolio-4.html - odstraní všechny duplicitní obrázky
"""
import pathlib
import re

def fix_portfolio4():
    """Opraví portfolio-4.html"""
    file_path = pathlib.Path("portfolio-4.html")
    content = file_path.read_text(encoding='utf-8')
    
    # Najít sekci galerie
    gallery_start = content.find('<!-- Image Gallery -->')
    gallery_end = content.find('<!-- Navigation to other projects -->', gallery_start)
    
    if gallery_start == -1 or gallery_end == -1:
        print("Galerie sekce nenalezena")
        return False
    
    # Najít grid
    grid_start = content.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">', gallery_start)
    grid_end = content.find('</div>', grid_start + 200)
    
    # Najít všechny obrázky s P44 (správné obrázky)
    grid_section = content[grid_start:gallery_end]
    
    # Najít všechny img tagy s P44
    p44_pattern = r'<div class="relative aspect-\[4/3\].*?<img src="([^"]*P44[^"]*)"[^>]*>.*?</div>'
    p44_matches = re.findall(p44_pattern, grid_section, re.DOTALL)
    
    # Vytvořit novou galerii jen s P44 obrázky
    gallery_items = []
    for i, url in enumerate(p44_matches):
        # Opravit kódování v URL
        url = url.replace('Â©', '©')
        gallery_items.append(
            f'                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer">\n'
            f'                            <img src="{url}" alt="Obrazek {i+1}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />\n'
            f'                        </div>'
        )
    
    gallery_html = '\n'.join(gallery_items)
    
    # Najít správný konec gridu (před </div> který uzavírá grid)
    # Musíme najít konec gridu správně
    grid_end_marker = grid_start + len('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">')
    
    # Najít první </div> po grid_end_marker, který uzavírá grid
    # Ale musíme být opatrní - může být více </div>
    # Najdeme konec sekce galerie
    section_end = content.find('</section>', grid_start)
    
    # Najdeme správný konec gridu - před </div> který uzavírá grid
    # Hledáme </div> který je před </section>
    temp_content = content[grid_end_marker:section_end]
    # Počítáme otevřené divy
    div_count = 1
    grid_end_pos = grid_end_marker
    for i, char in enumerate(temp_content):
        if temp_content[i:i+5] == '<div ':
            div_count += 1
        elif temp_content[i:i+6] == '</div>':
            div_count -= 1
            if div_count == 0:
                grid_end_pos = grid_end_marker + i
                break
    
    # Nahradit obsah gridu
    new_content = (
        content[:grid_end_marker] +
        '\n' + gallery_html + '\n                ' +
        content[grid_end_pos:]
    )
    
    # Opravit také kódování v celém souboru
    new_content = new_content.replace('Â©', '©')
    
    file_path.write_text(new_content, encoding='utf-8')
    return True

def main():
    print("Opravuji portfolio-4.html - odstranuji duplicitni obrazky...\n")
    
    if fix_portfolio4():
        print("[OK] portfolio-4.html opraveno")
    else:
        print("[ERROR] Chyba pri oprave")
    
    print("\nHotovo!")

if __name__ == "__main__":
    main()



