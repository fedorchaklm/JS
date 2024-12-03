const NameValuePair = document.getElementById('NameValuePair');
const addBtn = document.getElementById('addBtn');
const sortByNameBtn = document.getElementById('sortByNameBtn');
const sortByValueBtn = document.getElementById('sortByValueBtn');
const delBtn = document.getElementById('delBtn');
const listContainer = document.getElementById('listContainer');
const errorContainer = document.getElementById('error');

let list = JSON.parse(localStorage.getItem('list')) || [];

const writerList = (array) => {
    listContainer.innerText = '';
    for (const item of array) {
        const {name, value} = item;
        const element = document.createElement('p');
        element.innerText = `${name}=${value}`;
        listContainer.appendChild(element);
    }
}

const saveToLocalStorage = (list) => {
    localStorage.setItem('list', JSON.stringify(list));
}

addBtn.addEventListener('click', () => {
    const inputValue = NameValuePair.value.trim();
    const regExp = /^[a-z0-9]+\s*=\s*[a-z0-9]+$/i;
    const isValid = regExp.test(inputValue);

    if (!isValid) {
        errorContainer.innerText = `Invalid NameValuePair 
            The Name/Value pair entry format should be: <name> = <value>`
    } else {
        const element = document.createElement('p');
        const [name, value] = inputValue.split('=');
        const item = {
            name,
            value
        }
        list.push(item);
        errorContainer.innerText = '';
        element.innerText = inputValue.replaceAll(' ', '');
        listContainer.appendChild(element);

        saveToLocalStorage(list);
        NameValuePair.value = '';
    }
})

sortByNameBtn.addEventListener('click', () => {
    console.log(list);
    list = [{name: 8, value: 2}, {name: 10, value: 4}, {name: 1, value: 1}, {name: 4, value: 8}, {name: 2, value: 3}];
    const sortedlistByName = list.sort((item1, item2) => item1.name - item2.name);
    console.log(sortedlistByName);
    writerList(sortedlistByName);
    // saveToLocalStorage(sortedlistByName);
});

sortByValueBtn.addEventListener('click', () => {
    console.log(list);
    list = [{name: 8, value: 2}, {name: 10, value: 4}, {name: 1, value: 1}, {name: 4, value: 8}, {name: 2, value: 3}];
    const sortedlistByValue = list.sort((item1, item2) => item1.value - item2.value);
    console.log(sortedlistByValue);
    writerList(sortedlistByValue);
    // saveToLocalStorage(sortedlistByValue);
});

writerList(list);
