import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const greyColor = "#9fa5a5";
const purpleColor = "#B99AFF";

const processFadeIn = (index, diagram) => {
  const tl = gsap.timeline();
  const captionsBlocks = diagram.querySelectorAll(
    ".au-process_diagram_caption-wrapper",
  );
  if (!captionsBlocks[index]) return;

  const heading = captionsBlocks[index].querySelector(
    ".au-process_diagram_caption-heading",
  );
  const caption = captionsBlocks[index].querySelector(
    ".au-process_diagram_caption-paragraph",
  );
  const components = diagram.querySelectorAll(".au-process_diagram_component");

  const fabricNoncolor = diagram.querySelectorAll(
    '[data-animation-process-fabric="noncolor"]',
  );
  const fabricColor = diagram.querySelectorAll(
    '[data-animation-process-fabric="color"]',
  );

  if (index === 0) {
    // fabric
    tl.to(fabricNoncolor, {
      color: "black",
      duration: 0.2,
      ease: "power2.out",
    });
    tl.to(
      fabricColor,
      {
        color: purpleColor,
        duration: 0.2,
        ease: "power2.out",
      },
      "<",
    );
  } else if (index === 1) {
    // renewable energy
    tl.to(components, { color: "black", duration: 0.2, ease: "power2.out" });
    tl.to(
      fabricNoncolor,
      {
        color: "black",
        duration: 0.2,
        ease: "power2.out",
      },
      "<",
    );
    tl.to(
      fabricColor,
      {
        color: purpleColor,
        duration: 0.2,
        ease: "power2.out",
      },
      "<",
    );
  } else if (index === 2) {
    // pigment
    tl.to(components[2], { color: "black", duration: 0.2, ease: "power2.out" });
    tl.to(
      components[2].querySelectorAll('[data-animation-process-fabric="color"]'),
      { color: purpleColor, duration: 0.2, ease: "power2.out" },
      "<",
    );
  } else if (index === 3 || index === 4) {
    // agron gas & finishing chemistry
    tl.to(components[3], { color: "black", duration: 0.2, ease: "power2.out" });
  }

  tl.to(caption, { opacity: 1, duration: 0.2, ease: "power2.out" }, "<");
  tl.to(heading, { color: "black", duration: 0.2, ease: "power2.out" }, "<");
};

const processFadeOut = (index, diagram) => {
  const tl = gsap.timeline();
  const captionsBlocks = diagram.querySelectorAll(
    ".au-process_diagram_caption-wrapper",
  );
  if (!captionsBlocks[index]) return;

  const heading = captionsBlocks[index].querySelector(
    ".au-process_diagram_caption-heading",
  );
  const caption = captionsBlocks[index].querySelector(
    ".au-process_diagram_caption-paragraph",
  );

  const components = diagram.querySelectorAll(".au-process_diagram_component");

  const fabricNoncolor = diagram.querySelectorAll(
    '[data-animation-process-fabric="noncolor"]',
  );
  const fabricColor = diagram.querySelectorAll(
    '[data-animation-process-fabric="color"]',
  );

  if (index === 0) {
    // fabric
    tl.to([fabricNoncolor, fabricColor], {
      color: greyColor,
      duration: 0.2,
      ease: "power2.out",
    });
  } else if (index === 1) {
    // renewable energy
    tl.to(components, { color: greyColor, duration: 0.2, ease: "power2.out" });
    tl.to(
      [fabricNoncolor, fabricColor],
      {
        color: greyColor,
        duration: 0.2,
        ease: "power2.out",
      },
      "<",
    );
  } else if (index === 2) {
    // pigment
    tl.to(components[2], {
      color: greyColor,
      duration: 0.2,
      ease: "power2.out",
    });
    tl.to(
      [fabricNoncolor, fabricColor],
      {
        color: greyColor,
        duration: 0.2,
        ease: "power2.out",
      },
      "<",
    );
  } else if (index === 3 || index === 4) {
    // agron gas & finishing chemistry
    tl.to(components[3], {
      color: greyColor,
      duration: 0.2,
      ease: "power2.out",
    });
  }

  tl.to(caption, { opacity: 0, duration: 0.2, ease: "power2.out" }, "<");
  tl.to(heading, { color: greyColor, duration: 0.2, ease: "power2.out" }, "<");
};

const animationDesktop = (page) => {
  const diagrams = page.querySelectorAll(".au-process_diagram");
  if (!diagrams.length) return;

  const abortController = new AbortController();
  const { signal } = abortController;

  diagrams.forEach((diagram) => {
    const triggers = diagram.querySelectorAll(
      ".au-process_diagram_process-trigger",
    );
    if (!triggers.length) return;

    triggers.forEach((trigger, index) => {
      processFadeOut(index, diagram);

      trigger.addEventListener(
        "mouseenter",
        () => {
          processFadeIn(index, diagram);
        },
        { signal },
      );
      trigger.addEventListener(
        "mouseleave",
        () => {
          processFadeOut(index, diagram);
        },
        { signal },
      );
    });
  });

  return { abortController };
};

const animationMobile = (page) => {
  const diagrams = page.querySelectorAll(".au-process_diagram");
  if (!diagrams.length) return;

  const scrollTriggers = [];

  diagrams.forEach((diagram) => {
    const triggers = diagram.querySelectorAll(
      ".au-process_diagram_process-trigger",
    );
    const scroller = diagram.parentNode.parentNode;
    const captionsBlocks = diagram.querySelectorAll(
      ".au-process_diagram_caption-wrapper",
    );
    if (!triggers.length) return;

    triggers.forEach((trigger, index) => {
      processFadeOut(index, diagram);
      setTimeout(() => {
        if (index === 0) processFadeIn(index, diagram);
      }, 10);

      const st = ScrollTrigger.create({
        trigger: captionsBlocks[index],
        scroller: scroller,
        horizontal: true,
        start: "left 15%",
        end: "left 0%",
        onEnterBack: () => {
          triggers.forEach((trigger, i) => {
            if (i !== index) processFadeOut(i, diagram);
          });
          processFadeIn(index, diagram);
        },
        onLeave: () => {
          processFadeOut(index, diagram);
          if (index < triggers.length) processFadeIn(index + 1, diagram);
        },
      });
      scrollTriggers.push(st);
    });
  });

  return { scrollTriggers };
};

const processInit = (page) => {
  const state =
    window.innerWidth > 991 ? animationDesktop(page) : animationMobile(page);
  if (state) page._processState = state;
};

const processCleanup = (page) => {
  if (!page._processState) return;

  const { abortController, scrollTriggers } = page._processState;

  abortController?.abort();
  scrollTriggers?.forEach((st) => st.kill());

  delete page._processState;
};

export { processInit, processCleanup };
