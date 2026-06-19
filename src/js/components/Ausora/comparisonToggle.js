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

  const headingWrapper = page.querySelector(".au-comparison_toggle-heading");
  const heading = headingWrapper ? headingWrapper.children[0] : null;
  const updatedHeading = headingWrapper ? headingWrapper.children[1] : null;

  const conventional = conventionalWrapper
    ? conventionalWrapper.children[0].children
    : null;
  const conventionalFilledPaths = conventionalWrapper
    ? conventionalWrapper.querySelectorAll("path[fill]")
    : null;
  const ausoraWrapper = page.querySelector(
    "[data-animation-comparison-ausora]",
  );
  const ausora = ausoraWrapper ? ausoraWrapper.children[0].children : null;
  const grid = page.querySelector("[data-animation-comparison-grid]");
  gsap.registerPlugin(TextPlugin, DrawSVGPlugin, ScrollTrigger);

  const abortController = new AbortController();
  const { signal } = abortController;

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

  textTl.to(
    heading,
    {
      duration: 0.3,
      text: {
        value: updatedHeading.textContent,
        rtl: true,
        type: "diff",
        ease: "linear",
      },
    },
    "<",
  );

  toggle.addEventListener(
    "change",
    () => {
      if (toggle.checked) {
        textTl.restart();
        svgTl.restart();
      } else {
        svgTl.reverse();
        textTl.reverse();
      }
    },
    { signal },
  );

  comparisonEmbed._state = { abortController, scrollTrigger: null };

  if (!grid) return;

  const triggerStart = window.innerWidth > 480 ? "bottom 92%" : "bottom 99%";

  const scrollTrigger = ScrollTrigger.create({
    trigger: grid,
    start: triggerStart,
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

  comparisonEmbed._state.scrollTrigger = scrollTrigger;

  toggle.addEventListener(
    "click",
    () => {
      scrollTrigger.kill();
    },
    { signal },
  );
};

const comparisonToggleCleanup = (page = document) => {
  const comparisonEmbed = page.querySelector("#au-comparison-toggle");
  if (!comparisonEmbed || !comparisonEmbed._state) return;

  const { abortController, scrollTrigger } = comparisonEmbed._state;

  abortController.abort();
  scrollTrigger?.kill();

  delete comparisonEmbed._state;
};

export { comparisonToggleInit, comparisonToggleCleanup };
