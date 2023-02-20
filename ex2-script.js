window.addEventListener("load", start);

function start() {
  document.querySelector("#blue_container").addEventListener("click", fallOnce);
}

function fallOnce() {
  document.querySelector("#blue_container").classList.add("fallover");
}
