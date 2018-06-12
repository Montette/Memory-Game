let backTiles = [];
let tiles = [];
let images = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f'];
let imagesMedium = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h'];
let imagesHard = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j'];
let gameArray = [];
let activeTile = [];
let visibleTiles = [];
let pairs = 0;
let score = 0;
const resetButton = document.querySelector('.button--resetGame');
const mediumButton = document.querySelector('.button--mediumGame');
const easyButton = document.querySelector('.button--easyGame');
const hardButton = document.querySelector('.button--hardGame');
const playAgainButton = document.querySelector('.button--playAgain');
const pauseButton = document.querySelector('.button--pauseGame');
const modal = document.querySelector('.modal');
const resultText = document.querySelector('.modal__result');
const resultInformation = document.querySelector('.modal__information');
const container = document.querySelector('.container');
let clicksCounter = 0;
const clicksCounterOutput = document.querySelector('.results__counter');
let running = false;
let time = 0;
let timeResult = '';
let secunds = 0;
const timeOutput = document.querySelector('.results__gameTime');


const enableListener = () => {
    let actualTiles = [...document.querySelectorAll('.card')];
    let enabledTiles = [...document.querySelectorAll('.card__face--back')].filter(el => !el.children[0].classList.contains("disabled"));
    enabledTiles.forEach(el => {
        el.parentElement.addEventListener('click', clicked)
    })
}


