/*
Exercise 1
--------------
Move the contents of the two paragraphs into one single <p> tag.  Ensure there are no empty <p> tags left on the page.
*/

let firstp = document.querySelector("#hero p:first-child");
let lastp = document.querySelector("#hero p:last-child");

let newp = document.createElement("p");

newp.innerHTML = firstp.innerText + "<br>" + lastp.innerText;

document.querySelector("#hero").appendChild(newp);

firstp.remove();
lastp.remove();

/*
Exercise 2
--------------
Reduce the font-size of the paragraph text to be half the size of the menu text.
*/

let li = document.querySelector(".menu li");
let liFontSize = window.getComputedStyle(li).getPropertyValue('font-size');
newp.style.fontSize = parseInt(liFontSize.slice(0, -2), 10) / 2 + 'px';

/*
Exercise 3
--------------
Move the ‘Services’ menu item to be before the ‘About’ menu item (after Home).
*/
let about = document.querySelector(".menu li:nth-child(2)");
let services = about.nextElementSibling;
services.after(about);

/*
  Exercise 04
  -----------
  Create the following new entries in the menu: FAQs, Pricing
*/

let faqs = document.createElement('li');
faqs.innerText = 'FAQs';
document.querySelector(".menu ul").appendChild(faqs);

let pricing = document.createElement('li');
pricing.innerText = 'Pricing';
document.querySelector(".menu ul").appendChild(pricing);

/*
Exercise 5
--------------
Add a hover effect to the menu items so when the user hovers over them the background and font-size change.  (Must be done with JavaScript!)
*/


let items = Array.from(document.querySelectorAll(".menu ul li"));

function mouseOver () {
    this.style.borderBottom = '1px solid black';
    this.style.cursor = 'pointer';
}
function mouseOut () {
    this.style.borderBottom = 'none';
}

items.forEach(item => {
    item.addEventListener("mouseover", mouseOver);
    item.addEventListener("mouseout", mouseOut);
});