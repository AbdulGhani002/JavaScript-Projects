let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messagEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
// let cardsEl = document.getElementById("cards-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
    playerName : prompt("Write Your Name"),
    playerChips : 150
}
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.playerName + " : $" + player.playerChips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}


function renderGame() {

    if (sum < 21) {
        message = ("Do You want to draw a new card?");
    }
    else if (sum === 21) {
        message = ("Whoo! You've got a blackjack");
        hasBlackjack = true;
    }
    else {
        message = ("You are out of the game");
        isAlive = false;
    }
    messagEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards : ";
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
};


function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        console.log("Drawing a new card from the deck!")
        renderGame()
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let sum = firstCard + secondCard;
    let cards = [firstCard, secondCard];
    isAlive = true;
    renderGame();
};