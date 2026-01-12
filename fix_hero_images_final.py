#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Finální oprava hero images - opraví cesty a použije lepší positioning
"""

import re
from pathlib import Path

def fix_hero_image(html_content):
    """Opraví hero image - cesty a positioning"""
    
    # Opravíme cesty - public/images -> /images
    html_content = re.sub(
        r'src="public/images/',
        r'src="/images/',
        html_content
    )
    
    # Změníme object-cover na object-cover s lepším positioningem
    # Použijeme object-top nebo object-center podle potřeby
    # Pro hero images použijeme object-cover s object-center a možná min-height
    html_content = re.sub(
        r'(<img[^>]*class="[^"]*w-full h-full\s+)(object-cover\s+object-center)([^"]*"[^>]*>)',
        r'\1object-cover object-center\3',
        html_content
    )
    
    # Zkusíme použít min-height místo fixní výšky pro lepší zobrazení
    # Nebo použijeme aspect-ratio
    html_content = re.sub(
        r'h-\[70vh\]',
        r'min-h-[70vh] h-[70vh]',
        html_content
    )
    
    # Přidáme fallback pozadí pro případ, že se obrázek nenačte
    html_content = re.sub(
        r'(<div class="relative w-full min-h-\[70vh\] h-\[70vh\] overflow-hidden">)',
        r'\1 bg-gray-100',
        html_content
    )
    
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

