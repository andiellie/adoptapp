import { Link, useLocation } from "react-router";
import { Heart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import imgAsset60 from "figma:asset/cb9bec3edf1d487b63415af21583e520fe111544.png";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", label: "INICIO" },
    { path: "/noticias", label: "NOTICIAS" },
    { path: "/actividades", label: "ACTIVIDADES" },
    { path: "/requisitos", label: "REQUISITOS" },
    { path: "/contacto", label: "CONTACTO" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] sm:h-[80px] lg:h-[90px]">
          {/* Logo */}
          <Link to="/" className="relative group flex-shrink-0">
            <div className="h-[40px] w-[160px] sm:h-[50px] sm:w-[200px] lg:h-[55px] lg:w-[220px] transition-transform group-hover:scale-105 duration-300">
              <img 
                src={imgAsset60} 
                alt="AdoptApp" 
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation - Hidden on tablets and mobile */}
          <div className="hidden xl:flex items-center gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-4 py-2.5 rounded-[18px]
                  font-['MangoGrotesque',sans-serif] font-bold
                  text-[14px] tracking-[0.3px]
                  transition-all duration-200
                  ${isActive(item.path) 
                    ? 'text-[#4074d4]' 
                    : 'text-[#1e1e1e] hover:text-[#4074d4]'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button - Desktop */}
            <Link
              to="/adopta"
              className={`
                ml-3 px-6 py-2.5 rounded-[25px]
                font-['MangoGrotesque',sans-serif] font-bold
                text-[14px] tracking-[0.3px]
                transition-all duration-300 flex items-center gap-2
                ${isActive("/adopta")
                  ? 'bg-gradient-to-r from-[#c8566e] to-[#d86880] text-white shadow-lg shadow-[#c8566e]/30 scale-105'
                  : 'bg-gradient-to-r from-[#c8566e] to-[#d86880] text-white hover:shadow-xl hover:shadow-[#c8566e]/40 hover:scale-105'
                }
              `}
            >
              <Heart className="w-4 h-4 fill-current" />
              ADOPTA
            </Link>
          </div>

          {/* Tablet Navigation - Visible only on large screens, hidden on xl */}
          <div className="hidden lg:flex xl:hidden items-center gap-1">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-3 py-2 rounded-[18px]
                  font-['MangoGrotesque',sans-serif] font-bold
                  text-[13px] tracking-[0.3px]
                  transition-all duration-200
                  ${isActive(item.path) 
                    ? 'text-[#4074d4]' 
                    : 'text-[#1e1e1e] hover:text-[#4074d4]'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button - Tablet */}
            <Link
              to="/adopta"
              className={`
                ml-2 px-5 py-2 rounded-[25px]
                font-['MangoGrotesque',sans-serif] font-bold
                text-[13px] tracking-[0.3px]
                transition-all duration-300 flex items-center gap-1.5
                ${isActive("/adopta")
                  ? 'bg-gradient-to-r from-[#c8566e] to-[#d86880] text-white shadow-lg shadow-[#c8566e]/30'
                  : 'bg-gradient-to-r from-[#c8566e] to-[#d86880] text-white hover:shadow-xl hover:shadow-[#c8566e]/40'
                }
              `}
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              ADOPTA
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[15px] hover:bg-[#ebe8d6] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1e1e1e]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1e1e1e]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[70px] sm:top-[80px] bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`
          lg:hidden fixed left-0 right-0 top-[70px] sm:top-[80px] bg-white border-t border-[#ebe8d6] 
          shadow-[0_10px_40px_rgba(0,0,0,0.1)]
          max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto
          transition-all duration-300 ease-in-out
          ${mobileMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-4 opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="max-w-[1728px] mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`
                block px-5 sm:px-6 py-3.5 sm:py-4 rounded-[20px]
                font-['MangoGrotesque',sans-serif] font-bold
                text-[15px] sm:text-[16px] tracking-[0.3px]
                transition-all duration-200
                ${isActive(item.path) 
                  ? 'text-[#4074d4]' 
                  : 'text-[#1e1e1e] hover:text-[#4074d4]'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
          
          <Link
            to="/adopta"
            onClick={() => setMobileMenuOpen(false)}
            className={`
              block px-5 sm:px-6 py-3.5 sm:py-4 rounded-[20px]
              font-['MangoGrotesque',sans-serif] font-bold
              text-[15px] sm:text-[16px] tracking-[0.3px]
              transition-all duration-300 flex items-center justify-center gap-2
              ${isActive("/adopta")
                ? 'bg-gradient-to-r from-[#c8566e] to-[#d86880] text-white shadow-lg'
                : 'bg-gradient-to-r from-[#c8566e] to-[#d86880] text-white hover:shadow-xl'
              }
            `}
          >
            <Heart className="w-5 h-5 fill-current" />
            ADOPTA
          </Link>
        </div>
      </div>
    </nav>
  );
}