import pathlib

# Všechny opravy kódování pro portfolio stránky
replacements = {
    # Menu a footer
    'NaĹˇe projekty': 'Naše projekty',
    'O nĂˇs': 'O nás',
    'Sledujte nĂˇs': 'Sledujte nás',
    'F. ÄŚejky 450': 'F. Čejky 450',
    'FrĂ˝dek-MĂ­stek': 'Frýdek-Místek',
    'ZĂˇsady ochrany soukromĂ­': 'Zásady ochrany soukromí',
    'Â©': '©',
    
    # Popisy projektů a další texty
    'IndustriĂˇlnĂ­': 'Industriální',
    'varšavské ÄŤtvrti': 'varšavské čtvrti',
    'OtevĹ™enĂ˝': 'Otevřený',
    'cihlovĂ˝mi': 'cihlovými',
    'stÄ›nami': 'stěnami',
    'modernĂ­m': 'moderním',
    'vybavenĂ­m': 'vybavením',
    'IndustriĂˇlnĂ­ loft': 'Industriální loft',
    'OtevĹ™enĂ˝ prostor': 'Otevřený prostor',
}

for path in pathlib.Path('.').glob('portfolio-*.html'):
    data = path.read_text(encoding='utf-8')
    for old, new in replacements.items():
        data = data.replace(old, new)
    path.write_text(data, encoding='utf-8')

print(f"Opraveno {len(list(pathlib.Path('.').glob('portfolio-*.html')))} portfolio souborů")


