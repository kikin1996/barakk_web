#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Opraví všechny hero images - přidá positioning a opraví strukturu
"""

import re
from pathlib import Path

def fix_hero_image(html_content):
    """Opraví hero image - positioning a struktura"""
    
    # Opravíme duplicitní bg-gray-100 mimo class
    html_content = re.sub(
        r'(<div class="relative w-full[^"]*">)\s*bg-gray-100',
        r'\1 bg-gray-100',
        html_content
    )
    
    # Najdeme všechny hero img tagy (s i bez loading="eager")
    # Pattern pro hero img v hero sekci
    pattern = r'(<img[^>]*class="[^"]*w-full h-full object-cover[^"]*"[^>]*src="[^"]*"[^>]*>)'
    
    def replace_hero_img(match):
        img_tag = match.group(1)
        
        # Pokud je to v hero sekci (předchází mu div s h-[70vh] nebo min-h-[70vh])
        # Přidáme positioning
        if 'style=' in img_tag:
            # Pokud už má style, přidáme object-position
            if 'object-position' not in img_tag:
                img_tag = re.sub(
                    r'style="([^"]*)"',
                    r'style="\1; object-position: center 30%;"',
                    img_tag
                )
        else:
            # Přidáme nový style atribut
            img_tag = img_tag.replace('>', ' style="object-position: center 30%;">')
        
        return img_tag
    
    # Najdeme hero sekci a opravíme img v ní
    hero_pattern = r'(<div class="relative w-full[^"]*overflow-hidden[^"]*">\s*<img[^>]*class="[^"]*w-full h-full object-cover[^"]*"[^>]*src="[^"]*"[^>]*>)'
    
    def replace_hero_section(match):
        img_tag = match.group(1)
        
        if 'style=' in img_tag:
            if 'object-position' not in img_tag:
                img_tag = re.sub(
                    r'style="([^"]*)"',
                    r'style="\1; object-position: center 30%;"',
                    img_tag
                )
        else:
            img_tag = img_tag.replace('>', ' style="object-position: center 30%;">')
        
        return img_tag
    
    html_content = re.sub(hero_pattern, replace_hero_section, html_content, flags=re.MULTILINE | re.DOTALL)
    
    return html_content

def main():
    portfolio_dir = Path('.')
    portfolio_files = sorted(portfolio_dir.glob('portfolio-*.html'))
    public_dir = Path('public')
    public_portfolio_files = sorted(public_dir.glob('portfolio-*.html')) if public_dir.exists() else []
    
    all_files = portfolio_files + public_portfolio_files
    
    print(f"Nasel jsem {len(all_files)} portfolio souboru")
    
    for file_path in all_files:
        print(f"\nZpracovavam {file_path.name}...")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            content = fix_hero_image(content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  [OK] Opraveno {file_path.name}")
            else:
                print(f"  [-] Ziadne zmeny v {file_path.name}")
                
        except Exception as e:
            print(f"  [ERROR] Chyba pri zpracovani {file_path.name}: {e}")

if __name__ == '__main__':
    main()

