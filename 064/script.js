let urso = document.querySelector("img");
let movimento = document.getElementById("urso-mv");

const linkSrc = [
  "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png",
  "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png",
];

let i = 1;

let j = 0;
setInterval(() => {
  movimento.style = `left: ${i}px`;
  urso.src = linkSrc[j];
  j++;
  if (j > 1) {
    j = 0;
  }
  i += 2;
}, 300);
