/*
#8Nmt60ZT
- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.
*/
const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'hello';
document.body.appendChild(div);

const divCopy = div.cloneNode(true);
document.body.appendChild(divCopy);

/*
    #OPLI89c9G
- Є масив:
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
*/
const pages = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');

for (const page of pages) {
    const li = document.createElement('li');
    li.innerText = page;
    ul.appendChild(li);
}

document.body.appendChild(ul);

/*
#jeBqHV525U5
- Є масив
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.
*/
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const wrap = document.createElement('div');

for (const course of coursesAndDurationArray) {
    const card = document.createElement('p');
    card.innerText = `${course.title}, monthDuration - ${course.monthDuration}`;
    wrap.appendChild(card);
}

document.body.appendChild(wrap);

/*
    #Kx1xgoKy8
    - Є масив
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h2 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.
*/
const wrapper = document.createElement('div');
wrapper.classList.add('wrap');

for (const course of coursesAndDurationArray) {
    const item = document.createElement('div');
    item.classList.add('item');
    const title = document.createElement('h2');
    title.classList.add('heading');
    title.innerText = course.title;
    const monthDuration = document.createElement('p');
    monthDuration.classList.add('description');
    monthDuration.innerText = 'MonthDuration - ' + course.monthDuration;
    item.append(title, monthDuration);
    wrapper.appendChild(item);
}
document.body.appendChild(wrapper);