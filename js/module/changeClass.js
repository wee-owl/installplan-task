const changeClass = (array, param) => {
  const [el, name] = array;
  param === "close" ? el.classList.add(name) 
    : param === "open" 
    ? el.classList.remove(name) 
    : el.classList.toggle(name);
};

export default changeClass;