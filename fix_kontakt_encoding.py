import pathlib

replacements = {
    'Spojte se s nĂˇmi': 'Spojte se s námi',
    'PojÄŹme si Ĺ™Ă­ct vĂ­ce o vaĹˇem projektu. Preferujeme osobnĂ­ schĹŻzku nebo videohovor,\n                        kde projdeme zadĂˇnĂ­, rozpoÄŤet a harmonogram.': 'Pojďme si říct více o vašem projektu. Preferujeme osobní schůzku nebo videohovor,\n                        kde projdeme zadání, rozpočet a harmonogram.',
    'Ing. KristiĂˇn Karas': 'Ing. Kristián Karas',
    'F. ÄŚejky 450': 'F. Čejky 450',
    'FrĂ˝dek-MĂ­stek': 'Frýdek-Místek',
    'SociĂˇlnĂ­ sĂ­tÄ›': 'Sociální sítě',
    'NapiĹˇte nĂˇm': 'Napište nám',
    'KrĂˇtce popiĹˇte projekt, rozmÄ›ry, termĂ­n a rozpoÄŤet.': 'Krátce popište projekt, rozměry, termín a rozpočet.',
    'JmĂ©no a pĹ™Ă­jmenĂ­': 'Jméno a příjmení',
    'Jan NovĂˇk': 'Jan Novák',
    'Rozsah, termĂ­n, rozpoÄŤet, stylyâ€¦': 'Rozsah, termín, rozpočet, styly…',
    'Realizujeme projekty po celĂ© EvropÄ›. Pro schĹŻzky vyuĹľĂ­vĂˇme studio v Polsku,\n                        online meetingy a pĹ™i vÄ›tĹˇĂ­ch projektech i onsite workshop.': 'Realizujeme projekty po celé Evropě. Pro schůzky využíváme studio v Polsku,\n                        online meetingy a při větších projektech i onsite workshop.',
    'PotĹ™ebujete konzultaci? NapiĹˇte nĂˇm a domluvĂ­me termĂ­n.': 'Potřebujete konzultaci? Napište nám a domluvíme termín.',
}

path = pathlib.Path('kontakt.html')
data = path.read_text(encoding='utf-8')

for old, new in replacements.items():
    data = data.replace(old, new)

path.write_text(data, encoding='utf-8')


