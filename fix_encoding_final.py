import pathlib
import re

# Všechny opravy - používáme různé varianty problémových znaků
fixes = [
    (r'Ĺ\s*panÄ›lsko', 'Španělsko'),
    (r'Ĺ\s*panÄ›lskĂ©', 'Španělské'),
    (r'Ĺ\s*tÄ›tĂ­nÄ›', 'Štětíně'),
    (r'VarĹˇava', 'Varšava'),
    (r'VarĹˇavÄ›', 'Varšavě'),
    (r'varĹˇavskĂ©', 'varšavské'),
    (r'InteriĂ©r', 'Interiér'),
    (r'tradiÄŤnĂ­m', 'tradičním'),
    (r'ĹˇpanÄ›lskĂ˝m', 'španělským'),
    (r'ProstornĂ©', 'Prostorné'),
    (r'mĂ­stnosti', 'místnosti'),
    (r'velkĂ˝mi', 'velkými'),
    (r'dĂˇvajĂ­', 'dávají'),
    (r'svÄ›tla', 'světla'),
    (r'minimalistickĂ˝', 'minimalistický'),
    (r'nĂˇbytek', 'nábytek'),
    (r'vytvĂˇĹ™Ă­', 'vytváří'),
    (r'klidnou', 'klidnou'),
    (r'atmosfĂ©ru', 'atmosféru'),
]

for path in pathlib.Path('.').glob('portfolio-*.html'):
    data = path.read_text(encoding='utf-8')
    
    # Opravit všechny problémy s kódováním
    for pattern, replacement in fixes:
        data = re.sub(pattern, replacement, data, flags=re.IGNORECASE)
    
    # Opravit také konkrétní texty
    data = data.replace('Barcelona, Ĺ panÄ›lsko', 'Barcelona, Španělsko')
    data = data.replace('Barcelona, ĹpanÄ›lsko', 'Barcelona, Španělsko')
    data = data.replace('Barcelona,Ĺ panÄ›lsko', 'Barcelona, Španělsko')
    
    path.write_text(data, encoding='utf-8')


