# Instrukce pro spuštění

## Problém s instalací npm

Pokud máte problémy s instalací npm kvůli zablokovaným souborům na Windows, použijte tento postup:

### Možnost 1: Použít npx (doporučeno)
```powershell
npx --yes next@latest dev
```

### Možnost 2: Ruční instalace
1. Zavřete všechny programy, které mohou používat node_modules (VS Code, terminály, atd.)
2. Spusťte PowerShell jako administrátor
3. Spusťte:
```powershell
npm install --legacy-peer-deps
```

### Možnost 3: Použít yarn (pokud máte nainstalovaný)
```powershell
yarn install
yarn dev
```

## Spuštění serveru

Po úspěšné instalaci:
```powershell
npm run dev
```

Server by měl běžet na: http://localhost:3000

## Testování

1. Otevřete http://localhost:3000 v prohlížeči
2. Nebo otevřete http://localhost:3000/test pro jednoduchou testovací stránku

## Řešení problémů

### Port 3000 je obsazený
```powershell
# Najděte proces na portu 3000
netstat -ano | findstr :3000

# Zastavte proces (nahraďte PID číslem z předchozího příkazu)
taskkill /PID <PID> /F
```

### Chyby s obrázky
- Obrázky jsou nyní nahrazeny placeholder divy
- V produkci nahraďte `/api/placeholder/...` skutečnými URL obrázků

### Chyby kompilace
- Zkontrolujte, že máte nainstalovaný Node.js (verze 18 nebo vyšší)
- Zkontrolujte TypeScript chyby: `npm run lint`

