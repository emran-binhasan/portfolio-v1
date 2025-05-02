import { useRef } from "react";



const CodeSnippet = () => {
    
  const codeLine1Ref = useRef(null);
  const codeLine2Ref = useRef(null);
  const codeLine3Ref = useRef(null);

    return ( <><div className="mt-16 w-full max-w-xl animate-fadeIn">
        <svg viewBox="0 0 600 300" className="w-full h-auto">
          <rect x="0" y="0" width="600" height="300" rx="20" fill="#1E293B" />
          <rect x="20" y="20" width="20" height="20" rx="10" fill="#EF4444" />
          <rect x="50" y="20" width="20" height="20" rx="10" fill="#F59E0B" />
          <rect x="80" y="20" width="20" height="20" rx="10" fill="#10B981" />
        
          <g
            transform="translate(40, 70)"
            fontFamily="monospace"
            fontSize="16"
            fill="#E2E8F0"
          >
            <rect ref={codeLine1Ref} y="0" height="18" rx="3" fill="#334155" />
            <rect ref={codeLine2Ref} y="30" height="18" rx="3" fill="#334155" />
            <rect ref={codeLine3Ref} y="60" height="18" rx="3" fill="#334155" />
          </g>
        </svg>
        </div></> );
}
 
export default CodeSnippet;