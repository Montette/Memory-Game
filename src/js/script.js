


let tiles = document.querySelectorAll('.tile');
tiles = [...tiles];

let colors = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow'];
let colorsHard = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow', 'brown', 'brown', 'grey', 'grey'];
let activeTile = [];
let visibleTiles = [];
let pairs = colors.length/2;
let score = 0;
const resetButton = document.querySelector('.resetGameButton');
const hardButton = document.querySelector('.hardGameButton');
const playAgainButton = document.querySelector('.playAgain');
const modal = document.querySelector('.modal');
var resultText = document.querySelector('.result');


const resetGame = ()=> {
    // colors = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow'];

    clean()
    startGame()
}

const clean = ()=> {
    activeTile = [];
    activeTile = [];
    score = [];
    tiles.forEach(tile => { 
        tile.className = '';
        tile.className = 'tile'
        
    })
}

const clicked = ()=> {
    let tile = event.target;
    tile.classList.remove('hide');
    activeTile.push(tile.className);
    visibleTiles.push(tile.id);
    // console.log(visibleTiles);
    // console.log(activeTile)
    tile.removeEventListener('click', clicked);
    // console.log(score)
    if(activeTile.length === 2){
        // tiles.forEach(el=> el.removeEventListener('click', clicked))
        if(activeTile[0] == activeTile[1]){
            score ++;
            // tile.classList.remove('hide');
            // document.getElementById(visibleTiles[0]).classList.remove('hide');
            // tile.removeEventListener('click', clicked);
            // document.getElementById(visibleTiles[0]).removeEventListener('click', clicked);
            
            tile.classList.add('enabled');
            visibleTiles[0].classList.add('enabled');
            activeTile = [];
            visibleTiles =[];

         } else { setTimeout(()=>{
            tile.classList.add('hide');
            tile.addEventListener('click', clicked);
            // var cl = `.${activeTile[0].split(' ')[1]}`;
            // console.log(cl);
            document.getElementById(visibleTiles[0]).classList.add('hide');
            document.getElementById(visibleTiles[0]).addEventListener('click', clicked);
            activeTile = [];
            visibleTiles =[];
        }, 800)
        // tile.classList.add('hide');
        
        // if(activeTile[0] == activeTile[1]){

        //    tile.classList.add('hide');
            // modal.classList.add( 'displayBlock')
            // resultText.innerHTML = 'You loose!'
        // } else {
            // activeTile = [];
            // score ++
       

        }
    if (score === pairs) {
        // modal.className = '';
        modal.classList.add('displayBlock');
        resultText.innerHTML = 'You won!'
    }
    }
}

const startGame = ()=> {
    var tiles = document.querySelectorAll('.tile');
    tiles = [...tiles];
    var gameArray = [];
    if(tiles.length === 12){
        console.log(colors)
        gameArray = [...colors];
        console.log(gameArray)
    } else if (tiles.length === 16) {
        gameArray = [...colorsHard];
    }
    // console.log(colors);
    console.log(tiles.length);
    console.log(gameArray);
    tiles.forEach(tile=> {
        let color = Math.floor(Math.random()* gameArray.length)
        tile.classList.add(gameArray[color], 'hide');
        gameArray.splice(color, 1);
        tile.addEventListener('click', clicked)
    })  


// tiles.forEach(tile=> {
//     tile.addEventListener('click', clicked)
// })

}

const hardGame = () => {
    for(i=0; i < 4; i++) {
        var hardTile = document.createElement('div');
        hardTile.className = 'tile';
        hardTile.id = 13 + i;
    
        document.querySelector('.container').appendChild(hardTile);
    }
    // let hardArray = document.querySelectorAll('.tile');
    // hardArray = [...hardArray];



    // colors.push('brown', 'brown', 'grey', 'grey');
    // console.log(colors)
    
    clean();
    startGame();
    hardButton.removeEventListener('click', hardGame)
    // resetGame();

}

resetButton.addEventListener('click', resetGame);
hardButton.addEventListener('click', hardGame)


playAgainButton.addEventListener('click', ()=> {
    // modal.className = '';
    // modal.classList.add('modal', 'displayNone')
    modal.classList.remove('displayBlock');
    resetGame()
})

startGame()

