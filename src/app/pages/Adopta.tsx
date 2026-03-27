import { useState } from "react";
import { Link } from "react-router";
import { Heart } from "lucide-react";
import { pets } from "../data/pets";
import { FilterBar, FilterState } from "../components/FilterBar";
import { SpeciesTabs } from "../components/SpeciesTabs";

export function Adopta() {
  const [selectedSpecies, setSelectedSpecies] = useState<"perro" | "gato">("perro");
  const [filters, setFilters] = useState<FilterState>({
    personality: null,
    size: null,
    sociability: null,
    distance: null,
    energyLevel: null,
    ageCategory: null,
    breeds: [],
    gender: null,
    temperaments: [],
  });

  // Limpiar filtros de raza al cambiar de especie
  const handleSpeciesChange = (species: "perro" | "gato") => {
    setSelectedSpecies(species);
    setFilters(prev => ({
      ...prev,
      breeds: [], // Limpiar las razas al cambiar de especie
    }));
  };

  const filteredPets = pets.filter(pet => {
    const matchesSpecies = pet.species === selectedSpecies;
    
    // Filtros
    const matchesGender = !filters.gender || pet.gender === filters.gender;
    const matchesSize = !filters.size || pet.size === filters.size;
    const matchesEnergyLevel = !filters.energyLevel || pet.energyLevel === filters.energyLevel;
    const matchesAgeCategory = !filters.ageCategory || pet.ageCategory === filters.ageCategory;
    const matchesBreed = filters.breeds.length === 0 || filters.breeds.includes(pet.specificBreed);
    
    // Filtro de temperamento - verificar si alguna personalidad coincide
    const matchesTemperament = filters.temperaments.length === 0 || 
      filters.temperaments.some(temp => 
        pet.personality.some(p => p.toLowerCase().includes(temp.toLowerCase()))
      );
    
    // Filtro de distancia
    let matchesDistance = true;
    if (filters.distance) {
      if (filters.distance === "3") {
        matchesDistance = pet.distance <= 3;
      } else if (filters.distance === "10") {
        matchesDistance = pet.distance <= 10;
      } else if (filters.distance === "20") {
        matchesDistance = pet.distance > 10;
      }
    }
    
    return matchesSpecies && matchesGender && matchesSize && 
           matchesDistance && matchesEnergyLevel && matchesAgeCategory && 
           matchesBreed && matchesTemperament;
  });

  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      {/* Species Tabs */}
      <SpeciesTabs
        selectedSpecies={selectedSpecies}
        onSelectSpecies={handleSpeciesChange}
      />

      {/* Barra de Filtros */}
      <FilterBar 
        filters={filters} 
        onFilterChange={setFilters}
        selectedSpecies={selectedSpecies}
      />

      {/* Contenido Principal */}
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pets Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {filteredPets.map((pet) => (
            <Link
              key={pet.id}
              to={`/adopta/${pet.id}`}
              className="group"
            >
              <div className="bg-white rounded-[50px] overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative">
                {/* Distance Badge */}
                <div className="absolute top-3 right-3 bg-[#4074d4] text-white rounded-full px-3 py-1 text-[12px] font-['Neue Haas Grotesk Display',sans-serif] font-bold z-10 shadow-md">
                  📍 {pet.distance}km
                </div>
                
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="text-center mb-3">
                    <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[16px] text-[#1e1e1e] mb-1">
                      {pet.name}
                    </h3>
                    <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] text-[#666]">
                      {pet.breed}
                    </p>
                  </div>
                  
                  {/* Quick Info Tags */}
                  <div className="flex gap-2 justify-center flex-wrap">
                    <span className="bg-[#f9fcf3] rounded-full px-2 py-1 text-[10px] font-['Neue Haas Grotesk Display',sans-serif] font-medium text-[#1e1e1e]">
                      {pet.ageCategory === "cachorro" ? "🐾 Cachorro" : pet.ageCategory === "senior" ? "👴 Senior" : "🐕 Adulto"}
                    </span>
                    <span className="bg-[#fff5f0] rounded-full px-2 py-1 text-[10px] font-['Neue Haas Grotesk Display',sans-serif] font-medium text-[#1e1e1e]">
                      {pet.size === "mini" ? "Mini" : pet.size === "chico" ? "Chico" : pet.size === "mediano" ? "Med" : "Grande"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredPets.length === 0 && (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-[#c8566e] mx-auto mb-4" />
            <p className="font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[24px] text-[#1e1e1e]">
              No se encontraron mascotas con estos filtros
            </p>
            <button
              onClick={() => {
                setFilters({
                  personality: null,
                  size: null,
                  sociability: null,
                  distance: null,
                  energyLevel: null,
                  ageCategory: null,
                  breeds: [],
                  gender: null,
                  temperaments: [],
                });
              }}
              className="mt-4 text-[#4074d4] font-['Neue Haas Grotesk Display',sans-serif] font-bold hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}