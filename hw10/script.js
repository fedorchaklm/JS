/**
 #sH8c4er
 - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
 */
const item = document.getElementById('text');
const removeBtn = document.getElementById('removeBtn');

removeBtn.addEventListener('click', () => {
    item.style.display = 'none';
});

/**
 #j693ca8
 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
 */
const confirmBtn = document.querySelector('#confirmBtn');

confirmBtn.addEventListener('click', () => {
    const userAge = document.getElementById('age').value;
    if (userAge < 18) {
        alert('You are too yong!');
    } else {
        alert(`You are  ${userAge}!`);
    }
});

/**
 #ymAmN2xJ
 Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
 */
const container = document.querySelector('.container');

document.forms.user.addEventListener('submit', (event) => {
    event.preventDefault();
    const {userName, userSurname, userAge} = event.target;
    const div = document.createElement('div');
    div.innerText = `
    Name: ${userName.value},
    Surname: ${userSurname.value},
    Age: ${userAge.value}
    `;
    container.appendChild(div);
});

/**
 #2VaLt4vDczH
 є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
 */
let localNumber = Number(localStorage.getItem('number')) || 0;
localNumber += 1;
const p = document.getElementById('number');
p.innerText = localNumber;
localStorage.setItem('number', localNumber);

/**
 #LhSfdhM3
 Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
 */
const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
const tamp = new Date();
sessionsList.push(tamp);
localStorage.setItem('sessionsList', JSON.stringify(sessionsList))

/**
 #Jg0gPO00
 створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
 */
const weightKg = document.getElementById('weightKg');
const weightPoundsInput = document.getElementById('weightPounds');

weightKg.addEventListener('input', () => {
    weightPoundsInput.value = weightKg.value * 2.20462;
});

/**
 #RbQGnH5DuC
 В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
 сигнатура функції -
 addToLocalStorage(arrayName:string,objToAdd:any{}):void
 */
const addToLocalStorage = (arrayName, objToAdd) => {
    const localArray = JSON.parse(localStorage.getItem(arrayName));
    if (localArray && typeof objToAdd === 'object') {
        localArray.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(localArray));
    } else {
        throw new Error("Something went wrong");
    }
}

localStorage.setItem('users', JSON.stringify([{name: "Max", age: 18}]));
addToLocalStorage('users', {name: 'Ann', age: 28});

/**
 #kUSgFqWY
 Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
 При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
 */
const userTable = document.getElementById('userTable');
const userTableForm = document.getElementById('userTableForm');

userTableForm.addEventListener('submit', (event) => {
    event.preventDefault();
    userTable.innerText = '';
    const rowNumb = +document.getElementById('rowNumb').value;
    const columnNumb = +document.getElementById('columnNumb').value;
    const description = document.getElementById('description').value;

    for (let i = 0; i < rowNumb; i++) {
        const tr = document.createElement('tr');
        for (let i = 0; i < columnNumb; i++) {
            const td = document.createElement('td');
            td.innerText = description;
            tr.appendChild(td);
        }
        userTable.appendChild(tr);
    }
})

