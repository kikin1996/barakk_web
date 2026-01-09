#!/usr/bin/env python3
"""
Vylepší styling tlačítek v lightboxu
"""
import pathlib
import re

def improve_lightbox_buttons(file_path):
    """Vylepší styling tlačítek"""
    content = file_path.read_text(encoding='utf-8')
    original = content
    
    # Vylepšit tlačítka - větší, lépe viditelná
    content = re.sub(
        r'<button id="closeLightbox" class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10">×</button>',
        r'<button id="closeLightbox" class="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-all">×</button>',
        content
    )
    
    content = re.sub(
        r'<button id="prevImage" class="absolute left-4 text-white text-4xl hover:text-gray-300 z-10">‹</button>',
        r'<button id="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-all">‹</button>',
        content
    )
    
    content = re.sub(
        r'<button id="nextImage" class="absolute right-4 text-white text-4xl hover:text-gray-300 z-10">›</button>',
        r'<button id="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-all">›</button>',
        content
    )
    
    if content != original:
        file_path.write_text(content, encoding='utf-8')
        return True
    return False

def main():
    print("Vylepsuji styling tlacitek v lightboxu...\n")
    
    fixed_count = 0
    for path in sorted(pathlib.Path('.').glob('portfolio-*.html')):
        if improve_lightbox_buttons(path):
            print(f"[OK] {path.name} vylepseno")
            fixed_count += 1
        else:
            print(f"[OK] {path.name} bez zmen")
    
    print(f"\nHotovo! Vylepseno {fixed_count} souboru.")

if __name__ == "__main__":
    main()

