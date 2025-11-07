// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

let main=(text)=> {
    document.write(`<p>${text}</p>`);
}
main(`Okten`);
main(`Hello`);