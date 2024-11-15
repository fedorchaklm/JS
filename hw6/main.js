/**
 #dFeorS3m7u
 - Знайти та вивести довижину настипних стрінгових значень
 'hello world', 'lorem ipsum', 'javascript is cool'
 **/
const strArray = ['hello world', 'lorem ipsum', 'javascript is cool'];

for (const item of strArray) {
    console.log(`Довжина "${item}" дорівнює ${item.length}`);
}

/**
 #8lld9HMxXWB
 - Перевести до великого регістру наступні стрінгові значення
 'hello world', 'lorem ipsum', 'javascript is cool'
 **/
for (const item of strArray) {
    console.log(`Перевести до великого регістру "${item}" - ${item.toUpperCase()}`);
}

/**
 #ClDsAm7xba7
 - Перевести до нижнього регістру настипні стрінгові значення
 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
 **/
const arrayOfStr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

for (const item of arrayOfStr) {
    console.log(`Перевести до нижнього регістру "${item}" - ${item.toLowerCase()}`);
}

/**
 #0b89BkYZwu
 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
 **/
const str = ' dirty string   ';
console.log(`Почистити її від зайвих пробілів "${str}" - "${str.trim()}"`);

/**
 #bfoJuse4ZzP
 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
 let str = 'Ревуть воли як ясла повні';
 let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
 **/
const stringToArray = (str) => {
    if (str) {
        return str.split(' ');
    }
    return [''];
}

console.log(stringToArray('Ревуть воли як ясла повні'));

/**
 #Rbr5kEQ
 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
 **/
const numbersArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const strsArray = numbersArray.map(number => number.toString());

console.log(strsArray);

/**
 #5hqyKTfmc
 - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
 let nums = [11,21,3];
 sortNums(nums,'ascending') // [3,11,21]
 sortNums(nums,'descending') // [21,11,3]
 **/
const sortNums = (array, direction) => {
    let sortedArray;
    if (direction === 'ascending') {
        sortedArray = array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        sortedArray = array.sort((a, b) => b - a);
    } else {
        throw new Error('Wrong direction');
    }
    return sortedArray;
}

console.log(sortNums([11, 21, 3], 'ascending'));
console.log(sortNums([11, 21, 3], 'descending'));

/**
 #yo06d74c1C
 - є масив
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 **/
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const changedArray = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(item => item.monthDuration > 5)
    .map((item, index) => ({id: index + 1, ...item}));

console.log(changedArray);

/**
 #bolvdlhP
 описати колоду карт (від 6 до туза без джокерів)
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше

 {
 cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
 value: '', // '6'-'10', 'ace','jack','queen','king'
 color:'', // 'red','black'
 }
 **/
const cardSuits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const cards = [];

for (const suit of cardSuits) {
    for (const value of values) {
        const card = {
            cardSuit: suit,
            value: value
        };
        if (suit === 'diamond' || suit === 'heart') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}

console.log(cards);

// - знайти піковий туз
const spadeAce = cards
    // .filter(card => card.value === 'king')
    .find(card => card.value === 'king' && card.cardSuit === 'spade');

console.log(spadeAce);

// - всі шістки
const sixes = cards
    .filter(card => card.value === '6');

console.log(sixes);

// - всі червоні карти
const redCards = cards
    .filter(card => card.color = 'red')

console.log(redCards);

// - всі буби
const diamondCards = cards
    .filter(card => (card.cardSuit === 'diamond'))

console.log(diamondCards);

// - всі трефи від 9 та більше
const clubsCards = cards
    .filter(card => card.cardSuit === 'club' && card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9');

console.log(clubsCards);

/**
 #EP5I1UUzAX
 Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
 {
 spades:[],
 diamonds:[],
 hearts:[],
 clubs:[]
 }
 **/
const cardsObj = {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}

cards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade' :
            acc.spades.push(card);
            break;
        case 'diamond' :
            acc.diamonds.push(card);
            break;
        case 'heart' :
            acc.hearts.push(card);
            break;
        case 'club' :
            acc.clubs.push(card);
            break;
    }
    return acc;
}, cardsObj)


console.log(cardsObj);
/**
 #4LJn7zBx
 взяти з arrays.js масив coursesArray
 --написати пошук всіх об'єктів, в яких в modules є sass
 --написати пошук всіх об'єктів, в яких в modules є docker
 **/
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в яких в modules є sass
const coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesWithSass);

// --написати пошук всіх об'єктів, в яких в modules є docker
const coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesWithDocker);