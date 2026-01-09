#!/usr/bin/env python3
"""
Opraví selektor pro lightbox v portfolio souborech
"""
import pathlib
import re

def fix_lightbox_selector(file_path):
    """Opraví selektor pro galerii"""
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Opravit selektor - najít grid s obrázky
    content = re.sub(
        r"const gallery = document\.querySelector\('\.grid\.grid-cols-1'\);",
        r"const gallery = document.querySelector('.grid.grid-cols-1, .grid.grid-cols-1.md\\:grid-cols-2');",
        content
    )
    
    # Lepší řešení - najít grid podle třídy galerie
    content = re.sub(
        r"const gallery = document\.querySelector\('\.grid\.grid-cols-1(?:\.md\\:grid-cols-2)?'\);",
        r"const gallery = document.querySelector('section.py-8.bg-gray-50 .grid');",
        content
    )
    
    if content != original:
        file_path.write_text(content, encoding='utf-8')
        return True
    return False

def main():
    print("Opravuji selektor pro lightbox...\n")
    
    fixed_count = 0
    for path in sorted(pathlib.Path('.').glob('portfolio-*.html')):
        if fix_lightbox_selector(path):
            print(f"[OK] {path.name} opraveno")
            fixed_count += 1
        else:
            print(f"[OK] {path.name} bez zmen")
    
    print(f"\nHotovo! Opraveno {fixed_count} souboru.")

if __name__ == "__main__":
    main()

