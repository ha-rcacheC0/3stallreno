// NAVBAR

const nav = document.getElementById("nav-scroll");
const navDrop = document.getElementById("nav-drop");

window.onscroll = function () {
  if (window.scrollY > 100) {
    nav.classList.add("sticky");
    console.log(window.scrollY);
  } else {
    nav.classList.remove("sticky");
  }
};

const navButton = document.querySelector("button[aria-expanded]");

function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
}
navButton.addEventListener("click", toggleNav);

// SLIDE SHOW

let slideIndex = [1, 1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2", "mySlides3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
