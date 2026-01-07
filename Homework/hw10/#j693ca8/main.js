// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
// та повідомити про це користувача

    const ageForm = document.getElementById('ageForm');
    const resultMessage = document.getElementById('resultMessage');
    ageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(ageForm);
    const age = formData.get('age');

    if (age<18) {
        resultMessage.textContent = `Заборонено, ${age} років`;
    } else if (age>=18) {
        resultMessage.textContent = `Дозволено, ${age} років`;
    }
});
