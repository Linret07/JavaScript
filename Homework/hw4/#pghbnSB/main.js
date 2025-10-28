// – створити функцію яка повертає найменьше число з масиву
function array (numbers){
    let min= numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min){
            min = number
        }
    }
    return min;
}
console.log(array([14,36,87,89, -22]));