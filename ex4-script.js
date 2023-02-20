window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_container")
    .addEventListener("click", jumpOnce);
}

function jumpOnce() {
  console.log("Once");
  document.querySelector("#orange_container").classList.add("jump-once");
  document
    .querySelector("#orange_container")
    .addEventListener("animationend", removeJump);
}

function removeJump() {
  document.querySelector("#orange_container").classList.remove("jump-once");
}
