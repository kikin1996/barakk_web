#!/usr/bin/env python3
"""
Vymaže všechny projekty kromě 4 vybraných a přejmenuje je na portfolio-1 až portfolio-4
"""
import pathlib
import shutil

# Mapování: staré ID -> nové ID a název
projects_to_keep = {
    29: (1, "Dům w Sieradzu"),  # portfolio-29.html -> portfolio-1.html
    32: (2, "Apartmán w Essen"),  # portfolio-32.html -> portfolio-2.html
    28: (3, "Byt w Katowicach"),  # portfolio-28.html -> portfolio-3.html
    27: (4, "Byt w Łodzi"),  # portfolio-27.html -> portfolio-4.html
}

def main():
    print("Cisteni projektu - ponechani jen 4 projekty...\n")
    
    # 1. Smazat všechny portfolio soubory
    print("Mazani vsech portfolio souboru...")
    deleted_count = 0
    for path in pathlib.Path('.').glob('portfolio-*.html'):
        old_id = int(path.stem.split('-')[1])
        if old_id not in projects_to_keep:
            path.unlink()
            deleted_count += 1
            print(f"  [DEL] {path.name}")
    
    print(f"Smazano {deleted_count} souboru\n")
    
    # 2. Přejmenovat a aktualizovat zbývající soubory
    print("Prejmenovavani a aktualizace projektu...")
    for old_id, (new_id, title) in projects_to_keep.items():
        old_file = pathlib.Path(f"portfolio-{old_id}.html")
        new_file = pathlib.Path(f"portfolio-{new_id}.html")
        
        if old_file.exists():
            # Přečíst obsah
            content = old_file.read_text(encoding='utf-8')
            
            # Aktualizovat odkazy na portfolio-{old_id} na portfolio-{new_id}
            content = content.replace(f'portfolio-{old_id}.html', f'portfolio-{new_id}.html')
            
            # Zapsat do nového souboru
            new_file.write_text(content, encoding='utf-8')
            
            # Smazat starý soubor
            old_file.unlink()
            
            print(f"  [OK] portfolio-{old_id}.html -> portfolio-{new_id}.html ({title})")
        else:
            print(f"  [WARN] portfolio-{old_id}.html neexistuje")
    
    print("\nHotovo!")

if __name__ == "__main__":
    main()

