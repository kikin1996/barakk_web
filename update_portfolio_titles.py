#!/usr/bin/env python3
"""
Aktualizuje názvy a popisy v portfolio stránkách podle JSON dat
"""
import json
import re

def update_portfolio_page(project):
    """Aktualizuje portfolio stránku"""
    project_id = project['id']
    title = project['title']
    city = project['city']
    year = project['year']
    description = project['description']
    
    file_path = f"portfolio-{project_id}.html"
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Aktualizovat title tag
        content = re.sub(
            r'<title>.*?</title>',
            f'<title>{title} - {city} - Barakk.cz</title>',
            content
        )
        
        # Aktualizovat hero nadpis
        content = re.sub(
            r'<h1 class="text-5xl md:text-7xl font-light mb-4">.*?</h1>',
            f'<h1 class="text-5xl md:text-7xl font-light mb-4">{title}</h1>',
            content
        )
        
        # Aktualizovat město pod nadpisem
        content = re.sub(
            r'<p class="text-xl">.*?</p>',
            f'<p class="text-xl">{city}</p>',
            content,
            count=1
        )
        
        # Aktualizovat tagy (město a rok)
        content = re.sub(
            r'<span class="px-4 py-2 bg-gray-100 rounded">.*?</span>',
            f'<span class="px-4 py-2 bg-gray-100 rounded">Návrhy</span>\n                        <span class="px-4 py-2 bg-gray-100 rounded">{city}</span>\n                        <span class="px-4 py-2 bg-gray-100 rounded">{year}</span>',
            content,
            count=1
        )
        
        # Aktualizovat popis
        content = re.sub(
            r'<p class="text-lg text-gray-700 leading-relaxed">.*?</p>',
            f'<p class="text-lg text-gray-700 leading-relaxed">{description}</p>',
            content,
            flags=re.DOTALL
        )
        
        # Uložit
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"[OK] Aktualizován {file_path}")
        return True
    except Exception as e:
        print(f"[CHYBA] Chyba při aktualizaci {file_path}: {e}")
        return False

def main():
    with open('new_projects_data.json', 'r', encoding='utf-8') as f:
        projects = json.load(f)
    
    print(f"Aktualizuji {len(projects)} portfolio stránek...\n")
    
    for project in projects:
        update_portfolio_page(project)
    
    print("\nHotovo!")

if __name__ == "__main__":
    main()

