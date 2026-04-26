import { gsap } from "gsap";

const greyColor = "#9fa5a5";

const processFadeIn = (process, index, diagram) => {
  const tl = gsap.timeline();
  const captionsBlocks = diagram.querySelectorAll(
    ".au-process_diagram_caption-paragraph",
  );
  let captions = [];
  if (index === 3) {
    captions.push(captionsBlocks[3]);
    captions.push(captionsBlocks[4]);
  } else {
    captions.push(captionsBlocks[index]);
  }

  tl.to(process, { color: "black" });
  tl.to(captions, { opacity: 1 }, "<");
};

const processFadeOut = (process, index, diagram) => {
  const tl = gsap.timeline();
  const captionsBlocks = diagram.querySelectorAll(
    ".au-process_diagram_caption-paragraph",
  );
  let captions = [];
  if (index === 3) {
    captions.push(captionsBlocks[3]);
    captions.push(captionsBlocks[4]);
  } else {
    captions.push(captionsBlocks[index]);
  }

  tl.to(process, { color: greyColor });
  tl.to(captions, { opacity: 0 }, "<");
};

const animationDesktop = (page) => {
  const diagrams = page.querySelectorAll(".au-process_diagram");
  if (!diagrams.length) return;

  diagrams.forEach((diagram) => {
    const processes = diagram.querySelectorAll(".au-process_diagram_process");
    if (!processes.length) return;

    processes.forEach((process, index) => {
      processFadeOut(process, index, diagram);
      process.addEventListener("mouseenter", () => {
        processFadeIn(process, index, diagram);
      });
      process.addEventListener("mouseleave", () => {
        processFadeOut(process, index, diagram);
      });
    });
  });
};

const processInit = (page) => {
  if (window.innerWidth > 991) {
    animationDesktop(page);
  }
};

const processCleanup = (page) => {};

export { processInit, processCleanup };
