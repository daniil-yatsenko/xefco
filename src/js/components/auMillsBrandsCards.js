import { gsap } from "gsap";
import { IMG_SCALE } from "../global/defaults";

const auMillsBrandsCardsInit = (page = document) => {
  const links = page.querySelectorAll(".au-mills-brands_card");

  links.forEach((link) => {
    const image = link.querySelector("img");
    const scale = gsap.getProperty(image, "scale");

    const abortController = new AbortController();
    link._articleScaleAbortController = abortController;
    const options = { signal: abortController.signal };

    link.addEventListener(
      "mouseenter",
      () => {
        gsap.to(image, {
          scale: scale + IMG_SCALE.scale / 3,
          duration: IMG_SCALE.duration,
        });
      },
      options,
    );
    link.addEventListener(
      "mouseleave",
      () => {
        gsap.to(image, { scale: scale, duration: 0.2 });
      },
      options,
    );
  });
};

const auMillsBrandsCardsCleanup = (page = document) => {
  const links = page.querySelectorAll(".au-mills-brands_card");

  links.forEach((link) => {
    const image = link.querySelector("img");

    if (link._articleScaleAbortController) {
      link._articleScaleAbortController.abort();
      delete link._articleScaleAbortController;
    }

    if (image) {
      gsap.killTweensOf(image);
    }
  });
};

export { auMillsBrandsCardsInit, auMillsBrandsCardsCleanup };
