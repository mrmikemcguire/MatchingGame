let gameDev = document.getElementById('matchingGame');
let cardSize = 100;
let cardSpacing = 10;
let gameHeight = 4;
let gameWidth = 4;
let firstCard = null;
let secondCard = null;
let checkTimeout = null;
let matches = 0;

createGrid(gameHeight, gameWidth);
function createGrid (gameHeight, gameWidth) {
    let cardArray = [];
    for (let i = 0; i < (gameHeight * gameWidth) / 2; i++) {
     cardArray.push(i);
     cardArray.push(i);
    }
    let deck = [];
    while  (cardArray.length > 0) {
        let randomNum = Math.floor(Math.random() * cardArray.length);
        deck.push(cardArray[randomNum]);
        cardArray.splice(randomNum, 1);
    }
    for (let row = 0; row < gameHeight; row++) {
        for (let col = 0; col < gameWidth; col++) {
            createCard (deck.pop(), row, col);
        }
    }
}

function createCard(cardNum, posX, posY) {
    let card = document.createElement('img');
    card.src = 'matchCards/cardback.png';
    card.num = cardNum;
    card.style.position = 'absolute';
    card.style.left = posX * (cardSize + cardSpacing) + cardSpacing + 'px';
    card.style.top = posY * (cardSize + cardSpacing) + cardSpacing +'px';
    card.onclick = clickCard;
    gameDev.appendChild(card);
};

function clickCard(e) {
    if (checkTimeout != null) {  // meaning that checkTimeout has been called
        clearTimeout(checkTimeout);
        checkCards();
    } 
    let card = e.target;
    card.src = 'matchCards/card' + card.num + '.png';

    if (firstCard == null) {
        firstCard = card;
    } else if (firstCard == card) {
        firstCard.src = 'matchCards/cardback.png';
        firstCard = null;
    } else if (secondCard == null) {
        secondCard = card;
        checkTimeout = setTimeout(checkCards, 1000);
    }
}

function checkCards() {
    if (firstCard.num == secondCard.num) {
        gameDev.removeChild(firstCard);
        gameDev.removeChild(secondCard);
        matches++;
        if (matches >= gameWidth * gameHeight / 2) {
            gameWon();
        }
    } else {
        firstCard.src = 'matchCards/cardback.png';
        secondCard.src = 'matchCards/cardback.png';
    }
    firstCard = null;
    secondCard = null;
    checkTimeout = null;
}

function gameWon() {
    //alert ("You won!");
    document.getElementById('gameWin').style.visibility = 'visible';
}

