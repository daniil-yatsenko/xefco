import { gsap } from "gsap";

const usecasesInit = (page = document) => {
  const sections = page.querySelectorAll(".xr-usecases_wrapper");
  sections.forEach((section) => {
    const paragraph = section.querySelector(".xr-usecases_paragraph-wrapper");
    const tabBtns = section.querySelectorAll("a[data-w-tab]");
    const tabTexts = section.querySelectorAll(".xr-usecases_tab-text");

    const abortController = new AbortController();
    const { signal } = abortController;

    tabBtns.forEach((btn, index) => {
      btn.addEventListener(
        "click",
        () => {
          gsap.set(paragraph, { textContent: tabTexts[index].textContent });
        },
        { signal },
      );
    });

    section._state = { abortController };
  });
};

const usecasesCleanup = (page = document) => {
  const sections = page.querySelectorAll(".xr-usecases_wrapper");
  sections.forEach((section) => {
    if (!section._state) return;
    section._state.abortController.abort();
    delete section._state;
  });
};

export { usecasesInit, usecasesCleanup };
