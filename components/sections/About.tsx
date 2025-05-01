"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

const About = () => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create animation that will be triggered on scroll
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
            start: "top 90%", // Animation starts when top of element reaches 80% from top of viewport
            once: true, // Only trigger animation once
            // markers: true, // Uncomment for debugging - shows markers in the browser
          },
        }
      );
    }, wrapperRef);

    return () => {
      // Clean up the context and ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section className="bg-gray-100 py-10 flex items-center">
        <div className="flex flex-col justify-center w-full space-y-2 md:space-y-4 " ref={wrapperRef}>
          <h1
            ref={titleRef}
            className="bottom-clipped relative inline-block overflow-hidden text-center font-anek text-4xl font-normal text-raisin-black sm:text-5xl lg:text-6xl"
            data-animation="text"
          >
            <span className="relative z-10">About Me</span>
          </h1>
          <h4
            className="bottom-clipped inline-block translate-y-7 overflow-hidden text-center mx-auto w-full font-work text-base font-normal text-neutral-600 opacity-0 sm:text-lg lg:max-w-4/5 lg:text-xl"
            data-animation="text"
          >
            A Software Engineer solving real-world challenges with scalable,
            efficient systems. I design and build robust backend architectures
            and seamless user interfaces, delivering clean, high-impact
            solutions across the full stack.
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto w-full gap-6 mt-6">
            <EducationSection/>
            <ExperienceSection/>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;