import imgAsset603 from "figma:asset/cb9bec3edf1d487b63415af21583e520fe111544.png";
import imgYoungWomanSittingWithDog from "figma:asset/221edcdb03ae00a663354bac64fa175dd1eb622a.png";
import imgWomanRunningAnOnlineBusiness from "figma:asset/5b5af9cdc921622fc1edcad93ae6384825dd318a.png";
import imgWhiteDogStanding from "figma:asset/52076419c5d96c187d275f5c3aa780395fc3c0b9.png";
import imgFloatingPinkHearts from "figma:asset/d0de88836205faa65de4e6694d3c313eb906537f.png";
import imgFemaleVeterinarianDoctorCheckingDogWithStethoscope from "figma:asset/c48c81a06075cd7d12914cab41acd036ae7c937b.png";

function Frame1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex font-['LEMON_MILK:Medium',sans-serif] gap-[40px] h-[30px] items-center justify-center leading-[normal] left-[calc(50%+3px)] not-italic text-[15px] top-[98px] tracking-[0.45px] w-[742px]">
      <p className="relative shrink-0 text-[#7788b9] w-[172px]">sobre nosotros</p>
      <p className="relative shrink-0 text-[#7788b9] uppercase w-[88px]">noticias</p>
      <p className="[text-decoration-skip-ink:none] decoration-[20%] decoration-solid relative shrink-0 text-[#c8566e] underline w-[122px]">actividades</p>
      <p className="relative shrink-0 text-[#7788b9] w-[78px]">adopta</p>
      <p className="relative shrink-0 text-[#7788b9] w-[125px]">CONTÁCTANOS</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-[#ebe8d6] h-[646px] left-[calc(12.5%+39px)] rounded-[39px] top-[305px] w-[1315px]" />
      <p className="-translate-x-1/2 absolute font-['Unbounded:Medium',sans-serif] font-medium h-[89px] leading-[normal] left-[870px] text-[#1e1e1e] text-[72px] text-center top-[182px] uppercase w-[1400px]">Pasos para adoptar</p>
      <Frame1 />
      <div className="absolute h-[82px] left-[148px] top-[71px] w-[355px]" data-name="Asset 60 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset603} />
      </div>
      <p className="absolute font-['Urbanist:Bold',sans-serif] font-bold h-[95px] leading-[normal] left-[calc(37.5%+107px)] text-[#1e1e1e] text-[20px] top-[771px] w-[278px]">Cuando las mascotas están preparadas para ser adoptadas se dan de alta en la plataforma para que las personas llenen el formulario de adopción.</p>
      <div className="absolute font-['Urbanist:Bold',sans-serif] font-bold h-[87px] leading-[normal] left-[calc(62.5%+126px)] text-[#1e1e1e] text-[20px] top-[771px] w-[277px] whitespace-pre-wrap">
        <p className="mb-0">{`Si calificaste con todos los requerimientos; `}</p>
        <p>¡Tendrás un nuevo compañero de vida!</p>
      </div>
      <div className="absolute h-[424px] left-[calc(62.5%+108px)] top-[347px] w-[309px]" data-name="young woman sitting with dog">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgYoungWomanSittingWithDog} />
      </div>
      <div className="absolute h-[377px] left-[calc(37.5%+30px)] top-[394px] w-[472px]" data-name="Woman running an online business">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWomanRunningAnOnlineBusiness} />
      </div>
      <div className="absolute bg-[#7db7d9] h-[117px] left-[calc(50%+49px)] top-[461px] w-[125px]" />
      <div className="absolute h-[117px] left-[calc(50%+76px)] top-[466px] w-[145px]" data-name="white dog standing">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWhiteDogStanding} />
      </div>
      <div className="absolute h-[237px] left-[calc(37.5%+65px)] top-[282px] w-[125px]" data-name="floating pink hearts">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFloatingPinkHearts} />
      </div>
      <p className="-translate-x-1/2 absolute font-['Urbanist:Bold',sans-serif] font-bold h-[11px] leading-[normal] left-[calc(50%+103.5px)] text-[12px] text-black text-center top-[432px] tracking-[0.96px] w-[87px]">adoptapp</p>
      <div className="absolute h-[390px] left-[calc(12.5%+121px)] top-[350px] w-[279px]" data-name="female veterinarian doctor checking dog with stethoscope">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[0.06%] max-w-none top-0 w-[122.81%]" src={imgFemaleVeterinarianDoctorCheckingDogWithStethoscope} />
        </div>
      </div>
      <p className="absolute font-['Urbanist:Bold',sans-serif] font-bold h-[126px] leading-[normal] left-[calc(12.5%+139px)] text-[#1e1e1e] text-[20px] top-[771px] w-[278px]">Somos una asociación que trabaja de la mano de los refugios de la comunidad. Se rescatan animales en situación de calle para rehabilitarlos y posteriormente buscarles un hogar.</p>
    </div>
  );
}