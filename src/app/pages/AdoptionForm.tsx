import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Check, AlertCircle } from "lucide-react";
import { pets } from "../data/pets";

export function AdoptionForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = pets.find(p => p.id === id);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    // Housing Info
    housingType: "",
    ownsHome: "",
    landlordPermission: "",
    hasYard: "",
    // Experience
    hadPetsBefore: "",
    currentPets: "",
    petExperience: "",
    // Commitment
    agreeToSterilize: false,
    agreeToVaccinate: false,
    agreeToFollow: false,
    agreeToTerms: false
  });

  if (!pet) {
    return (
      <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px] flex items-center justify-center">
        <p className="text-[#1e1e1e]">Mascota no encontrada</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      alert("¡Formulario enviado! Nos pondremos en contacto contigo pronto.");
      navigate("/");
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-4 mb-12">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`
              w-12 h-12 rounded-full flex items-center justify-center font-['Urbanist:Bold',sans-serif] text-[18px] transition-colors
              ${currentStep >= step 
                ? 'bg-[#4074d4] text-white' 
                : 'bg-[#f5f5f5] text-[#666]'
              }
            `}
          >
            {currentStep > step ? <Check className="w-6 h-6" /> : step}
          </div>
          {step < 4 && (
            <div className={`w-16 h-1 mx-2 ${currentStep > step ? 'bg-[#4074d4]' : 'bg-[#f5f5f5]'}`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-[70px] sm:pt-[80px] lg:pt-[90px]">
      <div className="max-w-[900px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-['Unbounded:Medium',sans-serif] font-medium text-[48px] text-[#1e1e1e] mb-4">
            Formulario de Adopción
          </h1>
          <p className="font-['Urbanist:SemiBold',sans-serif] text-[20px] text-[#666]">
            Para adoptar a <span className="text-[#4074d4]">{pet.name}</span>
          </p>
        </div>

        {renderStepIndicator()}

        <form onSubmit={handleSubmit} className="bg-[#ebe8d6] rounded-[30px] p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="font-['Urbanist:Bold',sans-serif] font-bold text-[28px] text-[#1e1e1e] mb-6">
                Información Personal
              </h2>
              
              <div>
                <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                  placeholder="Juan Pérez García"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                    placeholder="juan@email.com"
                  />
                </div>

                <div>
                  <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                    placeholder="(55) 1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                  Dirección completa *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                  placeholder="Calle, número, colonia"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                    placeholder="Gómez Palacio"
                  />
                </div>

                <div>
                  <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                    Estado *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                    placeholder="Durango"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Housing Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="font-['Urbanist:Bold',sans-serif] font-bold text-[28px] text-[#1e1e1e] mb-6">
                Información de Vivienda
              </h2>

              <div>
                <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                  Tipo de vivienda *
                </label>
                <select
                  required
                  value={formData.housingType}
                  onChange={(e) => setFormData({...formData, housingType: e.target.value})}
                  className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="casa">Casa</option>
                  <option value="departamento">Departamento</option>
                  <option value="condominio">Condominio</option>
                </select>
              </div>

              <div>
                <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                  ¿Eres propietario o rentas? *
                </label>
                <select
                  required
                  value={formData.ownsHome}
                  onChange={(e) => setFormData({...formData, ownsHome: e.target.value})}
                  className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="propietario">Propietario</option>
                  <option value="renta">Renta</option>
                </select>
              </div>

              {formData.ownsHome === "renta" && (
                <div>
                  <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                    ¿Tienes permiso del propietario para tener mascotas? *
                  </label>
                  <select
                    required
                    value={formData.landlordPermission}
                    onChange={(e) => setFormData({...formData, landlordPermission: e.target.value})}
                    className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                  ¿Tienes patio o jardín? *
                </label>
                <select
                  required
                  value={formData.hasYard}
                  onChange={(e) => setFormData({...formData, hasYard: e.target.value})}
                  className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Pet Experience */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="font-['Urbanist:Bold',sans-serif] font-bold text-[28px] text-[#1e1e1e] mb-6">
                Experiencia con Mascotas
              </h2>

              <div>
                <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                  ¿Has tenido mascotas antes? *
                </label>
                <select
                  required
                  value={formData.hadPetsBefore}
                  onChange={(e) => setFormData({...formData, hadPetsBefore: e.target.value})}
                  className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                  ¿Tienes otras mascotas actualmente? *
                </label>
                <select
                  required
                  value={formData.currentPets}
                  onChange={(e) => setFormData({...formData, currentPets: e.target.value})}
                  className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4]"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="ninguna">Ninguna</option>
                  <option value="perros">Perros</option>
                  <option value="gatos">Gatos</option>
                  <option value="ambos">Perros y gatos</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label className="block font-['Urbanist:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">
                  Cuéntanos sobre tu experiencia con mascotas *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.petExperience}
                  onChange={(e) => setFormData({...formData, petExperience: e.target.value})}
                  className="w-full bg-white rounded-[15px] px-4 py-3 font-['Urbanist:Regular',sans-serif] text-[16px] outline-none focus:ring-2 focus:ring-[#4074d4] resize-none"
                  placeholder="Describe tu experiencia previa con mascotas, cómo las cuidabas, etc."
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 4: Commitment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="font-['Urbanist:Bold',sans-serif] font-bold text-[28px] text-[#1e1e1e] mb-6">
                Compromiso de Adopción
              </h2>

              <div className="bg-[#fff5f0] rounded-[20px] p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#c8566e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Urbanist:Bold',sans-serif] font-bold text-[18px] text-[#1e1e1e] mb-2">
                      Importante
                    </h3>
                    <p className="font-['Urbanist:Regular',sans-serif] text-[14px] text-[#1e1e1e]">
                      Al adoptar a {pet.name}, te comprometes a proporcionarle un hogar amoroso de por vida. 
                      Lee cuidadosamente cada punto antes de continuar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeToSterilize}
                    onChange={(e) => setFormData({...formData, agreeToSterilize: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-[#4074d4]"
                  />
                  <span className="font-['Urbanist:Regular',sans-serif] text-[16px] text-[#1e1e1e]">
                    Me comprometo a esterilizar a la mascota si aún no lo está (aplica para cachorros)
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeToVaccinate}
                    onChange={(e) => setFormData({...formData, agreeToVaccinate: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-[#4074d4]"
                  />
                  <span className="font-['Urbanist:Regular',sans-serif] text-[16px] text-[#1e1e1e]">
                    Me comprometo a mantener al día las vacunas y controles veterinarios
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeToFollow}
                    onChange={(e) => setFormData({...formData, agreeToFollow: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-[#4074d4]"
                  />
                  <span className="font-['Urbanist:Regular',sans-serif] text-[16px] text-[#1e1e1e]">
                    Acepto el seguimiento de AdoptApp durante los primeros meses
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                    className="mt-1 w-5 h-5 accent-[#4074d4]"
                  />
                  <span className="font-['Urbanist:Regular',sans-serif] text-[16px] text-[#1e1e1e]">
                    He leído y acepto los términos y condiciones de adopción
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1 bg-white text-[#1e1e1e] font-['Urbanist:Bold',sans-serif] font-bold text-[18px] py-4 rounded-[15px] hover:bg-[#f5f5f5] transition-colors"
              >
                Anterior
              </button>
            )}
            <button
              type="submit"
              className="flex-1 bg-[#4074d4] text-white font-['Urbanist:Bold',sans-serif] font-bold text-[18px] py-4 rounded-[15px] hover:bg-[#3563b8] transition-colors shadow-lg"
            >
              {currentStep === 4 ? 'Enviar solicitud' : 'Siguiente'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}