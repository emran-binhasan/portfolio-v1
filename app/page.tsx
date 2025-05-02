import About from "@/components/sections/about/About";
import FeaturedProjects from "@/components/sections/featured-projects/FeaturedProjects";
import Hero from "@/components/sections/hero/Hero";
import Skills from "@/components/sections/skills/Skills";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills/>
      <FeaturedProjects/>
    </>
  );
};

export default HomePage;
