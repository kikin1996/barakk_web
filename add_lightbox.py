#!/usr/bin/env python3
"""
Přidá lightbox funkcionalitu do všech portfolio souborů
"""
import pathlib
import re

# Lightbox HTML a CSS
lightbox_html = '''
    <!-- Lightbox Modal -->
    <div id="lightbox" class="fixed inset-0 bg-black bg-opacity-90 z-50 hidden flex items-center justify-center">
        <button id="closeLightbox" class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10">×</button>
        <button id="prevImage" class="absolute left-4 text-white text-4xl hover:text-gray-300 z-10">‹</button>
        <button id="nextImage" class="absolute right-4 text-white text-4xl hover:text-gray-300 z-10">›</button>
        <img id="lightboxImage" src="" alt="" class="max-w-full max-h-full object-contain" />
    </div>

    <style>
        #lightbox {
            transition: opacity 0.3s ease;
        }
        #lightbox.hidden {
            display: none;
        }
        #lightbox:not(.hidden) {
            display: flex;
        }
        #lightboxImage {
            animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
'''

# JavaScript pro lightbox
lightbox_js = '''
    <script>
        // Lightbox funkcionalita
        let currentImageIndex = 0;
        let images = [];

        function initLightbox() {
            const gallery = document.querySelector('.grid.grid-cols-1');
            if (!gallery) return;

            // Najít všechny obrázky v galerii
            images = Array.from(gallery.querySelectorAll('img')).map(img => img.src);
            
            // Přidat click handler na každý obrázek
            gallery.querySelectorAll('img').forEach((img, index) => {
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => openLightbox(index));
            });

            // Lightbox elementy
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            const closeBtn = document.getElementById('closeLightbox');
            const prevBtn = document.getElementById('prevImage');
            const nextBtn = document.getElementById('nextImage');

            if (!lightbox || !lightboxImage) return;

            // Zavřít lightbox
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });

            // Navigace
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showPrevImage();
            });
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showNextImage();
            });

            // Klávesnice
            document.addEventListener('keydown', (e) => {
                if (lightbox.classList.contains('hidden')) return;
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'ArrowRight') showNextImage();
            });
        }

        function openLightbox(index) {
            currentImageIndex = index;
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            if (lightbox && lightboxImage && images[index]) {
                lightboxImage.src = images[index];
                lightbox.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            if (lightbox) {
                lightbox.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        function showPrevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            const lightboxImage = document.getElementById('lightboxImage');
            if (lightboxImage && images[currentImageIndex]) {
                lightboxImage.src = images[currentImageIndex];
            }
        }

        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            const lightboxImage = document.getElementById('lightboxImage');
            if (lightboxImage && images[currentImageIndex]) {
                lightboxImage.src = images[currentImageIndex];
            }
        }

        // Inicializovat po načtení stránky
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initLightbox);
        } else {
            initLightbox();
        }
    </script>
'''

def add_lightbox(file_path):
    """Přidá lightbox do portfolio souboru"""
    content = file_path.read_text(encoding='utf-8')
    
    # Zkontrolovat, jestli už lightbox není přidán
    if 'id="lightbox"' in content:
        return False
    
    # Najít konec body tagu
    body_end = content.rfind('</body>')
    if body_end == -1:
        return False
    
    # Přidat lightbox HTML a JS před </body>
    new_content = content[:body_end] + lightbox_html + lightbox_js + '\n</body>'
    
    file_path.write_text(new_content, encoding='utf-8')
    return True

def main():
    print("Pridavam lightbox funkcionalitu do portfolio souboru...\n")
    
    fixed_count = 0
    for path in sorted(pathlib.Path('.').glob('portfolio-*.html')):
        if add_lightbox(path):
            print(f"[OK] {path.name} - lightbox pridan")
            fixed_count += 1
        else:
            print(f"[SKIP] {path.name} - uz ma lightbox nebo chyba")
    
    print(f"\nHotovo! Lightbox pridan do {fixed_count} souboru.")

if __name__ == "__main__":
    main()

