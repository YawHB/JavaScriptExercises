////////////////////////**********************  Exercise 3 **************************///////////////////////////

// Begins the start function when page is loaded
window.addEventListener("load", start);

// Makes the orange square move
function start() {
  document.querySelector("#orange_container").classList.add("move");
}

// Activates the jump function when orange square clicked
document.querySelector("#orange_container").addEventListener("click", jump);

//Stops the square from moving and makes it jump. (im missing the stop effect  )
function jump() {
  console.log("BING");
  document.querySelector("#orange_container").classList.remove("move");
  document.querySelector("#orange_sprite").classList.add("jump");
}
