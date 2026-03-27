import { useState } from "react";
import { Zap, ChevronDown, ChevronUp } from "lucide-react";
import imgPerro1 from "figma:asset/2fc3c1efa4e539863af4bd12082661f70c271920.png";
import CatSilhouette from "../../imports/Cat-Silhouette-Icon-SVG.svg";

export interface FilterState {
  personality: string | null;
  size: string | null;
  sociability: number | null;
  distance: string | null;
  energyLevel: number | null;
  ageCategory: string | null;
  breeds: string[];
  gender: string | null;
  temperaments: string[];
}

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  selectedSpecies: "perro" | "gato";
}

const temperamentOptions = [
  "Sociable",
  "Juguetón",
  "Tranquilo",
  "Serio",
  "Cariñoso",
  "Activo",
  "Tímido",
  "Protector",
  "Independiente",
  "Curioso",
  "Leal",
  "Dócil",
  "Aventurero",
  "Enérgico",
  "Amigable",
  "Inteligente",
  "Obediente",
  "Afectuoso",
  "Valiente",
  "Gentil",
];

const dogBreeds = [
  "Golden Retriever",
  "Labrador Retriever",
  "Pomeranian",
  "Chihuahua",
  "Rottweiler",
  "Poodle",
  "Saint Bernard",
  "Beagle",
  "Yorkshire Terrier",
  "Pastor Alemán",
  "Bulldog Francés",
  "Husky Siberiano",
  "Dachshund",
  "Shih Tzu",
  "Boxer",
  "Border Collie",
  "Schnauzer",
  "Cocker Spaniel",
  "Dálmata",
  "Criollo",
  "Raza Criolla",
  "Corgi",
  "Doberman",
  "Bulldog Inglés",
  "Pitbull",
  "Pug",
  "Mastín",
  "Gran Danés",
  "Akita",
  "Samoyedo",
  "Chow Chow",
];

const catBreeds = [
  "Siamese",
  "Azul Ruso",
  "Persa",
  "Maine Coon",
  "Ragdoll",
  "Bengalí",
  "Británico de Pelo Corto",
  "Bombay",
  "Scottish Fold",
  "Tuxedo",
  "Sphynx",
  "Tortoiseshell",
  "Tabby",
  "Abisinio",
  "Birmano",
  "Angora Turco",
  "Exótico de Pelo Corto",
  "Oriental",
  "Devon Rex",
  "Cornish Rex",
  "Criollo",
  "Raza Criolla",
  "Gato Naranja",
  "Gato Calico",
  "Gato Blanco y Negro",
];

