const cardDeck = [
    { name: "Bandages", type: "Healing", hp: 10, uses: 2, rarity: "Uncommon" },
    { name: "Warm Soup", type: "Healing", hp: 15, uses: 1, rarity: "Rare" },
    { name: "Bacteria", type: "Battle", atk: 30, hp: 60, uses: "Infinite", rarity: "Rare" },
    { name: "White Cells", type: "Healing+Battle", atk: 20, hp: 30, healing: 7, uses: 2, rarity: "Legendary" },
    { name: "Red Cells", type: "Battle", atk: 5, hp: 75, uses: 3, rarity: "Common" },
    { name: "Antibiotics", type: "Healing", hp: 30, uses: 1, rarity: "Legendary" },
    { name: "Mushrooms", type: "Healing", hp: 5, uses: 5, rarity: "Uncommon" },
    { name: "Brain", type: "???", hp: "???", uses: 4, rarity: "Secret" },
    { name: "Probiotics", type: "Healing+Battle", atk: 10, hp: 20, uses: 1, rarity: "Legendary" }
];

let inventory = [];
let pityCounter = 0;

// Function to spin for a card (with pity system)
document.getElementById("spinButton").addEventListener("click", function () {
    let rareChance = Math.random() < 0.1; // 10% chance for rare card
    if (pityCounter >= 5) rareChance = true; // Guaranteed rare after 5 spins
    pityCounter++;

    let selectedCard = rareChance ? cardDeck.filter(c => c.rarity === "Rare" || c.rarity === "Legendary")[Math.floor(Math.random() * 3)]
                                  : cardDeck[Math.floor(Math.random() * cardDeck.length)];

    inventory.push(selectedCard); // Store the card
    document.getElementById("cardResult").innerHTML = `You got: <strong>${selectedCard.name}</strong> (${selectedCard.rarity})`;

    console.log("Current Inventory:", inventory);
});

// Navigate to game screen
document.getElementById("startGameButton").addEventListener("click", function () {
    localStorage.setItem("inventory", JSON.stringify(inventory)); // Save cards
    window.location.href = "game.html"; // Load battle screen
});
