// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users=[
    new User(1, 'vasya1', 'fgfgfgh1', 'eresrsggf1', '45653653661'),
    new User(5, 'vasya2', 'fgfgfgh2', 'eresrsggf2', '45653653662'),
    new User(3, 'vasya3', 'fgfgfgh3', 'eresrsggf3', '45653653663'),
    new User(7, 'vasya4', 'fgfgfgh4', 'eresrsggf4', '45653653664'),
    new User(9, 'vasya5', 'fgfgfgh5', 'eresrsggf5', '45653653665'),
    new User(6, 'vasya6', 'fgfgfgh6', 'eresrsggf6', '45653653666'),
    new User(8, 'vasya7', 'fgfgfgh7', 'eresrsggf7', '45653653667'),
    new User(2, 'vasya8', 'fgfgfgh8', 'eresrsggf8', '45653653668'),
    new User(4, 'vasya9', 'fgfgfgh9', 'eresrsggf9', '45653653669'),
    new User(10, 'vasya10', 'fgfgfgh10', 'eresrsggf10', '456536536610')
];

console.log(users.sort((user1, user2) => user1.id -user2.id));