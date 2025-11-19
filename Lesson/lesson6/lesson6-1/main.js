//-------------Функції string  -------------------

let str=`hello world`;
let s=str.concat("!!! ");
console.log(s);
//це додавання !!! до hello world
console.log(str.toUpperCase());
// це переводить у великі літери
console.log(str.toLowerCase());
//це переводить у  маленькі літери
console.log(str.startsWith('Hello'));
// перевіряє на співпадіння у тексті,
// якщо співпало тоді тру, якщо ні, тоді фолс
console.log(str.endsWith('ld'));
//на що закінчується стрінга, тру чи фолс
console.log(str.substring(0,3));
//обрізання, з якого по яке
console.log(str.indexOf(`h`));
//показує індекс на якому стоїть літера, з ліва на право
console.log(str.lastIndexOf(`w`));
// показує індекс на якому стоїть літера, з права на ліво
console.log(str.charAt(8));
//показує букву за індексом
console.log(str.replace(`e`,`!`));
// замінює один символ на інший, перший
console.log(str.replaceAll(`o`,2));
// замінює один символ на інший, всі
let split=str.split('')
console.log(split);
//розподіляє стрінгу в масив 
