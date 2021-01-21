/*
  Exercise 01
  -----------
  Add a new row to the table with the details: 'Sean Reyes' (@sreyes)
*/
let newtr = document.createElement('tr');
document.querySelector(".table tbody").appendChild(newtr);

['6', 'Sean', 'Reyes', '@sreyes'].forEach(colText => {
    let td = document.createElement('td');
    td.innerText = colText;
    newtr.appendChild(td);
});

/*
  Exercise 02
  ------------
  Update Leona Dixon's handle to @dixonl
*/
document.querySelector(".table tbody tr:nth-child(4) td:nth-child(4)").innerText = '@dixonl';

/*
  Exercise 03
  -----------
  Move Rosa Reed to the top of the table and ensure all the number entries in the first column are updated accordingly.
*/

let rosa = document.querySelector(".table tbody tr:nth-child(5)");
document.querySelector(".table tbody tr:first-child").after(rosa);

let numeration = Array.from(document.querySelectorAll(".table tbody tr td:first-child"))
for (let i = 0; i < numeration.length; i++) {
    numeration[i].innerText = i + 1;
}

/*
  Exercise 04
  -----------
  Move the handle column including all of it's rows of contents to be the second column in the table (after the # column)
*/

let handle = Array.from(document.querySelectorAll(".table tbody tr td:last-child, th:last-child"));
for (let i = 0; i < handle.length; i++) {
    let firstCol = Array.from(document.querySelectorAll(".table tbody tr td:first-child, th:first-child"));
    firstCol[i].after(handle[i]);
}


/*
Array.from(document.querySelectorAll(".table tbody tr"))
    .forEach(row => {
        let handleCol = row.querySelector("td:last-child, th:last-child");
        let indexCol = row.querySelector("td:first-child, th:first-child");
        indexCol.after(handleCol)
    });

*/
/*

  Exercise 05
  -----------
  To make the table easier to read, make every other row on the table to have a darker, shaded colour e.g. #f2f2f2
*/

let rows = Array.from(document.querySelectorAll(".table tbody tr"));

rows.forEach((row, index) => {
    if ((index + 1) % 2 == 0) {
        row.style.backgroundColor = '#f2f2f2'
    }
});

// document.querySelector('table').classList.add('table-striped');
