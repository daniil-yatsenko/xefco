import { gsap } from "gsap";
import { lenisMain } from "../global/globalInit";
import ScrollTrigger from "gsap/ScrollTrigger";

const auFaqInit = (page = document) => {
  const lists = page.querySelectorAll(".au-faq_list");

  if (!lists) return;

  lists.forEach((list) => {
    const items = list.querySelectorAll(".au-faq_item");

    if (!items) return;

    items.forEach((item) => {
      const answer = item.querySelector(".au-faq_answer");

      if (!answer) return;

      gsap.set(answer, { display: "none" });

      item._state = {
        isExpanded: false,
        abortController: new AbortController(),
      };
      const state = item._state;
      state.isExpanded = false;
      const marginTop = getComputedStyle(answer).marginTop;
      const icon = item.querySelector(".au-faq_question-icon-wrapper");

      const expand = () => {
        if (state.isExpanded) return;

        const tl = gsap.timeline({});

        tl.set(answer, {
          display: "block",
          height: 0,
          marginTop: 0,
          opacity: 0,
        });
        tl.to(answer, {
          height: "auto",
          marginTop: marginTop,
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
        tl.to(
          icon,
          {
            rotate: 180,
            ease: "power2.inOut",
            duration: 0.3,
            onComplete: () => {
              lenisMain.resize();
              ScrollTrigger.refresh();
              state.isExpanded = true;
            },
          },
          "<",
        );
      };

      const collapse = () => {
        if (!state.isExpanded) return;

        const tl = gsap.timeline({});
        tl.to(answer, {
          height: 0,
          marginTop: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
        tl.to(
          icon,
          {
            rotate: 0,
            ease: "power2.inOut",
            duration: 0.3,
            onComplete: () => {
              lenisMain.resize();
              ScrollTrigger.refresh();
              state.isExpanded = false;
            },
          },
          "<",
        );
        tl.set(answer, { display: "none" });

        state.isExpanded = false;
      };

      item.addEventListener(
        "click",
        () => {
          const state = item._state;
          if (state.isExpanded) {
            collapse();
          } else {
            expand();
          }
        },
        { signal: state.abortController.signal },
      );
    });
  });
};

const auFaqCleanup = (page = document) => {
  const lists = page.querySelectorAll(".au-faq_list");

  if (!lists) return;

  lists.forEach((list) => {
    const items = list.querySelectorAll(".au-faq_item");

    if (!items) return;

    items.forEach((item) => {
      if (!item._state) return;

      item._state.abortController.abort();

      const answer = item.querySelector(".au-faq_answer");
      if (answer) gsap.killTweensOf(answer);

      const icon = item.querySelector(".au-faq_question-icon-wrapper");
      if (icon) gsap.killTweensOf(icon);

      gsap.set(item, { clearProps: "all" });

      delete item._state;
    });
  });
};

export { auFaqInit, auFaqCleanup };
