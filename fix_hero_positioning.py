#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Opraví positioning hero images - použije lepší object-position
"""

import re
from pathlib import Path

def fix_hero_positioning(html_content):
    """Opraví positioning hero images"""
    
    # Najdeme hero img tag a přidáme lepší positioning
    # Použijeme object-position: center 30% pro lepší zobrazení (ne příliš zoomované)
    pattern = r'(<img[^>]*loading="eager"[^>]*class="[^"]*w-full h-full object-cover[^"]*"[^>]*src="[^"]*"[^>]*>)'
    
    def replace_hero_img(match):
        img_tag = match.group(1)
        
        # Pokud už má style, přidáme object-position, jinak vytvoříme style
        if 'style=' in img_tag:
            img_tag = re.sub(
                r'style="([^"]*)"',
                r'style="\1; object-position: center 30%;"',
                img_tag
            )
        else:
            img_tag = img_tag.replace('>', ' style="object-position: center 30%;">')
        
        return img_tag
    
    html_content = re.sub(pattern, replace_hero_img, html_content, flags=re.MULTILINE)
    
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
            content = fix_hero_positioning(content)
            
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

