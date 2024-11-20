/**
 #AiN5CoUQ
 Створити функцію, яка робить глибоку копію об'єкту.
 Додати перевірки на undefined, null, NaN.
 Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
 **/
// мій варіант
function deepCopy(obj) {
    if (obj) {

        const objCopy = {};

        for (const key in obj) {
            const value = obj[key];

            if (typeof value === 'object') {
                if (value === null) {
                    objCopy[key] = value;
                } else if (Array.isArray(value)) {
                    const arrCopy = [];
                    for (let i = 0; i < value.length; i++) {
                        if (typeof value[i] === 'object') {
                            if (value[i] === null) {
                                arrCopy.push(value[i]);
                            } else {
                                const embeddedObj = deepCopy(value[i]);
                                arrCopy.push(embeddedObj);
                            }
                        } else {
                            arrCopy.push(value[i]);
                        }
                    }
                    objCopy[key] = arrCopy;
                } else {
                    objCopy[key] = deepCopy(value);
                }
            } else {
                objCopy[key] = value;
            }

        }
        return objCopy;
    }

    throw new Error('Invalid input object');
}


const hello = function () {
    console.log(`${this.name}`)
}

const person = {
    name: "Ann", age: 19, friend: {name: "Mike", age: 20}, hello() {
        console.log(`${this.name}`)
    }, info() {
        console.log(`${this.age}`)
    }
};
const person2 = {
    name: "Ann", age: 19, friend: [{name: "Mike", age: 20}, {name: "Bob", age: 25}], hello, info() {
        console.log(`${this.age}`)
    }
};

const personCopy = deepCopy(person);
console.log(personCopy);
console.log(personCopy === person);
console.log(personCopy.friend === person.friend);
person.hello();
person.info();
personCopy.name = "Max";
personCopy.age = 38;
personCopy.hello();
personCopy.info();

// Варіант, зроблений на основі варіанта Сергія
const deepClone = (obj) => {
    if (obj) {
        const objCopy = JSON.parse(JSON.stringify(obj));

        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                objCopy[key] = obj[key].bind(objCopy);
            }
        }
        return objCopy;
    }

    throw new Error('Invalid input object');
}

const personCopy2 = deepClone(person2);
console.log(personCopy2);
console.log(personCopy2 === person);
person2.hello();
person2.info();
personCopy2.name = "Alex";
personCopy2.hello();
personCopy2.age = 18;
personCopy2.info();

/**
 #iz6emEsP2BA
 - є масив
 за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
 Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
 **/
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


const changedArr = coursesAndDurationArray.map((item, index) => ({id: index, ...item}));

console.log(changedArr);