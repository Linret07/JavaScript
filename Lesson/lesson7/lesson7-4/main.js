let set=new Set();
set.add(`asd`);
set.add(`qwe`);
set.add(`asd`);
set.add(`xxx`);
console.log(set);
console.log(set.has(`xxx`)); /*has перевіряє на наявність */
set.delete(`xxx`);
console.log(set);
console.log(set.size);
set.forEach(value => console.log(value));
let arrayFfromSet=Array.from(set);
console.log(arrayFfromSet);

let set2=new Set([11,22,33,44,11,22,55]);
console.log(set2);
let numbers = Array.from(set2);
console.log(numbers);