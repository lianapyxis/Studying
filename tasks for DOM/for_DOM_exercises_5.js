/*
  Exercise 01
  -----------
  Add 3 additional jobs to the 'Jobs' section of the page by copying the template in the initial 'job-card'.
*/

let jobcard = document.querySelector(".job-card");
let jobcard1 = jobcard.cloneNode(true);
let jobcard2 = jobcard.cloneNode(true);
let jobcard3 = jobcard.cloneNode(true);
document.querySelector(".jobs").appendChild(jobcard1);
document.querySelector(".jobs").appendChild(jobcard2);
document.querySelector(".jobs").appendChild(jobcard3);
/*
  Exercise 02
  -----------
  Update the job titles of the new jobs to be: JavaScript Developer, Java Developer, Python Developer
*/

jobcard1.querySelector("h3").innerText = 'JavaScript Developer';
jobcard2.querySelector("h3").innerText = 'Java Developer';
jobcard3.querySelector("h3").innerText = 'Python Developer';


/*
  Exercise 03
  -----------
  Update the number of jobs listed in the hero section to indicate 
  how many jobs you have listed in the 'Jobs section'.
*/

let number = document.querySelector("#jobs-listed span");
number.innerText = '303';

let jobs = document.querySelectorAll('.jobs .job-card');

number.innerText = jobs.length;

/*
  Exercise 04
  -----------
  Configure the search input box to filter jobs listed to only match the text 
  that has been provided in the search. Check for the search text
   in the job title heading.
*/

let searchresult = document.querySelector("#search");

let titles = Array.from(document.querySelectorAll(".job-card h3"));
let button = document.querySelector("#show-all");

function showMatch() {
    titles.find(title => {
        if (!title.innerText.toLowerCase().includes(searchresult.value.toLowerCase())) {
            title.parentNode.style.display = 'none';
        } else {
            title.parentNode.style.display = 'initial';
        }
    });
}

searchresult.addEventListener('keyup', showMatch);

/*
  Exercise 05
  -----------
  Configure the 'All jobs' button to reset the search and show all jobs available on the page
*/

function clearAll() {
    searchresult.value = '';
    jobs.forEach(job => job.style.display = 'block');
}

button.addEventListener('click', clearAll);