const increment = () => {
    if (running == true) {
        setTimeout(function () {
            time++;
            let mins = Math.floor(time / 10 / 60);
            let secs = Math.floor(time / 10 % 60);
            let hours = Math.floor(time / 10 / 60 / 60);

            secunds = Math.floor(time / 10);
            if (mins < 10) {
                mins = '0' + mins;
            }
            if (secs < 10) {
                secs = '0' + secs;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            timeResult = ` ${hours} : ${mins} : ${secs}`;
            timeOutput.innerHTML = timeResult;

            increment();
        }, 100)
    }
}


const startTimer = () => {
    if (running == false) {
        running = true;
        increment();
    }
}

const resetTimer = () => {
    running = false;
    time = 0;
    timeOutput.innerText = '00 : 00 : 00';
}

const pauseTimer = () => {
    pauseButton.classList.toggle('active');
    running = !running;
    if (!running) {
        tiles.forEach(el => el.removeEventListener('click', clicked))
    } else {
        enableListener();
    }
    increment();
}


const resetGame = () => {
    resetTimer();
    pauseButton.classList.remove('active');
    clicksCounter = 0;
    clicksCounterOutput.innerHTML = clicksCounter;
    activeTile = [];
    visibleTiles = [];
    score = 0;

    tiles.forEach(tile => {
        tile.classList.remove('is-flipped');
    })
    backTiles.forEach(tile => {
        tile.className = 'card__face card__face--back';
        tile.children[0].classList.remove('color');
    })

    setTimeout(startGame, 1000)
}


const clicked = (event) => {
    clicksCounter++;
    clicksCounterOutput.innerHTML = clicksCounter;

    let tile = event.currentTarget;
    tile.removeEventListener('click', clicked);
    tile.classList.add('is-flipped');

    if (activeTile.length > 2) return
    visibleTiles.push(tile.id);

    let tileBack = tile.lastElementChild;
    activeTile.push(tileBack.className);

    if (activeTile.length === 2) {
        tiles.forEach(el => el.removeEventListener('click', clicked))
        if (activeTile[0] == activeTile[1]) {
            score++;
            setTimeout(() => {
                document.getElementById(visibleTiles[0]).children[1].children[0].classList.add('color');
                document.getElementById(visibleTiles[0]).children[1].classList.add('disabled');
                tileBack.children[0].classList.add('color');
                tileBack.classList.add('disabled');
                activeTile = [];
                visibleTiles = [];
                enableListener()
                if (score === pairs) {
                    pauseTimer();
                    let gameResult = {
                        'easyTime': '',
                        'easyTimeToDisplay': '',
                        'easyClicks': '',
                        'mediumTime': '',
                        'mediumTimeToDisplay': '',
                        'mediumClicks': '',
                        'hardTime': '',
                        'hardTimeToDisplay': '',
                        'hardClicks': ''
                    };
                    if (pairs === 6) {

                        gameResult.easyTime = secunds;
                        gameResult.easyTimeToDisplay = timeResult;
                        gameResult.easyClicks = clicksCounter;
                    } else if (pairs === 8) {
                        gameResult.mediumTime = secunds;
                        gameResult.mediumTimeToDisplay = timeResult;
                        gameResult.mediumClicks = clicksCounter;
                    } else if (pairs === 10) {
                        gameResult.hardTime = secunds;
                        gameResult.hardTimeToDisplay = timeResult;
                        gameResult.hardClicks = clicksCounter;
                    }

                    setTimeout(() => {
                        modal.classList.add('displayBlock');
                        let loadResults = JSON.parse(localStorage.getItem('myElement'));
                        if (pairs === 6) {
                            let previousResult;
                            if (loadResults == null || loadResults.easyTime == '') {
                                previousResult = '';
                                let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                            } else if (loadResults.easyTime > secunds) {
                                previousResult = `Gratulation, you beat your record in the easy level! Your previous record:${loadResults.easyTimeToDisplay}`;
                                let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                            } else {
                                previousResult = `You don't beat your record! Your best time in the easy level: ${loadResults.easyTimeToDisplay}`;
                            }
                            resultText.innerHTML = `You won! Your time: ${timeResult}, your clickes: ${clicksCounter}.`;
                            resultInformation.innerHTML = previousResult;
                        } else if (pairs === 8) {
                            let previousResult;
                            if (loadResults == null || loadResults.mediumTime == '') {
                                previousResult = '';
                                let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                            } else if (loadResults.mediumTime > secunds) {
                                previousResult = `Gratulation, you beat your record in the medium level! Your previous record: ${loadResults.mediumTimeToDisplay}`;
                                let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                            } else {
                                previousResult = `You don't beat your record. Your best time in the medium level: ${loadResults.mediumTimeToDisplay}`;
                            }
                            resultText.innerHTML = `You won! Your time: ${timeResult}, your clickes: ${clicksCounter}.`
                            resultInformation.innerHTML = previousResult;
                        } else if (pairs === 10) {
                            let previousResult;
                            if (loadResults == null || loadResults.hardTime == '') {
                                previousResult = '';
                                let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                            } else if (loadResults.hardTime > secunds) {
                                previousResult = `Gratulation, you beat your record in the hard level! Your previous record: ${loadResults.hardTimeToDisplay}`;
                                let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                            } else {
                                previousResult = `You don't beat your record! Your best time in the hard level: ${loadResults.hardTimeToDisplay}`;
                            }
                            resultText.innerHTML = `You won! Your time: ${timeResult}, your clickes: ${clicksCounter}.`
                            resultInformation.innerHTML = previousResult;
                        }
                    }, 1000)
                }
            }, 500)
        } else {


            setTimeout(() => {
              document.getElementById(visibleTiles[0]).classList.remove('is-flipped');
                tile.classList.remove('is-flipped');
                activeTile = [];
                visibleTiles = [];
                enableListener()
            }, 800)
        }
    }
}



const startGame = () => {
    let actualTiles = document.querySelectorAll('.card');
    tiles = [...actualTiles];
    let actualBackTiles = document.querySelectorAll('.card__face--back');
    backTiles = [...actualBackTiles];

    if (tiles.length === 12) {
        gameArray = [...images];
        easyButton.classList.add('active');
    } else if (tiles.length === 16) {
        gameArray = [...imagesMedium];
    } else if (tiles.length === 20) {
        gameArray = [...imagesHard];
    }
    pairs = gameArray.length / 2;
    tiles.forEach(tile => {
        tile.addEventListener('click', clicked)
    })
    backTiles.forEach(backTile => {
        let randomImage = Math.floor(Math.random() * gameArray.length);
        backTile.classList.add(gameArray[randomImage]);
        gameArray.splice(randomImage, 1);
    })
    startTimer();
}



const mediumGame = () => {
    let tiles = document.querySelectorAll('.scene');
    if (tiles.length === 12) {
        for (i = 0; i < 4; i++) {
            let mediumTile = document.createElement('div');
            mediumTile.className = 'scene';
            let mediumTileBackId = 13 + i;
            mediumTile.id = `scene${1 + i}`;
            mediumTile.innerHTML = `
        
            <div class="card" id=${mediumTileBackId}>
                <div class="card__face card__face--front">
                </div>
                <div class="card__face card__face--back">
                    <div class="layer"></div>
                </div>
            </div>
        `;
          container.appendChild(mediumTile);
        }
    } else if (tiles.length === 20) {
        for (i = 5; i <= 8; i++) {
            let elId = `scene${i}`
            let removeEl = document.getElementById(elId);
            container.removeChild(removeEl);
        }
    } else if (tiles.length === 16) {
        return
    }

    resetGame();
    mediumButton.classList.add('active');
    easyButton.classList.remove('active');
    hardButton.classList.remove('active');
}


const hardGame = () => {
    let backIdCounter = 0;
    let sceneId = 0;
    let counter = 0;

    let tiles = document.querySelectorAll('.scene');
    if (tiles.length === 12) {
        counter = 8;
        backIdCounter = 13;
        sceneId = 1;
    } else if (tiles.length === 16) {
        counter = 4;
        backIdCounter = 17;
        sceneId = 5;
    } else if (tiles.length === 20) {
        return
    }

    for (i = 0; i < counter; i++) {
        let hardTile = document.createElement('div');
        hardTile.className = 'scene';
        let hardTileBackId = backIdCounter + i;
        hardTile.id = `scene${sceneId + i}`;
        hardTile.innerHTML = `
            
                <div class="card" id=${hardTileBackId}>
                    <div class="card__face card__face--front">
                    </div>
                    <div class="card__face card__face--back">
                        <div class="layer"></div>
                    </div>
                </div>
            `;

        container.appendChild(hardTile);
    }

    resetGame();
    hardButton.classList.add('active');
    easyButton.classList.remove('active');
    mediumButton.classList.remove('active');
}

const easyGame = () => {
    let tiles = document.querySelectorAll('.scene');
    let IdCounter = 0;
    let counter = 0;
    let sceneId = 0;
    if (tiles.length === 16) {
        counter = 1;
        idCounter = 4;

        for (let i = 1; i <= 4; i++) {
            let elId = `scene${i}`;
            console.log(elId);
            let removeEl = document.getElementById(elId);
            container.removeChild(removeEl);
        }

    } else if (tiles.length === 20) {
        counter = 17;
        idCounter = 20;
        for (let i = 1; i <= 8; i++) {
            let elId = `scene${i}`
            let removeEl = document.getElementById(elId);
            container.removeChild(removeEl);
        }
    } else {
        return
    }
    resetGame();
    easyButton.classList.add('active');
    hardButton.classList.remove('active');
    mediumButton.classList.remove('active');
}

resetButton.addEventListener('click', resetGame);
mediumButton.addEventListener('click', mediumGame);
easyButton.addEventListener('click', easyGame);
hardButton.addEventListener('click', hardGame);
pauseButton.addEventListener('click', pauseTimer);
playAgainButton.addEventListener('click', () => {
    modal.classList.remove('displayBlock');
    resetGame();
})


