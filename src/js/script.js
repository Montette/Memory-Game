
let tiles = document.querySelectorAll('.tile');
tiles = [...tiles];

let colors = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow'];
let activeTile = [];
let pairs = colors.length/2;
let score = 0;
const resetButton = document.querySelector('.resetGameButton');
const hardButton = document.querySelector('.hardGameButton');
const playAgainButton = document.querySelector('.playAgain');
const modal = document.querySelector('.modal');
var resultText = document.querySelector('.result');


const resetGame = ()=> {
    colors = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow'];

    clean()
    startGame()
}

const clean = ()=> {
    activeTile = [];
    activeTile = [];
    tiles.forEach(tile => { 
        tile.className = '';
        tile.className = 'tile'
        
    })
}

const clicked = ()=> {
    let tile = event.target;
    tile.classList.remove('hide');
    activeTile.push(tile.className)
    console.log(activeTile)
    tile.removeEventListener('click', clicked);
    if(activeTile.length === 2){
        if(activeTile[0] !== activeTile[1]){
            // modal.className = '';
            modal.classList.add( 'displayBlock')
            resultText.innerHTML = 'You loose!'
        } else {
            activeTile = [];
            score ++

        }
    if (score === pairs) {
        // modal.className = '';
        modal.classList.add('displayBlock');
        resultText.innerHTML = 'You won!'
    }
    }
}

const startGame = ()=> {

    tiles.forEach(tile=> {
        let color = Math.floor(Math.random()* colors.length)
        tile.classList.add(colors[color]);
        colors.splice(color, 1);
    })  
setTimeout(function(){
    tiles.forEach(tile=> tile.classList.add('hide'))
}, 2000)   

tiles.forEach(tile=> {
    tile.addEventListener('click', clicked)
})

}

const hardGame = () => {
    for(i=0; i < 4; i++) {
        var hardTile = document.createElement('div');
        hardTile.className = 'tile';
    
        document.querySelector('.container').appendChild(hardTile);
    }

    colors.push('brown', 'brown', 'grey', 'grey');
    clean();
    startGame();

}

resetButton.addEventListener('click', resetGame);
// hardButton.addEventListener('click', hardGame)


playAgainButton.addEventListener('click', ()=> {
    // modal.className = '';
    // modal.classList.add('modal', 'displayNone')
    modal.classList.remove('displayBlock');
    resetGame()
})

// startGame()

