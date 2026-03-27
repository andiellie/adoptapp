interface SpeciesTabsProps {
  selectedSpecies: "perro" | "gato";
  onSelectSpecies: (species: "perro" | "gato") => void;
}

export function SpeciesTabs({ selectedSpecies, onSelectSpecies }: SpeciesTabsProps) {
  return (
    <div className="max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
      <div className="flex justify-center border-b-2 border-[#e8e8e8]">
        {/* Tab Perros */}
        <button
          onClick={() => onSelectSpecies("perro")}
          className={`
            relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-['Unbounded',sans-serif] font-bold text-[16px] sm:text-[18px] lg:text-[20px]
            transition-all duration-300 ease-out
            ${selectedSpecies === "perro" 
              ? 'text-[#c8566e]' 
              : 'text-[#999] hover:text-[#666]'
            }
          `}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className={`text-[24px] sm:text-[26px] lg:text-[28px] transition-transform duration-300 ${selectedSpecies === "perro" ? 'scale-110' : ''}`}>
              🐕
            </span>
            <span className="hidden sm:inline">Perros</span>
            <span className="sm:hidden">🐕</span>
          </div>
          
          {/* Línea indicadora inferior */}
          {selectedSpecies === "perro" && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] sm:h-[4px] bg-gradient-to-r from-[#ff9db5] via-[#c8566e] to-[#ff9db5] rounded-t-full animate-in slide-in-from-bottom-1 duration-300" />
          )}
        </button>

        {/* Tab Gatos */}
        <button
          onClick={() => onSelectSpecies("gato")}
          className={`
            relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-['Unbounded',sans-serif] font-bold text-[16px] sm:text-[18px] lg:text-[20px]
            transition-all duration-300 ease-out
            ${selectedSpecies === "gato" 
              ? 'text-[#4074d4]' 
              : 'text-[#999] hover:text-[#666]'
            }
          `}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className={`text-[24px] sm:text-[26px] lg:text-[28px] transition-transform duration-300 ${selectedSpecies === "gato" ? 'scale-110' : ''}`}>
              🐱
            </span>
            <span className="hidden sm:inline">Gatos</span>
            <span className="sm:hidden">🐱</span>
          </div>
          
          {/* Línea indicadora inferior */}
          {selectedSpecies === "gato" && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] sm:h-[4px] bg-gradient-to-r from-[#7ba3e8] via-[#4074d4] to-[#7ba3e8] rounded-t-full animate-in slide-in-from-bottom-1 duration-300" />
          )}
        </button>
      </div>
    </div>
  );
}