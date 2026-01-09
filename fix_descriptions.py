#!/usr/bin/env python3
import pathlib
import re

replacements = {
    'áštulný': 'úštulný',
    'pŠ™írodními': 'přírodními',
    'pŠ™ináŠˇí': 'přináší',
    'Š™eŠˇení': 'řešení',
    'pŠ™idává': 'přidává',
    'zároveŠ': 'zároveň',
    'Š™eŠˇení': 'řešení',
    'pŠ™ináŠˇí': 'přináší',
    'současná Š™eŠˇení': 'současná řešení',
}

for path in pathlib.Path('.').glob('portfolio-*.html'):
    content = path.read_text(encoding='utf-8')
    original = content
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    # Opravit také pomocí regexu
    content = re.sub(r'pŠ™', 'př', content)
    content = re.sub(r'Š™', 'ř', content)
    content = re.sub(r'Šˇ', 'š', content)
    content = re.sub(r'áštulný', 'úštulný', content)
    content = re.sub(r'zároveŠ', 'zároveň', content)
    
    if content != original:
        path.write_text(content, encoding='utf-8')
        print(f"[OK] {path.name} opraveno")
    else:
        print(f"[OK] {path.name} bez zmen")

print("\nHotovo!")

