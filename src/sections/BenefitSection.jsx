import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing Celsius
          </p>

          <div className="mt-10 col-center">
            <ClipPathTitle
              title={"Essential Energy"}
              color={"#ffffff"}
              bg={"#cb3133"}
              className={"first-title"}
              borderColor={"#231f20"}
            />
            <ClipPathTitle
              title={"Accelerates Metabolism"}
              color={"#231f20"}
              bg={"#ffffff"}
              className={"second-title"}
              borderColor={"#231f20"}
            />
            <ClipPathTitle
              title={"Burns Body Fat"}
              color={"#231f20"}
              bg={"#e08a33"}
              className={"third-title"}
              borderColor={"#231f20"}
            />
            <ClipPathTitle
              title={"Zero Sugar"}
              color={"#231f20"}
              bg={"#ffffff"}
              className={"fourth-title"}
              borderColor={"#231f20"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
