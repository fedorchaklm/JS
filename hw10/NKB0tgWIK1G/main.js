/**
 #NKB0tgWIK1G
 ***PAGINATION
 зробити масив на 100 об'єктів та дві кнопки prev next
 при завантажені сторінки з'являються перші 10 об'єктів.
 При натисканні next виводяться наступні 10 об'єктів
 При натисканні prev виводяться попередні 10 об'єктів
 */
const users = [];
const arrayLength = 100;

for (let i = 0; i < arrayLength; i++) {
    users.push({name: `User-${i + 1}`, age: 18, phone: '(096)-85-78-122'});
}

const writerUsers = (usersArray) => {
    const usersContainer = document.querySelector('.usersContainer');
    usersContainer.innerHTML = '';
    for (const user of usersArray) {
        const {name, age, phone} = user;
        const p = document.createElement('p');
        p.innerText = `Name: ${name}, Age: ${age}, Phone: ${phone}`;
        usersContainer.appendChild(p);
    }
}

// const tenUsers = users.slice(0, 10);
// writerUsers(tenUsers);

const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let start = 0;
const step = 10;

btnNext.addEventListener('click', () => {
    start += step;

    if (start > arrayLength - step) {
        start = arrayLength - step;
        return;
    }

    const finish = start + step;
    const currentArray = users.slice(start, finish);
    writerUsers(currentArray);
});

btnPrev.addEventListener('click', () => {
    start -= step;

    if (start < 0) {
        start = 0;
        return;
    }

    const finish = start + step;
    const currentArray = users.slice(start, finish);
    writerUsers(currentArray);
});


writerUsers(users.slice(start, step));

