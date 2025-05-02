"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor({
  children,
}: {
  children: React.ReactNode;
}) {
  const [initCursor, setInitCursor] = useState(false);
  const customCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorEl = customCursorRef.current;

    const scaleCursor = () => {
      if (!cursorEl) return;

      const elements = document.querySelectorAll("h1, h2, h3, p, img");

      // Make cursor square when hovering on nav logo
      const logoEl = document.querySelector(".nav-logo");

      if (logoEl && cursorEl) {
        logoEl.addEventListener("mouseover", () => {
          cursorEl.classList.remove("rounded-full");
        });
        logoEl.addEventListener("mouseout", () => {
          cursorEl.classList.add("rounded-full");
        });
      }

      elements.forEach(function (elem) {
        elem.addEventListener("mouseover", function () {
          cursorEl.classList.add("scale-[3.0]");
        });
        elem.addEventListener("mouseout", function () {
          cursorEl.classList.remove("scale-[3.0]");
        });
      });
    };

    scaleCursor();

    const hideCustomCursor = () => {
      if (!cursorEl) return;

      const elements = document.querySelectorAll(".no-rounded-cursor");

      elements.forEach(function (elem) {
        elem.addEventListener("mouseover", function () {
          cursorEl.classList.add("lg:hidden");
        });
        elem.addEventListener("mouseout", function () {
          cursorEl.classList.remove("lg:hidden");
        });
      });
    };

    hideCustomCursor();

    const onMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (!initCursor) {
        gsap.to(cursorEl, {
          opacity: 1,
          duration: 0.5,
        });
        setInitCursor(true);
      }

      gsap.to(cursorEl, {
        top: mouseY + "px",
        left: mouseX + "px",
        duration: 1,
      });
    };

    const onMouseOut = () => {
      gsap.to(cursorEl, {
        opacity: 0,
        duration: 0.5,
      });
      setInitCursor(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseout", onMouseOut);
      scaleCursor();
    };
  }, [initCursor]);

  return (
    <>
      {children}
      <div
        ref={customCursorRef}
        className="pointer-events-none fixed z-[1000] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 scale-[.8] rounded-full bg-white opacity-0 mix-blend-difference transition duration-300 ease-in lg:block"
      />
    </>
  );
}
