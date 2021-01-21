/* 
  Exercise 01
  -----------
  A new feature has been added to the Pro plan: '24/7 Phone support'.
  Add this using JavaScript to the list features of the Pro plan.
*/

let li = document.createElement('li');
li.innerText = '24/7 Phone support';
document.querySelector('ul').lastElementChild.after(li);

/* 
  Exercise 02
  -----------
  To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.
*/

let basic = document.querySelector('#basic-plan');
document.querySelector('#pro-plan').before(basic);

/* 
  Exercise 03
  -----------
  To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now' 
*/

let btn = document.querySelector('#pro-plan button');
btn.style.background = 'rgb(7, 172, 184)';
btn.style.color = 'white';
btn.innerHTML = 'Buy Now';
btn.classList.remove('btn-lg');
function mouseOver() {
    btn.style.color = "rgb(7, 172, 184)";
    btn.style.background = "white";
  }
function mouseOut() {
    btn.style.color = "white";
    btn.style.background = "rgb(7, 172, 184)";
}
btn.addEventListener("mouseover", mouseOver);
btn.addEventListener("mouseout", mouseOut);

/* 
  Exercise 04
  -----------
  There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan.
  Update the basic and pro plan cards to reflect the new storage amount being offered. 
*/
let basicAmount = document.querySelector("#basic-plan .storage-amount");
basicAmount.innerText = basicAmount.innerText * 1.5;
let proAmount = document.querySelector("#pro-plan .storage-amount");
proAmount.innerText = proAmount.innerText * 1.25;

/* 
  Exercise 05
  -----------
  You have been asked to add ask a toggle / radio box for annual and monthly payments for the basic and pro plans.
  Add a radio button to toggle between monthly and annual payment options 
  and adjust the prices shown for both plans if the annual option is selected 
  (give two months free if customers pay annually).
*/

let basicPrice = document.querySelector("#basic-plan .pricing");
let proPrice = document.querySelector("#pro-plan .pricing");

document.querySelector(".card-deck")
    .insertAdjacentHTML('beforeBegin', `
    <label class="label">Annualy
    <input type="radio" name="type" id="inputone">
    <span class="checkmark"></span>
    </label>
    <label class="label">Monthly
    <input type="radio" name="type" id="inputtwo">
    <span class="checkmark"></span>
    </label>
    `)

let input = document.querySelector("#inputone");
let inputTwo = document.querySelector("#inputtwo");

function forAnnualy() {
    basicPrice.innerText = '100 / year';
    proPrice.innerText = '300 / year';
};

function forMonthly() {
    basicPrice.innerText = '10 / month';
    proPrice.innerText = '30 / month';
}

input.addEventListener('click', (event) => {
    if (event) {        
        forAnnualy();
    }
});
inputTwo.addEventListener('click', (eventtwo) => {
    if (eventtwo) {
        forMonthly();
    }
})


// radio buttons have values monthly and annual: value="annual" and value="monthly"
/*
const pricing = {
    monthly: {
        basic: '10 / month',
        pro: '30 / month',
    },
    annual: {
        basic: '100 / year',
        pro: '300 / year',
    }
}

const changePricing = (event) => {
    const selection = event.target.value;
    document.querySelector("#basic-plan .pricing").innerText = pricing[selection].basic;
    document.querySelector("#pro-plan .pricing").innerText = pricing[selection].pro;
};

Array.from(document.querySelectorAll('input[type="radio"]'))
    .forEach(radio => radio.addEventListener('change', changePricing));

*/