import { Link } from "react-router";
import { Heart } from "lucide-react";
import imgAsset60 from "figma:asset/4b5b62d5b4d1da551e6b75e9d040174bc6dd2a6a.png";

export function Footer() {
  return (
    <footer className="bg-[#3a3a3a] mt-12 sm:mt-16 lg:mt-20 py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-6 sm:mb-8">
          {/* Logo */}
          <div>
            <div className="h-[100px] sm:h-[120px] w-[100px] sm:w-[120px]">
              <img 
                src={imgAsset60} 
                alt="AdoptApp" 
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[15px] sm:text-[16px] text-white mb-3 sm:mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/adopta" 
                  className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Adoptar
                </Link>
              </li>
              <li>
                <Link 
                  to="/requisitos" 
                  className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Requisitos
                </Link>
              </li>
              <li>
                <Link 
                  to="/actividades" 
                  className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Actividades
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[15px] sm:text-[16px] text-white mb-3 sm:mb-4">
              Información
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/noticias" 
                  className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[12px] sm:text-[14px] text-white/90 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span>© 2026 AdoptApp. Todos los derechos reservados.</span>
              <span className="flex items-center gap-1">
                Con amor para los animales <Heart className="w-4 h-4 text-[#c8566e] fill-current" />
              </span>
            </p>
            
            <div className="flex gap-4 sm:gap-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-['Neue Haas Grotesk Display',sans-serif] text-[13px] sm:text-[14px] text-white/80 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
          
          {/* Designed by */}
          <div className="text-center">
            <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[12px] sm:text-[13px] text-white/60">
              Designed by <span className="text-white/80 font-semibold">Andiesgn</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}