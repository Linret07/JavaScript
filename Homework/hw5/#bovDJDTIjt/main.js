// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

let main=(users)=>{
    for (const user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age} </div>`);
    }
}
main([
    {id: 1, name:`okten`, age:24},
    {id: 2, name:`luna`, age:24},
    {id: 3, name:`luna`, age:24},
    {id: 4, name:`luna`, age:24},
    {id: 5, name:`luna`, age:24},
]);