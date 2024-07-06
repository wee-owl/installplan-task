import { menuStatusCount, informObject } from "./const.js";


const handleInform = (obj) => {
  [...menuStatusCount].map(item => {
    item.textContent = item.dataset.type === "notification" 
      ? obj.notification || 0 
      : obj.approval || 0;
  })
};

handleInform(informObject);