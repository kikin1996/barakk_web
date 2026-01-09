import pathlib

# Všechny opravy kódování
replacements = {
    'dennĂ­ho': 'denního',
    'dennĂ­': 'denní',
    'dennĂ­m': 'denním',
}

for path in pathlib.Path('.').glob('portfolio-*.html'):
    data = path.read_text(encoding='utf-8')
    for old, new in replacements.items():
        data = data.replace(old, new)
    path.write_text(data, encoding='utf-8')


