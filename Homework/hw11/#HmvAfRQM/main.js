// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
const cartsDiv = document.getElementById('.carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject
        console.log(carts);

        for (let cart of cartsObject) {
            const div = document.createElement('div');
            div.classList.add('cart-container');
            div.innerHTML = `${card.id} ${card.total}`;
            cartsDiv.appendChild(div);
        }
    });