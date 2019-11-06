var gameDev = document.getElementById('matchingGame');
var cardSize = 100;
var cardSpacing = 10;
var gameHeight = 4;
var gameWidth = 4;
var firstCard = null;
var secondCard = null;
var checkTimeout = null;
var matches = 0;

createGrid(gameHeight, gameWidth);
function createGrid (gameHeight, gameWidth) {
    var cardArray = [];
    for (var i = 0; i < (gameHeight * gameWidth) / 2; i++) {
     cardArray.push(i);
     cardArray.push(i);
    }
    var deck = [];
    while  (cardArray.length > 0) {
        var randomNum = Math.floor(Math.random() * cardArray.length);
        deck.push(cardArray[randomNum]);
        cardArray.splice(randomNum, 1);
    }
    for (var row = 0; row < gameHeight; row++) {
        for (var col = 0; col < gameWidth; col++) {
            createCard (deck.pop(), row, col);
        }
    }
}

function createCard(cardNum, posX, posY) {
    var card = document.createElement('img');
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
    var card = e.target;
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

