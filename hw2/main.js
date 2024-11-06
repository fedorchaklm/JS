/** Масиви та об'єкти
 #67kfznmiMl
 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
 **/
const array = [4, 'hello', null, undefined, {name: 'Ann', age: 28}, [1, 2, 3], false, -5, 0, 'world'];
console.log(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]);

/**
 #LARqoUj5I
 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
 **/
const book = {
    title: "Harry Potter and the Philosopher's Stone",
    pageCount: 223,
    genre: 'fantasy'
};

const book2 = {
    title: "Alice's Adventures in Wonderland",
    pageCount: 352,
    genre: 'fantasy'
};

const book3 = {
    title: "The Adventures of Sherlock Holmes",
    pageCount: 320,
    genre: 'detective fiction'
};

/**
 #sA3Gg1sCp
 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
 **/
const book4 = {
    title: "Harry Potter and the Philosopher's Stone",
    pageCount: 223,
    genre: 'fantasy',
    authors: [
        {
            name: 'Joanne Rowling',
            age: 59
        },
        {
            name: 'Lewis Carroll',
            age: 75
        },
        {
            name: 'Arthur Conan Doyle',
            age: 85
        }
    ]
};

const book5 = {
    title: "Alice's Adventures in Wonderland",
    pageCount: 352,
    genre: 'fantasy',
    authors: [
        {
            name: 'Joanne Rowling',
            age: 59
        },
        {
            name: 'Lewis Carroll',
            age: 75
        },
        {
            name: 'Arthur Conan Doyle',
            age: 85
        }
    ]
};

const book6 = {
    title: "The Adventures of Sherlock Holmes",
    pageCount: 320,
    genre: 'detective fiction',
    authors: [
        {
            name: 'Joanne Rowling',
            age: 59
        },
        {
            name: 'Lewis Carroll',
            age: 75
        },
        {
            name: 'Arthur Conan Doyle',
            age: 85
        }
    ]
};

/**
 #jCHFnEbdmFd
 - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
 **/
const usersArray = [{name: 'Ann', username: 'ann@', password: '123adb'}, {
    name: 'Pasha',
    username: 'pasha@',
    password: 'dgfdgdb'
}, {name: 'Mary', username: 'mary_star', password: '123785456'}, {
    name: 'Sasha',
    username: 'sasha123',
    password: 'adb44524sdgdg'
}, {name: 'Kate', username: 'cake', password: '123adbxdvgargg'}, {
    name: 'Mark',
    username: 'mark_st',
    password: '$hvbfgdg'
}, {name: 'Sue', username: 'qool-sue', password: 'hfhtsrhrh85565'}, {
    name: 'Bob',
    username: 'bob@',
    password: '2546623ad742b'
}, {name: 'Jane', username: 'jane45', password: '1gfshgdfhadb'}, {
    name: 'Max',
    username: 'max-ann',
    password: '496523db'
}];

console.log(usersArray[0].password, usersArray[1].password, usersArray[2].password, usersArray[3].password,
    usersArray[4].password, usersArray[5].password, usersArray[6].password, usersArray[7].password,
    usersArray[8].password, usersArray[9].password);

/**
 #coYydZuaeEB
 - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
 **/
// I variant
const temperatureByDays = [[2, 15, 8], [3, 16, 9], [4, 17, 10], [5, 18, 11], [6, 19, 12], [7, 20, 13], [8, 21, 14]];

//  II variant
const temperatureByTimes = [[2, 3, 4, 5, 6, 7, 8], [15, 16, 17, 18, 19, 20, 21], [8, 9, 10, 11, 12, 13, 14]];

/**
 //Логічні розгалуження:
 /**
 #bAUsaq6LI
 - Є змінна х, якій ви надаєте довільне числове значення.
 Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
 **/
const x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

/**
 #3ckURgvs
 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
 (в першу, другу, третю или четверту частину години).
 **/
const time = 52;
if (time <= 15) {
    console.log('I');
} else if (time > 15 && time <= 30) {
    console.log('II');
} else if (time > 30 && time <= 45) {
    console.log('III');
} else {
    console.log('IV');
}

/**
 #UMoNq4biWGe
 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
 **/
const day = 20;
if (day <= 10) {
    console.log('I');
} else if (day > 10 && day <= 20) {
    console.log('II');
} else {
    console.log('III');
}

/**
 #KzrtqyQ
 - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
 **/
const userDay = 4;
switch (userDay) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default:
        console.log("There is no such day.");
}

/**
 #uwsz1RnTQJ1
 - Користувач вводить або має два числа.
 Потрібно знайти та вивести максимальне число з тих двох .
 Також потрібно врахувати коли введені рівні числа.
 **/
const a = 4;
const b = 5;

if (a > b) {
    console.log(a);
} else if (a === b) {
    console.log("The numbers are equal!");
} else {
    console.log(b);
}

/**
 #iBvqtjEm
 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
 **/
let y = null;
if (!y) {
    y = "default";
}
console.log(y);

/**
 #awLXL6TBzg
 - з файлу arrays.js (лежить в папці 2024 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
 **/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const duration = coursesAndDurationArray[0].monthDuration;

if (duration > 5) {
    console.log('Супер');
}