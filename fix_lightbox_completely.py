#!/usr/bin/env python3
"""
Kompletně opraví lightbox - lepší selektor a click handler na div
"""
import pathlib
import re

new_lightbox_js = '''
    <script>
        // Lightbox funkcionalita
        let currentImageIndex = 0;
        let images = [];

        function initLightbox() {
            // Najít galerii podle sekce
            const gallerySection = document.querySelector('section.py-8.bg-gray-50');
            if (!gallerySection) {
                console.log('Galerie sekce nenalezena');
                return;
            }
            
            const gallery = gallerySection.querySelector('.grid');
            if (!gallery) {
                console.log('Grid nenalezen');
                return;
            }

            // Najít všechny obrázky v galerii
            images = Array.from(gallery.querySelectorAll('img')).map(img => img.src);
            
            if (images.length === 0) {
                console.log('Zadne obrazky nenalezeny');
                return;
            }
            
            console.log('Nalezeno ' + images.length + ' obrazku');
            
            // Přidat click handler na každý div s obrázkem
            gallery.querySelectorAll('div.relative').forEach((div, index) => {
                const img = div.querySelector('img');
                if (img) {
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openLightbox(index);
                    });
                }
            });

            // Lightbox elementy
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightboxImage');
            const closeBtn = document.getElementById('closeLightbox');
            const prevBtn = document.getElementById('prevImage');
            const nextBtn = document.getElementById('nextImage');

            if (!lightbox || !lightboxImage) {
                console.log('Lightbox elementy nenalezeny');
                return;
            }

            // Zavřít lightbox
            if (closeBtn) {
                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    closeLightbox();
                });
            }
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.id === 'lightbox') {
                    closeLightbox();
                }
            });

            // Navigace
            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showPrevImage();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showNextImage();
                });
            }

            // Klávesnice
            document.addEventListener('keydown', (e) => {
                if (lightbox.classList.contains('hidden')) return;
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'ArrowRight') showNextImage();
            });
        }

        function openLightbox(index) {
            console.log('Otevira se lightbox pro index:', index);
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
        
        // Také zkusit po malém zpoždění pro jistotu
        setTimeout(initLightbox, 100);
    </script>
'''

def replace_lightbox_js(file_path):
    """Nahradí starý lightbox JS novým"""
    content = file_path.read_text(encoding='utf-8')
    
    # Najít a nahradit celý script tag s lightbox funkcionalitou
    pattern = r'<script>\s*// Lightbox funkcionalita.*?</script>'
    
    if re.search(pattern, content, re.DOTALL):
        new_content = re.sub(pattern, new_lightbox_js.strip(), content, flags=re.DOTALL)
        file_path.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    print("Opravuji lightbox ve vsech portfolio souborech...\n")
    
    fixed_count = 0
    for path in sorted(pathlib.Path('.').glob('portfolio-*.html')):
        if replace_lightbox_js(path):
            print(f"[OK] {path.name} opraveno")
            fixed_count += 1
        else:
            print(f"[SKIP] {path.name} - script nenalezen")
    
    print(f"\nHotovo! Opraveno {fixed_count} souboru.")

if __name__ == "__main__":
    main()

