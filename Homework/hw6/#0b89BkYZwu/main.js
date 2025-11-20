// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
let str =`  dirty string   `;
const cleanString = str.trim();
console.log(cleanString);
console.log(str.length);
console.log(cleanString.length);