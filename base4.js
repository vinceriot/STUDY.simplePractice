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