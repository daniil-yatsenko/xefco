import { gsap } from "gsap";
import { IMG_SCALE } from "../../global/defaults.js";

const cardFadeIn = (card) => {
  const content = card.querySelector(".hr-products_card-content");
  gsap.to(card, {
    filter: "saturate(100%)",
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(content, { opacity: 1, duration: 0.3, ease: "power2.out" });
};

const cardFadeOut = (card) => {
  const content = card.querySelector(".hr-products_card-content");
  gsap.to(card, { filter: "saturate(0%)", duration: 0.3, ease: "power2.out" });
  gsap.to(content, { opacity: 0, duration: 0.3, ease: "power2.out" });
};

const productCardsInit = (page = document) => {
  const section = page.querySelectorAll(".section_xr-products");
  section.forEach((s) => {
    const cards = s.querySelectorAll(".xr-products_card");
    cards.forEach((card) => {
      cardFadeOut(card);

      const imageWrapper = card.querySelector(".xr-products_image-wrapper");
      const image = imageWrapper.querySelector("img");
      const scale = gsap.getProperty(image, "scale");

      const abortController = new AbortController();
      card._productCardAbortController = abortController;
      const options = { signal: abortController.signal };

      card.addEventListener(
        "mouseenter",
        () => {
          cardFadeIn(card);
          gsap.to(image, {
            scale: scale + IMG_SCALE.scale / 3,
            duration: IMG_SCALE.duration,
          });
        },
        options,
      );
      card.addEventListener(
        "mouseleave",
        () => {
          cardFadeOut(card);
          gsap.to(image, { scale: scale, duration: IMG_SCALE.duration });
        },
        options,
      );
    });

    const sectionAbortController = new AbortController();
    s._productSectionAbortController = sectionAbortController;

    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth < 992) {
          cards.forEach((card) => cardFadeIn(card));
        } else {
          cards.forEach((card) => cardFadeOut(card));
        }
      },
      { signal: sectionAbortController.signal },
    );
  });
};

const productCardsCleanup = (page = document) => {
  const section = page.querySelectorAll(".section_xr-products");
  section.forEach((s) => {
    const cards = s.querySelectorAll(".xr-products_card");
    cards.forEach((card) => {
      if (card._productCardAbortController) {
        card._productCardAbortController.abort();
        delete card._productCardAbortController;
      }

      const imageWrapper = card.querySelector(".xr-products_image-wrapper");
      const image = imageWrapper?.querySelector("img");
      if (image) gsap.killTweensOf(image);

      const content = card.querySelector(".hr-products_card-content");
      gsap.killTweensOf(card);
      if (content) gsap.killTweensOf(content);
    });

    if (s._productSectionAbortController) {
      s._productSectionAbortController.abort();
      delete s._productSectionAbortController;
    }
  });
};

export { productCardsInit, productCardsCleanup };
