#!/usr/bin/env python3
"""
Opraví finální HTML strukturu - odstraní přebytečné uzavírací divy
"""
import pathlib
import re

def fix_structure(file_path):
    """Opraví HTML strukturu"""
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Najít konec gridu a opravit strukturu
    # Pattern: </div> (konec gridu) následovaný více </div> než je potřeba
    
    # Najdeme konec gridu - poslední obrázek v gridu
    pattern = r'(</div>\s*</div>\s*</div>\s*</div>\s*</section>)'
    replacement = r'</div>\n            </div>\n        </section>'
    new_content = re.sub(pattern, replacement, content)
    
    # Pokud to nefungovalo, zkusíme jiný pattern
    if new_content == original:
        pattern = r'(</div>\s*</div>\s*</div>\s*</section>)'
        replacement = r'</div>\n            </div>\n        </section>'
        new_content = re.sub(pattern, replacement, content)
    
    # Pokud to stále nefungovalo, zkusíme ještě jiný pattern
    if new_content == original:
        pattern = r'(</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</section>)'
        replacement = r'</div>\n            </div>\n        </section>'
        new_content = re.sub(pattern, replacement, content)
    
    if new_content != original:
        file_path.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    print("Opravuji finální HTML strukturu...\n")
    
    fixed_count = 0
    for path in sorted(pathlib.Path('.').glob('portfolio-*.html')):
        if fix_structure(path):
            print(f"[OK] {path.name} opraveno")
            fixed_count += 1
        else:
            print(f"[OK] {path.name} bez zmen")
    
    print(f"\nHotovo! Opraveno {fixed_count} souboru.")

if __name__ == "__main__":
    main()



