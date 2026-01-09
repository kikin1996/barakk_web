#!/usr/bin/env python3
"""
Opraví zbývající soubory
"""
import pathlib

def fix_portfolio2():
    """Opraví portfolio-2.html"""
    path = pathlib.Path('portfolio-2.html')
    content = path.read_text(encoding='utf-8')
    
    # Nahradit přebytečné </div> tagy
    old = '                </div>\n                </div>\n                </div>\n        </section>'
    new = '                </div>\n            </div>\n        </section>'
    
    if old in content:
        content = content.replace(old, new)
        path.write_text(content, encoding='utf-8')
        return True
    return False

def fix_portfolio4():
    """Opraví portfolio-4.html"""
    path = pathlib.Path('portfolio-4.html')
    content = path.read_text(encoding='utf-8')
    
    # Nahradit přebytečné </div> tagy
    old = '                </div>\n                </div>\n                </div>\n        </section>'
    new = '                </div>\n            </div>\n        </section>'
    
    if old in content:
        content = content.replace(old, new)
        path.write_text(content, encoding='utf-8')
        return True
    return False

def main():
    print("Opravuji zbývající soubory...\n")
    
    fixed = []
    if fix_portfolio2():
        fixed.append('portfolio-2.html')
    if fix_portfolio4():
        fixed.append('portfolio-4.html')
    
    if fixed:
        print(f"[OK] Opraveno: {', '.join(fixed)}")
    else:
        print("[OK] Žádné soubory k opravě")
    
    print("\nHotovo!")

if __name__ == "__main__":
    main()

