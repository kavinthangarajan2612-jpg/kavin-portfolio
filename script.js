const words = [
  "Data Engineering Enthusiast",
  "Python Developer",
  "SQL Developer",
  "Problem Solver"
];

let i = 0;
let j = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  if (!typing) return;

  let current = words[i];

  if (!deleting) {
    typing.textContent = current.substring(0, j++);
    if (j > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typing.textContent = current.substring(0, j--);
    if (j < 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
