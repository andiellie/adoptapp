import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, Heart, Share2, MapPin, Calendar, Ruler, Users } from "lucide-react";
import { pets } from "../data/pets";
import { AdoptButton } from "../components/AdoptButton";

export function PetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = pets.find(p => p.id === id);

  if (!pet) {
    return (
      <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-['Unbounded:Medium',sans-serif] font-medium text-[36px] text-[#1e1e1e] mb-4">
            Mascota no encontrada
          </h2>
          <Link to="/adopta" className="text-[#4074d4] hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#4074d4] font-['Neue Haas Grotesk Display',sans-serif] font-semibold hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            <div className="bg-[#f5f5f5] rounded-[42px] overflow-hidden mb-4 shadow-lg">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            
            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {pet.gallery.slice(0, 3).map((img, index) => (
                <div key={index} className="bg-[#f5f5f5] rounded-[20px] overflow-hidden aspect-square">
                  <img
                    src={img}
                    alt={`${pet.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Info */}
          <div>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="font-['Unbounded:Medium',sans-serif] font-medium text-[48px] text-[#1e1e1e] mb-2">
                  {pet.name}
                </h1>
                <div className="flex items-center gap-2 text-[#666]">
                  <MapPin className="w-4 h-4" />
                  <span className="font-['Neue Haas Grotesk Display',sans-serif]">La Laguna, México</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="p-3 rounded-full bg-[#f5f5f5] hover:bg-[#ebe8d6] transition-colors">
                  <Heart className="w-6 h-6 text-[#c8566e]" />
                </button>
                <button className="p-3 rounded-full bg-[#f5f5f5] hover:bg-[#ebe8d6] transition-colors">
                  <Share2 className="w-6 h-6 text-[#4074d4]" />
                </button>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f9fcf3] rounded-[20px] p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-[#4074d4]" />
                  <span className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[16px] text-[#1e1e1e]">Edad</span>
                </div>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[20px] text-[#1e1e1e]">
                  {pet.age} {pet.age === 1 ? 'año' : 'años'}
                </p>
              </div>

              <div className="bg-[#e6faff] rounded-[20px] p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Ruler className="w-5 h-5 text-[#4074d4]" />
                  <span className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[16px] text-[#1e1e1e]">Tamaño</span>
                </div>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[20px] text-[#1e1e1e] capitalize">
                  {pet.size}
                </p>
              </div>

              <div className="bg-[#fff5f0] rounded-[20px] p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-[#4074d4]" />
                  <span className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[16px] text-[#1e1e1e]">Género</span>
                </div>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[20px] text-[#1e1e1e] capitalize">
                  {pet.gender}
                </p>
              </div>

              <div className="bg-[#f0fdfd] rounded-[20px] p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[16px] text-[#1e1e1e]">Raza</span>
                </div>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[20px] text-[#1e1e1e]">
                  {pet.breed}
                </p>
              </div>
            </div>

            {/* Personality Tags */}
            <div className="mb-8">
              <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[20px] text-[#1e1e1e] mb-4">
                Personalidad
              </h3>
              <div className="flex flex-wrap gap-3">
                {pet.personality.map((trait) => (
                  <span
                    key={trait}
                    className="bg-[#ebe8d6] px-4 py-2 rounded-full font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[14px] text-[#1e1e1e]"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[20px] text-[#1e1e1e] mb-4">
                Sobre {pet.name}
              </h3>
              <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[18px] text-[#1e1e1e] leading-relaxed">
                {pet.description}
              </p>
            </div>

            {/* Health & Temperament */}
            <div className="bg-[#ebe8d6] rounded-[30px] p-6 mb-8">
              <div className="mb-4">
                <h4 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] text-[#1e1e1e] mb-2">
                  Estado de salud
                </h4>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[16px] text-[#1e1e1e]">
                  {pet.healthStatus}
                </p>
              </div>
              <div>
                <h4 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] text-[#1e1e1e] mb-2">
                  Temperamento
                </h4>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[16px] text-[#1e1e1e]">
                  {pet.temperament}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <AdoptButton petId={pet.id} />

            <div className="flex gap-3 mt-4">
              <Link
                to="/requisitos"
                className="flex-1 text-center text-[#4074d4] font-['Neue Haas Grotesk Display',sans-serif] font-semibold hover:underline"
              >
                Ver requisitos
              </Link>
              <span className="text-[#666]">|</span>
              <Link
                to="/actividades"
                className="flex-1 text-center text-[#4074d4] font-['Neue Haas Grotesk Display',sans-serif] font-semibold hover:underline"
              >
                Proceso de adopción
              </Link>
            </div>

            <p className="text-center mt-4 font-['Neue Haas Grotesk Display',sans-serif] text-[14px] text-[#666]">
              Al adoptar, te comprometes a brindar amor y cuidados de por vida
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}