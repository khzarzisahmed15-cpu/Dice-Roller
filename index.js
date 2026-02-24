const result = document.getElementById("value");
result.textContent = 0;
const diceImage = document.getElementById("diceImage");

function rollDice(){
    let randNum = Number(Math.floor(Math.random() * (6-1+1)) + 1);
    result.textContent = randNum;
    diceImage.src = `Images/DiceImages${randNum}.jpg`
}