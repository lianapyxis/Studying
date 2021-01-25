let x = document.querySelector('div');
let x = document.querySelector('ul');
let x = document.querySelector('ul').lastElementChild;
let x = document.querySelector('#age-table');
let x = document.querySelectorAll('#age-table label');
let x = document.querySelector('#age-table td');
let x = document.querySelector('#age-table label').firstElementChild;
let x = document.querySelector('#age-table label:last-child').lastElementChild;


/*
Write a program to check two numbers and return true if one 
of the numbers is 100 or if the sum of the two numbers is 100.
*/
function isEqualTo100 (x, y) {
    x =+ prompt("First number");
    y =+ prompt("Second one");
if ( x === 100 || y === 100 || x + y === 100) {
    alert('true');
} else {
    alert("false");
}};
isEqualTo100();

const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

/*
Write a program to get the extension of the filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

/* 
Write a program to replace every character in a given 
string with the character following it in the alphabet.
*/

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

/*
Write a program to get the current date.
Expected output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function todayDate() {
    var x = new Date()
   let y = `${x.getDate()}-${x.getMonth() + 1}-${x.getFullYear()}`;
    return y;
}

todayDate();

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

/*
Write a program to create a new string adding "New!" 
in front of a given string. If the given string begins 
with "New!" already then return the original string.

*/

const newStr = (str) => {
    if (`${str}` != 'New!') {
        return `New! ${str}`;
    } else return str;
}

console.log(newStr('N'));

const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

/*

Write a program to create a new string from a given string 
taking the first 3 characters and the last 3 characters of
a string and adding them together. The string length must be
 3 or more, if not, the orginal string is returned.

*/

const addThreeTogether = (a) => {
    if (a.length >= 3) {
        return `${a.slice(0, 3)}${a.slice(a.length - 3, a.length)}`;
    } else return a;
};
console.log(addThreeTogether('ba'));

const makeNewString = (str) =>
str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

/*

Write a program to extract the first half of a string
 of even length.

*/
const strFirstHalf = (a) => {
    if (a.length % 2 == 0) {
        return a.slice(0, (a.length / 2));
    } else return false;
}
const strFirstHalf = (a) => 
    (a.length % 2 == 0) ? (a.slice(0, (a.length / 2))) : false;


console.log(strFirstHalf('proram'));

/*
Write a program to concatenate two strings except their
first character.

*/

const twoStrings = (a, b) => a.substr(1).concat("", b.substr(1));

console.log(twoStrings("Hello", "World"));

const concatenate = (str1, str2) =>
 str1.slice(1) + str2.slice(1);

/* 

Given two values, write a program to find out 
which one is nearest to 100.

*/

const nearest = (a, b) => ((100 - Math.ceil(a)) > (100 - Math.ceil(b))) ? b : a;

console.log(nearest(123, 50));



/*

Write a program to check a given string contains 
2 to 4 occcurences of a specified character.

*/

const occurences = (a, b) => {
    let x = 0;
    for ( let char of a) {
        if ( char === b) x = x + 1;
    };
    return (x >= 2 && x <= 4); 
};

console.log(occurences("hellllllo", "l"));

const countChars = (str, char) => 
    str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

/*

Write a program to find the number of even digits in 
an array of integers.

*/

const onlyEven = (arr) => arr.filter(num => (num % 2) === 0).length;

console.log(onlyEven([1, 2, 3, 4, 6]));

/*

Write a program to find the number of even values
up to a given number.

*/

const numOfEven = (num) => {
    let arr = new Array;
    for (let i = 1; i < num; i++ ) {
        if (i % 2 === 0) arr.push(i);        
    }
    return arr.length;
}

console.log(numOfEven(6));

const compAndOrder = (arr) => arr === (arr.sort((a, b) => a - b));

/*

Write a program to check whether a given array of integers is 
sorted in ascending order.

*/
const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(isAscending([3, 1, -46, 75, 42]));

