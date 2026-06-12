import { navbar } from "./navigation";
import { lenisInit } from "./lenis.js";
import { componentsInit } from "../components/index";

var lenisMain = lenisInit();
export { lenisMain };

const globalInit = async () => {
  if (document.querySelector(".navbar")) navbar.init();

  componentsInit(document);
  // console.log("globalInit");
};

export { globalInit };
