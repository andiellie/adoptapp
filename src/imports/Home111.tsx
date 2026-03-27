import imgRainbowWavySpot from "figma:asset/b4a443d3f9f22fbd0e150843cffecd44b87748c6.png";
import imgAc81480C2374449897A9A7A1Fa9658325 from "figma:asset/1caac276dad16fe6ca0aa862c52121033b9f8b2d.png";
import imgAsset606 from "figma:asset/cb9bec3edf1d487b63415af21583e520fe111544.png";

function Group() {
  return (
    <div className="absolute contents left-[9px] top-0">
      <div className="absolute bg-white h-[1117px] left-[9px] top-0 w-[1719px]" />
      <div className="absolute font-['Unbounded:Medium',sans-serif] font-medium h-[356px] leading-[normal] left-[calc(8.33%+9px)] text-[#1e1e1e] text-[72px] top-[231px] tracking-[-5.04px] uppercase w-[652px]">
        <p className="mb-0">Conecta con</p>
        <p className="mb-0">tu nuevo</p>
        <p className="mb-0">compañero</p>
        <p>de vida</p>
      </div>
      <div className="absolute flex h-[937.415px] items-center justify-center left-[calc(41.67%+100px)] top-[138px] w-[1092px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[-14.79deg]">
          <div className="blur-[25px] h-[721.623px] relative w-[938.876px]" data-name="rainbow wavy spot">
            <img alt="" className="absolute inset-0 max-w-none object-contain opacity-80 pointer-events-none size-full" src={imgRainbowWavySpot} />
          </div>
        </div>
      </div>
      <div className="absolute h-[802px] left-[calc(33.33%+95px)] top-[146px] w-[990px]" data-name="ac81480c-2374-4498-97a9-a7a1fa965832 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.76%] left-[17.61%] max-w-none top-[-3.62%] w-[86.45%]" src={imgAc81480C2374449897A9A7A1Fa9658325} />
        </div>
      </div>
      <p className="[text-decoration-skip-ink:none] absolute decoration-[20%] decoration-solid font-['LEMON_MILK:Medium',sans-serif] leading-[normal] left-[calc(41.67%+118.5px)] not-italic text-[#c8566e] text-[15px] top-[121px] tracking-[0.45px] underline w-[172px]">sobre nosotros</p>
      <p className="absolute font-['LEMON_MILK:Medium',sans-serif] leading-[normal] left-[calc(58.33%+42.5px)] not-italic text-[#7788b9] text-[15px] top-[121px] tracking-[0.45px] w-[88px]">noticias</p>
      <p className="absolute font-['LEMON_MILK:Medium',sans-serif] leading-[normal] left-[calc(66.67%+26.5px)] not-italic text-[#7788b9] text-[15px] top-[121px] tracking-[0.45px] w-[122px]">actividades</p>
      <p className="absolute font-['LEMON_MILK:Medium',sans-serif] leading-[normal] left-[calc(75%+44.5px)] not-italic text-[#7788b9] text-[15px] top-[121px] tracking-[0.45px] w-[78px]">adopta</p>
      <p className="absolute font-['LEMON_MILK:Medium',sans-serif] leading-[normal] left-[calc(83.33%+18.5px)] not-italic text-[#7788b9] text-[15px] top-[121px] tracking-[0.45px] w-[125px]">CONTÁCTANOS</p>
      <div className="absolute bg-[#4074d4] h-[50px] left-[calc(8.33%+16px)] rounded-[12px] shadow-[0px_4px_10.6px_0px_rgba(0,0,0,0.13)] top-[865px] w-[533px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Urbanist:Bold',sans-serif] font-bold h-[50px] justify-center leading-[0] left-[calc(8.33%+281.5px)] text-[#fcf9e5] text-[24px] text-center top-[890px] w-[531px]">
        <p className="leading-[normal]">Saber más</p>
      </div>
      <div className="absolute h-[79px] left-[calc(8.33%+35px)] top-[95px] w-[336px]" data-name="Asset 60 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset606} />
      </div>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold h-[116px] leading-[normal] left-[calc(8.33%+19px)] text-[#1e1e1e] text-[24px] top-[668px] w-[545px]">{`AdoptApp crea conciencia sobre el bienestar animal de la mano de los refugios de la comunidad local. `}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home 1-1-1">
      <div className="absolute bg-[#d7d5c9] h-[288px] left-[calc(91.67%+111px)] rounded-[13px] top-[25px] w-[20px]" />
      <Group />
    </div>
  );
}