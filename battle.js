const playerInventory = JSON.parse(localStorage.getItem("inventory")) || [];
const battleResult = document.getElementById("battleResult");

document.getElementById("playerInventory").innerHTML = playerInventory.map(card =>
    `<p><strong>${card.name}</strong> (${card.type}) - HP: ${card.hp || "N/A"}, ATK: ${card.atk || "N/A"}</p>`
).join("");

document.getElementById("fightAI").addEventListener("click", function () {
    let aiHealth = 100;
    let playerAttack = playerInventory.reduce((sum, card) => sum + (card.atk || 0), 0);
    let playerHealing = playerInventory.reduce((sum, card) => sum + (card.hp || 0), 0);

    aiHealth -= playerAttack;
    let resultText = aiHealth > 0 ? `You attacked the AI for ${playerAttack} damage! AI health: ${aiHealth}`
                                  : "🔥 You defeated the AI! 🔥";

    battleResult.innerHTML = `<p>${resultText}</p>`;
});
