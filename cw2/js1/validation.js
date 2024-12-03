function validateInput(value) {
    const regExp = new RegExp(/^[a-z0-9]+\s*=\s*[a-z0-9]+$/i);
    return regExp.test(value);
}

function sortByName(list) {
    return list.sort((item1, item2) => item1.name - item2.name);

}