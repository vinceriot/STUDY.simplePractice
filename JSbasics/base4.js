"use strict";
//ТИПЫ ДАННЫХ

//ЧИСЛА
/* let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );
 */

/* function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`); */


/* function random(min, max) {
return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) ); */

//CТРОКИ
/* 
function ucFirst(str) {
  if (!str) return str; 
  return str[0].toUpperCase() + str.slice(1);
} */

/* function checkSpam (str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
} */

/* function truncate(str, maxlength) {

  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
} */

/* function extractCurrencyValue(str) {
  return +str.slice(1);
} */


//МАССИВЫ

/* let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги"); */

/* function sumInput() {


  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() ); */

/* function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
} */

//МЕТОДЫ МАССИВОВ

/* function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
} */

/* function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered ); 
alert( arr );
 */

/* arr.sort((a, b) => b - a); */

/* function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);


alert( sorted );
alert( arr ); */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); */

/* let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
})); */

/* function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
} */

/* function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
} */

/* function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
} */

/* function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
} */

//MAP SET

/* function unique(arr) {
  return Array.from(new Set(arr));
} */

/* function aclean(arr) {

let obj = {};

for (let i = 0; i < arr.length; i++) {
  let sorted = arr[i].toLowerCase().split("").sort().join("");
  obj[sorted] = arr[i];
}

return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); */

/* let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); 
keys.push("more");
*/

//WEAKMAP WEAKSET

/* let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);

alert("Read message 0: " + readMessages.has(messages[0]));
messages.shift(); */

// let readMap = new WeakMap();
// readMap.set(messages[0], new Date(2024, 11, 11));

//Object

/* function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
} */

/* function count(obj) {
  return Object.keys(obj).length;
} */

//Деструктурирующее присваивание

/* let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user; */

/* function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
} */

//DATE

/* let d = new Date(2012, 1, 20, 3, 12);
alert( d ); */

/* function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
} */

/* function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
} */

/* function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
} */

  /* function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
} */

/* function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
} */

/* function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; 
  return Math.round(diff / 1000);
} */

//JSON

/* let user = {
  name: "Василий Иванович",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user)); */