/*

Write a program to get the largest even number from
an array of integers.

*/

const largestEven = (arr) => Math.max.apply(null, arr.filter(num => (num % 2) === 0));

const largestEven = (arr) => Math.max(...arr.filter(num => (num % 2) === 0));
console.log(largestEven([-100, 3, 1, -46, 75, 42, 100, 120]));

/*

Write a program to replace the first digit in a string 
(that should contain at least one digit) with $ character.

*/

const replaceDigit = (str) => {
    for (let char of str) {
        if ((char * 2) % 2 === 0) {
            return str.replace(char, "$");
        }  else false;
    }
};

console.log(replaceFirstDigit("shd7sda9"));

const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$'); // for the first digit
const replaceFirstDigit = (str) => str.replace(/\d/, '$'); // for the first digit
const replaceFirstDigit = (str) => str.replace(/[0-9]/g, '$'); // for all digits in a string

/*

Given a year, report if it is a leap year.

*/

const isLeapYear = (y) => {
    let date = new Date(y, 2, 0);
    return (date.getDate() === 29);
};
console.log(isLeapYear(2021));

const isItLeapTear = (year) => year % 4 === 0;

/*

Write a program to compare two objects to determine if the first one contains
the same properties as the second one ( which may also gave additional properties).

*/

const sameProperties = (a, b) => Object.keys(a).every(key => b[key]);

console.log(sameProperties({x: 1, y: 2}, {x: 1, z: 1}));

/*

Write a program to convert a comma-separated values (CSV) 
string to a 2D array. A new line indicates a new row in the array.


Example:

abc,def,ghi
jkl,mno,pqr
stu,vwx,yza
*/

const parseCSV = (csvString) => 
    csvString.split('\n').map(row => row.split(','));

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;
console.log(parseCSV(str));

/*

Write a program to generate a random hexadecimal color code.

*/

const randomPassw = () => {
    let code = [];
    for (let i = 0; i < 6; i++) {
        let a = Math.floor(Math.random() * 35);
        if (a > 9) {
            a = String.fromCodePoint(Math.floor(Math.random() * 26) + 65);
        }
        code[i] = a;
    }
    return code.join('');
}
console.log(randomColCode());

const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () => '#' + Array.from({ length: 6}).map(getRandomHexNumber).join('');

console.log(getRandomHexColor());

/*

Write a program that returns true if the provided predicate
function returns true for all elements in a collection, false otherwise.

*/

const isTrue = (arr) => arr.every((item) => item > 0) ? true : false;
let arreika = [1, 2, 3, 4, 5];

console.log(isTrue(arreika));

const isEveryElem = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true;
};

/*

Write a function that returns a passed string with
 letters in alphabetical order.

Example string: 'webmaster'
Expected output: 'abeemrstw'

*/

function alphOrder(str) {
    return str.split('').sort((a, b) => a.localeCompare(b)).join('');
};

console.log(alphOrder('webmaster'));

const alphabeticalOrder = (str) => 
    str.split('').sort((a, b) => a > b ? 1 : -1)
    .join('');

/*
Write a function that accepts a string as a parameter
 and counts the number of vowels within the string.

*/
const findVowels = (str) => {
    return str.match(/[aeiou]/ig).length;
}
console.log(findVowels("cdiaudsa"));

const countLetters = (str, letters = ['a', 'e', 'i', 'o', 'u']) => 
    str.split('').filter(s => letters.indexOf(s) > -1).length;

/*

Write a function to convert an amount to coins.
Example input: 46 and possible coins 25, 10, 5, 2, 1
Output: 25, 10, 10, 1

*/

const whatInCoins = (num) => {
    let a = [25, 10, 5, 2, 1];
    let arr = [];
    for (let coins of a) {
      let thisCoinNum = Math.floor(num / coins);
      for (let y = 0; y < thisCoinNum; y++) {
          arr.push(coins);
        } 
        num -= coins * thisCoinNum;
    }
    return arr;
}

