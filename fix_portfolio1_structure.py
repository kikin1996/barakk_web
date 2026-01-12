#!/usr/bin/env python3
"""
Opraví strukturu portfolio-1.html - odstraní přebytečné uzavírací divy
"""
import pathlib

def fix_structure():
    """Opraví HTML strukturu"""
    path = pathlib.Path('portfolio-1.html')
    content = path.read_text(encoding='utf-8')
    original = content
    
    # Najít konec gridu a opravit strukturu
    # Pattern: </div> (konec gridu) následovaný více </div> než je potřeba
    import re
    
    # Najdeme konec gridu a opravíme strukturu
    pattern = r'(</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</section>)'
    replacement = r'</div>\n            </div>\n        </section>'
    new_content = re.sub(pattern, replacement, content)
    
    # Pokud to nefungovalo, zkusíme jiný pattern
    if new_content == original:
        pattern = r'(</div>\s*</div>\s*</div>\s*</div>\s*</section>)'
        replacement = r'</div>\n            </div>\n        </section>'
        new_content = re.sub(pattern, replacement, content)
    
    if new_content != original:
        path.write_text(new_content, encoding='utf-8')
        print("[OK] portfolio-1.html opraveno")
        return True
    else:
        print("[OK] portfolio-1.html bez zmen")
        return False

if __name__ == "__main__":
    fix_structure()



