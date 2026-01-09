import pathlib
import re

# Správné menu s UTF-8 znaky
correct_menu = '''                <nav class="hidden lg:flex items-center space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-black text-sm font-medium">Home</a>
                    <a href="index.html#portfolioGrid" class="text-gray-700 hover:text-black text-sm font-medium">Naše projekty</a>
                    <a href="onas.html" class="text-gray-700 hover:text-black text-sm font-medium">O nás</a>
                    <a href="kontakt.html" class="text-gray-700 hover:text-black text-sm font-medium">Kontakt</a>
                </nav>'''

for path in pathlib.Path('.').glob('portfolio-*.html'):
    data = path.read_text(encoding='utf-8')
    
    # Nahradit menu s HTML entitami správným menu
    data = re.sub(
        r'<nav class="hidden lg:flex items-center space-x-8">.*?</nav>',
        correct_menu,
        data,
        flags=re.DOTALL
    )
    
    # Opravit také další texty s HTML entitami
    replacements = {
        'Na&amp;scaron;e projekty': 'Naše projekty',
        'O n&amp;aacute;s': 'O nás',
        'ZpÄ›t na projekty': 'Zpět na projekty',
        'Projekty interiĂ©rĹŻ': 'Projekty interiérů',
        'Barcelona, Ĺ panÄ›lsko': 'Barcelona, Španělsko',
        'DĹ®M U BARCELONY': 'DŮM U BARCELONY',
        'DĹŻm u Barcelony': 'Dům u Barcelony',
        'ObrĂˇzek': 'Obrázek',
        'vĹˇechny': 'všechny'
    }
    
    for old, new in replacements.items():
        data = data.replace(old, new)
    
    path.write_text(data, encoding='utf-8')