console.log(whatInCoins(46));

/*
Write a function to extract unique characters from a string.

*/

const makeUnique = (str) => String.prototype.concat(...new Set(str));

const uniqueOnly = (str) => {
    let arr = str.split('');
    for (let char of arr) {
        if(arr.includes(char)) 
        arr.shift(char);
    };
    return arr.join('');
};

const getUniqueChars = (str) => 
    str.split('').filter((item, index, arr) => 
            arr.slice(index + 1).indexOf(item) === -1);

const getUniqueCharsTwo = (str) => [...new Set(str.split(''))];
console.log(uniqueOnly('abcabc'));

/*

Write a function to find the first not repeated character 
Example string: 'abacddbec'
Expected output: 'e'

*/

const findUniqueOnly = (str) => {
    let arr = str.split('');
    for (let char of arr) {
        if(!arr.includes(char, arr.indexOf(char) + 1)) 
        return char;
    };
};

const getNonRepeatedChars = (str) => 
    str.split('')
        .filter((item, index, arr) =>
            arr.filter(arrItem => arrItem === item).length === 1
        );

console.log(findUniqueOnly('abacddbec'));


const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// Exercises

// 1) What is the average income of all the people in the array?

const averageIncome = (people) => {
    let income = 0;
    for (let i = 0; i < people.length; i++) {
        income += parseInt(people[i].salary, 10);
    }
    return income / people.length;
}

averageIncome(people);

const income = people.reduce((sum, person) => sum + parseInt(person.salary, 10), 0);

income / people.length;

// 2) Who are the people that are currently older than 30?

const older30 = (people) => {
    let list = [];
    for (let i = 0; i < people.length; i++) {
        let arr = people[i].DOB.split('/');
        let dateOB = new Date(arr[2], arr[1] - 1, arr[0]);
        let result = Math.abs((new Date()).getTime() - dateOB.getTime());
        let yearPeriod = Math.floor((result / (1000 * 60 * 60 * 24 * 365)));
        if (yearPeriod > 30) list.push(people[i].firstName);
    }; return list.join(',');
};

console.log(older30(people));

// Sam,Terri,Jar,Chester,Madison,Ava,Charles,Antonio,Aaron

DOB.split('/');
let arr = DOB.split('/');
let dateOB = new Date(arr[2], arr[1] - 1, arr[0]);

let result = Math.abs((new Date()).getTime() - dateOB.getTime());
let yearPeriod = Math.floor(Math.round(result / (1000 * 60 * 60 * 24)) / 365) ;


// 3) Get a list of the people's full name (firstName and lastName).

const getFullName = (people) => {
    let list = [];
    for (i = 0; i < people.length; i++) {
        let fullName = `${people[i].firstName} ${people[i].lastName}`;
        list.push(fullName);
    };
    return list;
}

people.map(person => `${person.firstName} ${person.lastName}`);
people.map(({ firstName, lastName }) => `${person.firstName} ${person.lastName}`);

// to add fullName as a new property:
people.map(...person, fullName => `${person.firstName} ${person.lastName}`);

console.log(getFullName(people));


// 4) Get a list of people in the array ordered from youngest to oldest.
  
people.sort((personA, personB) => new Date(personB.DOB) - new Date(personA.DOB));

// 5) How many people are there in each department?


people.reduce((accumulator, person) => ({...accumulator, [person.department]: accumulator[person.department] + 1 || 1}), {});

////////////////////////////////////////////////////////////////

const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

orders[1].items[0].productId;

orders.filter(order => order.customerId === '234' && !order.delivered);


// 2) Create a new property on each order with the total price of items ordered.
orders.map(order => order.items.reduce((sum, item) => sum + item.price, 0));

orders.map(order => ({ ...order, orderTotal: order.items.reduce((sum, item) => sum + item.price, 0)}));

