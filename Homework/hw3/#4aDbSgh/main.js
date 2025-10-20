// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
let empty=[
    {id:0},
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5}
]

// for (let j=0;j<empty.length;j++){
//     console.log(empty[j]);
// }
console.log(empty[0]);
console.log(empty[1]);
console.log(empty[2]);
console.log(empty[3]);
console.log(empty[4]);
console.log(empty[5]);
empty.push(empty[6]);
empty.push(empty[7]);
console.log(empty[6]);
console.log(empty[7]);
