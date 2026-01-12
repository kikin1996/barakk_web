#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Opraví hero images na portfolio stránkách - změní na lepší zobrazení s object-contain
"""

import re
import os
from pathlib import Path

def fix_hero_image(html_content):
    """Opraví hero image - změní object-cover na object-contain s pozadím"""
    
    # Nejdřív přidáme bg-gray-900 do divu pro pozadí (uvnitř class atributu)
    html_content = re.sub(
        r'(<div class="relative w-full h-\[60vh\] overflow-hidden">)',
        r'<div class="relative w-full h-[60vh] overflow-hidden bg-gray-900">',
        html_content
    )
    
    # Opravíme případné chyby, kde je bg-gray-900 mimo class (odstraníme duplicitní)
    html_content = re.sub(
        r'(<div class="relative w-full h-\[60vh\] overflow-hidden bg-gray-900">)\s*bg-gray-900',
        r'\1',
        html_content
    )
    
    # Pak změníme object-cover na object-contain v img tagu
    html_content = re.sub(
        r'(<img[^>]*class="[^"]*)(object-cover)([^"]*"[^>]*>)',
        r'\1object-contain\3',
        html_content
    )
    
    return html_content

def main():
    portfolio_dir = Path('.')
    portfolio_files = sorted(portfolio_dir.glob('portfolio-*.html'))
    
    print(f"Nasel jsem {len(portfolio_files)} portfolio souboru")
    
    for file_path in portfolio_files:
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

