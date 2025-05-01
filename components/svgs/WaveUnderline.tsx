// components/WaveUnderline.tsx
const WaveUnderline = () => {
    return (
      <svg
        className="absolute bottom-0 left-0 w-full h-3"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 5 Q25 0 50 5 T100 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <animate
            attributeName="d"
            dur="2s"
            repeatCount="indefinite"
            values="
              M0 5 Q25 0 50 5 T100 5;
              M0 5 Q25 10 50 5 T100 5;
              M0 5 Q25 0 50 5 T100 5
            "
          />
        </path>
      </svg>
    );
  };
  
  export default WaveUnderline;
  