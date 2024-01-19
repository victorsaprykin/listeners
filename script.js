"use strict";

const btn = document.querySelector("#btn");
const input = document.querySelector("#text");
const square = document.querySelector("#square");
const eBtn = document.querySelector("#e_btn");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");
const span = document.querySelector("#range-span");

const colorSwitcer = function (e) {
  btn.addEventListener("click", function () {
    square.style.backgroundColor = e.target.value;
  });
};

input.addEventListener("input", colorSwitcer);

eBtn.style = "display: none";

const changeRadius = function (e) {
  console.log(e.type);
  span.textContent = e.target.value;
  circle.style.width = e.target.value + "%";
  circle.style.height = e.target.value + "%";
};

range.addEventListener("input", changeRadius);
range.addEventListener("change", changeRadius);
