# Unificar el radio de esquinas a 6px

## Contexto

El pedido fue "unificar el round corner" del sitio. Actualmente `src/app`
tiene radios de esquina arbitrarios e inconsistentes:

- `rounded-[Npx]` literales con docenas de valores distintos (12px–55px),
  con variantes responsive (`sm:rounded-[20px]`, `lg:rounded-[55px]`, etc.)
  en `src/app/pages` y `src/app/components`.
- Clases de Tailwind basadas en el token `--radius` (`rounded-lg`,
  `rounded-md`, `rounded-sm`, `rounded-xl`, y sus variantes direccionales
  como `rounded-t-lg`, `rounded-l-md`, `rounded-tl-sm`) en
  `src/app/components/ui/` (librería shadcn, 38 archivos).
- `rounded-full` usado tanto para formas circulares/píldora (badges,
  avatares, botones de ícono, sliders, switches) como para un indicador
  de pestaña activa (`rounded-t-full` en `SpeciesTabs.tsx`).

`src/app/components/ui/` no se importa desde ninguna página o componente
activo (verificado por grep) — es la librería shadcn sin usar, pero el
pedido es unificarla igual por si se usa a futuro.

`src/imports/` (Frame64.tsx, Frame76.tsx, Group59-61.tsx, Home111.tsx,
etc.) tampoco se importa desde ningún lado — son exports de Figma Make
sin uso. **Quedan fuera de alcance**, no se tocan.

## Decisión

Reemplazar **todo** radio de esquina (literal o basado en token) por
`6px`, en todo `src/app/pages` y `src/app/components` (incluida `ui/`):

| Patrón actual | Reemplazo |
|---|---|
| `rounded-[Npx]`, `sm:rounded-[Npx]`, etc. | `rounded-[6px]` (mismo prefijo de breakpoint) |
| `rounded-full` | `rounded-[6px]` |
| `rounded-lg`, `rounded-md`, `rounded-sm`, `rounded-xl`, `rounded-2xl` | `rounded-[6px]` |
| `rounded-t-full`, `rounded-t-lg`, `rounded-b-lg`, `rounded-l-md`, `rounded-r-md`, `rounded-tl-sm`, etc. | equivalente direccional: `rounded-t-[6px]`, `rounded-b-[6px]`, `rounded-l-[6px]`, `rounded-r-[6px]`, `rounded-tl-[6px]`, etc. |

### Excepciones explícitas (no se tocan)

- `rounded-none` en `toggle-group.tsx` — es un "sin radio" intencional
  para que los botones agrupados se vean pegados; no es un valor a
  unificar.
- `rounded-[inherit]` en `scroll-area.tsx` — mecanismo estructural (el
  viewport hereda el radio de su contenedor), no un valor de diseño.
- `src/imports/` — código sin uso, fuera de alcance.

## Verificación

- `npm run dev` sigue corriendo sin errores.
- Grep de `rounded-(lg|md|sm|xl|2xl|3xl|full)\b` y `rounded-\[(?!6px|inherit)` en
  `src/app/pages` y `src/app/components` debe devolver cero resultados,
  salvo las dos excepciones documentadas arriba.
- Revisión visual rápida de Home, Adopta, Contacto y Requisitos en el
  navegador para confirmar que las tarjetas/botones se ven con esquina
  chica y consistente (no afecta layout, solo el radio).
