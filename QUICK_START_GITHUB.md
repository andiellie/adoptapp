# 🚀 Quick Start - Subir a GitHub en 3 Pasos

Esta es la guía rápida para subir AdoptApp a GitHub. Si necesitas más detalles, consulta `DEPLOY_TO_GITHUB.md`.

---

## ⚡ Opción 1: Usar el Script Automático (Recomendado)

### Para Linux/Mac:

```bash
# 1. Dale permisos de ejecución al script
chmod +x deploy.sh

# 2. Ejecuta el script
./deploy.sh
```

### Para Windows (PowerShell):

```powershell
# Ejecuta el script
.\deploy.ps1
```

El script te guiará paso a paso. **¡Es así de simple!** 🎉

---

## ⚡ Opción 2: Comandos Manuales (3 minutos)

Si prefieres hacerlo manual, aquí están los comandos exactos:

### Paso 1: Crear repositorio en GitHub
1. Ve a: https://github.com/new
2. Nombre: `adoptapp`
3. NO marques "Add a README" o ".gitignore"
4. Click "Create repository"

### Paso 2: Ejecutar en tu terminal

```bash
# Inicializar Git
git init

# Añadir todos los archivos
git add .

# Crear commit
git commit -m "🎉 Initial commit - AdoptApp v1.1.0"

# Cambiar rama a main
git branch -M main

# Conectar con GitHub (REEMPLAZA 'tu-usuario')
git remote add origin https://github.com/tu-usuario/adoptapp.git

# Subir código
git push -u origin main
```

### Paso 3: Autenticación

Cuando te pida credenciales:
- **Username**: tu-usuario-github
- **Password**: crea un Personal Access Token aquí → https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Scope: marca `repo`
  - Copia el token y úsalo como password

---

## ✅ ¡Listo!

Tu código ahora está en:
```
https://github.com/tu-usuario/adoptapp
```

---

## 📝 Comandos para Actualizar después

Cuando hagas cambios futuros:

```bash
git add .
git commit -m "Descripción de tus cambios"
git push
```

---

## ❓ ¿Problemas?

Lee la guía completa: `DEPLOY_TO_GITHUB.md`

O busca tu error específico:

| Error | Solución |
|-------|----------|
| "repository not found" | Verifica que creaste el repo en GitHub |
| "Permission denied" | Usa Personal Access Token, no contraseña |
| "failed to push" | Ejecuta: `git pull origin main --rebase` |

---

## 🌟 Siguientes Pasos (Opcional)

Una vez subido el código:

1. **Añadir Topics** al repositorio:
   - `react` `typescript` `tailwind-css` `pet-adoption` `vite`

2. **Crear un Release v1.1.0**:
   - Ve a: Releases → New Release
   - Tag: `v1.1.0`

3. **Publicar en GitHub Pages** (hacer tu sitio público):
   - Lee la sección "Publicar en GitHub Pages" en `DEPLOY_TO_GITHUB.md`

---

**¿Listo para empezar?** Usa el script automático o los comandos manuales. ¡Es muy fácil! 🚀
