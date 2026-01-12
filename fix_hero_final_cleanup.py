#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Finální úklid hero images - opraví duplicity a strukturu
"""

import re
from pathlib import Path

def fix_hero_cleanup(html_content):
    """Opraví duplicity a strukturu hero images"""
    
    # Opravíme bg-gray-100 mimo class
    html_content = re.sub(
        r'(<div class="relative w-full[^"]*overflow-hidden">)\s*bg-gray-100',
        r'\1 bg-gray-100',
        html_content
    )
    
    # Opravíme duplicitní object-position
    html_content = re.sub(
        r'object-position:\s*center\s+30%;\s*;\s*object-position:\s*center\s+30%;',
        r'object-position: center 30%;',
        html_content
    )
    
    # Přidáme positioning k hero images, které ho nemají
    # Najdeme hero img tagy bez style
    hero_img_pattern = r'(<img[^>]*class="[^"]*w-full h-full object-cover[^"]*"[^>]*src="[^"]*"[^>]*)(?<!style=)(>)'
    
    def add_positioning(match):
        img_tag = match.group(1)
        closing = match.group(2)
        
        # Pokud nemá style, přidáme ho
        if 'style=' not in img_tag:
            return img_tag + ' style="object-position: center 30%;"' + closing
        return img_tag + closing
    
    html_content = re.sub(hero_img_pattern, add_positioning, html_content)
    
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
            content = fix_hero_cleanup(content)
            
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

