var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
  fish.innerText = "47K";
  pets.innerText = "20K";
});

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
