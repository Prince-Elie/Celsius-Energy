import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    let containerTl = null;

    if (!isTablet) {
      containerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      containerTl.to(".flavor-scroll-content", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    gsap.utils.toArray(".flavor-card").forEach((card) => {
      const splash = card.querySelector(".card-splash");
      const can = card.querySelector(".flavor-can");

      gsap.set(splash, { clipPath: "circle(0% at 50% 55%)", opacity: 0 });
      gsap.set(can, { yPercent: 25, opacity: 0, scale: 0.85 });

      const triggerOptions = !isTablet
        ? {
            trigger: card,
            containerAnimation: containerTl,
            start: "left 80%",
            end: "left 30%",
            scrub: 1,
          }
        : {
            trigger: card,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          };

      gsap.to(splash, {
        clipPath: "circle(75% at 50% 55%)",
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: triggerOptions,
      });

      gsap.to(can, {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: triggerOptions,
      });
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`flavor-card ${flavor.rotation}`}
          >
            <video
              className="card-splash"
              src={`${import.meta.env.BASE_URL}videos/splash-comp.mp4`}
              playsInline
              muted
              loop
              autoPlay
            />
            <img src={flavor.can} alt={flavor.name} className="flavor-can" />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
