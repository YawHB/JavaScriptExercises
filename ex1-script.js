window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_container")
    .addEventListener("click", jumpForEver);
}

function jumpForEver() {
  console.log("ex1");
  document.querySelector("#orange_container").classList.add("jump");
}
