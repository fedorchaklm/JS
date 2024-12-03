const NameValuePair = document.getElementById('NameValuePair');
const btnAddPair = document.getElementById('addBtn');
const listContainer = document.getElementById('listContainer');
const errorContainer = document.getElementById('error');

btnAddPair.addEventListener('click', () => {
    const element = document.createElement('p');
    const inputValue = NameValuePair.value.trim();
    const res = new RegExp(/^\s*([a-zA-Zа-яА-Я0-9]+)\s*=\s*([a-zA-Zа-яА-Я0-9]+)\s*$/g);
    console.log(res.test(inputValue));
    if (!res.test(inputValue)) {
        errorContainer.innerText = `Invalid NameValuePair 
            The Name/Value pair entry format should be: <name> = <value>`
    } else {
        errorContainer.innerText = '';
        console.log(inputValue);
        element.innerText = inputValue;
        listContainer.appendChild(element);
        NameValuePair.value = '';
    }
})