var gameDev = document.getElementById('matchingGame');
var cardSize = 100;
var cardSpacing = 10;
var gameHeight = 2;
var gameWidth = 2;

createGrid(gameHeight, gameWidth);
function createGrid (gameHeight, gameWidth) {
    for (var row = 0; row < gameHeight; row++)
    {
    for (var col = 0; col < gameWidth; col++)
        {
        createCard(0, row, col);
        }
    }
}


function createCard(cardNum, posX, posY) {
    var card = document.createElement('img');
    card.src = 'matchCards/card' + cardNum + '.png';
    card.style.position = 'absolute';
    card.style.left = posX * (cardSize + cardSpacing) + cardSpacing + 'px';
    card.style.top = posY * (cardSize + cardSpacing) + cardSpacing +'px';
    gameDev.appendChild(card);
};




