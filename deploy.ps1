# 🚀 Script de Deploy para AdoptApp (PowerShell - Windows)
# Este script te ayudará a subir tu código a GitHub

Write-Host "🐾 AdoptApp - Script de Deploy a GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si Git está instalado
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitInstalled) {
    Write-Host "❌ Git no está instalado. Por favor instálalo desde: https://git-scm.com/downloads" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Git está instalado" -ForegroundColor Green
Write-Host ""

# Preguntar el nombre de usuario de GitHub
Write-Host "📝 Ingresa tu nombre de usuario de GitHub:" -ForegroundColor Yellow
$GITHUB_USERNAME = Read-Host

if ([string]::IsNullOrWhiteSpace($GITHUB_USERNAME)) {
    Write-Host "❌ El nombre de usuario no puede estar vacío" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🔍 Tu repositorio será: https://github.com/$GITHUB_USERNAME/adoptapp" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  IMPORTANTE: Antes de continuar, asegúrate de haber creado el repositorio en GitHub:" -ForegroundColor Yellow
Write-Host "   👉 Ve a: https://github.com/new" -ForegroundColor White
Write-Host "   👉 Repository name: adoptapp" -ForegroundColor White
Write-Host "   👉 NO marques 'Add a README' ni 'Add .gitignore'" -ForegroundColor White
Write-Host ""

$response = Read-Host "¿Ya creaste el repositorio en GitHub? (y/n)"
if ($response -ne "y" -and $response -ne "Y") {
    Write-Host "❌ Por favor crea el repositorio primero y vuelve a ejecutar este script" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🚀 Iniciando proceso de deploy..." -ForegroundColor Cyan
Write-Host ""

# Verificar si ya existe un repositorio git
if (Test-Path ".git") {
    Write-Host "ℹ️  Ya existe un repositorio Git local" -ForegroundColor Blue
    Write-Host ""
    $response = Read-Host "¿Quieres reiniciar el repositorio desde cero? (y/n)"
    
    if ($response -eq "y" -or $response -eq "Y") {
        Write-Host "🗑️  Eliminando .git existente..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force .git
        git init
        Write-Host "✅ Repositorio reiniciado" -ForegroundColor Green
    }
} else {
    Write-Host "📦 Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Repositorio inicializado" -ForegroundColor Green
}

Write-Host ""
Write-Host "➕ Añadiendo archivos..." -ForegroundColor Yellow
git add .
Write-Host "✅ Archivos añadidos" -ForegroundColor Green

Write-Host ""
Write-Host "💾 Creando commit inicial..." -ForegroundColor Yellow
git commit -m "🎉 Initial commit - AdoptApp v1.1.0 con sistema tipográfico actualizado

- Sistema completo de adopción de mascotas
- 47 mascotas (23 perros + 24 gatos)
- Sistema de filtros avanzado
- 8 noticias con contenido completo
- Tipografía: MangoGrotesque (nav) + Nohemi (body/títulos)
- React + TypeScript + Tailwind CSS v4
- Responsive design con estilo bubbly
- Listo para producción"

Write-Host "✅ Commit creado" -ForegroundColor Green

Write-Host ""
Write-Host "🌿 Renombrando rama a 'main'..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Rama renombrada" -ForegroundColor Green

Write-Host ""
Write-Host "🔗 Conectando con GitHub..." -ForegroundColor Yellow
git remote add origin "https://github.com/$GITHUB_USERNAME/adoptapp.git"
Write-Host "✅ Remoto configurado" -ForegroundColor Green

Write-Host ""
Write-Host "📤 Subiendo código a GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  Si te pide credenciales:" -ForegroundColor Yellow
Write-Host "   - Username: $GITHUB_USERNAME" -ForegroundColor White
Write-Host "   - Password: usa un Personal Access Token (NO tu contraseña)" -ForegroundColor White
Write-Host "   - Crea tu token en: https://github.com/settings/tokens" -ForegroundColor White
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ ¡Código subido exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Tu proyecto está ahora en GitHub:" -ForegroundColor Cyan
    Write-Host "   👉 https://github.com/$GITHUB_USERNAME/adoptapp" -ForegroundColor White
    Write-Host ""
    Write-Host "📋 Próximos pasos recomendados:" -ForegroundColor Cyan
    Write-Host "   1. Ve a tu repositorio y verifica que todo se subió correctamente" -ForegroundColor White
    Write-Host "   2. Configura la descripción y topics del repositorio" -ForegroundColor White
    Write-Host "   3. Crea un release v1.1.0 (opcional)" -ForegroundColor White
    Write-Host "   4. Configura GitHub Pages para publicar online (opcional)" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 Para más información, lee: DEPLOY_TO_GITHUB.md" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Hubo un error al subir el código" -ForegroundColor Red
    Write-Host ""
    Write-Host "🔧 Posibles soluciones:" -ForegroundColor Yellow
    Write-Host "   1. Verifica que creaste el repositorio en GitHub" -ForegroundColor White
    Write-Host "   2. Usa un Personal Access Token en lugar de contraseña" -ForegroundColor White
    Write-Host "   3. Verifica tu conexión a internet" -ForegroundColor White
    Write-Host "   4. Lee la guía completa en: DEPLOY_TO_GITHUB.md" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "🐾 ¡Gracias por usar AdoptApp!" -ForegroundColor Cyan
