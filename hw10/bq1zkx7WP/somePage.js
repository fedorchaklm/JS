/**
 #bq1zkx7WP
 *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
 при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
 **/
let startTime = JSON.parse(localStorage.getItem('startTime'));
if (!startTime) {
    startTime = new Date().getTime();
    localStorage.setItem('startTime', JSON.stringify(startTime));
} else {
    startTime = Number(startTime);
}
const currentTime = new Date().getTime();
const p = document.getElementById('currentNumber');
let localNumber = Number(JSON.parse(localStorage.getItem('localNumber'))) || 100;
if ((currentTime - startTime) > 10000) {
    localNumber += 10;
    localStorage.setItem('localNumber', JSON.stringify(localNumber));
    localStorage.setItem('startTime', JSON.stringify(currentTime));
}
p.innerText = `${localNumber} грн.` ;

