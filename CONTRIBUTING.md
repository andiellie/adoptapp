# 🤝 Guía de Contribución a AdoptApp

¡Gracias por tu interés en contribuir a AdoptApp! Esta plataforma ayuda a conectar mascotas rescatadas con familias amorosas, y toda contribución cuenta para hacer del mundo un lugar mejor para los animales. 🐾

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guía de Estilo](#guía-de-estilo)
- [Reporte de Bugs](#reporte-de-bugs)
- [Sugerencias de Características](#sugerencias-de-características)
- [Pull Requests](#pull-requests)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta de respeto mutuo. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables a contacto@adoptapp.com.

### Nuestros Valores

- 🤝 **Respeto**: Trata a todos con dignidad y respeto
- 💡 **Colaboración**: Trabaja en equipo y comparte conocimiento
- 🎯 **Calidad**: Mantén altos estándares en el código
- 🐾 **Propósito**: Recuerda que ayudamos a animales necesitados

## 🚀 ¿Cómo puedo contribuir?

Hay muchas formas de contribuir a AdoptApp:

### 1. Reportar Bugs
Si encuentras un error, abre un issue describiendo:
- Qué esperabas que sucediera
- Qué sucedió en realidad
- Pasos para reproducir el error
- Capturas de pantalla si aplica

### 2. Sugerir Mejoras
¿Tienes una idea para mejorar AdoptApp? Abre un issue con:
- Descripción clara de la mejora
- Por qué sería útil
- Ejemplos de cómo funcionaría

### 3. Escribir Código
- Arreglar bugs reportados
- Implementar nuevas características
- Mejorar la documentación
- Optimizar el rendimiento
- Añadir tests

### 4. Mejorar la Documentación
- Corregir errores tipográficos
- Clarificar instrucciones
- Añadir ejemplos
- Traducir a otros idiomas

### 5. Diseño UI/UX
- Proponer mejoras visuales
- Crear mockups
- Mejorar la experiencia de usuario
- Hacer la app más accesible

## 🛠️ Configuración del Entorno

### Prerequisitos

- Node.js 18 o superior
- pnpm (recomendado) o npm
- Git
- Editor de código (recomendamos VS Code)

### Instalación

1. **Fork el repositorio**
   ```bash
   # Haz clic en "Fork" en GitHub
   ```

2. **Clona tu fork**
   ```bash
   git clone https://github.com/TU-USUARIO/adoptapp.git
   cd adoptapp
   ```

3. **Añade el repositorio original como upstream**
   ```bash
   git remote add upstream https://github.com/REPO-ORIGINAL/adoptapp.git
   ```

4. **Instala las dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

5. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

6. **Abre http://localhost:5173 en tu navegador**

## 💻 Proceso de Desarrollo

### 1. Crea una rama

```bash
# Actualiza tu main
git checkout main
git pull upstream main

# Crea una nueva rama
git checkout -b feature/nombre-descriptivo
# o
git checkout -b fix/nombre-del-bug
```

### Convención de nombres de ramas:
- `feature/` - Para nuevas características
- `fix/` - Para correcciones de bugs
- `docs/` - Para cambios en documentación
- `style/` - Para cambios de estilo (no afectan funcionalidad)
- `refactor/` - Para refactorización de código
- `test/` - Para añadir o modificar tests
- `chore/` - Para tareas de mantenimiento

### 2. Haz tus cambios

- Escribe código limpio y legible
- Sigue las guías de estilo del proyecto
- Añade comentarios donde sea necesario
- Actualiza la documentación si es relevante

### 3. Commits

Usamos **Conventional Commits**:

```bash
git commit -m "tipo(scope): descripción breve"
```

**Tipos de commit:**
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, punto y coma faltantes, etc.
- `refactor`: Refactorización de código
- `test`: Añadir tests
- `chore`: Mantenimiento

**Ejemplos:**
```bash
git commit -m "feat(adopta): añadir filtro por edad"
git commit -m "fix(formulario): corregir validación de email"
git commit -m "docs(readme): actualizar instrucciones de instalación"
```

### 4. Push y Pull Request

```bash
# Push a tu fork
git push origin feature/nombre-descriptivo

# Luego crea un Pull Request en GitHub
```

## 🎨 Guía de Estilo

### TypeScript

```typescript
// ✅ Bueno: Usa tipos explícitos
interface Pet {
  id: string;
  name: string;
  species: "perro" | "gato";
}

// ❌ Malo: Evita any
const data: any = getData();

// ✅ Bueno: Nombres descriptivos
const filteredPets = pets.filter(pet => pet.species === "perro");

// ❌ Malo: Nombres poco claros
const fp = p.filter(x => x.s === "perro");
```

### React Components

```typescript
// ✅ Bueno: Componente funcional con tipos
interface PetCardProps {
  pet: Pet;
  onAdopt: (id: string) => void;
}

export function PetCard({ pet, onAdopt }: PetCardProps) {
  return (
    <div>
      <h3>{pet.name}</h3>
      <button onClick={() => onAdopt(pet.id)}>
        Adoptar
      </button>
    </div>
  );
}

// ❌ Malo: Sin tipos, props ambiguos
export function PetCard(props: any) {
  return <div>{props.name}</div>;
}
```

### CSS/Tailwind

```tsx
// ✅ Bueno: Clases Tailwind organizadas
<div className="flex items-center gap-4 px-6 py-4 bg-white rounded-lg shadow-md">

// ✅ Bueno: Usa variables de tema
<div className="text-[#4074d4] bg-[#ebe8d6]">

// ❌ Malo: Estilos inline complejos
<div style={{ display: 'flex', padding: '16px', backgroundColor: '#fff' }}>
```

### Estructura de Archivos

```
/src/app/components/
  PetCard.tsx          ✅ PascalCase para componentes
  FilterBar.tsx        ✅ Un componente por archivo

/src/app/data/
  pets.ts              ✅ camelCase para utilidades
  news.ts              ✅ Nombre descriptivo

/src/app/pages/
  Home.tsx             ✅ PascalCase para páginas
  PetDetail.tsx        ✅ Nombre claro y descriptivo
```

## 🐛 Reporte de Bugs

### Antes de reportar
1. Verifica que el bug no haya sido reportado ya
2. Asegúrate de estar usando la última versión
3. Intenta reproducir el bug de manera consistente

### Template de Bug Report

```markdown
**Descripción del Bug**
Descripción clara y concisa del problema.

**Pasos para Reproducir**
1. Ve a '...'
2. Haz clic en '...'
3. Scroll hasta '...'
4. Ver error

**Comportamiento Esperado**
Qué esperabas que sucediera.

**Comportamiento Actual**
Qué está sucediendo actualmente.

**Capturas de Pantalla**
Si aplica, añade capturas para ayudar a explicar.

**Entorno**
- OS: [e.g. macOS, Windows, Linux]
- Navegador: [e.g. Chrome 120, Safari 17]
- Versión de Node: [e.g. 18.17.0]

**Información Adicional**
Cualquier otro contexto sobre el problema.
```

## 💡 Sugerencias de Características

### Template de Feature Request

```markdown
**¿Es tu feature request relacionado a un problema?**
Descripción clara del problema. Ej: "Me frustra cuando..."

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que suceda.

**Describe alternativas consideradas**
Otras soluciones o características que has considerado.

**Contexto adicional**
Capturas, mockups, o cualquier contexto adicional.

**Beneficio para AdoptApp**
¿Cómo ayudaría esto a más mascotas a encontrar hogar?
```

## 📬 Pull Requests

### Checklist antes de enviar PR

- [ ] He leído la guía de contribución
- [ ] Mi código sigue el estilo del proyecto
- [ ] He comentado mi código donde es necesario
- [ ] He actualizado la documentación
- [ ] He probado mis cambios localmente
- [ ] Mis commits siguen Conventional Commits
- [ ] El build pasa sin errores (`pnpm build`)
- [ ] No hay warnings de TypeScript
- [ ] He actualizado el CHANGELOG si aplica

### Template de Pull Request

```markdown
**Descripción**
Resumen claro de los cambios realizados.

**Tipo de cambio**
- [ ] Bug fix (cambio que arregla un issue)
- [ ] Nueva característica (cambio que añade funcionalidad)
- [ ] Breaking change (fix o feature que rompe funcionalidad existente)
- [ ] Documentación

**¿Cómo se ha probado?**
Describe las pruebas realizadas.

**Checklist**
- [ ] Mi código sigue el estilo del proyecto
- [ ] He realizado auto-review de mi código
- [ ] He comentado áreas complejas
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan warnings
- [ ] He probado que funciona localmente

**Screenshots (si aplica)**
Añade capturas de antes/después si es cambio visual.

**Issues relacionados**
Fixes #123
Closes #456
```

### Proceso de Review

1. **Automatic Checks**: El CI debe pasar
2. **Code Review**: Al menos 1 aprobación requerida
3. **Testing**: Los reviewers probarán los cambios
4. **Merge**: Una vez aprobado, se hará merge a main

## 🧪 Testing

```bash
# Ejecutar tests (cuando se implementen)
pnpm test

# Tests en modo watch
pnpm test:watch

# Coverage
pnpm test:coverage
```

## 📦 Build

```bash
# Crear build de producción
pnpm build

# Preview del build
pnpm preview
```

## 🌍 Internacionalización

Si vas a añadir texto visible al usuario:
- Usa claves descriptivas
- Mantén consistencia con textos existentes
- Considera futura traducción a otros idiomas

## ♿ Accesibilidad

Al añadir nuevos componentes:
- Usa etiquetas semánticas HTML
- Añade atributos ARIA cuando sea necesario
- Asegura contraste de colores adecuado
- Prueba con lector de pantalla
- Permite navegación por teclado

## 📞 ¿Necesitas Ayuda?

- 💬 **Discord**: [Únete a nuestra comunidad](https://discord.gg/adoptapp)
- 📧 **Email**: dev@adoptapp.com
- 📚 **Docs**: Lee la [documentación completa](https://docs.adoptapp.com)
- 💡 **Discussions**: [GitHub Discussions](https://github.com/adoptapp/adoptapp/discussions)

## 🙏 Reconocimientos

Todos los contribuidores serán reconocidos en:
- README.md (sección de Contributors)
- CHANGELOG.md en cada release
- Nuestra página de agradecimientos

## 📄 Licencia

Al contribuir a AdoptApp, aceptas que tus contribuciones se licenciarán bajo la misma licencia MIT del proyecto.

---

<div align="center">

**¡Gracias por ayudar a AdoptApp a crecer!** 🐾❤️

Cada línea de código que contribuyes ayuda a más mascotas a encontrar un hogar amoroso.

</div>
