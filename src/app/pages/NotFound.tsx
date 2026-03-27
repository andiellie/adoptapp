import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px] flex items-center justify-center">
      <div className="text-center px-8">
        <div className="mb-8">
          <h1 className="font-['Unbounded:Medium',sans-serif] font-medium text-[120px] text-[#4074d4] mb-4">
            404
          </h1>
          <h2 className="font-['Unbounded:Medium',sans-serif] font-medium text-[36px] text-[#1e1e1e] mb-4">
            Página no encontrada
          </h2>
          <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[20px] text-[#666] max-w-md mx-auto mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#4074d4] text-white font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] px-8 py-4 rounded-[20px] hover:bg-[#3563b8] transition-colors shadow-lg"
          >
            <Home className="w-5 h-5" />
            Ir al inicio
          </Link>
          <Link
            to="/adopta"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#4074d4] text-[#4074d4] font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] px-8 py-4 rounded-[20px] hover:bg-[#f5f5f5] transition-colors"
          >
            <Search className="w-5 h-5" />
            Buscar mascotas
          </Link>
        </div>

        <div className="mt-16">
          <p className="font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[16px] text-[#666] mb-4">
            Enlaces útiles:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/noticias" className="text-[#4074d4] hover:underline">
              Noticias
            </Link>
            <span className="text-[#666]">•</span>
            <Link to="/actividades" className="text-[#4074d4] hover:underline">
              Actividades
            </Link>
            <span className="text-[#666]">•</span>
            <Link to="/requisitos" className="text-[#4074d4] hover:underline">
              Requisitos
            </Link>
            <span className="text-[#666]">•</span>
            <Link to="/contacto" className="text-[#4074d4] hover:underline">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
