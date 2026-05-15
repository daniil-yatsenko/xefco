import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const comparisonToggleInit = (page = document) => {
  const comparisonEmbed = page.querySelector("#au-comparison-toggle");
  if (!comparisonEmbed) return;

  const toggle = comparisonEmbed.querySelector("input");
  if (!toggle) return;

  const dataElements = page.querySelectorAll("[data-comparison-new-value]");
  const conventionalWrapper = page.querySelector(
    "[data-animation-comparison-conventional]",
  );
  const conventional = conventionalWrapper.children[0].children;
  const conventionalFilledPaths =
    conventionalWrapper.querySelectorAll("path[fill]");
  const ausoraWrapper = page.querySelector(
    "[data-animation-comparison-ausora]",
  );
  const ausora = ausoraWrapper.children[0].children;
  const grid = page.querySelector("[data-animation-comparison-grid");

  gsap.registerPlugin(TextPlugin, DrawSVGPlugin, ScrollTrigger);

  const textTl = gsap.timeline({ paused: true });
  const svgTl = gsap.timeline({ paused: true });

  gsap.set(ausora, { drawSVG: "0%", display: "flex" });
  gsap.set(ausoraWrapper, { display: "flex" });

  svgTl.to(conventionalFilledPaths, {
    fill: "transparent",
    duration: 0.4,
    ease: "linear",
  });
  svgTl.to(
    conventional,
    {
      drawSVG: "0%",
      duration: 0.4,
      ease: "linear",
    },
    "<",
  );
  svgTl.to(ausora, {
    drawSVG: "100%",
    duration: 0.4,
    ease: "linear",
    delay: -0.1,
  });

  // play on load so the consequent plays are smooth (as alternative to will-change)
  svgTl.play().then(() => svgTl.reverse());

  dataElements.forEach((element) => {
    const text = element.getAttribute("data-comparison-new-value");
    textTl.to(
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
  });

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      textTl.restart();
      svgTl.restart();
    } else {
      svgTl.reverse();
      textTl.reverse();
    }
  });

  if (!grid) return;

  const scrollTrigger = ScrollTrigger.create({
    trigger: grid,
    start: "bottom 92%",
    onToggle: ({ isActive }) => {
      if (isActive) {
        toggle.checked = true;
        textTl.restart();
        svgTl.restart();
      } else {
        toggle.checked = false;
        svgTl.reverse();
        textTl.reverse();
      }
    },
  });

  toggle.addEventListener("click", () => {
    scrollTrigger.kill();
  });
};

const comparisonToggleCleanup = (page = document) => {};

export { comparisonToggleInit, comparisonToggleCleanup };
