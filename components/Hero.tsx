import Header from "./Header";
import Icons from "./Icons";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const hero = document.getElementById("icons");
    /* @ts-ignore */
    const svgs = Array.from(hero?.querySelectorAll("svg"));

    const w = window.innerWidth;
    const h = window.innerHeight;

    function animateBackgroundIcons() {
      /* @ts-ignore */
      const avaibleSvgs = svgs.filter((svg) => !svg.isAnimating);
      const svgToAnimate =
        avaibleSvgs[Math.floor(Math.random() * avaibleSvgs.length)];
      if (!svgToAnimate) return;

      svgToAnimate.addEventListener(
        "animationend",
        () => {
          svgToAnimate.classList.remove("animate-moving-background");
          svgToAnimate.removeAttribute("style");
          /* @ts-ignore */
          svgToAnimate.isAnimating = false;
        },
        { once: true }
      );

      svgToAnimate.setAttribute(
        "style",
        `
              top: ${Math.floor(Math.random() * h)}px;
              left: ${Math.floor(Math.random() * w)}px;
          `
      );
      svgToAnimate.classList.add("animate-moving-background");
      /* @ts-ignore */
      svgToAnimate.isAnimating = true;
    }
    setInterval(animateBackgroundIcons, 500);
    animateBackgroundIcons();
  }, []);

  return (
    <section
      style={{
        clipPath: "polygon(25% 0%, 100% 0, 100% 95%, 0 100%, 0 100%, 0 0)",
      }}
      className="relative w-full overflow-hidden bg-gradient-to-r from-red-500 via-red-500 to-red-700"
    >
      <Header />
      <div className="absolute inset-0 -z-10">
        <Icons />
      </div>
      <div className="block px-6 mx-auto max-w-7xl">
        <div className="flex flex-col flex-wrap items-center justify-center w-full pt-5 pb-40 mx-auto leading-6 text-center text-black lg:pt-24 lg:px-10 lg:flex-row">
          <div className="relative flex flex-col items-center w-full text-black">
            <h1 className="pt-4 mx-auto mb-4 text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-zinc-900 xl:pt-6 sm:text-[6rem] lg:text-[8rem] leading-none">
              #infoConf
            </h1>
            <p className="font-bold tracking-wider text-white">
              LUNES 12 de SEPTIEMBRE 2022 - 12:00 AM
            </p>
            <p className="pt-4 mt-8 text-xl font-semibold leading-relaxed text-gray-800 lg:mb-4 xl:pt-5 sm:text-2xl lg:text-xl xl:text-2xl lg:w-6/12 max-w-prose">
              Aprende principios básicos de las últimas tendencias de desarrollo
              y programación web de la mano de estudiantes destacados.
            </p>

            <div className="pt-5 space-y-4 leading-6 text-center xl:pt-8 xl:space-y-5">
              <div className="relative inline-block">
                <div className="w-full h-full bg-gray-900 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0"></div>
                <a
                  href=""
                  className="Button"
                >
                  ¡Quiero aprender más!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
