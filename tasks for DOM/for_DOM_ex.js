/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
window.onload = function loading() {


let str = document.body.querySelector('p');


str.innerHTML = str.innerText
    .split(' ')
    .map(word => 
        word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word
    )
    .join(' ');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

let a = document.createElement('a');
a.href = 'https://forcemipsum.com/';
a.innerText = 'Link';
document.body.querySelector('p').after(a);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

str.innerHTML = str.innerHTML
    .split('. ')
    .join('.</p><p>');


/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
;
let counter = str.innerText
    .split(' ').length;
let result = document.createElement('div')
result.innerText = `${counter} words.`;
document.body.querySelector('p').after(result);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

//.replaceAll('?', '🤔')
//.replaceAll('!', '😲');

Array.from(document.querySelectorAll('p'))
        .forEach(p => {
            p.innerHTML = p.innerHTML
            .replaceAll('?', '🤔')
            .replaceAll('!', '😲');
        })
};