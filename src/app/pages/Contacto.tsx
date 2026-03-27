import imgMessages from "figma:asset/434184ef1c4c995cf66321a61950f5b998e6d12c.png";
import imgCat from "figma:asset/59b32290f89d826aa80bf16b3a2e4fe4de887e8d.png";
import imgStar from "figma:asset/d35d7527c097fb8143514073afabc527888a94e1.png";
import imgSparkleStar from "figma:asset/c3685c5fce61109c21c4f15c2b13658b5366e51e.png";
import imgMap from "figma:asset/e2bdc15f611d633cd77cf74c95e1482f35fb3534.png";
import { Phone, Mail, Facebook, MessageCircle } from "lucide-react";

export function Contacto() {
  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Header */}
        <h1 className="font-['Unbounded:Medium',sans-serif] font-medium text-[36px] sm:text-[52px] lg:text-[72px] text-[#1e1e1e] mb-8 sm:mb-12 lg:mb-16">
          CONTÁCTANOS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side - Contact Info & Illustration */}
          <div>
            {/* Decorative Illustration */}
            <div className="relative mb-8 sm:mb-10 lg:mb-12">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                {/* Messages illustration */}
                <div className="relative">
                  <img
                    src={imgMessages}
                    alt="Messages"
                    className="w-full h-auto"
                  />
                  {/* Cat on messages */}
                  <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-32 sm:w-40 lg:w-48">
                    <img src={imgCat} alt="Cat" className="w-full h-auto" />
                  </div>
                  {/* Decorative stars */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-8 sm:w-10 h-8 sm:h-10">
                    <img src={imgStar} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute top-6 sm:top-12 right-4 sm:right-8 w-3 sm:w-4 h-3 sm:h-4 -scale-y-100">
                    <img src={imgSparkleStar} alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[22px] sm:text-[26px] lg:text-[28px] text-[#1e1e1e] mb-4 sm:mb-6">
                Información de contacto
              </h2>
              
              <div className="bg-[#f9fcf3] rounded-[15px] sm:rounded-[20px] p-4 sm:p-5 lg:p-6">
                <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1e1e1e] mb-2">
                  Dirección
                </h3>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] text-[#1e1e1e]">
                  Constitución, Oriente #328, Centro de Gómez
                  <br />
                  C.P. 35000 Gómez Palacio, Dgo.
                </p>
              </div>

              <div className="bg-[#e6faff] rounded-[15px] sm:rounded-[20px] p-4 sm:p-5 lg:p-6">
                <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1e1e1e] mb-2">
                  Horario
                </h3>
                <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] text-[#1e1e1e]">
                  11:00 a.m. a 7:00 p.m.
                  <br />
                  De Lunes a Viernes
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 sm:gap-6 pt-3 sm:pt-4">
                <a
                  href="tel:+525512345678"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f5f5f5] hover:bg-[#ebe8d6] transition-colors opacity-70 hover:opacity-100"
                  title="Teléfono"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e1e1e]" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f5f5f5] hover:bg-[#ebe8d6] transition-colors opacity-70 hover:opacity-100"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e1e1e]" />
                </a>
                <a
                  href="https://wa.me/525512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f5f5f5] hover:bg-[#ebe8d6] transition-colors opacity-70 hover:opacity-100"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e1e1e]" />
                </a>
                <a
                  href="mailto:info@adoptapp.com"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f5f5f5] hover:bg-[#ebe8d6] transition-colors opacity-70 hover:opacity-100"
                  title="Email"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e1e1e]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Map & Form */}
          <div>
            {/* Map */}
            <div className="rounded-[25px] sm:rounded-[35px] lg:rounded-[42px] overflow-hidden shadow-lg mb-6 sm:mb-8">
              <img
                src={imgMap}
                alt="Mapa de ubicación"
                className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-[#ebe8d6] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-5 sm:p-6 lg:p-8">
              <h2 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[22px] sm:text-[26px] lg:text-[28px] text-[#1e1e1e] mb-4 sm:mb-6">
                Envíanos un mensaje
              </h2>
              
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[14px] sm:text-[16px] text-[#1e1e1e] mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white rounded-[12px] sm:rounded-[15px] px-3 sm:px-4 py-2.5 sm:py-3 font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[14px] sm:text-[16px] text-[#1e1e1e] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white rounded-[12px] sm:rounded-[15px] px-3 sm:px-4 py-2.5 sm:py-3 font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[14px] sm:text-[16px] text-[#1e1e1e] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white rounded-[12px] sm:rounded-[15px] px-3 sm:px-4 py-2.5 sm:py-3 font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                    placeholder="(55) 1234-5678"
                  />
                </div>

                <div>
                  <label className="block font-['Neue Haas Grotesk Display',sans-serif] font-semibold text-[14px] sm:text-[16px] text-[#1e1e1e] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white rounded-[12px] sm:rounded-[15px] px-3 sm:px-4 py-2.5 sm:py-3 font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4] resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4074d4] text-white font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[16px] sm:text-[18px] lg:text-[20px] py-3 sm:py-3.5 lg:py-4 rounded-[12px] sm:rounded-[15px] hover:bg-[#3563b8] transition-colors shadow-lg"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-[#f9fcf3] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-6 sm:p-8 lg:p-12">
          <h2 className="font-['Unbounded:Medium',sans-serif] font-medium text-[28px] sm:text-[34px] lg:text-[40px] text-[#1e1e1e] text-center mb-8 sm:mb-10 lg:mb-12">
            Preguntas Frecuentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1e1e1e] mb-2 sm:mb-3">
                ¿Cuánto cuesta adoptar?
              </h3>
              <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] text-[#1e1e1e]">
                La adopción es gratuita. Solo se solicita una donación voluntaria para apoyar los gastos médicos de otras mascotas en el refugio.
              </p>
            </div>

            <div>
              <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1e1e1e] mb-2 sm:mb-3">
                ¿Puedo adoptar si vivo en departamento?
              </h3>
              <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] text-[#1e1e1e]">
                Sí, siempre y cuando cuentes con el espacio adecuado y el permiso del propietario. Te ayudaremos a encontrar la mascota ideal para tu hogar.
              </p>
            </div>

            <div>
              <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1e1e1e] mb-2 sm:mb-3">
                ¿Cuánto tiempo tarda el proceso?
              </h3>
              <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] text-[#1e1e1e]">
                Generalmente de 3 a 7 días, dependiendo de la evaluación del hogar y la disponibilidad para la entrega.
              </p>
            </div>

            <div>
              <h3 className="font-['Neue Haas Grotesk Display',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#1e1e1e] mb-2 sm:mb-3">
                ¿Las mascotas están vacunadas?
              </h3>
              <p className="font-['Neue Haas Grotesk Display',sans-serif] text-[14px] sm:text-[16px] text-[#1e1e1e]">
                Sí, todas nuestras mascotas están vacunadas, desparasitadas y la mayoría esterilizadas antes de ser entregadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}