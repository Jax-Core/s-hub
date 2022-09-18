const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;
let storedLight = localStorage.getItem('data-isLight');
storedLight ? console.log('storedLight') : modeSwitch();

function modeSwitch() {
  isLight = !isLight;
  isLight ? toggle.innerText = "Dark_Mode" : toggle.innerText = "Light_Mode";
  isLight ? localStorage.setItem("data-isLight", true) : localStorage.setItem("data-isLight", false);
  console.log(localStorage.getItem('data-isLight'))
  var rootElement = document.body;
  rootElement.classList.toggle("dark-mode");
}

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('body-container-visible');
  } else {
    entry.target.classList.remove('body-container-visible');
  }
});
});

const sections = document.querySelectorAll('.body-container');

sections.forEach((el) => observer.observe(el));