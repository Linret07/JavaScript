// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//     – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];
suits.forEach(cardSuit => {
    values.forEach(value => {
        let color;
        if (cardSuit === 'heart' || cardSuit === 'diamond') {
            color = 'red';
        } else {
            color = 'black';
        }
        deck.push({
            cardSuit: cardSuit,
            value: value,
            color: color
        });
    });
});
console.log(deck);

const aceOfSpades = deck.find(card => {
    return card.cardSuit === 'spade' && card.value === 'ace';
});
console.log(aceOfSpades);

const allSixes = deck.filter(card => {
    return card.value === '6';
});
console.log(allSixes);

const allRedCards = deck.filter(card => {
    return card.color === 'red';
});
console.log(allRedCards);

const allDiamondCards = deck.filter(card => {
    return card.cardSuit === 'diamond';
});
console.log(allDiamondCards);

const cardWeights = {
    '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'jack': 11, 'queen': 12, 'king': 13, 'ace': 14
};

const highClubs = deck.filter(card => {
    const isClub = card.cardSuit === 'clubs';
    const isNineOrHigher = cardWeights[card.value] >= cardWeights['9'];
    return isClub && isNineOrHigher;
});
console.log(highClubs);



