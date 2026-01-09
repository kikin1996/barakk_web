import pathlib
import re

old_pattern = re.compile(
    r'<a href="(?:index\.html|/)" class="flex items-center">\s*<div class="w-12 h-12 bg-black flex items-center justify-center">\s*<span class="text-white text-2xl font-bold">K</span>\s*</div>\s*</a>',
    re.MULTILINE
)

new_logo = '''<a href="index.html" class="flex items-center">
                    <div class="bg-black flex items-center justify-center px-4 py-2">
                        <span class="text-white text-xl font-bold tracking-tight" style="font-family: Arial, sans-serif; letter-spacing: 0.05em;">Barakk</span>
                    </div>
                </a>'''

for path in pathlib.Path('.').glob('*.html'):
    if path.name == 'index.html':
        continue
    data = path.read_text(encoding='utf-8')
    data = old_pattern.sub(new_logo, data)
    path.write_text(data, encoding='utf-8')


