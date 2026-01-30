import gsap from "gsap";
import { lenisMain } from "../global/globalInit";

const expandableBlockInit = (page = document) => {
  const blocks = page.querySelectorAll("[data-expandable-block]");

  blocks.forEach((block) => {
    const blockWrapper = block.parentElement;
    const blockId = block.getAttribute("data-expandable-block");
    const button = page.querySelector(
      `[data-expandable-block-button="${blockId}"]`,
    );
    const slides = block.querySelectorAll(".splide__slide");
    const controls = block.querySelectorAll(".extra-block-button");

    if (!button) return;

    // Store state on the button element
    button._expandableBlockState = {
      isExpanded: false,
      block: block,
      abortController: new AbortController(),
    };

    // Initially hide the block
    gsap.set(blockWrapper, {
      display: "none",
      delay: 0.1,
      onComplete: () => {
        lenisMain.resize();
      },
    });

    const collapse = () => {
      const state = button._expandableBlockState;

      // Collapse timeline
      const collapseTl = gsap.timeline();
      collapseTl.to(controls, { opacity: 0 });
      collapseTl.to(
        slides,
        {
          scale: 0.98,
          duration: 0.4,
        },
        "<",
      );
      collapseTl.to(
        blockWrapper,
        {
          height: "0rem",
          ease: "power2.inOut",
          duration: 0.4,
        },
        "<",
      );
      collapseTl.set(blockWrapper, { display: "none" });
      // Add more collapse animations here later

      state.isExpanded = false;
      lenisMain.resize();
    };

    const expand = () => {
      const state = button._expandableBlockState;

      // Expand timeline
      const expandTl = gsap.timeline();
      expandTl.set(".splide__track", { overflow: "auto" });
      expandTl.set(slides, { opacity: 0.1, scale: 0.95 });
      expandTl.set(controls, { opacity: 0 });
      expandTl.set(blockWrapper, {
        display: "block",
        height: "0rem",
        overflow: "hidden",
      });
      expandTl.to(blockWrapper, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
      });
      expandTl.to(slides, {
        opacity: "",
        scale: 1,
        duration: 0.4,
        delay: -0.25,
      });
      expandTl.to(controls, { opacity: 1, delay: -0.3 });
      expandTl.set(".splide__track", { overflow: "" });

      // Add more expand animations here later

      state.isExpanded = true;
      lenisMain.resize();
    };

    // Toggle click handler
    const handleToggleClick = () => {
      const state = button._expandableBlockState;

      if (state.isExpanded) {
        collapse();
      } else {
        expand();
      }
    };

    // Attach toggle click listener with AbortController
    button.addEventListener("click", handleToggleClick, {
      signal: button._expandableBlockState.abortController.signal,
    });

    // Find and attach close button inside the block
    const closeButton = block.querySelector(
      '[data-expandable-block-button="close"]',
    );

    if (closeButton) {
      closeButton.addEventListener("click", collapse, {
        signal: button._expandableBlockState.abortController.signal,
      });
    }
  });
};

const expandableBlockCleanup = (page = document) => {
  const blocks = page.querySelectorAll("[data-expandable-block]");

  blocks.forEach((block) => {
    const blockId = block.getAttribute("data-expandable-block");
    const button = page.querySelector(
      `[data-expandable-block-button="${blockId}"]`,
    );

    if (!button || !button._expandableBlockState) return;

    // Abort event listeners
    button._expandableBlockState.abortController.abort();

    // Kill any active GSAP animations
    gsap.killTweensOf(block);

    // Reset block state
    gsap.set(block, { clearProps: "all" });

    // Clean up stored state
    delete button._expandableBlockState;
  });
};

export { expandableBlockInit, expandableBlockCleanup };

// this is a test comment
