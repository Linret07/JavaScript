// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.myForEach((element, index) => {
    console.log(`${index}: ${element}`);
});

Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (callback(element, i, this)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};
const evenNumbers = numbers.myFilter(element => {
    return element % 2 === 0;
});
console.log(evenNumbers);




