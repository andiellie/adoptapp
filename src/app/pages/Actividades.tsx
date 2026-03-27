import imgVet from "figma:asset/c48c81a06075cd7d12914cab41acd036ae7c937b.png";
import imgOnline from "figma:asset/5b5af9cdc921622fc1edcad93ae6384825dd318a.png";
import imgHappy from "figma:asset/221edcdb03ae00a663354bac64fa175dd1eb622a.png";
import imgDog from "figma:asset/52076419c5d96c187d275f5c3aa780395fc3c0b9.png";
import imgHearts from "figma:asset/d0de88836205faa65de4e6694d3c313eb906537f.png";

export function Actividades() {
  const steps = [
    {
      title: "Rescate y Rehabilitación",
      description: "Somos una asociación que trabaja de la mano de los refugios de la comunidad. Se rescatan animales en situación de calle para rehabilitarlos y posteriormente buscarles un hogar.",
      image: imgVet
    },
    {
      title: "Alta en Plataforma",
      description: "Cuando las mascotas están preparadas para ser adoptadas se dan de alta en la plataforma para que las personas llenen el formulario de adopción.",
      image: imgOnline,
      badge: "adoptapp"
    },
    {
      title: "Nueva Familia",
      description: "Si calificaste con todos los requerimientos: ¡Tendrás un nuevo compañero de vida!",
      image: imgHappy
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        {/* Header */}
        <h1 className="font-['Unbounded:Medium',sans-serif] font-medium text-[72px] text-[#1e1e1e] text-center mb-16 uppercase">
          Pasos para adoptar
        </h1>

        {/* Steps Container */}
        <div className="bg-[#ebe8d6] rounded-[39px] py-16 px-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Image */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    {/* Background decoration for middle step */}
                    {index === 1 && (
                      <>
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32">
                          <img src={imgHearts} alt="" className="w-full h-full object-contain opacity-50" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#7db7d9] rounded-lg -z-10" />
                      </>
                    )}
                    <div className="relative w-64 h-64 flex items-center justify-center">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="max-w-full max-h-full object-contain"
                      />
                      {step.badge && (
                        <>
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24">
                            <img src={imgDog} alt="Dog" className="w-full h-full object-contain" />
                          </div>
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md">
                            <span className="font-['Urbanist:Bold',sans-serif] text-[12px] text-black tracking-wider">
                              {step.badge}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-['Urbanist:Bold',sans-serif] font-bold text-[20px] text-[#1e1e1e] mb-4">
                  {step.title}
                </h3>
                <p className="font-['Urbanist:Regular',sans-serif] text-[16px] text-[#1e1e1e] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#f9fcf3] rounded-[30px] p-8">
            <h2 className="font-['Unbounded:Medium',sans-serif] font-medium text-[32px] text-[#1e1e1e] mb-6">
              ¿Por qué adoptar?
            </h2>
            <ul className="space-y-4 font-['Urbanist:Regular',sans-serif] text-[18px] text-[#1e1e1e]">
              <li className="flex items-start">
                <span className="text-[#4074d4] text-[24px] mr-3">•</span>
                <span>Salvas una vida y le das una segunda oportunidad</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4074d4] text-[24px] mr-3">•</span>
                <span>Combates el comercio ilegal de mascotas</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4074d4] text-[24px] mr-3">•</span>
                <span>Ganas un compañero fiel y amoroso</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4074d4] text-[24px] mr-3">•</span>
                <span>Apoyas el trabajo de refugios locales</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4074d4] text-[24px] mr-3">•</span>
                <span>Contribuyes a reducir el abandono animal</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#e6faff] rounded-[30px] p-8">
            <h2 className="font-['Unbounded:Medium',sans-serif] font-medium text-[32px] text-[#1e1e1e] mb-6">
              Después de la adopción
            </h2>
            <ul className="space-y-4 font-['Urbanist:Regular',sans-serif] text-[18px] text-[#1e1e1e]">
              <li className="flex items-start">
                <span className="text-[#c8566e] text-[24px] mr-3">•</span>
                <span>Seguimiento mensual durante los primeros 3 meses</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c8566e] text-[24px] mr-3">•</span>
                <span>Asesoría veterinaria gratuita por 6 meses</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c8566e] text-[24px] mr-3">•</span>
                <span>Acceso a nuestra comunidad de adoptantes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c8566e] text-[24px] mr-3">•</span>
                <span>Descuentos en tiendas y servicios para mascotas</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c8566e] text-[24px] mr-3">•</span>
                <span>Talleres de entrenamiento y socialización</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#4074d4] to-[#7db7d9] rounded-[30px] py-12 px-8">
          <h2 className="font-['Unbounded:Medium',sans-serif] font-medium text-[40px] text-white mb-4">
            ¿Listo para adoptar?
          </h2>
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[20px] text-white mb-8 max-w-2xl mx-auto">
            Miles de mascotas están esperando por ti. Encuentra a tu compañero perfecto hoy.
          </p>
          <a
            href="/adopta"
            className="inline-block bg-white text-[#4074d4] font-['Urbanist:Bold',sans-serif] font-bold text-[24px] px-12 py-4 rounded-[20px] hover:shadow-xl transition-shadow"
          >
            Ver mascotas disponibles
          </a>
        </div>
      </div>
    </div>
  );
}