// Классы 
class User {
  
    name: string = "";
    age: number = 0;
    
    //поле доступное только для чтения
    readonly admin: boolean = false;

    //методы
    print(): void {
        console.log(`name: ${this.name}  age: ${this.age}`);
    }

    //конструктор
    constructor(userName: string, userAge: number) {
 
        this.name = userName;
        this.age = userAge;
    }
}

//наследование класса
class Employee extends User {
 
    company: string = "";
    work(): void {
        console.log(`${this.name} работает в компании ${this.company}`);
    }

    //переопределение конструктора
    constructor(name: string, age:number , company: string) {
   
        super(name, age);
        this.company = company;
    }

    //переопределение базового класса
    print(): void {
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
        console.log(`Работает в компании: ${this.company}`);
    }
}
 
let tom = new User("Tom", 36);
tom.name = "Tom";
tom.age = 36;
console.log(`name: ${tom.name}  age: ${tom.age}`);




//абстрактный класс
abstract class Figure {

    //абстрактные поля
    abstract x: number;
    abstract y: number;

    //абстрактный метод
    abstract getArea(): void;
}

class Person {
    
    //модификаторы доступа (если не указан, то public)
    protected name: string = "";
    private _age: number = 0;


    //методы доступа get\set
    public get age(): number {
        return this._age;
    }
  
    public set age(n: number) {
        if(n < 0 || n > 110){
            console.log("Недопустимый возраст!");
        }
        else{
            this._age = n;
        }
    }

    //статические поля и методы
    static retirementAge: number = 65;
    static calculateYears(age: number): number{
         
        return Person.retirementAge - age;
    }
}

//интерфейсы объектов
interface IUser {
    id: number;
    name: string;
    
    //необязательное свойство
    age?: number;

    //метод интерфейса
    sayWords(words: string): void;
}

//расширение интерфейса 
interface IUser{
    city: string;
}

//интерфейсы классов
class People implements IUser{
 
    id: number = 0;
    name: string = "";
    age?: number;
    city: string = "";

    sayWords(surname: string): string {
 
        return this.name + "Hello!";
    }
}

//интерфейсы функций
interface FullNameBuilder {
    (name: string, surname: string): string;
}
 
let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
        return "Mr. " + name + " " + surname;
}

//обобщенные классы
class AnyUser<T> {
 
    private _id: T;
    constructor(id:T) {
 
        this._id=id;
    }
    getId(): T {
 
        return this._id;
    }
}

//обобщенные интерфейсы
interface AnyIUser<T> {
 
    getId(): T;
}
 