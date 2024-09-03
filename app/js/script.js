const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has_fade");

// btnHamburger.addEventListener("click", () => {
//   if (header.classList.contains("open")) {
//     //Close Hamburger Menu
//     body.classList.remove("noscroll");
//     header.classList.remove("open");
//     fadeElems.forEach(function (element) {
//       element.classList.remove("fade-in");
//       element.classList.add("fade-out");
//     });
//   } else {
//     //Open Hamburger Menu
//     body.classList.add("noscroll");
//     header.classList.add("open");
//     fadeElems.forEach(function (element) {
//       element.classList.remove("fade-out");
//       element.classList.add("fade-in");
//     });
//   }
// });

btnHamburger.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  toggleMenu();
});

document.addEventListener("click", (event) => {
  if (header.classList.contains("open")) {
    // Close the menu if a click is detected outside the header
    if (!header.contains(event.target)) {
      toggleMenu();
    }
  }
});

function toggleMenu() {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
}
