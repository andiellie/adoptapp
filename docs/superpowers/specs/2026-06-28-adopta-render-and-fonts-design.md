# Lista de perros (/adopta): arreglar el render y la tipografía

## Contexto

El pedido original fue "trabajar en el diseño de la lista de perros" porque
visualmente no coincidía con un mockup de referencia. Al investigar, la causa
no era el diseño de `/adopta` en sí, sino dos bugs que afectan a toda la app:

1. La app no podía correr en un Vite normal: 18 archivos importan imágenes
   con el esquema `figma:asset/<hash>.png`, que solo resuelve dentro del
   entorno de Figma Make. Las imágenes sí existen en `src/assets/`, solo
   falta el alias.
2. El sistema de fuentes está roto: hay seis nombres de familia distintos
   usados en el código (`MangoGrotesque`, `Nohemi`/`NohemiMed`,
   `Neue Haas Grotesk Display`, `Unbounded:*`, `Urbanist:*`, `LEMON_MILK:*`,
   `Inter:*`), pero los archivos de fuente reales (`.woff2`/`.otf`) no
   existen en el repo para ninguna. Todo cae a la fuente del sistema
   (Segoe UI en Windows), perdiendo el look "bubbly" del diseño.

Una vez resuelto (1), se comparó `/adopta` contra el mockup al mismo ancho de
viewport (853px, breakpoint `md`) y la estructura, el grid de 4 columnas, la
barra de filtros y las cards ya coinciden. **No se necesitan cambios de
layout en `/adopta`** — el problema visual real era (2).

## Decisiones

### 1. Alias de Vite para `figma:asset` — ya aplicado

`vite.config.ts` → `resolve.alias['figma:asset'] = path.resolve(__dirname, './src/assets')`.
Sin cambios de código en los 18 archivos que usan ese import; el alias hace
que `figma:asset/<hash>.png` resuelva a `src/assets/<hash>.png`.

### 2. Consolidación tipográfica a nivel de toda la app

Reemplazar todas las familias rotas por dos fuentes gratuitas de Google
Fonts ya parcialmente referenciadas en el proyecto, **salvo** un componente
que ya usa `Inter` y se mantiene así:

| Uso | Antes | Después |
|---|---|---|
| Logo, nav, headings, botones, tabs, marca | `MangoGrotesque`, `Unbounded:*`, `LEMON_MILK:*` | `Unbounded` |
| Cuerpo de texto, párrafos, labels, inputs | `Nohemi`/`NohemiMed`, `Neue Haas Grotesk Display`, `Urbanist:*` | `Urbanist` |
| Un componente Figma-importado (`Group60-14-301.tsx`) | `Inter:Regular` | `Inter` (sin cambio de familia) |

El patrón de reemplazo es mecánico: cada clase ya tiene su utilidad de peso
de Tailwind junto al nombre roto, p. ej.
`font-['Urbanist:SemiBold',sans-serif] font-semibold` → solo se quita el
sufijo `:SemiBold` del nombre de familia (`font-['Urbanist',sans-serif]
font-semibold`); el peso real no cambia.

Cambios de infraestructura:

- `src/styles/fonts.css`: quitar los `@import` locales rotos
  (`MangoGrotesque-Bold.css`, `Nohemi-Regular.css`, `Nohemi-Medium.css`,
  cuyos `.woff2`/`.otf` no existen) y el `@import` de Google Fonts de
  `Outfit` (no usado en ningún lado). Agregar un único `@import` de Google
  Fonts con `Unbounded` (weights 500, 600, 700), `Urbanist` (400, 500, 600,
  700) e `Inter` (400).
- `src/styles/theme.css`: cambiar los `font-family` base de `body`,
  `h1`-`h4`, `label`, `button`, `input` de `'Nohemi'/'NohemiMed'` a
  `'Urbanist'`.
- Borrar `src/imports/MangoGrotesque-Bold.css`, `Nohemi-Regular.css`,
  `Nohemi-Medium.css` (apuntan a archivos de fuente que no existen).

### Fuera de alcance

- No se tocan `pets.ts`/`news.ts` ni la lógica de filtros — ya funcionan
  correctamente una vez resuelto el alias.
- No se cambia el layout, grid ni estilos de `FilterBar`/`SpeciesTabs`/cards
  en `/adopta` — ya coinciden con el mockup.
- No se persiguen los archivos de fuente originales (MangoGrotesque/Nohemi)
  — se reemplazan por alternativas gratuitas, no se intenta licenciarlas.

## Verificación

- La app debe levantar con `npm run dev` sin errores de import.
- Captura de `/adopta` a 853px de ancho debe seguir coincidiendo
  estructuralmente con el mockup de referencia.
- Grep de `font-\[.*:.*'\]` (familia con sufijo de peso tipo `:Bold`) en
  `src/` debe devolver cero resultados fuera de los casos ya decididos.
- Ninguna referencia a `Nohemi`, `NohemiMed`, `MangoGrotesque`,
  `Neue Haas Grotesk Display` o `LEMON_MILK` debe quedar en `src/`.
