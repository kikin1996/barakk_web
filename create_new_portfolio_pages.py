#!/usr/bin/env python3
"""
Vytvoří portfolio stránky pro nové projekty
"""
import json
import os

def create_portfolio_page(project):
    """Vytvoří HTML stránku pro projekt"""
    project_id = project['id']
    title = project['title']
    city = project['city']
    year = project['year']
    description = project['description']
    images = project['images']
    
    # První obrázek jako hero
    hero_image = images[0] if images else ""
    
    # Načíst template z portfolio-1.html
    template_path = "portfolio-1.html"
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()
    
    # Nahradit specifické části
    template = template.replace('Moderní rodinný dům', title)
    template = template.replace('Čeladná', city)
    template = template.replace('2023', year)
    template = template.replace(
        'https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3.jpg',
        hero_image
    )
    template = template.replace(
        'Komplexní návrh a realizace interiéru moderního rodinného domu v Čeladné kombinuje současný design s funkčností. Prosvětlené prostory s velkými okny zajišťují dostatek přirozeného světla po celý den. Minimalistický přístup k zařízení vytváří klidnou a harmonickou atmosféru, ideální pro rodinný život. Každý detail byl pečlivě promyšlen tak, aby splňoval potřeby moderní rodiny a zároveň vytvářel esteticky působivý prostor.',
        description
    )
    
    # Aktualizovat galerii
    gallery_start = template.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">')
    gallery_end = template.find('</div>', gallery_start + 200)
    
    if gallery_start > 0 and gallery_end > 0:
        # Vytvořit novou galerii
        gallery_html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n'
        for img_path in images:
            gallery_html += f'''                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer">
                            <img src="{img_path}" alt="{title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                        </div>
'''
        gallery_html += '                </div>'
        
        # Nahradit starou galerii
        old_gallery = template[gallery_start:gallery_end + 6]
        template = template.replace(old_gallery, gallery_html)
    
    # Uložit do souboru
    output_path = f"portfolio-{project_id}.html"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f"[OK] Vytvořen {output_path}")

def main():
    # Načíst data projektů
    with open('new_projects_data.json', 'r', encoding='utf-8') as f:
        projects = json.load(f)
    
    print(f"Vytváření {len(projects)} portfolio stránek...\n")
    
    for project in projects:
        create_portfolio_page(project)
    
    print(f"\nHotovo! Vytvořeno {len(projects)} portfolio stránek.")

if __name__ == "__main__":
    main()



