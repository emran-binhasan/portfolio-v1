// Featured Project Component
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ExternalLink from "@/components/svgs/ExternalLink";

type ProjectType = {
  name: string;
  featuredImage?: string;
  tags: string[];
  description: string;
  link?: string;
  buttonText?: string;
  repository_link?: string | null;
};

type FeaturedProjectType = {
  project: ProjectType;
};

function FeaturedProject({ project }: FeaturedProjectType) {
  const {
    name,
    description,
    tags,
    featuredImage,
    link,
    buttonText,
    repository_link,
  } = project;

  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('[data-animation="website-img"]', {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
        y: 0,
      });
      gsap.to(wrapperRef.current, {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
        },
        y: 0,
        duration: 2,
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full translate-y-60 py-16 max-w-7xl mx-auto"
      ref={wrapperRef}
    >
      <div className="centered-block flex h-full flex-col items-center gap-10 lg:flex-row">
        <div className="relative w-full overflow-hidden lg:w-1/2">
          <div className="absolute right-0 top-0 z-20 h-[calc(100%-15px)] w-[12%] bg-slate-100"></div>
          <div className="absolute left-0 top-0 z-20 h-[calc(100%-15px)] w-[12%] bg-slate-100"></div>
          <Image
            src="/macbook-screen.png"
            alt="Screen mockup"
            width={800}
            height={500}
            priority
            className="relative z-30 h-full w-full object-contain [transform-style:preserve-3d] [transform:translateZ(1000px)]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute left-0 top-1 z-10 h-[calc(100%-15px)] w-full overflow-hidden">
            {featuredImage && (
              <Image
                data-animation="website-img"
                src={featuredImage}
                width={700}
                height={400}
                alt={name || "Project screenshot"}
                className="absolute left-0 right-0 top-1 z-10 mx-auto h-auto w-[78%] -translate-y-64 object-contain will-change-transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        </div>
        <div className="flex w-full flex-col justify-start gap-3 lg:w-1/2">
          <h2
            data-animation="text"
            className="mr-1 font-anek-bangla text-3xl font-semibold text-raisin-black"
          >
            {name}
          </h2>
          <div className="mb-2 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-200 px-3 py-2 font-anek-bangla text-sm text-neutral-600 duration-500 hover:cursor-default hover:bg-gray-600 hover:text-white hover:drop-shadow-md sm:text-base"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-base text-neutral-600 sm:text-lg">{description}</p>

          <div className="flex gap-4">
            {link && (
              <a
                data-animation="text"
                href={link}
                target="_blank"
                rel="nofollow"
                className="flex gap-1 text-base text-neutral-600 sm:text-lg"
              >
                <span>{buttonText ? buttonText : "Visit Website"}</span>
                <div className="h-5 w-5 translate-y-1">
                  <ExternalLink />
                </div>
              </a>
            )}
            {repository_link && (
              <a
                data-animation="text"
                href={repository_link}
                target="_blank"
                rel="nofollow"
                className="flex gap-1 text-base text-neutral-600 sm:text-lg"
              >
                <span>View Repository</span>
                <div className="h-5 w-5 translate-y-1">
                  <ExternalLink />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject