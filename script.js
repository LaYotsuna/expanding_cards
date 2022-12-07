"use strict";

const imgs = document.querySelectorAll(".img");

// Func to remove the active class
const removeActive = function () {
  for (let img of imgs) {
    img.classList.remove("active");
  }
};

// Adds active class when you click any img
const addActive = function () {
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      /* removeActive(); */
      /* img.classList.add("active"); */
      /* img.addEventListener("click", () => { */
      if (img.classList.contains("active")) {
        img.classList.remove("active");
      } else {
        removeActive();
        img.classList.add("active");
      }
      /* }); */
    })
  );
};

// Remove active from img when esc is pressed down
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    removeActive();
  }
});

addActive();