// 3) Have all the orders been delivered?

orders.every(order => !order.delivered ? false : true);


// 4) Has the customer with ID '123' made any orders?

orders.some(order => order.customerId === '123' && order.items);

// 5) Have any products with an id of 123 been sold?

orders.reduce((acc, order) => acc + order.items.reduce((acc, bucket) => acc + (bucket.productId === '123'), 0), 0);

///////////////////////////////////////////////////////////////////////////////////////////////////


const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];


// Exercises


// 1) What is Madison Marshall's user id?

users.filter(user => user.firstName == 'Madison' && user.lastName == 'Marshall' ? user.id : false);

users.find(user => user.firstName == 'Madison' && user.lastName == 'Marshall');

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

users.find(user => user.id === comments[0].userId);

// 3) Which user commented 'OK great thanks'?

users.find(user => comments.find(comment => comment.userId == user.id && comment.text == 'OK great thanks'));

// 4) Add the user's first and last name to each comment in the comments array


comments.map(comment => {
    const { firstName, lastName } = users.find(user => comment.userId == user.id);
    return {...comment, fulName: `${firstName} ${lastName}` };
    // return {...comment, firstName, lastName }; - for adding the same properties as in users
});


// 5) Get a list of the users who haven't commented

users.filter(user => comments.every(comment => comment.userId != user.id));

users.filter(user => !comments.find(comment => comment.userId === user.id));

const users = [{
    id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
    email: "tcasaletto0@soundcloud.com",
    ip_address: "53.215.156.73"
  }, {
    id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
    email: "nmoffett1@paginegialle.it",
    ip_address: "34.81.219.4"
  }, {
    id: "1019b52c-db9d-45a2-975f-404455925a6a",
    email: "rcrampin2@yale.edu",
    ip_address: "65.181.114.151"
  }, {
    id: "e8637c3b-645d-4742-a463-d2006742606f",
    email: "ddreinan3@smugmug.com",
    ip_address: "136.171.217.116"
  }, {
    id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
    email: "gdorkin4@taobao.com",
    ip_address: "220.228.4.97"
  }, {
    id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
    email: "vhucquart5@typepad.com",
    ip_address: "101.212.0.49"
  }, {
    id: "74120248-03b5-4888-84c0-d1a459c6273b",
    email: "vsircombe6@marriott.com",
    ip_address: "28.180.205.167"
  }, {
    id: "412a0669-7171-48b4-95eb-e898993ec1dc",
    email: "kdesouza7@t.co",
    ip_address: "61.44.195.62"
  }, {
    id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
    email: "sbehnke8@booking.com",
    ip_address: "1.176.238.27"
  }, {
    id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
    email: "clindsell9@nymag.com",
    ip_address: "44.37.119.76"
  }];
  
/**
 * Exercise 01
 * 
 * Check whether every email address in the list of users is valid (get a true or false value)
 */

users.every(user => {
    let mailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (mailFormat.test(user.email)) return true;
});




/**
 * Exercise 02
 * 
 * Find out how many users have an IP address in a Class A network
 * https://en.wikipedia.org/wiki/Classful_network
 */


users.filter(({ip_address}) => ip_address.split('.')[0] <= 127).length;

let counter = 0;

for (let i = 0; i < users.length; i++) {

    let address = users[i].ip_address.split('.');
    let firstVal = (parseInt(address[0], 10));
    if (firstVal <= 127) counter += 1;
}
counter;



/**
 * Exercise 03
 * 
 * Find the position in the array of the first  user object that has a Class B IP address
 */


users.findIndex(({ip_address}) => ip_address.split('.')[0] > 127 && ip_address.split('.')[0] < 192);



/**
 * Exercise 04
 * 
 * Find the user object that has the 'soundcloud' email address
 */


users.find(user => user.email.includes('soundcloud'));



