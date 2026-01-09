import pathlib

# Všechny opravy kódování
replacements = {
    'Ĺ panÄ›lsko': 'Španělsko',
    'Ĺ panÄ›lskĂ©': 'Španělské',
    'Ĺ tÄ›tĂ­nÄ›': 'Štětíně',
    'VarĹˇava': 'Varšava',
    'VarĹˇavÄ›': 'Varšavě',
    'varĹˇavskĂ©': 'varšavské',
    'MokotĂłw': 'Mokotów',
    'KamieĹ„i': 'Kamieni',
    'Pomorski': 'Pomorski',
    'Grzybowska': 'Grzybowska',
    'Woronicza': 'Woronicza',
    'DĹ®M': 'DŮM',
    'DĹŻm': 'Dům',
    'ZpÄ›t': 'Zpět',
    'Projekty interiĂ©rĹŻ': 'Projekty interiérů',
    'ObrĂˇzek': 'Obrázek',
    'vĹˇechny': 'všechny',
    'NaĹˇe': 'Naše',
    'O nĂˇs': 'O nás',
    'Sledujte nĂˇs': 'Sledujte nás',
    'FrĂ˝dek-MĂ­stek': 'Frýdek-Místek',
    'F. ÄŚejky': 'F. Čejky',
    'ZĂˇsady': 'Zásady',
    'soukromĂ­': 'soukromí',
    'Â©': '©'
}

for path in pathlib.Path('.').glob('portfolio-*.html'):
    data = path.read_text(encoding='utf-8')
    for old, new in replacements.items():
        data = data.replace(old, new)
    path.write_text(data, encoding='utf-8')


