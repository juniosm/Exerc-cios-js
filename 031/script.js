let lamp = document.querySelector("img[src^='https']");

lamp.addEventListener("click", () => {
  lamp.setAttribute(
    "src",
    "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
  );
});


