const fs = require('fs');
const path = require('path');

// Najdeme všechny portfolio stránky
const files = fs.readdirSync('.');
const portfolioFiles = files.filter(f => f.startsWith('portfolio-') && f.endsWith('.html')).sort();

console.log(`Přidávám lightbox do ${portfolioFiles.length} portfolio stránek...\n`);

// Lightbox HTML a JavaScript
const lightboxHTML = `
    <!-- Lightbox Modal -->
    <div id="lightbox" class="fixed inset-0 bg-black bg-opacity-90 z-50 hidden flex items-center justify-center">
        <button id="closeLightbox" class="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-all">×</button>
        <button id="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-all">‹</button>
        <button id="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-all">›</button>
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

    <script>
        // Lightbox funkcionalita
        let currentImageIndex = 0;
        let images = [];

        function initLightbox() {
            // Najít galerii podle sekce
            const gallerySection = document.querySelector('section.py-8.bg-gray-50');
            if (!gallerySection) {
                return;
            }
            
            const gallery = gallerySection.querySelector('.grid');
            if (!gallery) {
                return;
            }

            // Najít všechny obrázky v galerii
            images = Array.from(gallery.querySelectorAll('img')).map(img => img.src);
            
            if (images.length === 0) {
                return;
            }
            
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
    </script>`;

portfolioFiles.forEach((file, index) => {
  try {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Zkontrolujeme, jestli už lightbox není
    if (content.includes('id="lightbox"')) {
      console.log(`⏭️  ${file}: lightbox již existuje`);
      return;
    }
    
    // Najdeme konec </body> a přidáme lightbox před něj
    const bodyEndIndex = content.lastIndexOf('</body>');
    if (bodyEndIndex === -1) {
      console.log(`❌ ${file}: nenalezen </body>`);
      return;
    }
    
    // Vložíme lightbox před </body>
    content = content.substring(0, bodyEndIndex) + lightboxHTML + '\n</body>';
    
    // Uložíme
    fs.writeFileSync(file, content, 'utf-8');
    
    if ((index + 1) % 10 === 0) {
      console.log(`✓ Přidáno lightbox do ${index + 1}/${portfolioFiles.length} stránek...`);
    }
  } catch (error) {
    console.error(`❌ Chyba při zpracování ${file}:`, error.message);
  }
});

console.log(`\n✅ Hotovo! Lightbox přidán do všech portfolio stránek.`);

