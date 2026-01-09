import pathlib
import re

# Opravy pro nadpisy a alt texty
replacements = {
    'â€"': '–',
    'VARĹ AVA': 'VARŠAVA',
    'VARĹ': 'VARŠ',
    'MOKOTĂ"W': 'MOKOTÓW',
    'Ĺ TÄšTĂŤN': 'ŠTĚTÍN',
}

for path in pathlib.Path('.').glob('portfolio-*.html'):
    data = path.read_text(encoding='utf-8')
    
    # Opravit všechny výskyty
    for old, new in replacements.items():
        data = data.replace(old, new)
    
    # Opravit také regexem pro jistotu
    data = re.sub(r'â€"', '–', data)
    data = re.sub(r'VARĹ\s*AVA', 'VARŠAVA', data)
    data = re.sub(r'MOKOTĂ"W', 'MOKOTÓW', data)
    data = re.sub(r'Ĺ\s*TÄšTĂŤN', 'ŠTĚTÍN', data)
    
    path.write_text(data, encoding='utf-8')

print(f"Opraveny nadpisy a alt texty ve všech portfolio souborech")