export function FilterBar({ filters, onFilterChange, selectedSpecies }: FilterBarProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const updateFilter = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const toggleTemperament = (temperament: string) => {
    const newTemperaments = filters.temperaments.includes(temperament)
      ? filters.temperaments.filter(t => t !== temperament)
      : [...filters.temperaments, temperament];
    updateFilter("temperaments", newTemperaments);
  };

  const toggleBreed = (breed: string) => {
    const newBreeds = filters.breeds.includes(breed)
      ? filters.breeds.filter(b => b !== breed)
      : [...filters.breeds, breed];
    updateFilter("breeds", newBreeds);
  };

  const activeFiltersCount = [
    filters.gender,
    filters.ageCategory,
    filters.size,
    filters.energyLevel,
    filters.distance,
    filters.temperaments.length > 0,
    filters.breeds.length > 0,
  ].filter(Boolean).length;

  return (
    <div className="bg-gradient-to-r from-[#f8f8f8] to-[#ebebeb] border-b border-[#ddd] shadow-md">
      {/* Barra Principal de Filtros */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Primera fila - Título y Limpiar */}
          <div className="flex items-center justify-between">
            <h3 className="font-['Neue Haas Grotesk Display',sans-serif] text-[18px] sm:text-[20px] text-[#1e1e1e]">
              Filtros {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </h3>
            {/* Botón Limpiar */}
            {activeFiltersCount > 0 && (
              <button
                onClick={() =>
                  onFilterChange({
                    personality: null,
                    size: null,
                    sociability: null,
                    distance: null,
                    energyLevel: null,
                    ageCategory: null,
                    breeds: [],
                    gender: null,
                    temperaments: [],
                  })
                }
                className="bg-[#c8566e] text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-[12px] font-['Neue Haas Grotesk Display',sans-serif] text-[11px] sm:text-[13px] hover:bg-[#b04558] transition-colors whitespace-nowrap"
              >
                Limpiar Todo
              </button>
            )}
          </div>

          {/* Segunda fila - Filtros principales */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Género */}
            <div className="flex items-center gap-2">
              <span className="font-['Neue Haas Grotesk Display',sans-serif] text-[12px] sm:text-[14px] text-[#666] whitespace-nowrap">Género:</span>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => updateFilter("gender", filters.gender === "macho" ? null : "macho")}
                  className={`w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center text-[18px] sm:text-[20px] transition-all border-2 ${
                    filters.gender === "macho" 
                      ? "bg-[#4074d4] border-[#4074d4] scale-110 shadow-lg" 
                      : "bg-white border-[#ddd] opacity-50 hover:opacity-80 hover:border-[#4074d4]"
                  }`}
                >
                  <span className={filters.gender === "macho" ? "text-white" : "text-[#4074d4]"}>♂</span>
                </button>
                <button
                  onClick={() => updateFilter("gender", filters.gender === "hembra" ? null : "hembra")}
                  className={`w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full flex items-center justify-center text-[18px] sm:text-[20px] transition-all border-2 ${
                    filters.gender === "hembra" 
                      ? "bg-[#c8566e] border-[#c8566e] scale-110 shadow-lg" 
                      : "bg-white border-[#ddd] opacity-50 hover:opacity-80 hover:border-[#c8566e]"
                  }`}
                >
                  <span className={filters.gender === "hembra" ? "text-white" : "text-[#c8566e]"}>♀</span>
                </button>
              </div>
            </div>

            {/* Edad */}
            <div className="flex items-center gap-2">
              <span className="font-['Neue Haas Grotesk Display',sans-serif] text-[12px] sm:text-[14px] text-[#666] whitespace-nowrap">Edad:</span>
              <div className="flex gap-1.5 sm:gap-2">
                {["cachorro", "adulto", "senior"].map((age) => (
                  <button
                    key={age}
                    onClick={() => updateFilter("ageCategory", filters.ageCategory === age ? null : age)}
                    className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-[15px] font-['Neue Haas Grotesk Display',sans-serif] text-[11px] sm:text-[13px] transition-all whitespace-nowrap ${
                      filters.ageCategory === age
                        ? "bg-[#4074d4] text-white scale-105"
                        : "bg-white text-[#666] hover:bg-[#e8e8e8]"
                    }`}
                  >
                    {age === "cachorro" ? "🐾 Cachorro" : age === "adulto" ? "🐕 Adulto" : "👴 Senior"}
                  </button>
                ))}
              </div>
            </div>

            {/* Tamaño */}
            <div className="flex items-center gap-2">
              <span className="font-['Neue Haas Grotesk Display',sans-serif] text-[12px] sm:text-[14px] text-[#666] whitespace-nowrap">Tamaño:</span>
              <div className="flex items-end gap-1.5 sm:gap-2">
                {selectedSpecies === "perro" ? (
                  // Iconos de perro para tamaño
                  [
                    { value: "mini", size: 18 },
                    { value: "chico", size: 24 },
                    { value: "mediano", size: 30 },
                    { value: "grande", size: 36 },
                  ].map(({ value, size }) => (
                    <button
                      key={value}
                      onClick={() => updateFilter("size", filters.size === value ? null : value)}
                      className={`transition-all ${
                        filters.size === value
                          ? "scale-110 opacity-100"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <img
                        src={imgPerro1}
                        alt={value}
                        style={{ width: size * 0.85, height: size * 0.85 }}
                        className="object-contain sm:w-auto sm:h-auto"
                      />
                    </button>
                  ))
                ) : (
                  // SVG de gato para tamaño
                  [
                    { value: "mini", size: 15 },
                    { value: "chico", size: 20 },
                    { value: "mediano", size: 26 },
                    { value: "grande", size: 32 },
                  ].map(({ value, size }) => (
                    <button
                      key={value}
                      onClick={() => updateFilter("size", filters.size === value ? null : value)}
                      className={`transition-all ${
                        filters.size === value
                          ? "scale-110 opacity-100"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <img
                        src={CatSilhouette}
                        alt={value}
                        style={{ width: size * 0.85, height: size * 0.85 }}
                        className="object-contain sm:w-auto sm:h-auto"
                      />
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Energía */}
            <div className="flex items-center gap-2">
              <span className="font-['Neue Haas Grotesk Display',sans-serif] text-[12px] sm:text-[14px] text-[#666] whitespace-nowrap">Energía:</span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {[1, 2, 3].map((level) => (
                  <button
                    key={level}
                    onClick={() => updateFilter("energyLevel", filters.energyLevel === level ? null : level)}
                    className={`transition-all ${
                      filters.energyLevel !== null && level <= filters.energyLevel
                        ? "scale-110 opacity-100"
                        : "opacity-30 hover:opacity-60"
                    }`}
                  >
                    <Zap
                      className="w-5 h-5 sm:w-7 sm:h-7"
                      style={{
                        fill: filters.energyLevel !== null && level <= filters.energyLevel ? "#ffd700" : "none",
                        color: filters.energyLevel !== null && level <= filters.energyLevel ? "#ffd700" : "#666",
                      }}
                      strokeWidth={2.5}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Botón Distancia */}
            <button
              onClick={() => setExpandedSection(expandedSection === "distancia" ? null : "distancia")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[12px] font-['Neue Haas Grotesk Display',sans-serif] text-[11px] sm:text-[13px] transition-all whitespace-nowrap ${
                filters.distance
                  ? "bg-[#4074d4] text-white"
                  : "bg-white text-[#666] hover:bg-[#e8e8e8]"
              }`}
            >
              📍 Distancia {filters.distance && `(${filters.distance === "3" ? "3km" : filters.distance === "10" ? "10km" : "+10km"})`}
              {expandedSection === "distancia" ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            {/* Botón Temperamento */}
            <button
              onClick={() => setExpandedSection(expandedSection === "temperamento" ? null : "temperamento")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[12px] font-['Neue Haas Grotesk Display',sans-serif] text-[11px] sm:text-[13px] transition-all whitespace-nowrap ${
                filters.temperaments.length > 0
                  ? "bg-[#c8566e] text-white"
                  : "bg-white text-[#666] hover:bg-[#e8e8e8]"
              }`}
            >
              Temperamento {filters.temperaments.length > 0 && `(${filters.temperaments.length})`}
              {expandedSection === "temperamento" ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            {/* Botón Raza */}
            <button
              onClick={() => setExpandedSection(expandedSection === "raza" ? null : "raza")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[12px] font-['Neue Haas Grotesk Display',sans-serif] text-[11px] sm:text-[13px] transition-all whitespace-nowrap ${
                filters.breeds.length > 0
                  ? "bg-[#4074d4] text-white"
                  : "bg-white text-[#666] hover:bg-[#e8e8e8]"
              }`}
            >
              Raza {filters.breeds.length > 0 && `(${filters.breeds.length})`}
              {expandedSection === "raza" ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Panel Expandible de Distancia */}
      {expandedSection === "distancia" && (
        <div className="bg-white border-t border-[#ddd] animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {[
                { value: "3", label: "📍 Hasta 3km", desc: "Muy cerca" },
                { value: "10", label: "📍 Hasta 10km", desc: "Cerca" },
                { value: "20", label: "📍 Más de 10km", desc: "Lejos" },
              ].map(({ value, label, desc }) => (
                <button
                  key={value}
                  onClick={() => updateFilter("distance", filters.distance === value ? null : value)}
                  className={`px-4 py-2 rounded-[20px] font-['Neue Haas Grotesk Display',sans-serif] text-[13px] transition-all ${
                    filters.distance === value
                      ? "bg-[#4074d4] text-white scale-105"
                      : "bg-[#f5f5f5] text-[#1e1e1e] hover:bg-[#ebebeb]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span>{label}</span>
                    <span className="text-[10px] opacity-70">{desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Panel Expandible de Temperamento */}
      {expandedSection === "temperamento" && (
        <div className="bg-white border-t border-[#ddd] animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {temperamentOptions.map((temp) => (
                <button
                  key={temp}
                  onClick={() => toggleTemperament(temp)}
                  className={`px-4 py-2 rounded-[20px] font-['Neue Haas Grotesk Display',sans-serif] text-[13px] transition-all ${
                    filters.temperaments.includes(temp)
                      ? "bg-[#c8566e] text-white scale-105"
                      : "bg-[#f5f5f5] text-[#1e1e1e] hover:bg-[#ebebeb]"
                  }`}
                >
                  {temp}
                </button>
              ))}            </div>
          </div>
        </div>
      )}

      {/* Panel Expandible de Raza */}
      {expandedSection === "raza" && (
        <div className="bg-white border-t border-[#ddd] animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1400px] mx-auto px-6 py-4 max-h-[250px] overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {selectedSpecies === "perro"
                ? dogBreeds.map((breed) => (
                    <button
                      key={breed}
                      onClick={() => toggleBreed(breed)}
                      className={`px-4 py-2 rounded-[20px] font-['Neue Haas Grotesk Display',sans-serif] text-[13px] transition-all ${
                        filters.breeds.includes(breed)
                          ? "bg-[#4074d4] text-white scale-105"
                          : "bg-[#f5f5f5] text-[#1e1e1e] hover:bg-[#ebebeb]"
                      }`}
                    >
                      {breed}
                    </button>
                  ))
                : catBreeds.map((breed) => (
                    <button
                      key={breed}
                      onClick={() => toggleBreed(breed)}
                      className={`px-4 py-2 rounded-[20px] font-['Neue Haas Grotesk Display',sans-serif] text-[13px] transition-all ${
                        filters.breeds.includes(breed)
                          ? "bg-[#4074d4] text-white scale-105"
                          : "bg-[#f5f5f5] text-[#1e1e1e] hover:bg-[#ebebeb]"
                      }`}
                    >
                      {breed}
                    </button>
                  ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}