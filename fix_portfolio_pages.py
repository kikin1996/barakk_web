#!/usr/bin/env python3
"""
Opraví portfolio stránky - nahradí staré obrázky novými
"""
import json
import re

def fix_portfolio_page(project):
    """Opraví portfolio stránku"""
    project_id = project['id']
    title = project['title']
    city = project['city']
    year = project['year']
    description = project['description']
    images = project['images']
    
    file_path = f"portfolio-{project_id}.html"
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Nahradit hero obrázek
        hero_image = images[0] if images else ""
        content = re.sub(
            r'<img src="[^"]*" alt="[^"]*" class="w-full h-full object-cover" />',
            f'<img src="{hero_image}" alt="{title}" class="w-full h-full object-cover" />',
            content,
            count=1
        )
        
        # Najít a nahradit galerii
        gallery_start = content.find('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">')
        if gallery_start > 0:
            # Najít konec galerie (před </div> které uzavírá grid)
            gallery_end = content.find('</div>', gallery_start + 200)
            if gallery_end > 0:
                # Vytvořit novou galerii
                gallery_html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n'
                for img_path in images:
                    gallery_html += f'''                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 group cursor-pointer">
                            <img src="{img_path}" alt="{title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                        </div>
'''
                gallery_html += '                </div>'
                
                # Nahradit starou galerii
                old_gallery = content[gallery_start:gallery_end + 6]
                content = content.replace(old_gallery, gallery_html)
        
        # Uložit
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"[OK] Opraven {file_path}")
        return True
    except Exception as e:
        print(f"[CHYBA] Chyba při opravě {file_path}: {e}")
        return False

def main():
    with open('new_projects_data.json', 'r', encoding='utf-8') as f:
        projects = json.load(f)
    
    print(f"Opravuji {len(projects)} portfolio stránek...\n")
    
    for project in projects:
        fix_portfolio_page(project)
    
    print("\nHotovo!")

if __name__ == "__main__":
    main()

