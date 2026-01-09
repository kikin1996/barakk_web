import pathlib

old = '<a href="index.html" class="flex items-center"><div class="bg-black flex items-center justify-center px-4 py-2"><span class="text-white text-xl font-bold tracking-tight" style="font-family: Arial, sans-serif; letter-spacing: 0.05em;">Barakk</span></div></a>'

new = '''<a href="index.html" class="flex items-center">
                    <div class="bg-black flex items-center justify-center px-4 py-2">
                        <span class="text-white text-xl font-bold tracking-tight" style="font-family: Arial, sans-serif; letter-spacing: 0.05em;">Barakk</span>
                    </div>
                </a>'''

for path in pathlib.Path('.').glob('*.html'):
    if path.name in ['index.html', 'onas.html']:
        continue
    data = path.read_text(encoding='utf-8')
    data = data.replace(old, new)
    path.write_text(data, encoding='utf-8')


