import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    gsap.from(".footer-asset", {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section className="footer-section">
      <div className="splash-dip">
        <video
          src={`${import.meta.env.BASE_URL}videos/splash-comp.mp4`}
          autoPlay
          playsInline
          muted
          loop
        />
      </div>

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh] md:pb-[8vh] pb-[6vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #LIVEFIT
          </h1>
        </div>

        {isMobile ? (
          <img
            src={`${import.meta.env.BASE_URL}footer-asset.png`}
            className="footer-asset absolute bottom-[-10%] left-[58%] -translate-x-1/2 object-contain w-[85vw]"
          />
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}footer-asset.png`}
            className="footer-asset absolute bottom-[-35%] left-[67%] -translate-x-1/2 object-contain mix-blend-lighten w-[75vw]"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-8 mt-3">
          <a
            href="https://www.instagram.com/celsiusofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="white" className="size-1/2">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@celsiusofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="white" className="size-1/2">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@celsiusofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="white" className="size-1/2">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        <div className="mt-4 md:px-6 px-4 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-sm text-xs font-medium">
          <div className="flex items-start md:gap-12 gap-5 [&_p]:leading-relaxed">
            <div>
              <p>Celsius Flavors</p>
            </div>
            <div>
              <p>Live Fit Club</p>
              <p>Athletes &amp; Partners</p>
              <p>Where to Buy</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contact</p>
              <p>Live Fit Magazine</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-white/25 py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-milk placeholder:font-sans placeholder:text-white/40"
              />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2026 Celsius Holdings, Inc. - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
