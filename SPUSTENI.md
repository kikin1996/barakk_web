# Jak spustit web

## Problém s Next.js

Kvůli problémům s Windows souborovým systémem a speciálními znaky v cestě, vytvořil jsem **jednoduchou HTML verzi**, která funguje okamžitě bez instalace.

## Spuštění HTML verze (DOPORUČENO)

1. Otevřete soubor `index.html` v prohlížeči
2. Nebo použijte jednoduchý HTTP server:

```powershell
# Python (pokud máte nainstalovaný)
python -m http.server 8000

# Nebo Node.js http-server (pokud máte nainstalovaný)
npx http-server -p 8000
```

Pak otevřete: http://localhost:8000

## Alternativa: Next.js (pokud se podaří nainstalovat)

Pokud se vám podaří nainstalovat Next.js:

```powershell
npm install
npm run dev
```

**Poznámka:** Problém je s cestou obsahující české znaky "Ostatní počítače" - Next.js Turbopack má s tím problémy.

## Řešení pro Next.js

1. **Přesuňte projekt** do složky bez speciálních znaků (např. `C:\Projects\barakk-web`)
2. Nebo použijte HTML verzi (`index.html`), která funguje okamžitě

