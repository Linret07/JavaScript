// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1,'asdyu', 'qwekh', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', 'phone', 'pen', 'book']),
    new Client(2,'asdui', 'qwehf', 'qwert@yu', '+3457879809', ['milk', 'orange']),
    new Client(3,'asdj', 'qwedrt', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', ]),
    new Client(4,'asdk', 'qweyy', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', 'phone', 'pen',]),
    new Client(5,'asdl', 'qweuuh', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', 'phone','book','book','book']),
    new Client(6,'asds', 'qwenx', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', 'phone','book']),
    new Client(7,'asde', 'qweaa', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', 'phone','book']),
    new Client(8,'asdt', 'qweeer', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', 'phone']),
    new Client(8,'asdy', 'qwefdf', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', 'phone']),
    new Client(10,'asdu', 'qwedff', 'qwert@yu', '+3457879809', ['milk', 'orange', 'banana', 'phone']),
];
const  sort = clients.sort((a,b) => a.order.length - b.order.length);
console.log(sort);


