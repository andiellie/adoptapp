import { Link } from "react-router";
import { useState } from "react";
import imgRainbowWavySpot from "figma:asset/b4a443d3f9f22fbd0e150843cffecd44b87748c6.png";
import imgDog from "figma:asset/1caac276dad16fe6ca0aa862c52121033b9f8b2d.png";

export function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10 relative">
            <h1 className="font-['Unbounded:Medium',sans-serif] font-medium text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[72px] leading-tight text-[#1e1e1e] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-5.04px] uppercase mb-6 sm:mb-8">
              Conecta con
              <br />
              tu nuevo
              <br />
              compañero
              <br />
              de vida
            </h1>
            
            <p className="font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[16px] sm:text-[20px] lg:text-[24px] text-[#1e1e1e] mb-6 sm:mb-8 max-w-[545px]">
              AdoptApp crea conciencia sobre el bienestar animal de la mano de los refugios de la comunidad local.
            </p>

            {/* Contenido expandible */}
            {showMore && (
              <div className="mb-6 sm:mb-8 max-w-[545px] space-y-3 sm:space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] text-[#1e1e1e] leading-relaxed">
                  Desde 2020, hemos conectado a más de 500 mascotas con familias amorosas. Trabajamos en colaboración con 15 refugios locales, brindando atención veterinaria, rehabilitación y preparación para que cada animal encuentre su hogar perfecto.
                </p>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] text-[#1e1e1e] leading-relaxed">
                  Nuestro proceso incluye evaluaciones de comportamiento, vacunación completa, esterilización y seguimiento post-adopción. Creemos que cada mascota merece una segunda oportunidad y cada familia merece encontrar a su compañero ideal.
                </p>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] text-[#1e1e1e] leading-relaxed">
                  Únete a nuestra comunidad de más de 1000 familias felices que han transformado vidas a través de la adopción responsable.
                </p>
              </div>
            )}
            
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-block bg-[#4074d4] text-[#fcf9e5] font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[16px] sm:text-[20px] lg:text-[24px] px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 rounded-[12px] shadow-[0px_4px_10.6px_0px_rgba(0,0,0,0.13)] hover:bg-[#3563b8] transition-colors"
            >
              {showMore ? "Ver menos" : "Saber más"}
            </button>
          </div>
          
          {/* Right Content - Dog Image with Colorful Background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] sm:h-[700px] lg:h-[800px] hidden lg:flex items-center justify-center">
            {/* Blurred colorful background with rotation animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rotate-[-14.79deg] animate-[spin_20s_linear_infinite]">
                <img 
                  src={imgRainbowWavySpot} 
                  alt=""
                  className="w-[700px] lg:w-[800px] xl:w-[940px] h-[540px] lg:h-[620px] xl:h-[720px] object-contain opacity-80 blur-[25px]"
                />
              </div>
            </div>
            
            {/* Dog Image with floating animation */}
            <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
              <img 
                src={imgDog} 
                alt="Golden Retriever"
                className="w-[640px] lg:w-[728px] xl:w-[856px] h-[660px] lg:h-[748px] xl:h-[880px] object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Statistics or Features Section */}
        <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div className="text-center">
            <div className="text-[36px] sm:text-[42px] lg:text-[48px] font-['Unbounded:Medium',sans-serif] font-medium text-[#4074d4] mb-2">
              500+
            </div>
            <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] text-[#1e1e1e]">
              Mascotas adoptadas
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-[36px] sm:text-[42px] lg:text-[48px] font-['Unbounded:Medium',sans-serif] font-medium text-[#c8566e] mb-2">
              15+
            </div>
            <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] text-[#1e1e1e]">
              Refugios asociados
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-[36px] sm:text-[42px] lg:text-[48px] font-['Unbounded:Medium',sans-serif] font-medium text-[#7db7d9] mb-2">
              1000+
            </div>
            <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] text-[#1e1e1e]">
              Familias felices
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-12 sm:py-16 lg:py-20 bg-[#ebe8d6] rounded-[30px] sm:rounded-[40px] lg:rounded-[55px] px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-['Unbounded:Medium',sans-serif] font-medium text-[32px] sm:text-[40px] lg:text-[48px] text-[#1e1e1e] text-center mb-8 sm:mb-10 lg:mb-12 uppercase animate-[fadeInUp_0.6s_ease-out]">
            Nuestra Misión
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="animate-[fadeInLeft_0.8s_ease-out]">
              <p className="font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-[#1e1e1e] mb-4 sm:mb-6">
                Somos una asociación que trabaja de la mano de los refugios de la comunidad. Rescatamos animales en situación de calle para rehabilitarlos y posteriormente buscarles un hogar.
              </p>
              <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] text-[#1e1e1e]">
                Creemos que cada animal merece una segunda oportunidad y una familia que los ame. Trabajamos incansablemente para crear conciencia sobre el bienestar animal y promover la adopción responsable.
              </p>
            </div>
            <div className="bg-white rounded-[25px] sm:rounded-[32px] lg:rounded-[39px] p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-[fadeInRight_0.8s_ease-out]">
              <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[20px] sm:text-[22px] lg:text-[24px] text-[#1e1e1e] mb-3 sm:mb-4">
                ¿Cómo puedes ayudar?
              </h3>
              <ul className="space-y-2 sm:space-y-3 font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] text-[#1e1e1e]">
                <li className="flex items-start group animate-[slideInRight_0.6s_ease-out_0.2s_both] hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#4074d4] mr-2 group-hover:scale-125 transition-transform duration-300">•</span>
                  Adopta una mascota y dale un hogar
                </li>
                <li className="flex items-start group animate-[slideInRight_0.6s_ease-out_0.3s_both] hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#4074d4] mr-2 group-hover:scale-125 transition-transform duration-300">•</span>
                  Conviértete en hogar temporal
                </li>
                <li className="flex items-start group animate-[slideInRight_0.6s_ease-out_0.4s_both] hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#4074d4] mr-2 group-hover:scale-125 transition-transform duration-300">•</span>
                  Dona para los cuidados médicos
                </li>
                <li className="flex items-start group animate-[slideInRight_0.6s_ease-out_0.5s_both] hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#4074d4] mr-2 group-hover:scale-125 transition-transform duration-300">•</span>
                  Difunde nuestras historias
                </li>
              </ul>
              <Link
                to="/requisitos"
                className="mt-4 sm:mt-5 lg:mt-6 inline-block text-[#4074d4] font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[14px] sm:text-[15px] lg:text-[16px] hover:underline hover:translate-x-2 transition-all duration-300"
              >
                Ver requisitos para adoptar →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}