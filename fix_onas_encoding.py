import pathlib

replacements = {
    # Menu
    'NaĹˇe projekty': 'Naše projekty',
    'O nĂˇs': 'O nás',
    
    # Hero sekce
    'Navrhujeme interiĂ©ry a nĂˇbytek s dĹŻrazem na detail': 'Navrhujeme interiéry a nábytek s důrazem na detail',
    'Barakk je studio, kterĂ© spojuje architekturu, interiĂ©rovĂ˝ design a autorskĂ˝ nĂˇbytek.\n                        V kaĹľdĂ©m projektu hledĂˇme rovnovĂˇhu mezi estetikou, funkÄŤnostĂ­ a charakterem mĂ­sta.': 'Barakk je studio, které spojuje architekturu, interiérový design a autorský nábytek.\n                        V každém projektu hledáme rovnováhu mezi estetikou, funkčností a charakterem místa.',
    
    # Mission sekce
    'NĂˇĹˇ pĹ™Ă­stup': 'Náš přístup',
    'KaĹľdĂ˝ interiĂ©r stavĂ­me na autentickĂ˝ch materiĂˇlech, peÄŤlivĂ©m Ĺ™emesle a svÄ›tle. Respektujeme pĹŻvod\n                        prostoru a souÄŤasnÄ› do nÄ›j vnĂˇĹˇĂ­me nadÄŤasovost, kterĂˇ obstojĂ­ v ÄŤase.': 'Každý interiér stavíme na autentických materiálech, pečlivém řemesle a světle. Respektujeme původ\n                        prostoru a současně do něj vnášíme nadčasovost, která obstojí v čase.',
    'Navrhujeme takĂ© autorskĂ˝ nĂˇbytek na mĂ­ru, dĂ­ky kterĂ©mu propojujeme estetiku, ergonomii a dlouhou Ĺľivotnost.': 'Navrhujeme také autorský nábytek na míru, díky kterému propojujeme estetiku, ergonomii a dlouhou životnost.',
    
    # Co děláme
    'Co dÄ›lĂˇme': 'Co děláme',
    'NĂˇvrhy interiĂ©rĹŻ rezidenÄŤnĂ­ch i veĹ™ejnĂ˝ch prostor': 'Návrhy interiérů rezidenčních i veřejných prostor',
    'AutorskĂ˝ nĂˇbytek na mĂ­ru': 'Autorský nábytek na míru',
    'KompletnĂ­ autorskĂ˝ dozor nad realizacĂ­': 'Kompletní autorský dozor nad realizací',
    
    # Publikace
    'VybranĂ© publikace': 'Vybrané publikace',
    
    # Tým sekce
    'TĂ˝m': 'Tým',
    'Architekti, designĂ©Ĺ™i a koordinĂ¡toĹ™i realizacĂ­': 'Architekti, designéři a koordinátoři realizací',
    'Ing. KristiĂˇn Karas': 'Ing. Kristián Karas',
    'Zakladatel, hlavnĂ­ designĂ©r': 'Zakladatel, hlavní designér',
    'Vede kreativu a smÄ›Ĺ™ovĂ¡nĂ­ studia, od konceptu po finĂ¡lnĂ­ realizaci.': 'Vede kreativu a směrování studia, od konceptu po finální realizaci.',
    'Design tĂ˝m': 'Design tým',
    'InteriĂ©ry a nĂˇbytek': 'Interiéry a nábytek',
    'PĹ™ipravuje dispozice, materiĂ¡lovĂ© Ĺ™eĹ¡enĂ­, vizualizace a autorskĂ˝ nĂˇbytek.': 'Připravuje dispozice, materiálové řešení, vizualizace a autorský nábytek.',
    'RealizaÄŤnĂ­ tĂ˝m': 'Realizační tým',
    'Koordinuje Ĺ™emesla, kvalitu provedenĂ­ a plynulost harmonogramu.': 'Koordinuje řemesla, kvalitu provedení a plynulost harmonogramu.',
    
    # CTA sekce
    'MĂ¡te projekt? OzvÄ›te se.': 'Máte projekt? Ozvěte se.',
    'RĂ¡di s vĂ¡mi projdeme zadĂ¡nĂ­, rozpoÄŤet i termĂ­ny a navrhneme Ĺ™eĹ¡enĂ­ na mĂ­ru.': 'Rádi s vámi projdeme zadání, rozpočet i termíny a navrhneme řešení na míru.',
    
    # Footer
    'NaĹˇe projekty': 'Naše projekty',
    'O nĂˇs': 'O nás',
    'F. ÄŚejky 450': 'F. Čejky 450',
    'FrĂ˝dek-MĂ­stek': 'Frýdek-Místek',
    'Sledujte nĂˇs': 'Sledujte nás',
    'Â©': '©',
    'ZĂ¡sady ochrany soukromĂ­': 'Zásady ochrany soukromí',
}

path = pathlib.Path('onas.html')
data = path.read_text(encoding='utf-8')

for old, new in replacements.items():
    data = data.replace(old, new)

path.write_text(data, encoding='utf-8')

