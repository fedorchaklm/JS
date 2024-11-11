/**
 #qLQLJSeN7i
 - є масив [2,17,13,6,22,31,45,66,100,-18] :
 **/
// 1. перебрати його циклом while
const array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// 2. перебрати його циклом for
for (const number of array) {
    console.log(number);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < array.length) {
    if (j % 2 !== 0) {
        console.log(array[j]);
    }
    j++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        console.log(array[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let k = 0;
while (k < array.length) {
    if (k % 2 === 0) {
        console.log(array[k]);
    }
    k++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 3; i < array.length; i++) {
    if (i % 3 === 0) {
        array[i] = "okten";
    }
}
console.log(array);

// 8. вивести масив в зворотньому порядку.

for (let i = array.length; i >= 0; i--) {
    console.log(array[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

/**
 #0pm3EyTKy9
 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
 **/
const arr = [];
arr[0] = 1;
arr[1] = true;
arr[2] = 'okten';
arr[3] = null;
arr[4] = false;
arr[5] = 5485;
arr[6] = undefined;
arr[7] = 'hello'
arr[8] = -4;
arr[9] = 0;

for (const arrElement of arr) {
    console.log(arrElement);
}

/**
 #mDMWMW5a
 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 **/

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`${i} <br>`);
}

/**
 #Tfrwls7FM
 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
 **/
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`${i} <br>`);
    }
}

/**
 #reLkOkTB29Q
 стоврити масив книжок (назва, кількість сторінок, автори , жанри).
 - знайти книжку/ки з найбільшою кількістю жанрів
 - знайти книжку/ки з найдовшою назвою
 - знайти книжку/ки які писали 2 автори
 - знайти книжку/ки які писав 1 автор
 **/

const books = [{
    title: "Harry Potter and the Philosopher's Stone",
    pageCount: 223,
    genre: ['fantasy', 'detective'],
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
}, {
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
}, {
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
},
    {
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
    }, {
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
    }, {
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
    }
];

// - знайти найбільшу книжку.
let maxPageIndex = 0;
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.pageCount > books[maxPageIndex].pageCount) {
        maxPageIndex = i;
        i++;
    }
}
console.log(books[maxPageIndex]);