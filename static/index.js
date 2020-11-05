// Challenge 1: your age in days

function ageInDays() {
    let birthYear = prompt("In what year were you born.. Good friend?");
    let ageInDays = (new Date().getFullYear() - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You  are' + ' ' + ageInDays + ' ' + 'days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge2: Random cat generator

function generateCat() {

    let image = document.createElement('img');
    function setAttributes(img, attrs) {
        for (var key in attrs) {
            img.setAttribute(key, attrs[key]);
        }
    }
    setAttributes(image, { "src": "https://source.unsplash.com/200x200?cat", "height": "200px", "width": "200px" });
    document.getElementById('result').appendChild(image);
}

// Challenge3: rock,paper,scissor

function rpsGame(yourChoice) {

    var humanChoice, botChoice;

    humanChoice = yourChoice.id;


    var random = Math.floor(Math.random() * 100 + 1);
    if (random > 1 && random < 34) {
        botChoice = 'rock';
        console.log(typeof botChoice);

    }
    else if (random > 34 && random < 66) {
        botChoice = 'paper';
        console.log(typeof botChoice);

    }
    else {
        botChoice = 'scissor';
    }

    results = decideWinner(humanChoice, botChoice);

}

function decideWinner(humanChoice, botChoice) {

    var message;
    var color;

    if ((humanChoice == 'rock' && botChoice == 'rock') || (humanChoice == 'paper' && botChoice == 'paper') || (humanChoice == 'scissor' && botChoice == 'scissor')) {

        message = 'Match Tied!';
        color = 'yellow';

    }

    else if ((humanChoice == 'rock' && botChoice == 'scissor') || (humanChoice == 'paper' && botChoice == 'rock') || (humanChoice == 'scissor' && botChoice == 'paper')) {

        message = ('You Won!');
        color = 'green';

    }

    else {

        message = 'You Lost!';
        color = 'red';

    }

    finalMessage(humanChoice, botChoice, message, color);
}

function finalMessage(humanChoice, botChoice, message, color) {

    document.getElementById('flex-box-rps-div').style.display = 'none';

    frontEnd(humanChoice, botChoice, message, color);

}

function frontEnd(humanChoice, botChoice, message, color) {
    document.getElementById('game-result').innerHTML = `
    <img src="static/images/${humanChoice}.jfif" style="box-shadow:10px 25px 24px 10px rgb(152, 151, 235)";>
    <h1 style = "color:${color}";>${message}</h1>
    <img src="static/images/${botChoice}.jfif" style="box-shadow:10px 25px 24px 10px red";>`
    console.log(color);

}

// Challenge 4: Change the color of all buttons

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {

    if (buttonThingy.value === 'red') {
        buttonRed();
    }

    else if (buttonThingy.value === 'green') {
        buttonGreen();
    }

    else if (buttonThingy.value === 'reset') {
        buttonReset();
    }

    else if (buttonThingy.value === 'random') {
        buttonRandom();
    }

}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);

        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);

        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);

        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}


function buttonRandom() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);

        all_buttons[i].classList.add(copyAllButtons[Math.floor(Math.random() * 7)]);
    }
}


// Challenge 5: Guess the Number

function guessButton() {
    var guess = Math.floor(Math.random() * 100);
    var input_guess = document.getElementById('guess').value;

    if (input_guess === guess) {
        cool();
    }

    else {
        tryAgain();
    }
}

function cool() {
    document.getElementById('guessResult').innerHTML = `<div class="alert alert-success alert-dismissible fade show my-2" role="alert" width="300px">
    <strong>Wohooo!</strong> Your guess is right.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;

}

function tryAgain() {

    document.getElementById('guessResult').innerHTML = `<div class="alert alert-warning alert-dismissible fade show my-2" role="alert">
    <strong>Try again!</strong> Your guess is wrong
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;


}

// Challenge 6: Blackjack

let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/wing.wav');
const winSound = new Audio('static/sounds/cash.wav');
const lossSound = new Audio('static/sounds/Crowd.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }


}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {


        let cardImage = document.createElement('img');

        cardImage.src = `static/images/cardImages/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }

}

function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackGame['turnsOver'] = true;
    }

}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }
    else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }

}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blackjackLogic() {
    blackjackGame['isStand'] = true;
    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);


}

function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {

        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackjackGame['wins']++;
            winner = YOU;
        }
        else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        }
        else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
            console.log('drew');

        }
    }
    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;
    }
    else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;

    }
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {


        document.querySelector('#wins').textContent = blackjackGame['wins'];
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        document.querySelector('#draws').textContent = blackjackGame['draws'];


        if (winner === YOU) {
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }

        else if (winner === DEALER) {
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        }
        else {
            message = 'You drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}