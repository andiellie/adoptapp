# Design system: tokens de color, tipografía y radio

## Contexto

El pedido fue "crear el design system" de AdoptApp. Hoy no existe: cada
página define sus propios valores sueltos directamente en `className`
(colores hex, tamaños de fuente en px, radios de esquina), repetidos
cientos de veces sin una fuente única de verdad. `src/styles/theme.css`
sí tiene variables CSS, pero son el boilerplate genérico de shadcn
(colores neutros en oklch) — no reflejan la marca real de la app.

Además hay dos decisiones tomadas previamente y aún sin implementar
que tocan los mismos archivos:

- [2026-06-28-adopta-render-and-fonts-design.md](2026-06-28-adopta-render-and-fonts-design.md):
  consolidar 6 familias de fuente rotas a `Unbounded` (marca/headings) +
  `Urbanist` (cuerpo), manteniendo `Inter` en el único componente que ya
  lo usa.
- [2026-06-28-unify-corner-radius-design.md](2026-06-28-unify-corner-radius-design.md):
  unificar todo radio de esquina (literal o por token, incluida la
  carpeta `ui/` sin uso) a `6px`, con excepción de `rounded-none` y
  `rounded-[inherit]`.

Este spec **incorpora ambas decisiones** y agrega tokens de color y una
escala tipográfica de tamaños, para aplicar todo en una sola pasada por
archivo en vez de tres migraciones separadas.

Durante el brainstorming, el usuario compartió una paleta de marca nueva
(imagen con 7 swatches: `#1E1F20`, `#7589BC`, `#9C8679`, `#000000`,
`#FFFFFF`, `#FDCD95`, `#FCB040`, dos de ellos etiquetados "Warmth" con un
ícono de corazón) que **reemplaza por completo** los colores actuales
(`#4074d4` azul, `#c8566e` rosa, y los 6 fondos pastel de tarjetas).

## Decisiones

### 1. Tokens de color — paleta nueva, reemplaza la actual

Todos los tokens viven en `src/styles/theme.css` como variables CSS y se
referencian desde las clases de Tailwind vía `bg-[var(--color-x)]`,
`text-[var(--color-x)]`, etc.

| Token | Hex | Rol | Reemplaza |
|---|---|---|---|
| `--color-ink` | `#1E1F20` | Texto principal | `#1e1e1e` (134 usos) |
| `--color-muted` | `#9C8679` | Texto secundario | `#666` (25 usos) |
| `--color-primary` | `#7589BC` | Marca, botones principales, headings | `#4074d4` (89 usos) |
| `--color-primary-hover` | `#6374A0` | Hover de primario (~15% más oscuro) | `#3563b8` |
| `--color-accent` | `#FCB040` | CTA emocional (adoptar, destacar) | `#c8566e` (36 usos) |
| `--color-accent-hover` | `#D69636` | Hover de acento (~15% más oscuro) | `#b04558` |
| `--color-surface-soft` | `#FDCD95` | Fondo suave de tarjetas/secciones (un solo tono, sin variar por sección) | `#ebe8d6`, `#f5f5f5`, `#f9fcf3`, `#e6faff`, `#fff5f0`, `#f0fdfd` |
| `--color-border` | `#9C8679` al 25% de opacidad | Bordes sutiles | `#ddd`, `#ccc`, `#e8e8e8`, `#ebebeb` |
| `--color-white` | `#FFFFFF` | Fondo base, texto sobre oscuro | `#fff` |
| `--color-black` | `#000000` | Contraste máximo cuando se necesite | — |

**Caso especial — `AdoptButton.tsx`:** el botón "Quiero adoptarlo" usa un
ícono de corazón sobre fondo rosa suave (`#f0cadb`/`#e8bcd1`, corazón
`#BF3576`). Como la paleta nueva también asocia el corazón al naranja
("Warmth"), este botón pasa a `bg-[var(--color-surface-soft)]
hover:bg-[var(--color-accent)]` con el corazón en
`fill-[var(--color-accent)]`, alineándolo con la nueva identidad en vez
de mantener su rosa aislado.