/**
 * Exercise 05
 * 
 * Replace all the items in the array with a string value of 'deleted'
 */

users.map(user => user = 'deleted');
users.fill('deleted');


const accounts = [{
    _id: "5e56d5f5c00d45b8f1125ef4",
    index: 0,
    guid: "955310d3-45df-47e7-bc9c-92504d5e92d2",
    isActive: true,
    balance: "$3,926",
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "green",
    name: "George Bond",
    gender: "male",
    company: "GEEKOL",
    email: "georgebond@geekol.com",
    phone: "+1 (862) 591-2584",
    address: "677 Rost Place, Brandermill, Virgin Islands, 854",
    about: "Est deserunt incididunt incididunt et. Et reprehenderit labore officia fugiat deserunt et non consequat velit et laboris duis. Reprehenderit dolore dolor reprehenderit culpa. Nulla duis do dolore magna cupidatat mollit quis ullamco duis.",
    registered: "2014-05-31T09:59:01 -01:00",
    latitude: -30.600915,
    longitude: -83.795214,
    tags: ["nostrud", "aliquip", "est", "laboris", "voluptate", "do", "dolor", ["deserunt", "ipsum"], ["consectetur", "quis", "commodo"]],
    friends: [ {id: 0, name: "Alisa Ford"}, {id: 1, name: "Hess Howell"}, {id: 2, name: "Gwendolyn Hendrix"} ],
    greeting: "Hello, George Bond! You have 2 unread messages.",
    favoriteFruit: "banana",
},
{
    _id: "5e56d5f51837c78c32ed16ef",
    index: 1,
    guid: "416d3864-dc91-45e3-817c-07562b04b512",
    isActive: false,
    balance: "$1,273",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Fay Carlson",
    gender: "female",
    company: "SIGNIDYNE",
    email: "faycarlson@signidyne.com",
    phone: "+1 (922) 529-2437",
    address: "786 Belvidere Street, Carbonville, South Dakota, 3020",
    about: "Ullamco deserunt nostrud minim consectetur ad enim ipsum consectetur. Excepteur ad eiusmod ut quis in magna cillum qui commodo ad do eu. Nulla aliquip Lorem excepteur laboris elit.",
    registered: "2017-04-18T02:00:02 -01:00",
    latitude: 74.274128,
    longitude: -119.604152,
    tags: ["et", "ut", "mollit", "occaecat", "ipsum", "mollit", "pariatur"],
    friends: [{id: 0, name: "Miranda Little"}, {id: 1, name: "Ellen Burks"}, {id: 2, name: "Shanna Logan"}],
    greeting: "Hello, Fay Carlson! You have 10 unread messages.",
    favoriteFruit: "strawberry",
},
{
    _id: "5e56d5f54b9a9491ba37fec9",
    index: 2,
    guid: "46839c30-0b7e-4009-98f1-9b8d770a0c88",
    isActive: false,
    balance: "$3,455",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "blue",
    name: "French Bennett",
    gender: "male",
    company: "PASTURIA",
    email: "frenchbennett@pasturia.com",
    phone: "+1 (883) 501-3963",
    address: "856 Hemlock Street, Alfarata, Nevada, 5261",
    about: "Nulla sunt ea sunt labore id excepteur elit incididunt et irure. Ut pariatur ad eu ut qui est consectetur labore enim fugiat. Occaecat incididunt ex sunt cillum Lorem in aliquip est voluptate aliquip pariatur reprehenderit ad. Aute nisi et enim enim. In voluptate eu minim duis.",
    registered: "2015-04-16T11:53:33 -01:00",
    latitude: 85.491905,
    longitude: 90.342252,
    tags: ["laboris", "reprehenderit", "est", "in", "duis", "voluptate", "non"],
    friends: [{id: 0, name: "Mayer Sullivan"}, {id: 1, name: "Wiggins Hudson"}, {id: 2, name: "Jacqueline Gibbs"}],
    greeting: "Hello, French Bennett! You have 10 unread messages.",
    favoriteFruit: "apple",
},
{
    _id: "5e56d5f55dd72bb06144c70c",
    index: 3,
    guid: "52b94117-bd93-4d8f-b8e3-f2fd1c3988fc",
    isActive: false,
    balance: "$1,733",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: "Shannon Mitchell",
    gender: "male",
    company: "DECRATEX",
    email: "shannonmitchell@decratex.com",
    phone: "+1 (876) 447-3381",
    address: "870 Tillary Street, Aurora, Vermont, 8055",
    about: "Occaecat adipisicing tempor ut enim consectetur enim sit ea qui consequat sint anim sint. Sint elit occaecat eiusmod consectetur veniam ad do. Voluptate reprehenderit pariatur id deserunt sunt reprehenderit eiusmod. Aute incididunt aliquip ad aliquip. Commodo cupidatat nisi velit eiusmod qui quis tempor eiusmod sit velit ex. Ad tempor cillum incididunt aliqua labore eu voluptate voluptate cillum aute amet veniam. Velit elit occaecat esse fugiat minim deserunt sit amet et non ea sit cupidatat.",
    registered: "2014-01-29T04:55:04 -00:00",
    latitude: 77.845921,
    longitude: -137.754911,
    tags: ["consequat", "non", "dolore", "cupidatat", "irure", "ipsum", "quis"],
    friends: [{id: 0, name: "Isabelle Luna"}, {id: 1, name: "Marissa Beach"}, {id: 2, name: "Sarah Simmons"}],
    greeting: "Hello, Shannon Mitchell! You have 4 unread messages.",
    favoriteFruit: "banana",
},
{
    _id: "5e56d5f5bb33b3df103cbfb9",
    index: 4,
    guid: "2fc0bb48-ad7f-4c91-a655-6fcb761a1e8f",
    isActive: true,
    balance: "$1,839",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: "Johns Hooper",
    gender: "male",
    company: "ZENTHALL",
    email: "johnshooper@zenthall.com",
    phone: "+1 (868) 432-2105",
    address: "446 Emmons Avenue, Tyro, South Carolina, 3627",
    about: "Ipsum ullamco reprehenderit nulla sint. Deserunt reprehenderit excepteur dolore quis et culpa in. Adipisicing consectetur amet reprehenderit ex velit incididunt quis ipsum reprehenderit in irure. Adipisicing Lorem minim eu laborum ex ullamco nostrud reprehenderit ullamco minim minim non. Magna id fugiat duis officia deserunt ullamco est esse.",
    registered: "2017-09-06T09:24:11 -01:00",
    latitude: -33.444624,
    longitude: 99.697197,
    tags: ["et", "minim", "sunt", "irure", "et", "esse", "consectetur"],
    friends: [{id: 0, name: "Cynthia Hays"}, {id: 1, name: "Estela Walton"}, {id: 2, name: "Christy Ball"}],
    greeting: "Hello, Johns Hooper! You have 1 unread messages.",
    favoriteFruit: "apple",
}];

