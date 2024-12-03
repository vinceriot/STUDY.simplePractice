//ОСНОВЫ JS

"use strict";
//Создайте страницу, которая отобразит сообщение «Я JavaScript!».

/* alert ("Я JavaScript!"); */

/* Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»). */

/* let admin, name;
name = "Джон";
admin = name;
alert(admin); */

/* Создайте переменную для названия нашей планеты. Как бы вы её назвали?
Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную? */
/* let PlanetName = "Earth";
let currentUserName = "Джо" */

/* Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных? 

    ОТВЕТ -- BIRTHDAY - да; age - нет.*/


/* name = "Ilya";

alert( `hello ${1}` ); // = hello 1
    
alert( `hello ${"name"}` ); // = hello name
    
alert( `hello ${name}` ); // ? = hello Ilya */

let name = prompt ("Как тебя зовут?", "Юзер");
alert (`Привет ${name}!`);

/* Чему будут равны переменные? */

let a = 1, b = 1;  
let c = ++a; 
let d = b++;
// a = 2, b = 2, c = 2, d = 1;

a = 2;
let x = 1 + (a *= 2);
//a = 4, x = 5;


/* "" + 1 + 0   = "10"
"" - 1 + 0      = -1
true + false    = 1
6 / "3"         = 2
"2" * "3"       = 6
4 + 5 + "px"    = "9px"
"$" + 4 + 5     = "$45"
"4" - 2         = 2 
"4px" - 2       = Nan
"  -9  " + 5    = "  -9   5"
"  -9  " - 5    = -14
null + 1        = 1
undefined + 1   = Nan
" \t \n" - 2    = -2    */ 

//ОПЕРАТОРЫ СРАВНЕНИЯ
/* 5 > 4                = true
"ананас" > "яблоко"     = false
"2" > "12"              = true
undefined == null       = true
undefined === null      = false
null == "\n0\n"         = false
null === +"\n0\n"       = false */     


//Условное ветвление: if, '?'

/* //Выведется ли alert?  //выведется  
if ("0") {
    alert( 'Привет' );
  }*/

/* //Название JavaScript
let res = prompt ("Какое официальное название JavaScript?");
if (res === "ECMAScript") {
    alert ('Верно');
} else {
    alert ('Не знаете? ECMAScript!');
}

let val = prompt ("Введите любое из чисел");
if (val > 0) {
    alert (1);
} else if (val < 0) {
    alert (-1)
} else {
    alert (0);
} */

/* result = (a + b < 4) ? 'Мало' : 'Много';

let mess = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  ''; */


/* if (age >= 14 && age <= 90)
if (age < 14 || age > 90)

if (-1 || 0) alert( 'first' ); // выполнится
if (-1 && 0) alert( 'second' ); // не выполнится 
if (null || -1 && 1) alert( 'third' ); // выполнится
 */

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

//ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ
let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;


/* for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }
 */


/* let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
} */

/* let num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num); */

//SWITCH


/* if (browser === 'Edge') {
    alert("You've got the Edge!");
  } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
  } else {
    alert('We hope that this page looks ok!');
  } */

/* const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
    alert('Вы ввели число 0');
    break;

    case 1:
    alert('Вы ввели число 1');
    break;

    case 2:
    case 3:
    alert('Вы ввели число 2, а может и 3');
    break;

    default:
    break;
} */


function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
    }

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
    }

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
    }

  
function pow(m, n) {
    let result = m;
    
    for (let i = 1; i < n; i++) {
        result *= m;
    }
    
    return result;
    }
let m = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
    alert( pow(m, n) );
} else {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );