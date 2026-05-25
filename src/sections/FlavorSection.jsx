import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="flavor-scroll-content">
        <div className="h-full flex lg:flex-row flex-col items-center relative">
          <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
            <FlavorTitle />
          </div>
          <div className="h-full">
            <FlavorSlider />
          </div>

          <a href="#" className="flavor-cta" aria-label="Get it now">
            <span>Get it now</span>
            <span className="flavor-cta-plus">+</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
