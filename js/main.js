const toggle = document.querySelector("#toggle");
const shpToggle = document.querySelector(".shp");
toggle.addEventListener("click", modeSwitch);
shpToggle.addEventListener("click", toggleExpandSHP);

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

let isExpanded = false;
const shpQT = document.getElementById('shp-qt');
const shpBox = document.getElementById('shp-box');

function toggleExpandSHP() {
  isExpanded = !isExpanded;
  isExpanded ? shpQT.innerText = "You can import a setup with all of these at once with a .SHP package!" : shpQT.innerText = "Click me!";
  shpBox.classList.toggle('active');
  shpQT.classList.toggle('active');
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