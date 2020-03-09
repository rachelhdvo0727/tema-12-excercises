"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  for (let i = 0; i < 40; i++) {
    createBox();
  }
}

function createBox() {
  let box = document.createElement("div");
  let x = randomPos(0, window.innerWidth);
  let y = randomPos(0, window.innerHeight);

  box.style.position = "absolute";
  box.style.backgroundColor = randomColor();
  box.style.top = x + "px";
  box.style.left = y + "px";
  box.classList.add("square");

  document.querySelector(".container").appendChild(box);
}

function randomPos(min, max) {
  console.log("randomPos");
  return Math.random() * 500;
}
function randomColor() {
  console.log("randomColor");
  return `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() *
    256})`;
}
