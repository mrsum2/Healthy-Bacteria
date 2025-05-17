const cardDeck = [
    { name: "Bandages", type: "Healing", hp: 10, rarity: "Uncommon" },
    { name: "Warm Soup", type: "Healing", hp: 15, rarity: "Rare" },
    { name: "Bacteria", type: "Battle", atk: 30, hp: 60, rarity: "Rare" },
    { name: "White Cells", type: "Healing+Battle", atk: 20, hp: 30, healing: 7, rarity: "Legendary" },
    { name: "Red Cells", type: "Battle", atk: 5, hp: 75, rarity: "Common" },
    { name: "Antibiotics", type: "Healing", hp: 30, rarity: "Legendary" },
    { name: "Mushrooms", type: "Healing", hp: 5, rarity: "Uncommon" },
    { name: "Brain", type: "???", hp: "???", rarity: "Secret" },
    { name: "Probiotics", type: "Healing+Battle", atk: 10, hp: 20, rarity: "Legendary" }
];

let inventory = [];
let pityCounter = 0;

document.getElementById("spinButton").addEventListener("click", function () {
    let rareChance = Math.random() < 0.1; 
    if (pityCounter >= 5) rareChance = true;
    pityCounter++;

    let selectedCard = rareChance ? cardDeck.filter(c => c.rarity === "Rare" || c.rarity === "Legendary")[Math.floor(Math.random() * 3)]
                                  : cardDeck[Math.floor(Math.random() * cardDeck.length)];

    inventory.push(selectedCard);
    animateCardReveal(selectedCard);
});

document.getElementById("startGameButton").addEventListener("click", function () {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    window.location.href = "game.html";
});

function animateCardReveal(card) {
    let cardDisplay = document.getElementById("cardDisplay");
    cardDisplay.innerHTML = `<div class="card">${card.name} (${card.rarity})</div>`;
    
    cardDisplay.style.transform = "scale(0.5)";
    setTimeout(() => {
        cardDisplay.style.transform = "scale(1)";
        cardDisplay.style.transition = "transform 0.5s ease-in-out";
    }, 100);
}
