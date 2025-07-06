const VeriTechLogo = ({ size = 120 }: { size?: number }) => {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size * 0.6}
        viewBox="0 0 200 120"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="veritech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(150 50% 60%)" />
            <stop offset="100%" stopColor="hsl(150 60% 35%)" />
          </linearGradient>
        </defs>
        
        {/* V shape with gradient */}
        <path
          d="M20 20 L50 20 L80 80 L110 20 L140 20 L95 100 L65 100 Z"
          fill="url(#veritech-gradient)"
          className="drop-shadow-lg"
        />
        
        {/* Curved accent */}
        <path
          d="M120 30 Q160 20 180 60 Q160 100 120 90"
          fill="none"
          stroke="hsl(150 50% 60%)"
          strokeWidth="8"
          className="opacity-80"
        />
      </svg>
      
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-veritech-green">
          eriTech
        </span>
        <span className="text-sm text-veritech-light-green italic">
          Software Services
        </span>
      </div>
    </div>
  );
};

export default VeriTechLogo;