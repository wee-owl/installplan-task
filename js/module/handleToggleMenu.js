import { menuToggleBtn, menuToggleCircle, menuToggleText } from "./const.js";


const handleToggleMenu = () => {
  menuToggleBtn.addEventListener("click", () => {
    menuToggleCircle.classList.toggle("toggle-circle_active");
    [...menuToggleText].map(item => item.hidden = !item.hidden);
    const menuState = menuToggleCircle.className.includes("toggle-circle_active") ? "open" : "close";
    localStorage.setItem("menuState", menuState);
  })
};

handleToggleMenu();