**Fuera de alcance:** colores de marcas de terceros (Facebook `#1877f2`,
Twitter `#1da1f2`, WhatsApp, estrella de rating `#ffd700`) quedan
literales — no son parte del sistema de marca propio.

### 2. Tipografía — familia + escala de tamaños

Familia (decisión previa, sin cambios): `Unbounded` para marca/headings/
botones/tabs, `Urbanist` para cuerpo/labels/inputs, `Inter` sin cambios
en `Group60-14-301.tsx`. Detalle de infraestructura (fonts.css, Google
Fonts import, borrado de CSS rotos) según
[el spec original](2026-06-28-adopta-render-and-fonts-design.md).

Escala de tamaños nueva (13 pasos), consolidando los 23 valores
arbitrarios actuales (`text-[Npx]`) por vecino más cercano:

| Token | px | Reemplaza |
|---|---|---|
| `--text-xs` | 12 | 10, 11, 12 |
| `--text-sm` | 14 | 13, 14, 15 |
| `--text-base` | 16 | 16 |
| `--text-md` | 18 | 18 |
| `--text-lg` | 20 | 20 |
| `--text-xl` | 24 | 22, 24 |
| `--text-2xl` | 28 | 26, 28 |
| `--text-3xl` | 32 | 32 |
| `--text-4xl` | 36 | 34, 36, 40 |
| `--text-5xl` | 48 | 42, 48, 52 |
| `--text-6xl` | 60 | 60 |
| `--text-7xl` | 72 | 72 |
| `--text-display` | 120 | 120 (solo el "404" de `NotFound.tsx`) |

Cada `text-[Npx]` en `src/app/pages` y `src/app/components` (excluida
`ui/`, que usa la escala estándar de Tailwind sin valores arbitrarios)
se reemplaza por `text-[var(--text-x)]` según la tabla. Los pesos
(`font-medium`, `font-bold`, etc.) no cambian.

### 3. Radio de esquinas — 6px (decisión previa, sin cambios)

Todo `rounded-[Npx]`, `rounded-full` y clases por token (`rounded-lg`,
`rounded-md`, etc., incluida la carpeta `ui/` sin uso) pasan a
`rounded-[6px]` o su variante direccional (`rounded-t-[6px]`, etc.).
Excepciones: `rounded-none` (`toggle-group.tsx`) y `rounded-[inherit]`
(`scroll-area.tsx`). Detalle completo en
[el spec de radio](2026-06-28-unify-corner-radius-design.md).

### Fuera de alcance

- Espaciado (`padding`/`margin`/`gap`): ya usa la escala estándar de
  Tailwind (`p-4`, `gap-6`, etc.) de forma consistente — no hay valores
  arbitrarios que tokenizar, salvo el offset de header
  (`pt-[70px] sm:pt-[80px] lg:pt-[90px]`) repetido en 10 páginas, que
  queda igual por ahora (no es parte de este pedido).
- `src/imports/` (exports de Figma Make sin uso) — no se toca.
- `src/app/pages/pets.ts`/`news.ts` y lógica de filtros — sin cambios.
- Letter-spacing/tracking arbitrario — sin cambios.

## Verificación

- `npm run dev` corre sin errores.
- Grep de `#1e1e1e|#4074d4|#c8566e|#3563b8|#b04558|#ebe8d6|#f5f5f5|#f9fcf3|#e6faff|#fff5f0|#f0fdfd` en
  `src/app/pages` y `src/app/components` (excluida `ui/`) devuelve cero
  resultados, salvo los colores de terceros documentados como fuera de
  alcance.
- Grep de `text-\[(?!var\(--text-)` en el mismo alcance devuelve cero
  resultados, salvo `text-[120px]` ya migrado a
  `text-[var(--text-display)]`.
- Grep de `rounded-(lg|md|sm|xl|2xl|3xl|full)\b` y
  `rounded-\[(?!var\(--radius\)|inherit)` en el mismo alcance devuelve
  cero resultados, salvo `rounded-none`.
- Revisión visual de Home, Adopta, Contacto, Requisitos, PetDetail y
  AdoptButton en el navegador: la paleta naranja/azul/durazno se ve
  consistente, las tarjetas de info ya no se diferencian por color
  (todas en `surface-soft`), y el radio de esquina es uniforme.
