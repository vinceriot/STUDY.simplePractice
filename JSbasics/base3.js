"use strict";
//ОБЪЕКТЫ: ОСНОВЫ

/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
 */

/* function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  } */

/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    };
    
    let sum = 0;
    for (let key in salaries) {
    sum += salaries[key];
    }
    
    alert(sum); */

/*
function multiplyNumeric(obj) {
    for (let key in obj) {
    if (typeof obj[key] == 'number') {
        obj[key] *= 2;
    }
    }
} */


//МЕТОДЫ ОБЪЕКТА

/* let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum() {
        return this.a + this.b;
    },

    mult() {
        return this.a * this.b;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mult()); */

/* let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;  
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  }; */

// КОНСТРУКТОРЫ
/* let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true */


/* function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mult = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mult() ); */

/*   function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value); */


