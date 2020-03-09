"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  // load the SVG into #balloon
  loadBalloon();
  // then call createBalloons
  createBalloons();
}
async function loadBalloon() {
  const response = await fetch("Yellow_toy_balloon.svg");
  const svg = await response.text();
  document.querySelector("#balloon").innerHTML = svg;
}

function createBalloons() {
  for (let i = 0; i < 40; i++) {
    createBalloon();
  }
}

function createBalloon() {
  // create a single balloon, using the #yellow_balloon
  let balloon = document.createElementNS("http://www.w3.org/2000/svg", "use");
  balloon.setAttribute("href", "#yellow_balloon");

  // give it a random x and y
  let x = Math.floor(Math.random() * 5000);
  let y = Math.floor(Math.random() * 10000);
  balloon.setAttribute("x", x);
  balloon.setAttribute("y", y);

  // maybe also add a bit of animation ...
  balloon.classList.add("rise");
  // before adding it to the #balloons
  document.querySelector("#balloons").append(balloon);
}
