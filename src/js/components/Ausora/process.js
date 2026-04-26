import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const greyColor = "#9fa5a5";

const processFadeIn = (index, diagram) => {
  const tl = gsap.timeline();
  const captionsBlocks = diagram.querySelectorAll(
    ".au-process_diagram_caption-wrapper",
  );
  const heading = captionsBlocks[index].querySelector(
    ".au-process_diagram_caption-heading",
  );
  const caption = captionsBlocks[index].querySelector(
    ".au-process_diagram_caption-paragraph",
  );
  const processes = diagram.querySelectorAll(".au-process_diagram_process");
  let process;
  if (index === 4) {
    process = processes[3];
  } else {
    process = processes[index];
  }

  tl.to(process, { color: "black", duration: 0.2, ease: "power2.out" });
  tl.to(caption, { opacity: 1, duration: 0.2, ease: "power2.out" }, "<");
  tl.to(heading, { color: "black", duration: 0.2, ease: "power2.out" }, "<");
};

const processFadeOut = (index, diagram) => {
  const tl = gsap.timeline();
  const captionsBlocks = diagram.querySelectorAll(
    ".au-process_diagram_caption-wrapper",
  );
  const heading = captionsBlocks[index].querySelector(
    ".au-process_diagram_caption-heading",
  );
  const caption = captionsBlocks[index].querySelector(
    ".au-process_diagram_caption-paragraph",
  );
  const processes = diagram.querySelectorAll(".au-process_diagram_process");
  let process;
  if (index === 4) {
    process = processes[3];
  } else {
    process = processes[index];
  }

  tl.to(process, { color: greyColor, duration: 0.2, ease: "power2.out" });
  tl.to(caption, { opacity: 0, duration: 0.2, ease: "power2.out" }, "<");
  tl.to(heading, { color: greyColor, duration: 0.2, ease: "power2.out" }, "<");
};

const animationDesktop = (page) => {
  const diagrams = page.querySelectorAll(".au-process_diagram");
  if (!diagrams.length) return;

  diagrams.forEach((diagram) => {
    const triggers = diagram.querySelectorAll(
      ".au-process_diagram_process-trigger",
    );
    if (!triggers.length) return;

    triggers.forEach((trigger, index) => {
      processFadeOut(index, diagram);

      trigger.addEventListener("mouseenter", () => {
        processFadeIn(index, diagram);
      });
      trigger.addEventListener("mouseleave", () => {
        processFadeOut(index, diagram);
      });
    });
  });
};

const animationMobile = (page) => {
  const diagrams = page.querySelectorAll(".au-process_diagram");
  if (!diagrams.length) return;

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

      ScrollTrigger.create({
        trigger: captionsBlocks[index],
        scroller: scroller,
        horizontal: true,
        start: "left 80%",
        end: "right 10%",
        onEnter: () => processFadeIn(index, diagram),
        onEnterBack: () => processFadeIn(index, diagram),
        onLeave: () => processFadeOut(index, diagram),
        onLeaveBack: () => processFadeOut(index, diagram),
      });
    });
  });
};

const processInit = (page) => {
  if (window.innerWidth > 991) {
    animationDesktop(page);
  } else {
    animationMobile(page);
  }
};

const processCleanup = (page) => {};

export { processInit, processCleanup };
