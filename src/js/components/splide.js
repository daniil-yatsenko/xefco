import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";

const ease = "cubic-bezier(0.45, 0, 0.55, 1)";

const splideConfig = {
  default: {
    pagination: false,
    easing: ease,
  },
  feature_extra_block: {
    type: "loop",
    pagination: false,
    perPage: 2,
    breakpoints: {
      480: {
        perPage: 1,
        padding: {
          left: "calc(var(--sizes-gaps--au-padding) - 1.25rem)",
          right: "calc(var(--sizes-gaps--au-padding) + 1.25rem)",
        },
      },
    },
    perMove: 1,
    focus: 0,
    trimSpace: false,
    updateOnMove: true,
    padding: {
      left: "calc(var(--sizes-gaps--au-padding) - 1rem)",
      right: "var(--sizes-gaps--au-padding)",
    },
  },
};

const splideInit = (page) => {
  const sliders = page.querySelectorAll(".splide");

  if (!sliders) return;

  sliders.forEach((slider) => {
    if (!slider.querySelector(".splide__track")) return;
    if (!slider.querySelector(".splide__list")) return;

    let config = splideConfig.default;

    if (slider.classList.contains("is-feature-extra-block")) {
      config = splideConfig.feature_extra_block;
    }

    let splide = new Splide(slider, config);
    splide.mount();

    // Store instance on element for cleanup
    slider._splideInstance = splide;
  });
  return;
};

const splideCleanup = (page) => {
  const sliders = page.querySelectorAll(".splide");

  if (!sliders) return;

  sliders.forEach((slider) => {
    // Destroy Splide instance if it exists
    if (slider._splideInstance) {
      slider._splideInstance.destroy();
      delete slider._splideInstance;
    }
  });
  return;
};

export { splideInit, splideCleanup };
