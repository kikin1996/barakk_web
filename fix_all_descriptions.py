import pathlib

fixes = {
    'LuxusnĂ­ penthouse ve VarĹˇavÄ› s panoramatickĂ˝m vĂ˝hledem na mÄ›sto. ModernĂ­ design s materiĂˇly nejvyĹˇĹˇĂ­ kvality.': 'Luxusní penthouse ve Varšavě s panoramatickým výhledem na město. Moderní design s materiály nejvyšší kvality.',
    'ElegantnĂ­ byt na ulici Grzybowska. Projekt se vyznaÄŤuje vytĹ™Ă­benĂ˝m designem a materiĂˇly vysokĂ© kvality.': 'Elegantní byt na ulici Grzybowska. Projekt se vyznačuje vytříbeným designem a materiály vysoké kvality.',
    'ModernĂ­ interiĂ©ry ve vÄ›ĹľovĂ©m domÄ› Hanza Tower ve Ĺ tÄ›tĂ­nÄ›. Projekt vyuĹľĂ­vĂˇ prostor a svÄ›tlo a vytvĂˇĹ™Ă­ elegantnĂ­ obytnĂ© zĂłny.': 'Moderní interiéry ve věžovém domě Hanza Tower ve Štětíně. Projekt využívá prostor a světlo a vytváří elegantní obytné zóny.',
    'ĂštulnĂ˝ prĂˇzdninovĂ˝ byt v KamieĹ„i Pomorski. LehkĂˇ, pĹ™Ă­moĹ™skĂˇ atmosfĂ©ra s pĹ™Ă­rodnĂ­mi materiĂˇly a svÄ›tlĂ˝mi barvami.': 'Útulný prázdninový byt v Kamieni Pomorski. Lehká, přímořská atmosféra s přírodními materiály a světlými barvami.',
    'NĂˇvrh kancelĂˇĹ™e s vĂ˝hledem na Ĺ™eku. ProstornĂ©, modernĂ­ pracovnĂ­ plochy s industriĂˇlnĂ­mi akcenty a pĹ™Ă­rodnĂ­mi materiĂˇly.': 'Návrh kanceláře s výhledem na řeku. Prostorné, moderní pracovní plochy s industriálními akcenty a přírodními materiály.',
    'ModernĂ­ byt ve varĹˇavskĂ© ÄŤtvrti MokotĂłw. Projekt se vyznaÄŤuje otevĹ™enĂ˝m prostorem, elegantnĂ­mi materiĂˇly a funkÄŤnĂ­ dispozicĂ­.': 'Moderní byt ve varšavské čtvrti Mokotów. Projekt se vyznačuje otevřeným prostorem, elegantními materiály a funkční dispozicí.',
    'ElegantnĂ­ byt ve ÄŤtvrti MokotĂłw. ModernĂ­ design s kvalitnĂ­mi materiĂˇly a funkÄŤnĂ­ dispozicĂ­.': 'Elegantní byt ve čtvrti Mokotów. Moderní design s kvalitními materiály a funkční dispozicí.',
    'ModernĂ­ loft na ulici Woronicza ve VarĹˇavÄ›. OtevĹ™enĂ˝ prostor s industriĂˇlnĂ­mi akcenty.': 'Moderní loft na ulici Woronicza ve Varšavě. Otevřený prostor s industriálními akcenty.',
    'NĂˇvrh interiĂ©ru restaurace Punkt Cafe ve Ĺ tÄ›tĂ­nÄ›. ModernĂ­ gastronomickĂ˝ prostor s industriĂˇlnĂ­mi akcenty.': 'Návrh interiéru restaurace Punkt Cafe ve Štětíně. Moderní gastronomický prostor s industriálními akcenty.',
    'NĂˇvrh interiĂ©ru kavĂˇrny Limone ve Ĺ tÄ›tĂ­nÄ›. ĂštulnĂ˝ prostor s barevnĂ˝mi akcenty a pĹ™Ă­rodnĂ­mi materiĂˇly.': 'Návrh interiéru kavárny Limone ve Štětíně. Útulný prostor s barevnými akcenty a přírodními materiály.'
}

for path in pathlib.Path('.').glob('portfolio-*.html'):
    data = path.read_text(encoding='utf-8')
    for old, new in fixes.items():
        data = data.replace(old, new)
    path.write_text(data, encoding='utf-8')


