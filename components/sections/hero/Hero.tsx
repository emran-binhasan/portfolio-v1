"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const wrapperRef = useRef(null);
  const t1 = useRef<gsap.core.Timeline>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap.timeline().to('[data-animation="text"]', {
        opacity: 1,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: 0,
        duration: 1,
        stagger: 0.1,
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 relative h-full w-full ">
      <div
        className="centered-block relative z-10 flex h-[60vh] sm:h-[80vh] flex-col flex-wrap items-center justify-center gap-y-4 lg:gap-8"
        ref={wrapperRef}
      >
        <h1
          className="bottom-clipped relative inline-block translate-y-7 overflow-hidden text-center font-anek text-5xl font-normal text-raisin-black opacity-0 sm:text-6xl lg:text-[70px]"
          data-animation="text"
        >
          <span className="relative z-10">Hi, I&apos;m Emran Bin Hasan</span>
        </h1>
        <h4
          className="bottom-clipped inline-block translate-y-7 overflow-hidden text-center font-work text-base font-normal text-neutral-600 opacity-0 sm:text-xl lg:max-w-[50%] lg:text-2xl"
          data-animation="text"
        >
          A Full Stack Engineer with a passion for creating engaging
          and intuitive websites.
        </h4>
      </div>
    </section>
  );
}
