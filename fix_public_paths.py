#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Opraví cesty v portfolio HTML souborech v public/ složce na absolutní cesty
"""

import re
from pathlib import Path

def fix_paths(html_content):
    """Opraví relativní cesty na absolutní pro Next.js public/ složku"""
    
    # Opravíme cesty k obrázkům a souborům
    # public/favicon.jpg -> /favicon.jpg
    html_content = re.sub(
        r'href="public/([^"]+)"',
        r'href="/\1"',
        html_content
    )
    html_content = re.sub(
        r'src="public/([^"]+)"',
        r'src="/\1"',
        html_content
    )
    
    # Opravíme odkazy na index.html -> /
    html_content = re.sub(
        r'href="index\.html"',
        r'href="/"',
        html_content
    )
    html_content = re.sub(
        r'href="index\.html#',
        r'href="/#',
        html_content
    )
    
    # Opravíme odkazy na ostatní HTML soubory (onas.html -> /onas.html)
    html_content = re.sub(
        r'href="([a-z-]+)\.html"',
        r'href="/\1.html"',
        html_content
    )
    
    return html_content

def main():
    public_dir = Path('public')
    portfolio_files = sorted(public_dir.glob('portfolio-*.html'))
    
    print(f"Nasel jsem {len(portfolio_files)} portfolio souboru v public/")
    
    for file_path in portfolio_files:
        print(f"\nZpracovavam {file_path.name}...")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            content = fix_paths(content)
            
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

