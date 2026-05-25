import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { otgPackets } from "../constants";

const NutritionSection = () => {
  useGSAP(() => {
    gsap.from(".otg-title", {
      yPercent: 20,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".otg-section",
        start: "top 70%",
      },
    });

    gsap.from(".otg-packet", {
      yPercent: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".otg-packets",
        start: "top 80%",
      },
    });

    gsap.utils.toArray(".otg-packet").forEach((packet, i) => {
      gsap.to(packet, {
        y: -12,
        duration: 2.4 + (i % 4) * 0.3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: ".otg-packets",
          start: "top 60%",
          toggleActions: "play pause resume pause",
        },
      });
    });

    gsap.from(".otg-description > *", {
      yPercent: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".otg-description",
        start: "top 85%",
      },
    });
  });

  return (
    <section className="otg-section">
      <h1 className="otg-title">CELSIUS ON-THE-GO</h1>

      <div className="otg-packets">
        {otgPackets.map((packet) => (
          <img
            key={packet.name}
            src={packet.src}
            alt={packet.name}
            className="otg-packet"
          />
        ))}
      </div>

      <div className="otg-description">
        <p className="otg-label">ENERGY ANYTIME, ANYWHERE</p>
        <p className="otg-text">
          Enjoy energy anywhere, anytime with these powder stick packets. Each
          one contains the same clinically proven ingredients as the original
          line, only its compact size is easier for travelling. Just add water
          and go!
        </p>
        <a
          href="#"
          className="otg-cta"
          aria-label="Learn more about Celsius On-The-Go"
        >
          <span>LEARN MORE</span>
          <span className="otg-cta-plus">+</span>
        </a>
      </div>
    </section>
  );
};

export default NutritionSection;
