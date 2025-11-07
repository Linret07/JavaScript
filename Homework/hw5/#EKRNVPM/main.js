// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let   sum=(arr)=>{
    let basket =0;
    for(const item of arr){
        basket=basket+item;
    }
    return basket;
}
console.log(sum([4,6,10]));