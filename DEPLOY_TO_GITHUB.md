# 🚀 Guía para Subir AdoptApp a GitHub

Esta guía te ayudará a subir tu proyecto AdoptApp a GitHub paso a paso.

---

## 📋 Pre-requisitos

1. **Git instalado** en tu computadora
   ```bash
   # Verificar si tienes Git instalado
   git --version
   ```
   Si no está instalado, descárgalo desde: https://git-scm.com/downloads

2. **Cuenta de GitHub**
   - Si no tienes una, créala en: https://github.com/signup

---

## 🎯 Opción 1: Crear Repositorio Nuevo (Recomendado)

### Paso 1: Crear el repositorio en GitHub

1. Ve a GitHub: https://github.com/new
2. Completa los datos:
   - **Repository name**: `adoptapp`
   - **Description**: `🐾 AdoptApp - Plataforma web moderna para adopción de mascotas con React, TypeScript y Tailwind CSS`
   - **Visibility**: Public (o Private si prefieres)
   - ❌ **NO marques** "Add a README file" (ya lo tenemos)
   - ❌ **NO marques** "Add .gitignore" (ya lo tenemos)
   - ✅ **SÍ selecciona** "Add a license" → MIT License
3. Click en **"Create repository"**

### Paso 2: Inicializar Git en tu proyecto local

Abre tu terminal en la carpeta raíz del proyecto y ejecuta:

```bash
# 1. Inicializar repositorio Git
git init

# 2. Añadir todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "🎉 Initial commit - AdoptApp v1.1.0 con sistema tipográfico actualizado"

# 4. Renombrar la rama a 'main' (GitHub usa 'main' por defecto)
git branch -M main

# 5. Conectar con tu repositorio remoto
# ⚠️ REEMPLAZA 'tu-usuario' con tu nombre de usuario de GitHub
git remote add origin https://github.com/tu-usuario/adoptapp.git

# 6. Subir el código
git push -u origin main
```

### Paso 3: Verificar

1. Refresca tu página de GitHub
2. Deberías ver todos tus archivos subidos ✅

---

## 🔑 Opción 2: Si ya tienes un repositorio existente

Si ya tienes un repositorio de AdoptApp y quieres actualizar:

```bash
# 1. Verificar el estado
git status

# 2. Añadir los cambios nuevos
git add .

# 3. Hacer commit con los cambios tipográficos
git commit -m "🎨 Update: Sistema tipográfico con MangoGrotesque y Nohemi (v1.1.0)

- Implementada MangoGrotesque Bold en navegación
- Cambiada fuente principal a Nohemi Regular
- Aplicada Nohemi Medium a títulos y UI
- Actualizada documentación
- Añadido CHANGELOG v1.1.0"

# 4. Subir los cambios
git push origin main
```

---

## 🔐 Autenticación GitHub

Si es tu primera vez usando Git con GitHub, tendrás que autenticarte:

### Opción A: HTTPS con Token Personal (Recomendado)

1. **Crear un Personal Access Token**:
   - Ve a: https://github.com/settings/tokens
   - Click en "Generate new token" → "Generate new token (classic)"
   - Dale un nombre: "AdoptApp Deploy"
   - Selecciona scope: `repo` (todos los permisos de repositorio)
   - Click en "Generate token"
   - **⚠️ COPIA EL TOKEN** (no lo verás de nuevo)

2. **Usar el token al hacer push**:
   ```bash
   git push -u origin main
   ```
   - Username: `tu-usuario-github`
   - Password: `tu-token-copiado` (no tu contraseña)

### Opción B: SSH (Para usuarios avanzados)

```bash
# 1. Generar clave SSH
ssh-keygen -t ed25519 -C "tu-email@ejemplo.com"

# 2. Añadir a GitHub
# Copia el contenido de ~/.ssh/id_ed25519.pub
# Y pégalo en: https://github.com/settings/ssh/new

# 3. Cambiar remote a SSH
git remote set-url origin git@github.com:tu-usuario/adoptapp.git

# 4. Push
git push -u origin main
```

---

## 📦 Comandos Útiles

```bash
# Ver estado del repositorio
git status

# Ver el historial de commits
git log --oneline

# Ver los remotos configurados
git remote -v

# Crear una nueva rama
git checkout -b feature/nueva-funcionalidad

# Ver todas las ramas
git branch -a

# Actualizar desde GitHub
git pull origin main

# Ver diferencias antes de commit
git diff
```

---

## 🏷️ Crear un Release (Opcional)

Una vez subido el código, puedes crear un release oficial:

1. Ve a tu repositorio en GitHub
2. Click en "Releases" → "Create a new release"
3. Tag version: `v1.1.0`
4. Release title: `🎨 v1.1.0 - Sistema Tipográfico Actualizado`
5. Description: Copia el contenido de la sección v1.1.0 del CHANGELOG.md
6. Click en "Publish release"

---

## 🌐 Publicar en GitHub Pages (Opcional)

Si quieres que tu sitio esté público en Internet:

### Paso 1: Configurar Vite para GitHub Pages

Edita `vite.config.ts` y añade:

```typescript
export default defineConfig({
  base: '/adoptapp/', // nombre de tu repositorio
  // ... resto de configuración
});
```

### Paso 2: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### Paso 3: Añadir scripts en package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Paso 4: Deploy

```bash
npm run deploy
```

### Paso 5: Configurar GitHub Pages

1. Ve a tu repositorio → Settings → Pages
2. Source: selecciona "gh-pages" branch
3. Click "Save"
4. Tu sitio estará en: `https://tu-usuario.github.io/adoptapp/`

---

## ❓ Solución de Problemas

### Error: "repository not found"
```bash
# Verifica que el remote sea correcto
git remote -v

# Si está mal, corrígelo:
git remote set-url origin https://github.com/TU-USUARIO-CORRECTO/adoptapp.git
```

### Error: "failed to push some refs"
```bash
# Hay cambios en GitHub que no tienes localmente
git pull origin main --rebase
git push origin main
```

### Error: "Permission denied"
```bash
# Usa un Personal Access Token en lugar de tu contraseña
# O configura SSH correctamente
```

### Archivos muy grandes
```bash
# Git no sube archivos > 100MB
# Verifica el tamaño:
find . -type f -size +50M

# Si tienes archivos grandes, añádelos al .gitignore
```

---

## 📚 Recursos Adicionales

- **Documentación Git**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com/
- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **Atlassian Git Tutorials**: https://www.atlassian.com/git/tutorials

---

## ✅ Checklist Final

- [ ] Git instalado y configurado
- [ ] Repositorio creado en GitHub
- [ ] `.gitignore` configurado
- [ ] `git init` ejecutado
- [ ] Primer commit realizado
- [ ] Remote origin configurado
- [ ] Código subido con `git push`
- [ ] README visible en GitHub
- [ ] License configurada (MIT)
- [ ] (Opcional) Release v1.1.0 creado
- [ ] (Opcional) GitHub Pages configurado

---

## 🎉 ¡Listo!

Tu proyecto AdoptApp ya está en GitHub. Ahora puedes:

- ✅ Compartir el link con otros desarrolladores
- ✅ Colaborar con tu equipo
- ✅ Hacer backup automático de tu código
- ✅ Tener control de versiones profesional
- ✅ Publicar tu portfolio

**Link a tu repositorio**:
`https://github.com/tu-usuario/adoptapp`

---

¿Necesitas ayuda? Abre un issue en el repositorio o contacta al equipo de soporte.
