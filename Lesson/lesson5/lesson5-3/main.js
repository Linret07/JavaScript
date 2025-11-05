let user={
    name:"JavaScript",
    greeting: function (msg){
        console.log(this);
        return` ${msg} my name is ${this.name}`;
    },
    vitanny: (msg)=>`${msg} my age is ${user.age}`
}
console.log(user.greeting(`hi`));
user.vitanny(user.vitanny(`hello`));