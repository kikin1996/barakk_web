import pathlib
import re

# Všechny opravy kódování
replacements = {
    # Speciální znaky
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
    
    # Opravit také pomocí regexu pro jistotu
    data = re.sub(r'â€"', '–', data)
    data = re.sub(r'VARĹ\s+AVA', 'VARŠAVA', data)
    data = re.sub(r'VARĹ\s*AVA', 'VARŠAVA', data)
    data = re.sub(r'MOKOTĂ"W', 'MOKOTÓW', data)
    data = re.sub(r'Ĺ\s*TÄšTĂŤN', 'ŠTĚTÍN', data)
    
    # Opravit mezery v VARŠAVA
    data = re.sub(r'VARŠ\s+AVA', 'VARŠAVA', data)
    
    path.write_text(data, encoding='utf-8')

print(f"Opraveno {len(list(pathlib.Path('.').glob('portfolio-*.html')))} portfolio souborů")


