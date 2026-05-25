import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Loader = ({ onComplete }) => {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);

  useGSAP(
    () => {
      const counter = { value: 0 };
      gsap.set(logoRef.current, { clipPath: "inset(0 100% 0 0)" });

      const tl = gsap.timeline({ onComplete });

      tl.to(counter, {
        value: 100,
        duration: 2.6,
        ease: "power1.inOut",
        onUpdate: () => {
          const v = counter.value;
          if (countRef.current) countRef.current.textContent = Math.round(v);
          if (barRef.current)
            barRef.current.style.transform = `scaleX(${v / 100})`;
          if (logoRef.current)
            logoRef.current.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
        },
      })
        .to(".loader-progress", { opacity: 0, duration: 0.4 }, "+=0.25")
        .to(rootRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        }, "+=0.1");
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="loader">
      <div className="loader-inner">
        <img
          ref={logoRef}
          src={`${import.meta.env.BASE_URL}celsius-logo.svg`}
          alt="Celsius"
          className="loader-logo"
        />

        <div className="loader-progress">
          <div className="loader-bar-track">
            <div ref={barRef} className="loader-bar-fill" />
          </div>
          <div className="loader-count">
            <span ref={countRef}>0</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
