let user = {
    id: 1, name: 'John',
}
user.age = 20;
user['status'] = false;
console.log(user);

delete user.id;
console.log(user);
