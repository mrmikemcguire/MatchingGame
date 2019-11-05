var gameDev = document.getElementById('matchingGame');

//creating and placing a single card
// var card = document.createElement('img');
// card.src = 'matchCards/card1.png';
// card.style.position = 'absolute';
// card.style.left = '10px';
// card.style.top = '10px';
// gameDev.appendChild(card);

//put the card placement in a function

//createCard(0,10,10);
//createCard(1,120,10);

function createCard(cardNum, posX, posY) {
    var card = document.createElement('img');
    card.src = 'matchCards/card' + cardNum + '.png';
    card.style.position = 'absolute';
    // card.style.left = posX + 'px';
    // card.style.top = posY +'px';

    //change styling to this
    card.style.left = posX * 120 + 'px';
    card.style.top = posY * 120 +'px';

    gameDev.appendChild(card);
};


    
    createCard(1,0,0),
    createCard(4,1,0);
    createCard(6,2,0);