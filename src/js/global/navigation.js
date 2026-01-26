import { gsap } from "gsap";
// import { animateButton } from "../components/buttons";

const navbar = {
  navbarEl: document.querySelector(".navbar"),
  menuBtn: document.querySelector('[aria-controls="navbar"]'),
  menuBody: document.querySelector(".navbar_body-wrapper"),
  isMenuOpen: false,
  // eventListenersMap: new WeakMap(),

  openMenu(immediate = false) {
    const tl = gsap.timeline();
    tl.set(this.menuBody, { display: "block" });

    this.isMenuOpen = true;
    this.menuBtn.setAttribute("aria-expanded", true);
    this.menuBtn.setAttribute("aria-label", "Close menu");
    return tl;
  },
  closeMenu(immediate = false) {
    const tl = gsap.timeline();
    tl.set(this.menuBody, { display: "none" });

    this.isMenuOpen = false;
    this.menuBtn.setAttribute("aria-expanded", false);
    this.menuBtn.setAttribute("aria-label", "Open menu");
    return tl;
  },
  handleMenuClick() {
    this.menuBtn.addEventListener("click", () => {
      if (this.isMenuOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });
  },
  hide(immediate = false) {
    const tl = gsap.timeline();
    return tl;
  },
  show() {
    const tl = gsap.timeline();
    return tl;
  },
  resizeListener() {
    const resizeHandler = () => {
      const tl = gsap.timeline();

      if (window.innerWidth > 767 && this.isSetToMobile) {
        this.isMenuOpen = false;
        this.isSetToMobile = false;
      }

      if (window.innerWidth < 768 && !this.isSetToMobile) {
        this.isSetToMobile = true;
      }
      return tl;
    };

    window.addEventListener("resize", resizeHandler);
  },
  init() {
    if (window.innerWidth < 768) {
      this.isSetToMobile = true;
    }
    this.handleMenuClick();
  },
};

export { navbar };
