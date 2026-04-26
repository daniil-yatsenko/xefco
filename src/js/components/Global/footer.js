import { gsap } from "gsap";
import { IMG_SCALE } from "../../global/defaults";

const footerImageLinks = (page = document) => {
  const links = page.querySelectorAll(".footer_subbrand-link");

  links.forEach((link) => {
    const image = link.querySelector("img");
    const scale = gsap.getProperty(image, "scale");

    link.addEventListener("mouseenter", () => {
      gsap.to(image, {
        scale: scale + IMG_SCALE.scale / 5,
        duration: IMG_SCALE.duration,
      });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(image, { scale: scale, duration: 0.2 });
    });
  });
};

export { footerImageLinks };
