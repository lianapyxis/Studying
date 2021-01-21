/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

document.getElementById('username')
    .insertAdjacentHTML('beforeBegin', '<label for="username">Username: </label>');
document.getElementById('password')
    .insertAdjacentHTML('beforeBegin', '<label for="username">Password: </label>');
document.getElementById('confirmPassword')
    .insertAdjacentHTML('beforeBegin', '<label for="username">Confirm your password: </label>');
/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
function isEmpty(str) {
    return !str.trim().length;
}


let username = document.getElementById('username');
username.setAttribute('required', '');

const checkInput = (event) => {
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
    if( isEmpty(event.target.value) ) {
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger" style="color:red">Required!</span>')
        }
        if(errorElement) {
            errorElement.forEach(elem => elem.remove());
    }
};

document.getElementById('username')
    .addEventListener('blur', checkInput);

document.getElementById('password')
    .addEventListener('blur', checkInput);

document.getElementById('confirmPassword')
    .addEventListener('blur', checkInput);


/*
document.getElementsByClassName('btn')
    .addEventListener('click', function() {
    if ( isEmpty(document.getElementById("username").value) ) {
      console.log("Username is Empty");
    }
});
*/

let password = document.getElementById('password');
password.setAttribute('required', '');

let confirmPassword = document.getElementById('confirmPassword');
confirmPassword.setAttribute('required', '');


/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  
  Show an error message if they do not.
*/

const checkMatch = (event) => {
    const errorElementTwo = Array.from(event.target.parentNode.querySelectorAll('span'));
    if( document.getElementById("password").value !== document.getElementById("confirmPassword").value) {
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger" style="color:red">The password should match the confirmation password!</span>')
        }
        if(errorElementTwo) {
            errorElementTwo.forEach(elem => elem.remove());
    }
};
document.getElementById('confirmPassword')
    .addEventListener('blur', checkMatch);


/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  
Once they have, the registration button should then be enabled.
*/

const button = document.querySelector('button');
button.setAttribute('disabled', 'disabled');

document.getElementById('registrationForm')
    .addEventListener('change', (event) => {
        const formIsFilled = Array.from(document.querySelectorAll('input'))
        .every(input => input.value);
        if (formIsFilled && document.getElementById("password").value === document.getElementById("confirmPassword").value) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
});

/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

const form = document.getElementById('registrationForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.target.insertAdjacentHTML('beforeBegin', '<span class="text-success" style="color:green; margin-left: 25%;">Your registration was successful!</span>')
});
