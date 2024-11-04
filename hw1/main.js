/**
 #dYQNrBV
 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
 Вивести кожну змінну за допомогою: console.log
 **/

const str = 'hello';
const str2 = 'owu';
const str3 = 'com';
const str4 = 'ua';
const num = 1;
const num2 = 10;
const num3 = -999;
const num4 = 123;
const num5 = 3.14;
const num6 = 2.7;
const num7 = 16;
const bl = true;
const bl2 = false;
console.log(str, str2, str3, str4, num, num2, num3, num4, num5, num6, num7, bl, bl2);

/**
 #6Qb97gsv
 Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
 **/

const firstName = 'Liubov';
const middleName = 'Mykolaivna';
const lastName = 'Stukalo';
const person = `${firstName} ${middleName} ${lastName}`

/**
 #4N0y5tufA
 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
 let a = 100; let b = '100'; let c = true;
 **/

let a = 100;
let b = '100';
let c = true;
console.log(typeof a, typeof b, typeof c);

/**
 #ruUtWDUI
 Додаткове для тих хто цікавився prompt`oм
 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
 **/

const name = prompt('Enter your first name');
const secondName = prompt('Enter your last name');
const age = +prompt('Enter your age');
console.log(`My name is ${name} ${secondName}. I am ${age}.`);


