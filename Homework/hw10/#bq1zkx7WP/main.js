// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
// Константи
const PRICE_STEP = 10;
const INITIAL_PRICE = 100;
const TIME_LIMIT = 10000; // 10 секунд у мілісекундах
const priceElement = document.getElementById('price-display');
let savedPrice = localStorage.getItem('currentPrice');
let lastUpdateTime = localStorage.getItem('lastUpdateTime');
const now = Date.now();
if (!savedPrice) {
    savedPrice = INITIAL_PRICE;
    lastUpdateTime = now;
    localStorage.setItem('currentPrice', savedPrice);
    localStorage.setItem('lastUpdateTime', lastUpdateTime);
} else {
    if (now - lastUpdateTime >= TIME_LIMIT) {
        savedPrice = parseInt(savedPrice) + PRICE_STEP;
        localStorage.setItem('currentPrice', savedPrice);
        localStorage.setItem('lastUpdateTime', now);
    } else {
        console.log("Минуло менше 10 секунд. Ціна залишається незмінною.");
    }
}
priceElement.textContent = savedPrice + "грн";