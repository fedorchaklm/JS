/**
 #y7crMeFwHcS
 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 **/
for (let i = 0; i < 10; i++) {
    document.write('<div>I am div - element</div>');
}

/**
 #TYj7ncx
 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
 **/
for (let i = 0; i < 10; i++) {
    document.write(`<div>I am ${i + 1} - element</div>`)
}

/**
 #uzkt71dp
 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 **/
let i = 0;
while (i < 10) {
    document.write('<h1>I am h1</h1>');
    i++;
}

/**
 #OeT7t3uUMFi
 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 **/
let j = 0;
while (j < 10) {
    document.write(`<h1>I am ${j + 1} - h1</h1>`);
    j++;
}

/**
 #vLSZKMlO
 - Використовуючи данні з масиву, за допомоги document.write та циклу
 побудувати структуру по шаблону
 Масив: let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

 ШАБЛОН:
 <ul>
 <li>ITEM OF ARRAY</li>
 </ul>
 замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
 **/
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
let str = '<ul>'
for (const item of listOfItems) {
    str += `<li>${item}</li>`;
}
str += '</ul>';
document.write(str);

/**
 #Hdjws7E
 Використовуючи данні з масиву, за допомоги document.write та циклу
 побудувати структуру по шаблону
 Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

 ШАБЛОН
 <div class="product-card">
 <h3 class="product-title">TITLE. Price - PRICE</h3>
 <img src="IMAGE" alt="" class="product-image">
 </div>
 Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
 **/
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FrrSprveWTaK8LxYu05N5&w=640&q=75'
    },
];

for (const product of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="${product.title}" class="product-image">
        </div>`);
}

/**
 #4WrHwFTEop0
 є масив
 за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років
 **/

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - користувачів зі статусом true
for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}

// - користувачів зі статусом false
for (const user of users) {
    if (!user.status) {
        console.log(user);
    }
}

// - користувачів які старші за 30 років
for (const user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}