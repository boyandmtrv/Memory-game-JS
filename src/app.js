const moves = document.getElementById('moves-count');
const timeValue = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const gameContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const controls = document.querySelector('.controls-container');

let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
    {
        name: 'bug', image: '/img/bugIMG.png'
    },
    {
        name: 'building', image: '/img/buildingIMG.png'
    },
    {
        name: 'chat', image: '/img/chatIMG.png'
    },
    {
        name: 'diamond', image: '/img/diamondIMG.png'
    },
    {
        name: 'emoji', image: '/img/emojiIMG.png'
    },
    {
        name: 'heart', image: '/img/heartIMG.png'
    },
    {
        name: 'javascript', image: '/img/javascriptIMG.png'
    },
    {
        name: 'mail', image: '/img/mailIMG.png'
    },
    {
        name: 'map', image: '/img/mapIMG.png'
    },
    {
        name: 'moon', image: '/img/moonIMG.png'
    },
    {
        name: 'ruler', image: '/img/rulerIMG.png'
    },
    {
        name: 'sun', image: '/img/sunIMG.png'
    },
];

let seconds = 0;
let minutes = 0;

let movesCount = 0;
let winCount = 0;

const timeGenerator = () => {
    seconds += 1;

    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;

    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

const generateRandom = (size = 4) => {
    let tempArr = [...items];
    let cardValues = [];
    size = (size * size) / 2;

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArr.length);
        cardValues.push(tempArr[randomIndex]);
        tempArr.splice(randomIndex, 1);
    }
    return cardValues;
}

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    cardValues.sort(() => Math.random() - 0.5);

    for (let i = 0; i < size * size; i++) {
        gameContainer.innerHTML += `
            <div class="card-container" data-card-value = "${cardValues[i].name}">  
                <div class="card-before">?</div>
                <div class="card-after">
                <img src = "${cardValues[i].image}" class="image"/></div>
            </div>
        `
    };

    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`
    
};

const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
};
initializer();




