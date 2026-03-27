import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-xm7559idfw";

interface AdoptButtonProps {
  petId?: string;
  className?: string;
}

export function AdoptButton({ petId, className = "" }: AdoptButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (petId) {
      navigate(`/adopta/${petId}/formulario`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-full bg-[#f0cadb] hover:bg-[#e8bcd1] rounded-[40px] h-[60px] flex items-center justify-center px-8 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg ${className}`}
    >
      <span className="font-['Neue Haas Grotesk Display',sans-serif] font-medium text-[26px] md:text-[32px] text-[#1e1e1e] leading-normal">
        Quiero adoptarlo
      </span>
      
      {/* Heart Icon */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[22px] h-[22px] md:w-[24px] md:h-[24px]">
        <svg 
          className="w-full h-full" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 21 21"
        >
          <path 
            d={svgPaths.p2ced4600} 
            fill="#BF3576" 
          />
        </svg>
      </div>
    </button>
  );
}