/**
  * Exercise 01
  * 
  * The first account has nested arrays of tags in it's tag property.  Get a list of all tags for this account as a one-dimensional array.
  */

 
accounts[0].tags.flat();
[].concat.apply([], accounts[0].tags);


 /**
  * Exercise 02
  * 
  * Check whether the tags for the first account includes the "consectetur" tag 
  */

accounts[0].tags.flat().some(tag => tag.includes('consectetur') ? true : false);
accounts[0].tags.flat().includes('consectetur');


 /**
  * Exercise 03
  * 
  * Get a list of all the tags for all the accounts and join them together as a string separated by commas.
  */

 accounts.flatMap(account => account.tags.flat()).join(',');
 accounts.map(({tags}) => tags.join(", ")).join(", ");


 /**
  * Exercise 04
  * 
  * Get a list of all the friends for all the user's accounts as an array (don't worry about duplicates)
  */

 accounts.flatMap(({friends}) => friends.flatMap(friend => friend.name));
 accounts.flatMap(({friends}) => friends.flatMap(friend => friend.name)).join(', ');

 accounts.map(({friends}) => friends.map(({name}) => name)).flat();
 /**
  * Exercise 05
  * 
  * Get a list of all the friends for all users who are younger than 30 AND have a balance more than $1500
  */
 accounts.map(account => account.friends.filter(({name}) => {
    if (parseInt(account.balance.slice(1, 2) + account.balance.slice(3), 10) > 1500 && account.age < 30) return name
})).flat();

