"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactPage = () => {
  const wrapperRef = useRef(null);
  const codeLine1Ref = useRef(null);
  const codeLine2Ref = useRef(null);
  const codeLine3Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Text animation on scroll
      gsap.fromTo(
        '[data-animation="text"]',
        {
          opacity: 0,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          y: 30,
        },
        {
          opacity: 1,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      // Code typing animation
      gsap.fromTo(
        codeLine1Ref.current,
        { width: "0%" },
        { width: "90%", duration: 1.5 }
      );
      gsap.fromTo(
        codeLine2Ref.current,
        { width: "0%" },
        { width: "70%", delay: 1.2, duration: 1 }
      );
      gsap.fromTo(
        codeLine3Ref.current,
        { width: "0%" },
        { width: "50%", delay: 2, duration: 1 }
      );
    }, wrapperRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative bg-gray-100 py-16 md:py-24 flex flex-col items-center">
      {/* Text Section */}
      <div
        className="flex flex-col justify-center items-center w-full space-y-4 text-center"
        ref={wrapperRef}
      >
         <div className="mt-16 w-full max-w-sm animate-fadeIn">
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
      </div>
      <h2
            className="bottom-clipped relative inline-block overflow-hidden text-center font-anek text-4xl font-normal text-raisin-black sm:text-4xl lg:text-5xl"
            data-animation="text"
          >
            <span className="relative z-10">Still in Development</span>
          </h2>
          <p
            className="bottom-clipped inline-block translate-y-7 overflow-hidden text-center mx-auto w-full font-work text-base font-normal text-neutral-600 opacity-0 sm:text-lg lg:max-w-4/5 lg:text-xl"
            data-animation="text"
          >
           I’m building this page. You’ll soon find some way to connect with me soon!
          </p>
       
      </div>

      {/* Animated Code SVG */}
     
    </section>
  );
};

export default ContactPage;
