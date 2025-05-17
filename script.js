const cardDeck = [
    { name: "Fireball", power: 10 },
    { name: "Shield", power: 5 },
    { name: "Lightning Strike", power: 15 },
];

document.getElementById("drawCardBtn").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    const selectedCard = cardDeck[randomIndex];

    document.getElementById("cardDisplay").innerHTML = `You got: <strong>${selectedCard.name}</strong> (Power: ${selectedCard.power})`;
});
