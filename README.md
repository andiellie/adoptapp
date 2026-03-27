# 🐾 AdoptApp - Plataforma de Adopción de Mascotas

![AdoptApp Banner](https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=300&fit=crop)

**AdoptApp** es una plataforma web moderna, empática y completa diseñada para conectar mascotas rescatadas con familias amorosas. Trabajamos de la mano con refugios locales para dar una segunda oportunidad a animales en situación de calle.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.13-CA4245?logo=react-router)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> 🚀 **¿Quieres subir este proyecto a GitHub?** Lee la guía rápida en [QUICK_START_GITHUB.md](./QUICK_START_GITHUB.md)

---

## 📋 Tabla de Contenidos

- [Características](#-características-principales)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Instalación](#-instalación-y-uso)
- [Deploy a GitHub](#-deploy-a-github)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Diseño](#-diseño-y-estilo)
- [Páginas](#-páginas-de-la-aplicación)
- [Próximos Pasos](#-próximos-pasos-sugeridos)

---

## ✨ Características Principales

### 🏠 Página de Inicio
- Hero section impactante con diseño visual atractivo
- Estadísticas de impacto en tiempo real
- Sección de misión, valores y beneficios de adoptar
- Diseño limpio con colores cálidos (azul #4074d4, rosa #c8566e, beige #ebe8d6)

### 🐕 Catálogo de Mascotas (47 mascotas totales)
- **23 Perros** + **24 Gatos** con información detallada
- Sistema de filtros avanzado:
  - 🐕 Especie (Perros/Gatos) con tabs dedicadas
  - ⚧ Género (Macho/Hembra)
  - 🐾 Edad (Cachorro/Adulto/Senior)
  - 📏 Tamaño (Mini/Chico/Mediano/Grande) con iconos interactivos
  - ⚡ Nivel de energía (1-3 rayos)
  - 📍 Distancia (Hasta 3km / Hasta 10km / +10km) - Menú desplegable
  - 💚 Temperamento (20 opciones) - Menú desplegable
  - 🏷️ Raza (30+ razas por especie) - Menú desplegable
- Sin barra de scroll horizontal - Diseño responsive con wrapping
- Grid adaptativo de mascotas
- Imágenes reales de Unsplash

### 📋 Página de Detalle de Mascota
- Galería de imágenes (3 fotos únicas por mascota)
- Información completa: edad, tamaño, género, raza, personalidad
- Tags de personalidad y temperamento
- Estado de salud y nivel de energía/sociabilidad
- Indicador de distancia
- Botón destacado "Adoptar" con navegación al formulario
- Enlaces contextuales a requisitos y proceso

### 📝 Formulario de Adopción (Multi-paso)
- **Paso 1**: Información personal (nombre, email, teléfono, edad)
- **Paso 2**: Información de vivienda (tipo, tamaño, patio)
- **Paso 3**: Experiencia con mascotas (actual, anterior, veterinario)
- **Paso 4**: Compromiso de adopción (términos y condiciones)
- Indicador visual de progreso
- Validación completa de formularios
- Diseño responsive

### 📰 Noticias y Comunidad
- Sistema completo de noticias con 8 artículos
- Categorías: La Laguna, México, El mundo, Comunidad
- Página de detalle de noticias con contenido completo
- Tags y metadata (fecha, categoría, tiempo de lectura)
- Diseño de tarjetas atractivo
- Imágenes de Unsplash

### 🎯 Actividades y Pasos para Adoptar
- Visualización del proceso en pasos claros
- Información detallada sobre:
  - Cómo adoptar
  - Beneficios de la adopción
  - Apoyo post-adopción
  - Eventos y actividades
- Diseño visual con iconos

### ✅ Requisitos para Adoptar
- Lista visual con iconos Material UI
- Requisitos básicos explicados:
  - Ser mayor de edad
  - Vivienda adecuada
  - Estabilidad económica
  - Tiempo y compromiso
  - Referencias personales
- Proceso de verificación detallado
- Enlaces a formulario de adopción

### 📞 Contáctanos
- Formulario de contacto funcional
- Información de ubicación y horarios
- Redes sociales (Facebook, Instagram, Twitter)
- Mapa integrado
- Sección de preguntas frecuentes (FAQs)

### 🎨 Footer Profesional
- Diseño de 3 columnas (Logo + Enlaces Rápidos + Información)
- Links a todas las páginas principales
- Información de contacto
- Redes sociales
- Crédito de diseño a Andiesgn
- Fondo oscuro elegante (#3a3a3a)

---

## 🛠️ Tecnologías Utilizadas

### Frontend Core
- **React 18.3.1** - Biblioteca de UI moderna
- **TypeScript 5.x** - Tipado estático para mayor seguridad
- **Vite 6.3.5** - Build tool ultrarrápido y dev server
- **React Router 7.13** - Enrutamiento con Data APIs

### Estilos
- **Tailwind CSS v4.1** - Framework utility-first
- **@tailwindcss/vite** - Integración nativa con Vite
- **Motion (Framer Motion) 12.23** - Animaciones suaves

### UI Components
- **Radix UI** - Componentes accesibles headless
- **Lucide React** - Iconografía moderna (500+ iconos)
- **Material UI** - Componentes adicionales
- **Recharts** - Gráficas y visualizaciones
- **Sonner** - Toast notifications elegantes

### Utilidades
- **React Hook Form 7.55** - Manejo de formularios
- **Class Variance Authority** - Variantes de componentes
- **clsx + tailwind-merge** - Utilidades de clases CSS
- **date-fns** - Manipulación de fechas

---

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/adoptapp.git
cd adoptapp

# Instalar dependencias con pnpm
pnpm install

# O con npm
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev

# O con npm
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Producción

```bash
# Crear build de producción
pnpm build

# O con npm
npm run build
```

Los archivos optimizados estarán en `/dist`

---

## 📁 Deploy a GitHub

### Crear un Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio.
2. Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/adoptapp.git
cd adoptapp
```

### Configurar el Repositorio

1. Inicializa el repositorio local:

```bash
git init
```

2. Agrega todos los archivos al repositorio:

```bash
git add .
```

3. Haz un commit inicial:

```bash
git commit -m "Initial commit"
```

4. Conecta el repositorio local con el remoto:

```bash
git remote add origin https://github.com/tu-usuario/adoptapp.git
```

5. Sube los cambios al repositorio remoto:

```bash
git push -u origin main
```

---

## 📁 Estructura del Proyecto

```
adoptapp/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navigation.tsx          # Barra de navegación principal
│   │   │   ├── Footer.tsx              # Footer global (3 columnas)
│   │   │   ├── FilterBar.tsx           # Barra de filtros avanzada
│   │   │   ├── SpeciesTabs.tsx         # Tabs de Perros/Gatos
│   │   │   ├── AdoptButton.tsx         # Botón de adopción
│   │   │   ├── ui/                     # Componentes UI de Radix
│   │   │   └── figma/                  # Componentes importados de Figma
│   │   ├── data/
│   │   │   ├── pets.ts                 # 47 mascotas (23 perros + 24 gatos)
│   │   │   └── news.ts                 # 8 artículos de noticias
│   │   ├── pages/
│   │   │   ├── Home.tsx                # Página de inicio
│   │   │   ├── Adopta.tsx              # Catálogo de mascotas con filtros
│   │   │   ├── PetDetail.tsx           # Detalle de mascota individual
│   │   │   ├── AdoptionForm.tsx        # Formulario multi-paso
│   │   │   ├── Noticias.tsx            # Listado de noticias
│   │   │   ├── NewsDetail.tsx          # Detalle de noticia
│   │   │   ├── Actividades.tsx         # Pasos y actividades
│   │   │   ├── Requisitos.tsx          # Requisitos para adoptar
│   │   │   ├── Contacto.tsx            # Página de contacto
│   │   │   └── NotFound.tsx            # Página 404 personalizada
│   │   ├── App.tsx                     # Componente principal
│   │   ├── Root.tsx                    # Layout wrapper
│   │   └── routes.ts                   # Configuración de rutas
│   ├── imports/                        # Assets y componentes de Figma
│   └── styles/
│       ├── fonts.css                   # Fuentes custom
│       ├── theme.css                   # Variables de tema Tailwind
│       ├── tailwind.css                # Base Tailwind
│       └── index.css                   # Estilos globales
├── package.json
├── vite.config.ts
├── postcss.config.mjs
├── README.md
└── .gitignore
```

---

## 🎨 Diseño y Estilo

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| 🔵 Azul Principal | `#4074d4` | Botones primarios, enlaces, acciones principales |
| 💗 Rosa Acento | `#c8566e` | CTAs, elementos destacados, hover states |
| 🤎 Beige/Crema | `#ebe8d6` | Fondos suaves, secciones alternadas |
| ⚫ Gris Oscuro | `#1e1e1e` | Textos principales |
| ⚪ Blanco | `#ffffff` | Fondo principal, tarjetas |
| 🌫️ Gris Claro | `#f8f8f8` | Fondos secundarios |

### Tipografía
- **MangoGrotesque Bold** - Fuente para la navegación
  - Peso: Bold (700)
  - Uso: Menú de navegación principal, botones CTA
  
- **Nohemi Medium** - Fuente para títulos y elementos destacados
  - Peso: Medium (500)
  - Uso: Headers (h1-h4), labels, botones, elementos UI
  
- **Nohemi Regular** - Fuente principal del body
  - Peso: Regular (400)
  - Uso: Textos generales, párrafos, inputs, contenido

### Sistema de Diseño
- **Estilo Bubbly**: Esquinas redondeadas generosas (15px-50px)
- **Espaciado**: Sistema consistente basado en Tailwind
- **Sombras**: Sutiles para elevación de tarjetas
- **Transiciones**: 200-300ms para interacciones suaves
- **Iconografía**: Lucide React + Material Icons
- **Responsive**: Mobile-first con breakpoints Tailwind

---

## 📱 Páginas de la Aplicación

### Rutas Principales

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Página de inicio con hero y estadísticas |
| `/adopta` | Adopta | Catálogo de 47 mascotas con filtros |
| `/adopta/:id` | PetDetail | Detalle de mascota individual |
| `/adopta/:id/formulario` | AdoptionForm | Formulario de adopción 4 pasos |
| `/noticias` | Noticias | Listado de noticias y artículos |
| `/noticias/:id` | NewsDetail | Detalle de noticia completa |
| `/actividades` | Actividades | Pasos y proceso de adopción |
| `/requisitos` | Requisitos | Requisitos para adoptar |
| `/contacto` | Contacto | Formulario y datos de contacto |
| `*` | NotFound | Página 404 personalizada |

---

## 🎯 Funcionalidades Destacadas

### Sistema de Filtros Avanzado
- ✅ Sin scroll horizontal - Layout responsive con wrapping
- ✅ Distancia como menú desplegable (3km / 10km / +10km)
- ✅ Temperamento desplegable con 20 opciones
- ✅ Raza desplegable con 30+ razas por especie
- ✅ Filtros visuales para tamaño (iconos de perro/gato escalables)
- ✅ Nivel de energía con iconos de rayo
- ✅ Contador de filtros activos
- ✅ Botón "Limpiar Todo"

### Datos Mejorados
- ✅ 47 mascotas totales (eliminado 1 perro mal categorizado)
- ✅ Cada mascota tiene 3 imágenes ÚNICAS en su galería
- ✅ Mezcla de imágenes Figma + Unsplash
- ✅ Información completa: edad, raza, temperamento, salud
- ✅ Sistema de distancia en kilómetros

### Experiencia de Usuario
- ✅ Navegación con indicador de página activa
- ✅ Footer profesional de 3 columnas
- ✅ Transiciones suaves entre estados
- ✅ Estados hover interactivos
- ✅ Formularios con validación completa
- ✅ Responsive en todos los dispositivos
- ✅ Página 404 amigable

---

## 🌟 Próximos Pasos Sugeridos

### Backend e Infraestructura
- [ ] Integración con Supabase/Firebase para base de datos
- [ ] API REST para gestión de mascotas
- [ ] Sistema de autenticación (usuarios y refugios)
- [ ] Panel de administración para refugios
- [ ] Upload de imágenes a cloud storage

### Funcionalidades Nuevas
- [ ] Sistema de favoritos/guardados
- [ ] Compartir mascotas en redes sociales
- [ ] Galería de historias de éxito
- [ ] Sistema de donaciones (Stripe/PayPal)
- [ ] Notificaciones por email (Resend/SendGrid)
- [ ] Chat en vivo con refugios
- [ ] Integración de calendario para visitas
- [ ] Sistema de seguimiento post-adopción
- [ ] Reviews y testimonios de adoptantes

### Mejoras Técnicas
- [ ] Tests unitarios (Vitest)
- [ ] Tests E2E (Playwright/Cypress)
- [ ] Optimización de imágenes (next/image alternativa)
- [ ] PWA (Progressive Web App)
- [ ] SEO optimization (React Helmet)
- [ ] Analytics (Google Analytics/Plausible)
- [ ] Internacionalización (i18n)

---

## 📝 Notas Importantes

- ✅ Las imágenes provienen de Figma (assets importados) y Unsplash
- ✅ Los datos de mascotas son de ejemplo (mock data)
- ⚠️ El formulario de adopción NO envía datos a servidor (frontend only)
- ⚠️ Los enlaces de redes sociales son placeholders
- ✅ Proyecto completamente responsive
- ✅ Código TypeScript con tipado estricto

---

## 👨‍💻 Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev           # Inicia servidor de desarrollo

# Producción  
pnpm build         # Crea build optimizado

# Linting (si se configura)
pnpm lint          # Ejecuta ESLint

# Testing (si se configura)
pnpm test          # Ejecuta tests
```

### Variables de Entorno

Crea un archivo `.env.local` para configuraciones:

```env
VITE_APP_NAME=AdoptApp
VITE_API_URL=https://api.adoptapp.com
# Agrega tus variables aquí
```

---

## 🤝 Contribuciones

Este proyecto fue creado para **AdoptApp** con el objetivo de facilitar el proceso de adopción de mascotas y crear conciencia sobre el bienestar animal.

### ¿Cómo contribuir?

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🙏 Créditos

- **Diseño UI/UX**: Andiesgn
- **Desarrollo**: AdoptApp Team
- **Imágenes**: Unsplash + Figma Assets
- **Iconografía**: Lucide React, Material UI

---

## 📞 Contacto

- **Website**: [adoptapp.com](https://adoptapp.com)
- **Email**: contacto@adoptapp.com
- **Instagram**: [@adoptapp](https://instagram.com/adoptapp)
- **Facebook**: [AdoptApp](https://facebook.com/adoptapp)

---

<div align="center">

**Hecho con ❤️ para los animales** 🐾

[![Star this repo](https://img.shields.io/github/stars/tu-usuario/adoptapp?style=social)](https://github.com/tu-usuario/adoptapp)
[![Follow on Twitter](https://img.shields.io/twitter/follow/adoptapp?style=social)](https://twitter.com/adoptapp)

</div>