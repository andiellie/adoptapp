const colors: { name: string; varName: string; hex: string }[] = [
  { name: "Ink (texto principal)", varName: "--color-ink", hex: "#1E1F20" },
  { name: "Muted (texto secundario)", varName: "--color-muted", hex: "#9C8679" },
  { name: "Primary", varName: "--color-primary", hex: "#7589BC" },
  { name: "Primary hover", varName: "--color-primary-hover", hex: "#6374A0" },
  { name: "Accent", varName: "--color-accent", hex: "#FCB040" },
  { name: "Accent hover", varName: "--color-accent-hover", hex: "#D69636" },
  { name: "Surface soft", varName: "--color-surface-soft", hex: "#FDCD95" },
  { name: "White", varName: "--color-white", hex: "#FFFFFF" },
  { name: "Black", varName: "--color-black", hex: "#000000" },
];

const fonts: { name: string; family: string; weightName: string; weightValue: number; uso: string }[] = [
  { name: "Unbounded Light", family: "Unbounded", weightName: "Light", weightValue: 300, uso: "Marca / headings / botones (peso liviano)" },
  { name: "Unbounded Regular", family: "Unbounded", weightName: "Regular", weightValue: 400, uso: "Marca / headings / botones (peso por defecto)" },
  { name: "Unbounded Medium", family: "Unbounded", weightName: "Medium", weightValue: 500, uso: "Marca / headings / botones (énfasis)" },
  { name: "Unbounded SemiBold", family: "Unbounded", weightName: "SemiBold", weightValue: 600, uso: "Marca / headings / botones (mayor énfasis)" },
  { name: "Helvetica Neue Regular", family: "Helvetica Roman", weightName: "Regular", weightValue: 400, uso: "Cuerpo de texto, párrafos, labels, inputs (letter-spacing -2%)" },
];

const textSizes: { token: string; desktop: number; mobile: number }[] = [
  { token: "--text-xs", desktop: 12, mobile: 12 },
  { token: "--text-sm", desktop: 14, mobile: 14 },
  { token: "--text-base", desktop: 16, mobile: 16 },
  { token: "--text-md", desktop: 18, mobile: 18 },
  { token: "--text-lg", desktop: 20, mobile: 18 },
  { token: "--text-xl", desktop: 24, mobile: 20 },
  { token: "--text-2xl", desktop: 28, mobile: 22 },
  { token: "--text-3xl", desktop: 32, mobile: 24 },
  { token: "--text-4xl", desktop: 36, mobile: 28 },
  { token: "--text-5xl", desktop: 48, mobile: 32 },
  { token: "--text-6xl", desktop: 60, mobile: 40 },
  { token: "--text-7xl", desktop: 72, mobile: 48 },
  { token: "--text-display", desktop: 120, mobile: 64 },
];

