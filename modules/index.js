"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  buttonEvents();
}

function buttonEvents() {
  document
    .querySelectorAll(".article")
    .forEach((element) => element.addEventListener("mouseover", hover));

  document
    .querySelectorAll(".article")
    .forEach((element) => element.addEventListener("mouseout", unhover));
}

function hover(element) {
  console.log(`h4#${element.target.id}`);
  document.querySelector(`h4#${element.target.id}`).classList.add("blur");

  if (`h4#${element.target.id}` == "h4#creative") {
    document.querySelector("#container-3").classList.remove("scroll");
    document.querySelector("#container-3").style.backgroundImage =
      "url('/public/assets/cube.jpg')";
    document.querySelector("#container-3").classList.add("scroll");
  }
  if (`h4#${element.target.id}` == "h4#marketing") {
    document.querySelector("#container-3").classList.remove("scroll");
    document.querySelector("#container-3").style.backgroundImage =
      "url('/public/assets/market.jpg')";
    document.querySelector("#container-3").classList.add("scroll");
  }
  if (`h4#${element.target.id}` == "h4#development") {
    document.querySelector("#container-3").classList.remove("scroll");
    document.querySelector("#container-3").style.backgroundImage =
      "url('/public/assets/grow.jpg')";
    document.querySelector("#container-3").classList.add("scroll");
  }
}

function unhover(element) {
  document.querySelector(`h4#${element.target.id}`).classList.remove("blur");
}
