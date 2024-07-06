import { menuListItems } from "./const.js";


const handleSubMenu = () => {
  [...menuListItems].map(item => {
    item.addEventListener("click", (e) => {
      if (e.target.closest(".sublist-button")) {
        e.preventDefault();
        e.currentTarget.lastElementChild.classList.toggle("menu-sublist-visible");
      }
    })
  })
};

handleSubMenu();