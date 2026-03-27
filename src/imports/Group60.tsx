import svgPaths from "./svg-xm7559idfw";

function IconFavorite() {
  return (
    <div className="absolute inset-[32.08%_10.22%_28.3%_84.14%]" data-name="🦆 icon 'favorite'">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="ð¦ icon 'favorite'">
          <g id="Vector" />
          <path d={svgPaths.p2ced4600} fill="var(--fill-0, #BF3576)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f0cadb] h-[53px] left-0 rounded-[40px] top-0 w-[372px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Urbanist:Medium',sans-serif] font-medium h-[53px] justify-center leading-[0] left-[182.5px] text-[#1e1e1e] text-[32px] text-center top-[26.5px] w-[365px]">
        <p className="leading-[normal]">Quiero adoptarlo</p>
      </div>
      <IconFavorite />
    </div>
  );
}