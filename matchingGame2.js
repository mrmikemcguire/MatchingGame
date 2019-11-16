let gameDev = document.getElementById('matchingGame');
let cardSize = 100;
let cardSpacing = 10;
let gameHeight = 2;
let gameWidth = 2;

createGrid(gameHeight, gameWidth);
function createGrid (gameHeight, gameWidth) {
    for (let row = 0; row < gameHeight; row++) {
        for (let col = 0; col < gameWidth; col++) {
            createCard(0, row, col);
        }
    }
}

function createCard(cardNum, posX, posY) {
    let card = document.createElement('img');
    card.src = 'matchCards/card' + cardNum + '.png';
    // card.src = 'matchCards/cardback.png';
    card.num = cardNum;
    card.style.position = 'absolute';
    card.style.left = posX * (cardSize + cardSpacing) + cardSpacing + 'px';
    card.style.top = posY * (cardSize + cardSpacing) + cardSpacing +'px';
    gameDev.appendChild(card);
};




