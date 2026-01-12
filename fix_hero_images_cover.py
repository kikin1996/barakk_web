#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Opraví hero images - změní object-contain zpět na object-cover pro lepší roztáhnutí
"""

import re
from pathlib import Path

def fix_hero_image(html_content):
    """Opraví hero image - změní object-contain na object-cover"""
    
    # Změníme object-contain na object-cover v hero img tagu
    html_content = re.sub(
        r'(<img[^>]*class="[^"]*w-full h-full\s+)(object-contain)([^"]*"[^>]*>)',
        r'\1object-cover\3',
        html_content
    )
    
    # Zvýšíme výšku hero sekce z 60vh na 70vh pro lepší zobrazení
    html_content = re.sub(
        r'h-\[60vh\]',
        r'h-[70vh]',
        html_content
    )
    
    # Odstraníme bg-gray-900, protože s object-cover ho nepotřebujeme
    html_content = re.sub(
        r'(<div class="relative w-full h-\[70vh\] overflow-hidden)\s+bg-gray-900(">)',
        r'\1\2',
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

