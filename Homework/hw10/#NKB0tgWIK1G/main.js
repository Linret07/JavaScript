// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів
const data = Array.from({length: 100}, (_, i) => ({
    id: i + 1,
    title: 'object',
    price: 100,
}));
const pageSize = 10;
let page = 0;
const content = document.getElementById('content');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
prevBtn.onclick = () => {
    if (page > 0) {
        page--;
        render();
    }
};
nextBtn.onclick = () => {
    if ((page + 1) * pageSize < data.length) {
        page++;
        render();
    }
};
function render() {
    content.innerHTML = '';
    const start = page * pageSize;
    const end = Math.min(start + pageSize, data.length);
    for (let i = start; i < end; i++) {
        const { id, title, price } = data[i];
        const div = document.createElement('div');
        div.textContent = `${id} - ${price}`;
        content.appendChild(div);
    }
    prevBtn.disabled = page === 0;
    nextBtn.disabled = end >= data.length;
}
render();