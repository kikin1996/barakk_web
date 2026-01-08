# Skript pro stahování obrázků z loft-kolasinski.pl
# UPOZORNĚNÍ: Použití obrázků bez povolení může porušovat autorská práva.

$imageUrls = @(
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/78_DSC00951_2024_hiszpania_web-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/11/04_DSC00021_2025_loft_kolasinski_warszawa_m-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/BAK1334_archi-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/04/23_2025_DSC00881_loftkolasinski_warszawa_m-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2025/03/15_DSC00500_2025_kamien_pomorski_media-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/10/4-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/05/9_DSC05402_2023_warszawa_w-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2021/02/2021_5_warszawa_loftkolasinski_joelhauck_DSC08755-HDR-Edit-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/07/DSC06477_2023_krakow_w-1-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2023/05/okladka_t-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/10/11-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2023/03/02-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/06/limone2.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2023/06/Project_Kolasinski-PaZSmall21-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2022/10/021-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2022/02/2022_01_DSC03891-Edit_restauracja_punkt_szczecin-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/10/L1620237-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2021/10/2021_filtrowa_DSC03366-Edit-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/06/konstancin_archilovers_t-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2020/10/2020_05_ochota_loftkolasinski_joelhauck_DSC08234-HDR-Edit-1-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/07/01-DSC03216-Edit_2-600x403.jpg",
    "https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/08/DSC04410-HDR-Edit_2-600x403.jpg",
    "https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2019/08/DSC03731-Edit_2-2-600x403.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2019/02/mokotow.jpg",
    "https://loft-kolasinski.pl/wp-content/uploads/2019/02/DSC01143-Edit-Edit_2-600x403.jpg"
)

# Vytvořit složku
$imageDir = "public\images"
if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir | Out-Null
}

Write-Host "Stahuji $($imageUrls.Count) obrázků..." -ForegroundColor Cyan

$downloaded = 0
$skipped = 0

foreach ($url in $imageUrls) {
    $fileName = Split-Path $url -Leaf
    $filePath = Join-Path $imageDir $fileName
    
    if (Test-Path $filePath) {
        Write-Host "✓ Již existuje: $fileName" -ForegroundColor Gray
        $skipped++
        continue
    }
    
    Write-Host "Stahuji: $fileName..." -ForegroundColor Yellow
    $result = Invoke-WebRequest -Uri $url -OutFile $filePath -UseBasicParsing -TimeoutSec 10 -ErrorAction SilentlyContinue
    if ($result -or (Test-Path $filePath)) {
        Write-Host "✓ Staženo: $fileName" -ForegroundColor Green
        $downloaded++
        Start-Sleep -Milliseconds 500
    } else {
        Write-Host "✗ Chyba při stahování $fileName" -ForegroundColor Red
    }
}

Write-Host "`nHotovo! Staženo: $downloaded, Přeskočeno: $skipped" -ForegroundColor Cyan
Write-Host "Obrázky jsou v: $imageDir" -ForegroundColor Cyan
