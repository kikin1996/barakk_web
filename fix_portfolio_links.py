#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Opraví odkazy v portfolio HTML souborech - změní index.html na / a opraví ostatní odkazy
"""

import re
from pathlib import Path

def fix_links(html_content):
    """Opraví odkazy v HTML souboru"""
    
    # Opravíme odkazy na index.html -> /
    html_content = re.sub(
        r'href="index\.html"',
        r'href="/"',
        html_content
    )
    
    # Opravíme odkazy na index.html# -> /#
    html_content = re.sub(
        r'href="index\.html#',
        r'href="/#',
        html_content
    )
    
    # Opravíme odkazy na ostatní HTML soubory (onas.html -> /o-nas, kontakt.html -> /kontakt)
    html_content = re.sub(
        r'href="onas\.html"',
        r'href="/o-nas"',
        html_content
    )
    
    html_content = re.sub(
        r'href="kontakt\.html"',
        r'href="/kontakt"',
        html_content
    )
    
    return html_content

def main():
    portfolio_dir_public = Path('public')
    portfolio_dir_root = Path('.')
    
    portfolio_files_public = sorted(portfolio_dir_public.glob('portfolio-*.html')) if portfolio_dir_public.exists() else []
    portfolio_files_root = sorted(portfolio_dir_root.glob('portfolio-*.html'))
    
    all_files = portfolio_files_public + portfolio_files_root
    
    print(f"Nasel jsem {len(all_files)} portfolio souboru")
    
    for file_path in all_files:
        print(f"\nZpracovavam {file_path.name}...")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            content = fix_links(content)
            
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

