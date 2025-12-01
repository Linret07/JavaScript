// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, footsSize) {
        this.name = name;
        this.age = age;
        this.footSize = footsSize;
    }
}
class  Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const  cinderella = [
    new Cinderella('cinderella1',20, 34),
    new Cinderella('cinderella2',21, 35),
    new Cinderella('cinderella3',22, 36),
    new Cinderella('cinderella4',23, 37),
    new Cinderella('cinderella5',24, 38),
    new Cinderella('cinderella6',25, 39),
];
const prince= new Prince('prince', 25, 36);
const  cinderellaMain=cinderella.find(cinderella=>cinderella.footSize===prince.slipper);
prince.wife=find;
console.log(cinderellaMain);
