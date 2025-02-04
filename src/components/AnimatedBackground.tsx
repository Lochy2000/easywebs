const AnimatedBackground = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* SVG Container */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Line 1: Horizontal Line (Left to Right) */}
          <line
            x1="-10"
            y1="20"
            x2="110"
            y2="20"
            stroke="rgba(147, 51, 234, 0.3)"
            strokeWidth="0.5"
            strokeLinecap="round"
            className="animate-moveHorizontal"
          />
  
          {/* Line 2: Diagonal Line (Top-Left to Bottom-Right) */}
          <line
            x1="-10"
            y1="-10"
            x2="110"
            y2="110"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="0.5"
            strokeLinecap="round"
            className="animate-moveDiagonal1"
          />
  
          {/* Line 3: Diagonal Line (Top-Right to Bottom-Left) */}
          <line
            x1="110"
            y1="-10"
            x2="-10"
            y2="110"
            stroke="rgba(255, 99, 71, 0.3)"
            strokeWidth="0.5"
            strokeLinecap="round"
            className="animate-moveDiagonal2"
          />
        </svg>
      </div>
    );
  };

  export default AnimatedBackground