export function DesignSystem() {
  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px] pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[112px]">
        <h1 className="font-['Unbounded',sans-serif] font-normal text-[60px] text-[var(--color-ink)] mb-2 mt-8">
          Design System
        </h1>
        <p className="font-['Helvetica_Roman',sans-serif] text-[var(--text-md)] text-[var(--color-muted)] mb-12">
          Colores, tipografía y radio de esquina de AdoptApp.
        </p>

        {/* Colores */}
        <section className="mb-16">
          <h2 className="font-['Unbounded',sans-serif] font-medium text-[var(--text-2xl)] text-[var(--color-ink)] mb-6">
            Colores
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {colors.map((color) => (
              <div key={color.varName} className="rounded-[var(--radius)] overflow-hidden border border-[var(--color-border)]">
                <div
                  className="h-24 border-b border-[var(--color-border)]"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-3 font-['Helvetica_Roman',sans-serif]">
                  <p className="text-[var(--text-sm)] font-semibold text-[var(--color-ink)]">{color.name}</p>
                  <p className="text-[var(--text-xs)] text-[var(--color-muted)]">{color.hex}</p>
                  <p className="text-[var(--text-xs)] text-[var(--color-muted)]">{color.varName}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tipografía: fuentes y pesos */}
        <section className="mb-16">
          <h2 className="font-['Unbounded',sans-serif] font-medium text-[var(--text-2xl)] text-[var(--color-ink)] mb-6">
            Fuentes y pesos
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="py-2 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Nombre</th>
                  <th className="py-2 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Familia (CSS)</th>
                  <th className="py-2 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Peso</th>
                  <th className="py-2 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Uso</th>
                  <th className="py-2 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Muestra</th>
                </tr>
              </thead>
              <tbody>
                {fonts.map((font) => (
                  <tr key={font.name} className="border-b border-[var(--color-border)]">
                    <td className="py-3 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-sm)] font-semibold text-[var(--color-ink)]">{font.name}</td>
                    <td className="py-3 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-sm)] text-[var(--color-muted)]">{font.family}</td>
                    <td className="py-3 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-sm)] text-[var(--color-muted)]">{font.weightName} ({font.weightValue})</td>
                    <td className="py-3 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-sm)] text-[var(--color-muted)]">{font.uso}</td>
                    <td className="py-3">
                      <span
                        className="text-[var(--text-lg)] text-[var(--color-ink)]"
                        style={{ fontFamily: font.family, fontWeight: font.weightValue }}
                      >
                        AdoptApp
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Escala de tamaños: desktop y mobile */}
        <section className="mb-16">
          <h2 className="font-['Unbounded',sans-serif] font-medium text-[var(--text-2xl)] text-[var(--color-ink)] mb-6">
            Escala de tamaños (px)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="py-2 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Token</th>
                  <th className="py-2 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Desktop</th>
                  <th className="py-2 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Mobile</th>
                  <th className="py-2 font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-muted)] uppercase">Muestra (desktop)</th>
                </tr>
              </thead>
              <tbody>
                {textSizes.map((size) => (
                  <tr key={size.token} className="border-b border-[var(--color-border)]">
                    <td className="py-3 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-sm)] text-[var(--color-muted)] whitespace-nowrap">{size.token}</td>
                    <td className="py-3 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-sm)] font-semibold text-[var(--color-ink)] whitespace-nowrap">{size.desktop}px</td>
                    <td className="py-3 pr-4 font-['Helvetica_Roman',sans-serif] text-[var(--text-sm)] font-semibold text-[var(--color-ink)] whitespace-nowrap">{size.mobile}px</td>
                    <td className="py-3">
                      <span
                        className="font-['Unbounded',sans-serif] font-medium text-[var(--color-ink)] truncate"
                        style={{ fontSize: `${size.desktop}px` }}
                      >
                        AdoptApp
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Body text de referencia */}
        <section className="mb-16">
          <h2 className="font-['Unbounded',sans-serif] font-medium text-[var(--text-2xl)] text-[var(--color-ink)] mb-6">
            Body
          </h2>
          <p
            className="text-[var(--color-ink)] mb-2"
            style={{ fontFamily: "Helvetica Roman", fontWeight: 400, fontSize: "16px", letterSpacing: "-0.02em" }}
          >
            Helvetica Neue Regular · 16px (desktop) · letter-spacing -2% — este es el texto de cuerpo
            que se usa en párrafos, labels e inputs en toda la app.
          </p>
          <p
            className="text-[var(--color-muted)]"
            style={{ fontFamily: "Helvetica Roman", fontWeight: 400, fontSize: "14px", letterSpacing: "-0.02em" }}
          >
            Helvetica Neue Regular · 14px (mobile) · letter-spacing -2% — mismo estilo, tamaño reducido para pantallas chicas.
          </p>
        </section>

        {/* Radio de esquinas */}
        <section className="mb-16">
          <h2 className="font-['Unbounded',sans-serif] font-medium text-[var(--text-2xl)] text-[var(--color-ink)] mb-6">
            Radio de esquinas
          </h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="w-32 h-32 rounded-[var(--radius)] bg-[var(--color-primary)] flex items-center justify-center">
              <span className="font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-white">6px</span>
            </div>
            <div className="w-32 h-12 rounded-[var(--radius)] bg-[var(--color-surface-soft)] flex items-center justify-center">
              <span className="font-['Helvetica_Roman',sans-serif] text-[var(--text-xs)] text-[var(--color-ink)]">Tarjeta</span>
            </div>
            <button className="px-8 py-3 rounded-[var(--radius)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors font-['Unbounded',sans-serif] font-medium text-white text-[var(--text-base)]">
              Botón acento
            </button>
            <button className="px-8 py-3 rounded-[var(--radius)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors font-['Unbounded',sans-serif] font-medium text-white text-[var(--text-base)]">
              Botón primario
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
