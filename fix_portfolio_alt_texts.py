import pathlib
import re

# Opravy pro alt texty
replacements = {
    'VARĹ AVA': 'VARŠAVA',
    'â€"': '–',
    'MOKOTĂ"W': 'MOKOTÓW',
    'Ĺ TÄšTĂŤN': 'ŠTĚTÍN',
    'ObrĂˇzek': 'Obrázek',
}

for path in pathlib.Path('.').glob('portfolio-*.html'):
    data = path.read_text(encoding='utf-8')
    
    # Opravit alt texty
    for old, new in replacements.items():
        data = data.replace(old, new)
    
    # Opravit také specifické případy
    data = re.sub(r'alt="([^"]*?)VARĹ\s*AVA([^"]*?)"', r'alt="\1VARŠAVA\2"', data)
    data = re.sub(r'alt="([^"]*?)â€"([^"]*?)"', r'alt="\1–\2"', data)
    data = re.sub(r'alt="([^"]*?)MOKOTĂ"W([^"]*?)"', r'alt="\1MOKOTÓW\2"', data)
    data = re.sub(r'alt="([^"]*?)Ĺ\s*TÄšTĂŤN([^"]*?)"', r'alt="\1ŠTĚTÍN\2"', data)
    
    path.write_text(data, encoding='utf-8')

print(f"Opraveny alt texty ve všech portfolio souborech")


