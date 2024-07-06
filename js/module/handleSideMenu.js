import { 
  menu, 
  menuBtn, 
  menuStatusList,
  menuItemsTitle,
  menuToggleWrapper,
  menuUserName,
  menuDownloadList,
  sublist } from "./const.js";
  import changeClass from "./changeClass.js";


const handleSideMenu = (param) => {
  changeClass([menuBtn, "visibility-button_hidden"], param);
  changeClass([menu, "menu-wrapper_hidden"], param);
  changeClass([menuStatusList, "menu-status-list_hidden"], param);
  changeClass([menuToggleWrapper, "menu-toggle-wrapper_hidden"], param);
  changeClass([menuUserName, "menu-user-name_hidden"], param);
  changeClass([menuDownloadList, "menu-download-list_hidden"], param);
  [...menuItemsTitle].map(item => changeClass([item, "menu-item-title_hidden"], param));
  [...sublist].map(item => changeClass([item, "menu-sublist-wrapper_hidden"], param));
};

export default handleSideMenu;