accounts
    .filter(({balance, age}) => age < 30 && parseInt(balance.replace(/\D/g, '')) > 1500)
    .map(({friends}) => friends)
    .flat();


/*Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object 
from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return 
the third object from the array (the first argument), because it contains 
the name and its value, that was passed on as the second argument.

*/

function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);
        return collection.filter(object => {
          return sourceKeys.every(key => object.hasOwnProperty(key) && object[key] === source[key])
        });
        
};
        
        
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });




/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}
  
spinalCase("This Is Spinal Tap");

/*

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

*/

function translatePigLatin(str) {
    if (str.match(/^[bcdfghjklmnpqrstvwxys]/i) && str.match(/[aeiou]/i)) {
      return str.replace(/(^[bcdfghjklmnpqrstvwxys]+)(\w+)/i, '$2$1').concat('ay');
    } else if (!str.match(/[aeiou]/i)){
       return str.concat('ay');
    } else {
      return str.concat("way");
    }
};
  
  translatePigLatin("consonant");


/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
 For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

 */

function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
      return str.replace(before, after.replace(after[0], after[0].toUpperCase()));
    } else if (before[0] === before[0].toLowerCase() && after[0] === after[0].toUpperCase()) {
      return str.replace(before, after.replace(after[0], after[0].toLowerCase()));
    } else return str.replace(before, after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/

function pairElement(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
     if (str[i] == "A") result.push(["A","T"]);
     else if (str[i] == "T") result.push(["T","A"]);
     else if (str[i] == "G") result.push(["G","C"]);
     else result.push(["C","G"]);
    }
    return result;
}
  
pairElement("GCG");

/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str.charCodeAt(i + 1) != str.charCodeAt(i) + 1) {
        return String.fromCharCode(str.charCodeAt(i) + 1);
        } 
      } 
  };
  
  fearNotLetter("abce");

/*

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(...arg) {
    let result = [];
    let arr = [...arg].flat();
    arr.map(item => {
      if (!result.includes(item)) {
        result.push(item);
      }
    })
    return result;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
}
  
//test here
  
convertHTML("Dolce & Gabbana");

/*

Given a positive integer num, return the sum of all 
odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all 
odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
  
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
}

sumFibs(4);


/*

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
 For example, 2 is a prime number because it is only divisible by 1 and 2.
  In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/

function sumPrimes(num) {
    let arr = [];
    let store = [];
    for (let i = 2; i <= num; i++) {
      if (!store[i]) {
        arr.push(i);
        for (let j = i << 1; j <= num; j += i) {
          store[j] = true;
        }
      }
    } return arr.reduce((acc, x) => acc + x, 0); 
} 
  
sumPrimes(10);


/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both,
 as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is 
also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

*/

function smallestCommons(arr) {
    let max = Math.max(...arr);
     let min = Math.min(...arr);
     // Initially the solution is assigned to the highest value of the array
     let sol = max;
   
     for (let i = max - 1; i >= min; i--) {
       // Each time the solution checks (i.e. sol%i===0) it won't be necessary
       // to increment 'max' to our solution and restart the loop
       if (sol % i) {
         sol += max;
         i = max;
       }
    }
    return sol;
}
   
   
   smallestCommons([1,5]);

