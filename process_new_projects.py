#!/usr/bin/env python3
"""
Skript pro zpracování nových projektů ze složky D:\premium\interier
- Optimalizuje fotky pro web
- Vytváří portfolio stránky
- Aktualizuje index.html
"""
import os
import shutil
from PIL import Image
import json

# Města v ČR pro náhodné přiřazení
CZECH_CITIES = [
    "Praha", "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc", 
    "České Budějovice", "Hradec Králové", "Ústí nad Labem", "Pardubice",
    "Zlín", "Havířov", "Kladno", "Most", "Opava", "Frýdek-Místek",
    "Karviná", "Jihlava", "Teplice", "Děčín"
]

SOURCE_DIR = r"D:\premium\interier"
TARGET_IMAGES_DIR = "public/images/projects"
MAX_WIDTH = 1920
JPEG_QUALITY = 85

def optimize_image(input_path, output_path, max_width=MAX_WIDTH, quality=JPEG_QUALITY):
    """Optimalizuje obrázek pro web"""
    try:
        with Image.open(input_path) as img:
            # Konvertovat RGBA na RGB pokud je to potřeba
            if img.mode in ('RGBA', 'LA', 'P'):
                # Vytvořit bílé pozadí pro transparentní obrázky
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Zmenšit pokud je větší než max_width
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Uložit jako JPEG
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            return True
    except Exception as e:
        print(f"   [CHYBA] Chyba při optimalizaci {input_path}: {e}")
        return False

def read_info_txt(folder_path):
    """Přečte info.txt soubor a vrátí data"""
    info_path = os.path.join(folder_path, "info.txt")
    if not os.path.exists(info_path):
        return None
    
    try:
        with open(info_path, 'r', encoding='utf-8') as f:
            lines = [line.strip() for line in f.readlines() if line.strip()]
        
        data = {}
        if len(lines) > 0:
            # Rok
            data['year'] = lines[0].replace('Rok ', '').replace('rok ', '').strip()
        if len(lines) > 1:
            # Město
            data['city'] = lines[1].strip()
        if len(lines) > 2:
            # Popis (zbytek)
            data['description'] = ' '.join(lines[2:])
        
        return data
    except Exception as e:
        print(f"   [CHYBA] Chyba při čtení info.txt: {e}")
        return None

def get_image_files(folder_path):
    """Vrátí seznam obrázků ve složce"""
    image_extensions = ('.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG')
    images = []
    for file in os.listdir(folder_path):
        if file.lower().endswith(image_extensions):
            images.append(file)
    return sorted(images)

def process_projects():
    """Zpracuje všechny projekty ze složky"""
    projects = []
    
    if not os.path.exists(SOURCE_DIR):
        print(f"[CHYBA] Složka {SOURCE_DIR} neexistuje!")
        return projects
    
    # Vytvořit cílovou složku pro obrázky
    os.makedirs(TARGET_IMAGES_DIR, exist_ok=True)
    
    # Projít všechny složky
    for folder_name in sorted(os.listdir(SOURCE_DIR)):
        folder_path = os.path.join(SOURCE_DIR, folder_name)
        if not os.path.isdir(folder_path):
            continue
        
        print(f"\nZpracovávám: {folder_name}")
        
        # Přečíst info.txt
        info = read_info_txt(folder_path)
        
        # Získat obrázky
        images = get_image_files(folder_path)
        if not images:
            print(f"   [SKIP] Žádné obrázky v {folder_name}")
            continue
        
        # Vytvořit název projektu a město
        if info and 'city' in info:
            city = info['city']
        else:
            # Náhodně vybrat město (použijeme hash názvu složky pro konzistenci)
            city_index = hash(folder_name) % len(CZECH_CITIES)
            city = CZECH_CITIES[city_index]
        
        # Vytvořit název projektu podle typu
        if 'bungalov' in folder_name.lower():
            title = "Moderní bungalov"
        elif 'byt' in folder_name.lower() or 'dvojdum' in folder_name.lower():
            if 'dvojdum' in folder_name.lower():
                title = "Dvojdomek"
            elif '1' in folder_name.lower() or 'jedno' in folder_name.lower():
                title = "Jednopokojový byt"
            else:
                title = "Byt 2+kk"
        elif 'gryc' in folder_name.lower():
            title = "Moderní byt"
        elif 'karsky' in folder_name.lower():
            title = "Elegantní byt"
        elif 'hluže' in folder_name.lower():
            title = "Luxusní byt"
        elif 'makovec' in folder_name.lower():
            title = "Rodinný dům"
        else:
            title = "Interiérový design"
        
        # Vytvořit popis
        if info and 'description' in info and info['description']:
            description = info['description']
        else:
            # Vytvořit generický popis
            description = f"Návrh interiéru {title.lower()} v {city} kombinuje moderní design s funkčností. Design klade důraz na světlé dřevěné prvky, vestavěné skříně pro maximální úložný prostor a neutrální paletu s jemnými akcenty, čímž vytváří vkusný a moderní prostor pro každodenní život."
        
        # Vytvořit složku pro projekt
        project_id = len(projects) + 5  # Začínáme od 5 (projekty 1-4 jsou realizace)
        project_folder = os.path.join(TARGET_IMAGES_DIR, f"project-{project_id}")
        os.makedirs(project_folder, exist_ok=True)
        
        # Optimalizovat a zkopírovat obrázky
        optimized_images = []
        for i, img_file in enumerate(images):
            input_path = os.path.join(folder_path, img_file)
            output_filename = f"image-{i+1:03d}.jpg"
            output_path = os.path.join(project_folder, output_filename)
            
            if optimize_image(input_path, output_path):
                optimized_images.append(f"public/images/projects/project-{project_id}/{output_filename}")
                print(f"   [OK] {img_file} -> {output_filename}")
        
        if not optimized_images:
            print(f"   [SKIP] Žádné obrázky se nepodařilo optimalizovat")
            continue
        
        # Vytvořit projekt data
        project = {
            'id': project_id,
            'title': title,
            'city': city,
            'year': info.get('year', '2025') if info else '2025',
            'description': description,
            'images': optimized_images,
            'folder_name': folder_name
        }
        
        projects.append(project)
        print(f"   [OK] Projekt vytvořen: {title}, {city}, {len(optimized_images)} obrázků")
    
    return projects

if __name__ == "__main__":
    print("Zpracovávám nové projekty...")
    projects = process_projects()
    print(f"\n\nHotovo! Zpracováno {len(projects)} projektů.")
    
    # Uložit data do JSON pro další použití
    with open('new_projects_data.json', 'w', encoding='utf-8') as f:
        json.dump(projects, f, ensure_ascii=False, indent=2)
    print("Data uložena do new_projects_data.json")

