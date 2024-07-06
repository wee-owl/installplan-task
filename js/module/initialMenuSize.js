import { menuBtn, menuToggleCircle, menuToggleText } from "./const.js";
import handleSideMenu from "./handleSideMenu.js";


const initialMenuSize = () => {
  const state = localStorage.getItem("menuState" || "");

  if (state === null) {
    const menuState = menuToggleCircle.className.includes("toggle-circle_active") ? "open" : "close";
    localStorage.setItem("menuState", menuState);
  } else {
    const name = state === "open" ? "toggle-circle toggle-circle_active" : "toggle-circle";
    menuToggleCircle.className = name;
    [...menuToggleText][0].hidden = state === "open";
    [...menuToggleText][1].hidden = state !== "open";
    handleSideMenu(state);
  }

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleSideMenu("click");
  })

};

initialMenuSize();