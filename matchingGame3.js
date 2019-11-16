let gameDev = document.getElementById('matchingGame');
let cardSize = 100;
let cardSpacing = 10;
let gameHeight = 4;
let gameWidth = 4;

createGrid(gameHeight, gameWidth);
function createGrid (gameHeight, gameWidth) {
    //let cardArray = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
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
    let card = e.target;
    //alert(card.num);
    card.src = 'matchCards/card' + card.num + '.png';
}