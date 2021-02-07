document.addEventListener('DOMContentLoaded', alert('DOM Loaded!'));

let title = document.querySelector("#change_heading");
title.innerText = "Hello World!";

let showSpan = document.querySelector(".selected");
let brown = document.querySelector(".brown");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let yellow = document.querySelector(".yellow");


brown.addEventListener("mouseover", function() {
        showSpan.innerText = "brown";
});
green.addEventListener("mouseover", function() {
    showSpan.innerText = "green";
});
blue.addEventListener("mouseover", function() {
    showSpan.innerText = "blue";
});
yellow.addEventListener("mouseover", function() {
    showSpan.innerText = "yellow";
});

let purple = document.createElement("div");
purple.style.backgroundColor = "purple";
document.querySelector("section").append(purple);

let button = document.querySelector("button");
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");


button.addEventListener("click", function() {
        let value = parseInt(window.getComputedStyle(car1).marginLeft, 10) + 10;
        car1.style.marginLeft = value + 'px';
        let value2 = parseInt(window.getComputedStyle(car2).marginLeft, 10) + 5;
        car2.style.marginLeft = value2 + 'px';
    }
);

