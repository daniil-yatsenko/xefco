import { gsap } from "gsap";

const instances = new Map();

const createObj = (section) => {
  const obj = {
    tabsWrapper: section,
    tabBtns: section.querySelectorAll("a[data-w-tab]"),
    tabs: section.querySelectorAll("div[data-w-tab]"),
    listeners: [],

    activeVideoIndex(buttons) {
      let index = 0;
      buttons.forEach((button, i) => {
        if (button.classList.contains("is-secondary")) index = i;
      });
      return index;
    },

    restartVideo(videos, index) {
      gsap.set(videos, { display: "none" });
      gsap.set(videos[index], { display: "block" });
      videos[index].currentTime = 0;
      videos[index].play();
    },

    tabsInit() {
      this.tabs.forEach((tab, tabIndex) => {
        const videos = tab.querySelectorAll("video");
        const captions = tab.querySelectorAll(
          ".xr-overview_how-it-works_caption-text",
        );
        const captionField = tab.querySelector("[data-caption-field]");
        const buttons = tab.querySelectorAll(".xr-button");
        const videoWrapper = tab.querySelector(
          ".xr-overview_how-it-works_video-wrapper",
        );

        buttons.forEach((button, index) => {
          const handler = () => {
            buttons.forEach((b) => b.classList.remove("is-secondary"));
            button.classList.add("is-secondary");
            this.restartVideo(videos, index);
            captionField.textContent = captions[index].textContent;
          };
          button.addEventListener("click", handler);
          this.listeners.push({ el: button, event: "click", handler });
        });

        const tabBtnHandler = () => {
          this.restartVideo(videos, this.activeVideoIndex(buttons));
        };
        this.tabBtns[tabIndex].addEventListener("click", tabBtnHandler);
        this.listeners.push({ el: this.tabBtns[tabIndex], event: "click", handler: tabBtnHandler });

        const videoWrapperHandler = () => {
          this.restartVideo(videos, this.activeVideoIndex(buttons));
        };
        videoWrapper.addEventListener("click", videoWrapperHandler);
        this.listeners.push({ el: videoWrapper, event: "click", handler: videoWrapperHandler });
      });
    },

    cleanup() {
      this.listeners.forEach(({ el, event, handler }) => {
        el.removeEventListener(event, handler);
      });
      this.listeners = [];
    },
  };
  return obj;
};

const howItWorksInit = (page = document) => {
  const sections = page.querySelectorAll(
    ".xr-overview_how-it-works_tabs-wrapper",
  );
  sections.forEach((section) => {
    const obj = createObj(section);
    obj.tabsInit();
    instances.set(section, obj);
  });
};

const howItWorksCleanup = (page = document) => {
  const sections = page.querySelectorAll(
    ".xr-overview_how-it-works_tabs-wrapper",
  );
  sections.forEach((section) => {
    const obj = instances.get(section);
    if (obj) {
      obj.cleanup();
      instances.delete(section);
    }
  });
};

export { howItWorksInit, howItWorksCleanup };
