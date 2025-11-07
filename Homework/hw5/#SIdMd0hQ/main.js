// – створити функцію, яка приймає масив та виводить кожен його елемент

const printArrayElements = (array) => {
    array.forEach(element => {
        console.log(element);
    });
};
const myArray = [1, 'hello', true, null];
printArrayElements(myArray);