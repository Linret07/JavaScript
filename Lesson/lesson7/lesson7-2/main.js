class User{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

//    static greeting(){
//         return `Hello my name is ${this.name}!`;
//     }
// }

 work(){
    return `work in process`;
}
}
// let user = new User('vasya', 31);
// console.log(user);
//
// console.log(user.greeting());
// console.log(User.greeting());

class Customer extends User{
    constructor(name, age, password) {
        super(name, age);
        this.password = password;
    }
}
let customer = new Customer(`vasya`, 31,`111`);
console.log(customer);
console.log(customer.work());



