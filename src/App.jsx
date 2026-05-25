import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import NutritionSection from "./sections/NutritionSection";
import CategoryBar from "./components/CategoryBar";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    if (import.meta.hot) {
      import.meta.hot.on("vite:afterUpdate", () => {
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <CategoryBar />
      <NutritionSection />
      <BenefitSection />
      <TestimonialSection />
      <FooterSection />
    </main>
  );
};

export default App;
