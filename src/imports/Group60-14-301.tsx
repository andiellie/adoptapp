import imgPerro1 from "figma:asset/2fc3c1efa4e539863af4bd12082661f70c271920.png";
import imgImage1 from "figma:asset/ce8aedc2b647af46e6bcbd3c5870abaabdf733b2.png";
import imgImage2 from "figma:asset/15c183b62521e61189317f7e509edbde1809f3e9.png";

function Frame1() {
  return (
    <div className="absolute bg-white h-[22px] left-[20px] overflow-clip rounded-[20px] top-[543px] w-[67px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[5px] not-italic text-[14px] text-black top-[-1px] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
        sociable
      </p>
    </div>
  );
}

function Frame3() {
  return <div className="absolute bg-white h-[22px] left-[48px] rounded-[20px] top-[573px] w-[67px]" />;
}

function Frame2() {
  return <div className="absolute bg-white h-[22px] left-[104px] rounded-[20px] top-[543px] w-[67px]" />;
}

function Frame4() {
  return <div className="absolute bg-white h-[22px] left-[145px] rounded-[20px] top-[573px] w-[67px]" />;
}

function Frame5() {
  return <div className="absolute bg-white h-[22px] left-[193px] rounded-[20px] top-[543px] w-[67px]" />;
}

function Frame() {
  return (
    <div className="absolute bg-[#dbdbdb] h-[641px] left-0 overflow-clip top-[56px] w-[270px]">
      <div className="absolute left-[96px] size-[16px] top-[214px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #FCFCFC)" id="Ellipse 15" r="8" />
        </svg>
      </div>
      <div className="absolute flex h-[118px] items-center justify-center left-[104px] top-[219px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[118px]">
            <div className="absolute inset-[-2.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 5">
                <path d="M0 2.5H118" id="Vector 9" stroke="var(--stroke-0, white)" strokeWidth="5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[134px] not-italic text-[14px] text-black top-[202px] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
        cachorro
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[131px] not-italic text-[14px] text-black top-[257px] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
        Adulto
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[127px] not-italic text-[14px] text-black top-[315px] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
        Anciano
      </p>
      <div className="absolute left-[64px] size-[33px] top-[441px]" data-name="perro 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPerro1} />
      </div>
      <div className="absolute left-[115px] size-[42px] top-[432px]" data-name="perro 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPerro1} />
      </div>
      <div className="absolute left-[175px] size-[51px] top-[423px]" data-name="perro 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPerro1} />
      </div>
      <Frame1 />
      <Frame3 />
      <Frame2 />
      <Frame4 />
      <Frame5 />
      <div className="absolute left-[78px] size-[41px] top-[66px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute left-[160px] size-[45px] top-[62px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[113px] not-italic text-[14px] text-black top-[542px] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
        jugueton
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[200px] not-italic text-[14px] text-black top-[542px] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
        tranquilo
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[65px] not-italic text-[14px] text-black top-[573px] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
        serio
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23px] left-[153px] not-italic text-[14px] text-black top-[573px] whitespace-nowrap" style={{ fontFeatureSettings: "'salt'" }}>
        cariñoso
      </p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
      <p className="-translate-x-1/2 absolute font-['Urbanist:SemiBold',sans-serif] font-semibold h-[32px] leading-[normal] left-[134.5px] text-[#1e1e1e] text-[20px] text-center top-[80px] w-[193px]">Género</p>
      <p className="-translate-x-1/2 absolute font-['Urbanist:SemiBold',sans-serif] font-semibold h-[32px] leading-[normal] left-[133.5px] text-[#1e1e1e] text-[20px] text-center top-[194px] w-[193px]">Edad</p>
      <p className="-translate-x-1/2 absolute font-['Urbanist:SemiBold',sans-serif] font-semibold h-[32px] leading-[normal] left-[124.5px] text-[#1e1e1e] text-[20px] text-center top-[454px] w-[193px]">Tamaño</p>
      <p className="-translate-x-1/2 absolute font-['Urbanist:SemiBold',sans-serif] font-semibold h-[32px] leading-[normal] left-[134.5px] text-[#1e1e1e] text-[20px] text-center top-[550px] w-[193px]">Temperamento</p>
      <p className="-translate-x-1/2 absolute font-['Urbanist:SemiBold',sans-serif] font-semibold h-[32px] leading-[normal] left-[157.5px] text-[#1e1e1e] text-[32px] text-center top-0 w-[193px]">Filtrar</p>
    </div>
  );
}