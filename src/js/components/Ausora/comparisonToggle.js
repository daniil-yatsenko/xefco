import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const comparisonToggleInit = (page = document) => {
  const comparisonEmbed = page.querySelector("#au-comparison-toggle");
  const dataElements = page.querySelectorAll("[data-comparison-new-value]");
  const image = page.querySelector("[data-comparison-image]");
  if (!comparisonEmbed) return;

  const toggle = comparisonEmbed.querySelector("input");
  if (!toggle) return;

  const tl = gsap.timeline({ paused: true });
  gsap.registerPlugin(TextPlugin);
  gsap.set(image, { opacity: 0 });

  dataElements.forEach((element) => {
    const text = element.getAttribute("data-comparison-new-value");
    tl.to(
      element,
      {
        duration: element.textContent.length * 0.1,
        text: {
          value: text,
          rtl: true,
          type: "diff",
          ease: "linear",
        },
      },
      "<",
    );
    tl.to(image, { opacity: 1, duration: 0.4, ease: "power2.inOut" }, "<");
  });

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      tl.restart();
    } else {
      tl.reverse();
    }
  });
};

const comparisonToggleCleanup = (page = document) => {};

export { comparisonToggleInit, comparisonToggleCleanup };
