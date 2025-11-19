//-------------Функції масивів з колбеками--------------

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//Метод що приймає колбек (аргумент), функцію
// users.forEach(function (value, index) {
//     console.log(value,index);
// })
// users.forEach((value) => console.log(value));

// Метод фільтрації
// let filteredUsers=users.filter(value=>value.age > 30);
// console.log(filteredUsers);

//Метод MAP повертає новий об'єкт - мапування об'экту до нового об'єкту
let mapedUsers=users.map(function (value, index){
return {
    name: value.name,
    age: value.age,
    status: value.status,
    id:index+1
};
});
console.log(mapedUsers);

//Метод пошуку,  знаходить тільки першу входження
let find=users.find(value=>value.name==='max')
console.log(find);

//метод бере аргумент  і перевіряє його відповідність на стутус тру,
//  кожного елемента
console.log(users.every(value => value.status));

//метод бере аргумент  і перевіряє його відповідність на стутус тру,
//  якийсь елемент
console.log(users.some(value => value.status));

//метод сортування
let sort= users.sort((u1, u2) => {
    return u1.age -u2.age;
    //порівняння в першого до другого
});
console.log(sort);

//сортування об`экта  по імені
console.log(users.sort((a, b) => {
    if(a.name>b.name){
        return 1;
    }
    if (a.name<b.name){
        return -1;
    }
    if(a.name===b.name){
        return 0;
    }
}));

let reduce=users.reduce((accumulator, user) => {
    if (user.status){
        accumulator.statT.push(user);
    } else {
        accumulator.statF.push(user);
    }
    return accumulator;
}, {statT:[],statF:[]});
console.log(reduce);
console.log(users);


