import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="h-[400px]"></div>
      <About />
      <Skills/>
    </>
  );
};

export default HomePage;
