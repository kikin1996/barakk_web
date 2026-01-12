#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Opraví hero images na portfolio stránkách - změní object-cover na lepší zobrazení
"""

import re
import os
from pathlib import Path

def fix_hero_image(html_content):
    """Opraví hero image - přidá lepší object-position a fallback"""
    
    # Pattern pro hero image img tag
    # Najdeme img tag v hero sekci
    pattern = r'(<div class="relative w-full h-\[60vh\] overflow-hidden">\s*<img[^>]*class="[^"]*object-cover[^"]*"[^>]*>)'
    
    def replace_hero_img(match):
        img_tag = match.group(1)
        
        # Pokud už má object-position, necháme ho, jinak přidáme object-center
        if 'object-center' not in img_tag and 'object-position' not in img_tag:
            img_tag = img_tag.replace('object-cover', 'object-cover object-center')
        
        # Přidáme také loading="eager" pro lepší načítání
        if 'loading=' not in img_tag:
            img_tag = img_tag.replace('<img', '<img loading="eager"')
        
        return img_tag
    
    # Nahradíme hero image
    html_content = re.sub(pattern, replace_hero_img, html_content, flags=re.MULTILINE | re.DOTALL)
    
    # Alternativní pattern pro případ, že je struktura trochu jiná
    pattern2 = r'(<img[^>]*alt="[^"]*"[^>]*class="[^"]*w-full h-full object-cover[^"]*"[^>]*>)'
    
    def replace_hero_img2(match):
        img_tag = match.group(1)
        
        # Pokud je to v hero sekci (předchází mu div s h-[60vh])
        if 'object-center' not in img_tag:
            img_tag = img_tag.replace('object-cover', 'object-cover object-center')
        
        if 'loading=' not in img_tag:
            img_tag = img_tag.replace('<img', '<img loading="eager"')
        
        return img_tag
    
    html_content = re.sub(pattern2, replace_hero_img2, html_content, flags=re.MULTILINE)
    
    return html_content

def main():
    portfolio_dir = Path('.')
    portfolio_files = sorted(portfolio_dir.glob('portfolio-*.html'))
    
    print(f"Našel jsem {len(portfolio_files)} portfolio souborů")
    
    for file_path in portfolio_files:
        print(f"\nZpracovávám {file_path.name}...")
        
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

