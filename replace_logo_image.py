import pathlib
import re

old_logo_pattern = re.compile(
    r'<a href="(?:index\.html|/)" class="flex items-center">\s*<div class="bg-black flex items-center justify-center px-4 py-2">\s*<span class="text-white text-xl font-bold tracking-tight" style="font-family: Arial, sans-serif; letter-spacing: 0\.05em;">Barakk</span>\s*</div>\s*</a>',
    re.MULTILINE | re.DOTALL
)

new_logo = '''<a href="index.html" class="flex items-center">
                    <img src="public/images/logo.jpg" alt="Barakk" class="h-12 object-contain" />
                </a>'''

for path in pathlib.Path('.').glob('*.html'):
    if path.name == 'index.html':
        continue
    data = path.read_text(encoding='utf-8')
    data = old_logo_pattern.sub(new_logo, data)
    path.write_text(data, encoding='utf-8')


