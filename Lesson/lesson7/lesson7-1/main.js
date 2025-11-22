// function User (name,age,status){
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// let user1 =new User('asd', 123, true);
// let user2 =new User('fgfg', 653, false);

function User (name,age,status, wifeName, wifeAge){
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife={name:wifeName,age:wifeAge};
    this.greeting = function (){
        console.log('hi');
    };
}

let user = new User ('asd',123, true, 'anna', 28);
console.log(user);
