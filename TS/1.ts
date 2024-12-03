//Типы данных
let digit: number = 5;
let str: string = 'string';
let city: boolean = true;
let x: any = "x";

//Функции
function add(a: number, b: number): number{
  let result = a + b;
  return result;
}

const sum = (x: number, y: number) => x + y;

//Объединение 
let id : number | string;

//Объекты 
let person: { name: string; age: number } = { name: "Tom", age: 23 };

//Декомпозиция объектов 
function printUser({name, age}: { name: string; age: number}) {
  console.log(`name: ${name}  age: ${age}`);
}
 
//Преобразование к типам
function stringToNumber(str: string): number {
  return Number (str);
}

//Массивы 
let colors: string[] = ["red", "green", "blue"];
const people: Array <string> = ["Tom", "Bob", "Sam"];

//Декомпозиция массива
const [first, second, third] = people;

//Кортежи
let user: [string, number];
let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];

//Перечисление Enum
enum Season { 
  Winter = "Зима", 
  Spring = "Весна",
  Summer = "Лето", 
  Autumn = "Осень"
};