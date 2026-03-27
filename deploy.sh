#!/bin/bash

# 🚀 Script de Deploy para AdoptApp
# Este script te ayudará a subir tu código a GitHub

echo "🐾 AdoptApp - Script de Deploy a GitHub"
echo "========================================"
echo ""

# Verificar si Git está instalado
if ! command -v git &> /dev/null
then
    echo "❌ Git no está instalado. Por favor instálalo desde: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git está instalado"
echo ""

# Preguntar el nombre de usuario de GitHub
echo "📝 Ingresa tu nombre de usuario de GitHub:"
read -r GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ El nombre de usuario no puede estar vacío"
    exit 1
fi

echo ""
echo "🔍 Tu repositorio será: https://github.com/$GITHUB_USERNAME/adoptapp"
echo ""
echo "⚠️  IMPORTANTE: Antes de continuar, asegúrate de haber creado el repositorio en GitHub:"
echo "   👉 Ve a: https://github.com/new"
echo "   👉 Repository name: adoptapp"
echo "   👉 NO marques 'Add a README' ni 'Add .gitignore'"
echo ""
read -p "¿Ya creaste el repositorio en GitHub? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "❌ Por favor crea el repositorio primero y vuelve a ejecutar este script"
    exit 1
fi

echo ""
echo "🚀 Iniciando proceso de deploy..."
echo ""

# Verificar si ya existe un repositorio git
if [ -d ".git" ]; then
    echo "ℹ️  Ya existe un repositorio Git local"
    echo ""
    read -p "¿Quieres reiniciar el repositorio desde cero? (y/n): " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        echo "🗑️  Eliminando .git existente..."
        rm -rf .git
        git init
        echo "✅ Repositorio reiniciado"
    fi
else
    echo "📦 Inicializando repositorio Git..."
    git init
    echo "✅ Repositorio inicializado"
fi

echo ""
echo "➕ Añadiendo archivos..."
git add .
echo "✅ Archivos añadidos"

echo ""
echo "💾 Creando commit inicial..."
git commit -m "🎉 Initial commit - AdoptApp v1.1.0 con sistema tipográfico actualizado

- Sistema completo de adopción de mascotas
- 47 mascotas (23 perros + 24 gatos)
- Sistema de filtros avanzado
- 8 noticias con contenido completo
- Tipografía: MangoGrotesque (nav) + Nohemi (body/títulos)
- React + TypeScript + Tailwind CSS v4
- Responsive design con estilo bubbly
- Listo para producción"

echo "✅ Commit creado"

echo ""
echo "🌿 Renombrando rama a 'main'..."
git branch -M main
echo "✅ Rama renombrada"

echo ""
echo "🔗 Conectando con GitHub..."
git remote add origin "https://github.com/$GITHUB_USERNAME/adoptapp.git"
echo "✅ Remoto configurado"

echo ""
echo "📤 Subiendo código a GitHub..."
echo "⚠️  Si te pide credenciales:"
echo "   - Username: $GITHUB_USERNAME"
echo "   - Password: usa un Personal Access Token (NO tu contraseña)"
echo "   - Crea tu token en: https://github.com/settings/tokens"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Código subido exitosamente!"
    echo ""
    echo "🎉 Tu proyecto está ahora en GitHub:"
    echo "   👉 https://github.com/$GITHUB_USERNAME/adoptapp"
    echo ""
    echo "📋 Próximos pasos recomendados:"
    echo "   1. Ve a tu repositorio y verifica que todo se subió correctamente"
    echo "   2. Configura la descripción y topics del repositorio"
    echo "   3. Crea un release v1.1.0 (opcional)"
    echo "   4. Configura GitHub Pages para publicar online (opcional)"
    echo ""
    echo "📖 Para más información, lee: DEPLOY_TO_GITHUB.md"
else
    echo ""
    echo "❌ Hubo un error al subir el código"
    echo ""
    echo "🔧 Posibles soluciones:"
    echo "   1. Verifica que creaste el repositorio en GitHub"
    echo "   2. Usa un Personal Access Token en lugar de contraseña"
    echo "   3. Verifica tu conexión a internet"
    echo "   4. Lee la guía completa en: DEPLOY_TO_GITHUB.md"
    echo ""
    exit 1
fi

echo ""
echo "🐾 ¡Gracias por usar AdoptApp!"
