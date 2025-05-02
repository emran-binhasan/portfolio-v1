import { useState, useEffect } from 'react';

export default function ExperienceSection() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPos => (prevPos + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-animation="text" className="p-4 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 relative rounded-lg">
      {/* Animated grayscale border */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          border: '1px solid transparent',
          backgroundImage: 'linear-gradient(90deg, #f3f4f6, #9ca3af, #1f2937, #9ca3af, #f3f4f6)',
          backgroundSize: '500% 100%',
          backgroundPosition: `${100 - position}% 0`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      ></div>

      {/* Content */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Experience</h2>
        <div className="space-y-6">
          {/* Job 1 */}
          <div className="border-l-4 border-gray-700 pl-4 relative">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
              <div>
                <h3 className="text-lg font-medium">Software Engineer</h3>
                <p className="text-gray-600">Appify Devs, Dhaka, Bangladesh</p>
              </div>
              <span className="text-gray-500 text-sm sm:bg-gray-50 sm:px-3 sm:py-1 sm:rounded-full">
                Mar 2025 - Present
              </span>
            </div>
          </div>

          {/* Job 2 */}
          <div className="border-l-4 border-gray-700 pl-4 relative">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
              <div>
                <h3 className="text-lg font-medium">MERN Stack Developer</h3>
                <p className="text-gray-600">Local Marketplace</p>
              </div>
              <span className="text-gray-500 text-sm sm:bg-gray-50 sm:px-3 sm:py-1 sm:rounded-full">
                Nov 2024 - Feb 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
