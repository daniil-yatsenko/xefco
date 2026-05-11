import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const bannerInit = (page = document) => {
  gsap.registerPlugin(ScrollTrigger);

  const banners = page.querySelectorAll(".section_au-banner");
  if (!banners.length) return;

  console.log("banners: ", banners);

  banners.forEach((banner) => {
    const image = banner.querySelector(".au-banner_banner-visual-wrapper");

    gsap.fromTo(
      banner,
      {},
      {
        paddingLeft: 0,
        paddingRight: 0,
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      image,
      {},
      {
        borderRadius: 0,
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      },
    );
  });
};

const bannerCleanup = () => {
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });
};

export { bannerInit, bannerCleanup };
