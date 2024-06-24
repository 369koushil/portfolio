const mode_toggler=()=>{
  // selctors
let themeToggler = document.body.querySelectorAll("#theme-toggle");

// states
let theme = localStorage.getItem("theme");

//on mount
theme && document.body.classList.add(theme);

//handlerss
const themehandler = () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light-mode");
  } else {
    localStorage.removeItem("theme");
  }
};

//event listners
themeToggler.forEach((e) => {
  e.addEventListener("click", themehandler);
});
}


export default mode_toggler;