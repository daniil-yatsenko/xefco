import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenisMain } from "../../global/globalInit";

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
    focus: -0,
    trimSpace: false,
    updateOnMove: true,
    padding: {
      left: "calc(var(--sizes-gaps--au-padding) - 1rem)",
      right: "var(--sizes-gaps--au-padding)",
    },
  },
  fabrics: {
    type: "loop",
    pagination: true,
    perPage: 1,
    arrows: false,
    gap: "calc(var(--sizes-gaps--xr-padding) / 2)",
    classes: {
      pagination: "splide__pagination xr-fabrics_pagination",
      page: "splide__pagination__page xr-fabrics_page",
    },
  },
};

const splideInit = (page) => {
  const sliders = page.querySelectorAll(".splide");

  if (!sliders) return;

  sliders.forEach((slider) => {
    if (!slider.querySelector(".splide__track")) return;
    if (!slider.querySelector(".splide__list")) return;
    const paginationStyling = slider.parentElement.querySelector(
      ".xr-fabrics-overview_splide-pagination-wrapper",
    );
    if (paginationStyling) {
      paginationStyling.style.display = "none";
    }

    let config = splideConfig.default;

    if (slider.classList.contains("is-feature-extra-block")) {
      config = splideConfig.feature_extra_block;
    }

    if (slider.classList.contains("is-fabrics")) {
      config = splideConfig.fabrics;
    }

    let splide = new Splide(slider, config);

    splide.on("mounted", function () {
      lenisMain.resize();
      ScrollTrigger.refresh();
    });

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
