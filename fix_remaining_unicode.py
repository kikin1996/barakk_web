#!/usr/bin/env python3
import pathlib
import re

files_to_fix = {
    'portfolio-3.html': [
        ('KanceláŠ™ u Š™eky', 'Kancelář nad řekou'),
        ('KANCELáŠ™ U Š™EKY', 'KANCELÁŘ NAD ŘEKOU'),
        ('Š tětín', 'Štětín'),
        ('Š tětín', 'Štětín'),
    ],
    'portfolio-9.html': [
        ('Krakov â€" Kazimierz', 'Krakov – Kazimierz'),
        ('KRAKOV â€" KAZIMIERZ', 'KRAKOV – KAZIMIERZ'),
    ],
    'portfolio-12.html': [
        ('LIMONE CAFE â€" ŠTĚTÍN', 'LIMONE CAFE – ŠTĚTÍN'),
    ],
    'portfolio-19.html': [
        ('VARŠAVA â€" MOKOTá"W', 'VARŠAVA – MOKOTÓW'),
        ('VARŠAVA â€" MOKOTá"W', 'VARŠAVA – MOKOTÓW'),
    ],
}

for filename, replacements in files_to_fix.items():
    file_path = pathlib.Path(filename)
    if not file_path.exists():
        print(f"[SKIP] {filename} neexistuje")
        continue
    
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    for old, new in replacements:
        content = content.replace(old, new)
    
    # Opravit také pomocí regexu
    content = re.sub(r'â€"', '–', content)
    
    if content != original:
        file_path.write_text(content, encoding='utf-8')
        print(f"[OK] {filename} opraveno")
    else:
        print(f"[OK] {filename} bez zmen")

print("\nHotovo!")

