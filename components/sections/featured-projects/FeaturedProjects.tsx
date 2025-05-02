// Featured Project Component
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedProject from "./FeaturedProject";
import SeeMore from "./SeeMore";
import projects from "@/db/featured-projects.json"
const FeaturedProjects = () => {
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
            start: "top 90%", // Animation starts when top of element reaches 90% from top of viewport
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

      {/* Featured Projects Section */}
      <div className="w-full bg-slate-100 py-10 md:py-20" id="projects">
        <div className="centered-block flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-3" ref={wrapperRef}>
        <h2
            ref={titleRef}
            className="bottom-clipped relative inline-block overflow-hidden text-center font-anek text-4xl font-normal text-raisin-black sm:text-5xl lg:text-6xl"
            data-animation="text"
          >
            <span className="relative z-10">Projects</span>
          </h2>
          <p
            className="bottom-clipped inline-block translate-y-7 overflow-hidden text-center mx-auto w-full font-work text-base font-normal text-neutral-600 opacity-0 sm:text-lg lg:max-w-4/5 lg:text-xl"
            data-animation="text"
          >
            Some of my latest projects ..
          </p>
         </div>
       
        </div>

        {/* Projects List */}
        {projects.map((project) => (
          <FeaturedProject key={project?.name} project={project} />
        ))}

        {/* See More Section */}
        <SeeMore />
      </div>
    </>
  );
};

export default FeaturedProjects;
