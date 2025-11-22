// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];
function createDeckForPacking() {
    const suitsMap = {
        'Черви': 'hearts',
        'Бубни': 'diamonds',
        'Трефи': 'clubs',
        'Піки': 'spades'
    };
    const ranks = ['6', '7', '8', '9', '10', 'Валет', 'Дама', 'Король', 'Туз'];
    const deck = [];
    for (const [suitNameUA, suitNameEN] of Object.entries(suitsMap)) {
        for (const rank of ranks) {
            deck.push({
                rank: rank,
                suit: suitNameEN, // Зберігаємо англійську назву масті
                name: `${rank} ${suitNameUA}`
            });
        }
    }
    return deck;
}
const cardDeck = createDeckForPacking();
const packedDeck = cardDeck.reduce((accumulator, currentCard) => {
    const suitKey = currentCard.suit;
    if (accumulator[suitKey]) {
        accumulator[suitKey].push(currentCard);
    } else {
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(packedDeck);


