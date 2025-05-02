import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

function SeeMore() {
    const wrapperRef = useRef(null);
    const t1 = useRef<gsap.core.Timeline>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        t1.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom",
            },
          })
          .to({}, {})
          .to(wrapperRef.current, {
            opacity: 1,
          });
      }, wrapperRef);

      
      
  
      return () => ctx.revert();
    }, []);

    
  
    return (
      <div
        className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 px-5 opacity-0 sm:px-10"
        ref={wrapperRef}
      >
       
        <p
            className=" inline-block   text-center mx-auto w-full font-work text-base font-normal text-neutral-600  sm:text-lg lg:max-w-4/5 lg:text-xl"
            data-animation="text"
          >
           Take a look at some of my earlier projects that I have had the
           opportunity to work on.
          </p>
        <Link
          href="/projects"
          className="whitespace-no-wrap inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium leading-6 text-gray-600 shadow-sm hover:bg-gray-50 focus:shadow-none focus:outline-none sm:text-base"
        >
          See more
        </Link>
      </div>
    );
  }

  export default SeeMore