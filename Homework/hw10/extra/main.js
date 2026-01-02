let data=Array.from({length:100},(_, i) =>({
    id: i + 1
}));

const pageSize = 10;
let page = 0;

document.getElementById('list')