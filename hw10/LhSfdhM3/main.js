/**
 #LhSfdhM3
 Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
 */
const container = document.getElementsByClassName('container')[0];
const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
for (const item of sessionsList) {
    const element = document.createElement('p');
    element.innerText = item;
    container.appendChild(element);
}
