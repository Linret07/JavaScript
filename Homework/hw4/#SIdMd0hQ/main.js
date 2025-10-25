// – створити функцію, яка приймає масив та виводить кожен його елемент

function main (array) {
    for (const item of array) {
        console.log(item);
    }
}
const fruits = ['apple', 'bananas', 'orange'];
main(fruits);