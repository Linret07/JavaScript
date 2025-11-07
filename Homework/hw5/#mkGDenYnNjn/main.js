// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

let exchange=(sumUAH, currencyValues, exchangeCurrency)=> {
    let target;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            target = item;
        }
    }
    let result = sumUAH/target.value
    return result;
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));