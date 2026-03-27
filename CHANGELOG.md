# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.1.0] - 2025-01-23

### 🎨 Cambiado

#### Sistema Tipográfico
- **Actualizada tipografía completa** del sitio con nuevas fuentes custom
  - **MangoGrotesque Bold**: Implementada en toda la navegación (desktop, tablet, mobile)
  - **Nohemi Regular**: Ahora es la fuente principal del body y textos generales
  - **Nohemi Medium**: Aplicada a todos los headers (h1-h4), labels y botones
- Mejorada legibilidad y consistencia visual en toda la plataforma
- Actualizados archivos de configuración de fuentes en `/src/styles/fonts.css`
- Modificado `theme.css` para aplicar las nuevas fuentes globalmente

#### Archivos Modificados
- `/src/styles/fonts.css` - Importación de MangoGrotesque y Nohemi
- `/src/styles/theme.css` - Variables globales de fuentes
- `/src/app/components/Navigation.tsx` - Navegación con MangoGrotesque
- `/README.md` - Documentación actualizada del sistema tipográfico

### ✨ Añadido

#### Archivos de Fuentes
- `/src/imports/MangoGrotesque-Bold.css` - Definición de @font-face
- `/src/imports/Nohemi-Regular.css` - Fuente principal (ya existente)
- `/src/imports/Nohemi-Medium.css` - Fuente para títulos (ya existente)

---

## [1.0.0] - 2025-01-20

### 🎉 Lanzamiento Inicial

Primera versión completa de AdoptApp - Plataforma de Adopción de Mascotas

### ✨ Añadido

#### Páginas Principales
- **Home**: Página de inicio con hero section, estadísticas y misión
- **Adopta**: Catálogo completo de 47 mascotas (23 perros + 24 gatos)
- **Detalle de Mascota**: Página individual con galería de 3 imágenes únicas
- **Formulario de Adopción**: Proceso multi-paso (4 pasos) con validación
- **Noticias**: Sistema completo con 8 artículos
- **Detalle de Noticia**: Página de artículo completo con metadata
- **Actividades**: Información sobre pasos para adoptar
- **Requisitos**: Lista detallada de requisitos para adopción
- **Contacto**: Formulario de contacto con mapa y FAQs
- **404**: Página de error personalizada

#### Sistema de Filtros Avanzado
- Filtro por especie con tabs dedicadas (Perros/Gatos)
- Filtro por género (Macho/Hembra) con iconos interactivos
- Filtro por edad (Cachorro/Adulto/Senior)
- Filtro por tamaño (Mini/Chico/Mediano/Grande) con iconos visuales
- Filtro por nivel de energía (1-3 rayos)
- **Menú desplegable de Distancia** (3km / 10km / +10km)
- **Menú desplegable de Temperamento** (20 opciones)
- **Menú desplegable de Raza** (30+ razas por especie)
- Sin scroll horizontal - Layout responsive con wrapping
- Contador de filtros activos
- Botón "Limpiar Todo"

#### Componentes
- `Navigation`: Barra de navegación con indicador de página activa
- `Footer`: Footer profesional de 3 columnas (Logo | Enlaces | Info)
- `FilterBar`: Barra de filtros avanzada sin scroll horizontal
- `SpeciesTabs`: Tabs de Perros/Gatos
- `AdoptButton`: Botón de adopción reutilizable
- Componentes UI de Radix (40+ componentes)

#### Datos
- 47 mascotas totales con información completa
  - 23 Perros con razas variadas
  - 24 Gatos con razas variadas
- Cada mascota tiene 3 imágenes únicas (eliminadas repeticiones)
- 8 artículos de noticias con contenido completo
- Categorías: La Laguna, México, El mundo, Comunidad
- Imágenes de Unsplash + Assets de Figma

#### Estilos y Diseño
- Sistema de colores cálidos (Azul #4074d4, Rosa #c8566e, Beige #ebe8d6)
- Tipografía dual: Unbounded (títulos) + Neue Haas Grotesk Display (body)
- Estilo "bubbly" con esquinas redondeadas
- Diseño completamente responsive
- Transiciones suaves y animaciones
- Sistema de iconografía con Lucide React

#### Navegación
- React Router 7 con Data APIs
- Rutas principales: Home, Adopta, Noticias, Actividades, Requisitos, Contacto
- Rutas dinámicas para detalle de mascota y noticia
- Sistema de navegación contextual

### 🔧 Cambiado

- **Actualizada tipografía**: De Urbanist a Neue Haas Grotesk Display en todos los componentes
- **Mejorado Footer**: Nuevo layout de 3 columnas más limpio
- **Optimizado FilterBar**: Eliminada barra horizontal larga, ahora con menús desplegables
- **Actualizada paleta**: Colores más cálidos y empáticos

### 🐛 Corregido

- Eliminado perro "Loki" (ID 9) que estaba mal categorizado como gato
- Corregidas galerías de mascotas para tener 3 imágenes únicas (no repetidas)
- Ajustado responsive de filtros para evitar overflow horizontal
- Corregida navegación entre páginas de detalle

### 🗑️ Eliminado

- Scroll horizontal en barra de filtros
- Filtros inline de distancia (reemplazados por menú desplegable)
- Texto descriptivo "Conectando mascotas" del footer
- Mascotas con imágenes repetidas en galería
- Mascota incorrectamente categorizada

### 🛠️ Técnico

#### Stack Tecnológico
- React 18.3.1
- TypeScript 5.x
- Vite 6.3.5
- React Router 7.13
- Tailwind CSS v4.1
- Motion (Framer Motion) 12.23
- Radix UI (componentes accesibles)
- Lucide React (iconografía)
- Material UI (componentes adicionales)

#### Estructura
- Arquitectura modular con separación de componentes
- Sistema de rutas organizado
- Datos mock estructurados (pets.ts, news.ts)
- Estilos con Tailwind CSS v4
- TypeScript para tipado estático

#### Optimizaciones
- Build de producción optimizado con Vite
- Lazy loading de rutas
- Imágenes optimizadas de Unsplash
- CSS modular con Tailwind

---

## [Unreleased]

### Planeado para futuras versiones

#### v1.1.0
- [ ] Sistema de favoritos
- [ ] Compartir en redes sociales
- [ ] Búsqueda por nombre de mascota
- [ ] Paginación del catálogo

#### v1.2.0
- [ ] Integración con backend (Supabase/Firebase)
- [ ] Sistema de autenticación
- [ ] Panel de administración para refugios
- [ ] Upload de imágenes

#### v1.3.0
- [ ] Sistema de donaciones
- [ ] Chat en vivo
- [ ] Notificaciones por email
- [ ] Calendario de visitas

#### v2.0.0
- [ ] PWA (Progressive Web App)
- [ ] Modo offline
- [ ] Notificaciones push
- [ ] Internacionalización (i18n)

---

## Guía de Versiones

### Tipos de Cambios
- **Añadido**: Para nuevas características
- **Cambiado**: Para cambios en funcionalidad existente
- **Deprecado**: Para características que se eliminarán pronto
- **Eliminado**: Para características eliminadas
- **Corregido**: Para corrección de bugs
- **Seguridad**: Para vulnerabilidades de seguridad

### Versionado Semántico

Dado un número de versión MAJOR.MINOR.PATCH:

- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Nuevas funcionalidades compatibles con versiones anteriores
- **PATCH**: Correcciones de bugs compatibles con versiones anteriores

---

[1.0.0]: https://github.com/adoptapp/adoptapp/releases/tag/v1.0.0