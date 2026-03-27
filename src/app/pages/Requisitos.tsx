import imgCat from "figma:asset/4e02b8890b39fb36586e2a7b4238b2ceebf94d84.png";
import imgHearts from "figma:asset/1d3f84d61839cc1774cd820521675633b49380e8.png";
import imgDocuments from "figma:asset/b7b6b324897c2722bf0b0c77114dc7669386e8a2.png";
import { UserCheck, PencilLine, DollarSign, Home, Camera, FileText } from "lucide-react";

const requirements = [
  {
    icon: UserCheck,
    title: "Ser mayor de edad.",
    color: "#c8566e"
  },
  {
    icon: PencilLine,
    title: "Firmar una carta compromiso.",
    color: "#c8566e"
  },
  {
    icon: DollarSign,
    title: "Contar con solvencia económica.",
    color: "#c8566e"
  },
  {
    icon: Home,
    title: "Brindar seguimiento.",
    color: "#c8566e"
  },
  {
    icon: Camera,
    title: "Copia de INE y comprobante de domicilio.",
    color: "#c8566e"
  },
  {
    icon: FileText,
    title: "Firmar compromiso de llevar al animal a sus vacunas y esterilizar en caso de que sea cachorro.",
    color: "#c8566e"
  }
];

export function Requisitos() {
  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        {/* Header */}
        <h1 className="font-['Unbounded:Medium',sans-serif] font-medium text-[72px] text-[#1e1e1e] text-center mb-16 uppercase">
          Requisitos para Adoptar
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Requirements List */}
          <div>
            <div className="bg-[#ebe8d6] rounded-[55px] p-12">
              <div className="space-y-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: req.color }}
                    >
                      <req.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold text-[22px] text-[#1e1e1e] leading-relaxed">
                        {req.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-[#fff5f0] rounded-[30px] p-8">
              <h3 className="font-['Urbanist:Bold',sans-serif] font-bold text-[24px] text-[#1e1e1e] mb-4">
                Importante
              </h3>
              <p className="font-['Urbanist:Regular',sans-serif] text-[18px] text-[#1e1e1e] mb-4 leading-relaxed">
                Todos los requisitos son necesarios para garantizar el bienestar de las mascotas. 
                El proceso de adopción incluye una visita domiciliaria para verificar que el hogar 
                sea adecuado para la mascota.
              </p>
              <p className="font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#c8566e]">
                El incumplimiento de estos requisitos puede resultar en la devolución de la mascota al refugio.
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="relative">
              {/* Hearts decoration */}
              <div className="absolute -top-8 left-1/4 w-24 h-24 opacity-60">
                <img src={imgHearts} alt="" className="w-full h-full object-contain" />
              </div>
              <div className="absolute top-20 right-8 w-32 h-32 opacity-60">
                <img src={imgHearts} alt="" className="w-full h-full object-contain rotate-45" />
              </div>

              {/* Documents illustration */}
              <div className="relative mb-8">
                <div className="transform rotate-[-5deg]">
                  <img
                    src={imgDocuments}
                    alt="Documentos"
                    className="w-full max-w-md mx-auto"
                  />
                </div>
              </div>

              {/* Cat illustration */}
              <div className="relative -mt-20 z-10">
                <img
                  src={imgCat}
                  alt="Gato"
                  className="w-full max-w-lg mx-auto"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className="mt-12 space-y-4">
              <div className="bg-[#f9fcf3] rounded-[20px] p-6">
                <h4 className="font-['Urbanist:Bold',sans-serif] font-bold text-[20px] text-[#1e1e1e] mb-2">
                  Proceso de verificación
                </h4>
                <p className="font-['Urbanist:Regular',sans-serif] text-[16px] text-[#1e1e1e]">
                  Revisaremos tu solicitud en un plazo de 2-3 días hábiles. Si cumples con todos 
                  los requisitos, coordinaremos una visita domiciliaria.
                </p>
              </div>

              <div className="bg-[#e6faff] rounded-[20px] p-6">
                <h4 className="font-['Urbanist:Bold',sans-serif] font-bold text-[20px] text-[#1e1e1e] mb-2">
                  Apoyo post-adopción
                </h4>
                <p className="font-['Urbanist:Regular',sans-serif] text-[16px] text-[#1e1e1e]">
                  Te acompañamos durante todo el proceso. Ofrecemos asesoría gratuita y seguimiento 
                  para asegurar una adaptación exitosa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="font-['Unbounded:Medium',sans-serif] font-medium text-[36px] text-[#1e1e1e] mb-6">
            ¿Cumples con los requisitos?
          </h2>
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[20px] text-[#666] mb-8 max-w-2xl mx-auto">
            Si estás listo para darle un hogar a una mascota, explora nuestro catálogo y 
            encuentra a tu compañero ideal.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/adopta"
              className="bg-[#4074d4] text-white font-['Urbanist:Bold',sans-serif] font-bold text-[20px] px-10 py-4 rounded-[20px] hover:bg-[#3563b8] transition-colors shadow-lg"
            >
              Ver mascotas disponibles
            </a>
            <a
              href="/contacto"
              className="bg-white border-2 border-[#4074d4] text-[#4074d4] font-['Urbanist:Bold',sans-serif] font-bold text-[20px] px-10 py-4 rounded-[20px] hover:bg-[#f5f5f5] transition-colors"
            >
              Contactar con dudas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}