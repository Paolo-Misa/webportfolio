document.addEventListener('DOMContentLoaded', () => {

// card options
const cardArray = [
    { 
        name: 'fries', 
        img: './images/fries.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'burger',
        img: './images/burger.png'
    },
    {
        name: 'burger',
        img: './images/burger.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    }
]

const grid = document.querySelector('.grid')
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
const resultDisplay =document.querySelector('#result')

// gameboard
function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        var card =document.createElement('img')
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

cardArray.sort(()=> 0.5 - Math.random())

//check for matches 
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0]=== cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! you found them all'
    }
}



//flip card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}




createBoard();





})



