







// let tiles = document.querySelectorAll('.tile');
// tiles = [...tiles];
let tiles = [];
let backTiles = [];

let colors = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow'];
let colorsHard = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow', 'brown', 'brown', 'grey', 'grey'];
let gameArray = [];
let activeTile = [];
let visibleTiles = [];
let pairs = 0;
let score = 0;
const resetButton = document.querySelector('.resetGameButton');
const hardButton = document.querySelector('.hardGameButton');
const playAgainButton = document.querySelector('.playAgain');
const modal = document.querySelector('.modal');
var resultText = document.querySelector('.result');


const resetGame = ()=> {
    // colors = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow'];

    // clean()

    activeTile = [];
    visibleTiles = [];
    score = 0;


    tiles.forEach(tile => {
       
        tile.classList.remove('is-flipped');
        // setTimeout((tile)=> tile.classList.add('hide'), 500)
        
        
    })
    setTimeout( ()=>  {backTiles.forEach(tile => { 
        // tile.className = '';
        

    
        
        // tile.className = 'tile'

        // var tileClasses = tile.className;
        // console.log('activeTail' + activeTile);
        // console.log(tileClasses);
        // tileClasses = tileClasses.split(' ');
        // console.log(tileClasses);
        // tileClasses.length = 2;
        // console.log(tileClasses);
        // tileClasses = tileClasses.join(' ');
        // tile.className = tileClasses;

        tile.className = 'card__face card__face--back';
        tile.children[0].classList.remove('disabled');
        
    })
}, 1000

)
 

    
    setTimeout(startGame, 1000)
    // startGame()
}


// const clean = ()=> {
//     activeTile = [];
//     activeTile = [];
//     score = [];

//     tiles.forEach(tile => { 
//         tile.className = '';
    
        
//         tile.className = 'tile'
        
        
//     })
// }

const enableListener = ()=> {
    let actualTiles = [...document.querySelectorAll('.card')];
    let enabledTiles = [...document.querySelectorAll('.card__face--back')].filter(el => !el.children[0].classList.contains("disabled"));
    console.log(enabledTiles);

// actualTiles.forEach(el=> {
    
//     el.addEventListener('click', clicked)

// })

enabledTiles.forEach(el=> {
    
    el.parentElement.addEventListener('click', clicked)

})


}

const clicked = (event)=> {
    
    let clickedTile = event.target;
    let tile = clickedTile.parentElement;
    // let tile;
// if(clickedTile.classList.contains('card__face--front')) {
//      tile = clickedTile.parentElement;
//     event.target = tile;
// } else if(clickedTile.classList.contains('disabled')) {
//      tile = clickedTile.parentNode.parentNode;
//      console.log(tile);
//      console.log('aaaaa');
//     event.target = tile;

// }
console.log(event.target);
console.log(tile);
tile.removeEventListener('click', clicked);
    // let frontTile = event.target;
    // let tile = frontTile.parentElement;

    tile.classList.add('is-flipped');
    // activeTile.push(tile.className);
    if(activeTile.length > 2) return
    visibleTiles.push(tile.id);
    // console.log(document.getElementById(visibleTiles[0]).children[1].children[0]);

    // let tileBack = document.getElementById(tile.id).lastElementChild;

    let tileBack = tile.lastElementChild;

    activeTile.push(tileBack.className);
    

    console.log(activeTile)
    
    
    console.log(visibleTiles);
    
    console.log('tile id' + tile.id)
    
    // if(a === visibleTiles[1].id) return
    
    if(activeTile.length === 2){
        // if(tile.id === visibleTiles[1].id) return
        tiles.forEach(el=> el.removeEventListener('click', clicked))
        // if(tile.id === visibleTiles[0].id) return
        if(activeTile[0] == activeTile[1]){
            score ++;
            console.log('score: ' + score)
            // tile.classList.remove('hide');
            // document.getElementById(visibleTiles[0]).classList.remove('hide');
            // tile.removeEventListener('click', clicked);
            // document.getElementById(visibleTiles[0]).removeEventListener('click', clicked);
            
            // tile.classList.add('enabled');
            // visibleTiles[0].classList.add('enabled');
            setTimeout(()=> {
             
            // document.getElementById(visibleTiles[0]).lastElementChild.childElement.classList.add('disabled');
            document.getElementById(visibleTiles[0]).children[1].children[0].classList.add('disabled');
            
            tileBack.children[0].classList.add('disabled');

         
            activeTile = [];
            visibleTiles =[];
           
            enableListener()
            if (score === pairs) {
                modal.classList.add('displayBlock');
                resultText.innerHTML = 'You won!'
            }
            
       
           
        }, 500)
        // tiles.forEach(el=> el.addEventListener('click', clicked))
        // tile.addEventListener('click', clicked);
            // if (score === pairs) {
            //     modal.classList.add('displayBlock');
            //     resultText.innerHTML = 'You won!'
            // }

           

         } else { 
             
            
            setTimeout(()=>{
            
            document.getElementById(visibleTiles[0]).classList.remove('is-flipped');
            tile.classList.remove('is-flipped');
          
            // tile.addEventListener('click', clicked);
            // var cl = `.${activeTile[0].split(' ')[1]}`;
            // console.log(cl);
         
            // document.getElementById(visibleTiles[0]).addEventListener('click', clicked);
            activeTile = [];
            visibleTiles =[];
            // tiles.forEach(el=> el.addEventListener('click', clicked))
            enableListener()
        }, 800)
        
        // tiles.forEach(el=> el.addEventListener('click', clicked))
        // tile.classList.add('hide');
        
        // if(activeTile[0] == activeTile[1]){

        //    tile.classList.add('hide');
            // modal.classList.add( 'displayBlock')
            // resultText.innerHTML = 'You loose!'
        // } else {
            // activeTile = [];
            // score ++
       
        
        }
    // if (score === pairs) {
    //     // modal.className = '';
    //     modal.classList.add('displayBlock');
    //     resultText.innerHTML = 'You won!'
    // }
   
    // tile.addEventListener('click', clicked);
//     let actualTiles = [...document.querySelectorAll('.tile')];
//     let enabledTiles = actualTiles.filter(el => !el.classList.contains("disabled"));
//     console.log(enabledTiles);

// enabledTiles.forEach(el=> {
    
//     el.addEventListener('click', clicked)

// })


}


}



const startGame = ()=> {
    let actualTiles = document.querySelectorAll('.card');
    tiles = [...actualTiles];
    // let actualTiles = document.querySelectorAll('.card__face--front');
    // tiles = [...actualTiles];
    let actualBackTiles = document.querySelectorAll('.card__face--back');
    backTiles = [...actualBackTiles];
    
    // var gameArray = [];
    if(tiles.length === 12){
        console.log(colors)
        gameArray = [...colors];
        console.log('gameArray: ' + gameArray)
    } else if (tiles.length === 16) {
        gameArray = [...colorsHard];
        console.log('gameArray: ' + gameArray)
    }
    pairs = gameArray.length/2;
    // console.log(colors);
    console.log(tiles.length);
    console.log('gameArray: ' + gameArray);
    console.log(pairs);
    tiles.forEach(tile=> {
        // let color = Math.floor(Math.random()* gameArray.length)
        // tile.classList.add(gameArray[color], 'hide');
        // gameArray.splice(color, 1);

        // tile.removeEventListener('click', this.clicked);
        // tile.addEventListener('click', clicked.bind(this, tile))
        tile.addEventListener('click', clicked)

        // let Aa = function () {

        //     this.el = tile;
        //     this.clicked = this.clicked.bind(this);
        //     this.addEvents();
        //   }
          
        //   Aa.prototype.addEvents = function () {
        //     this.el.addEventListener('click', this.clicked, tile);
        //   }
          
        //   Aa.prototype.removeEvents = function () {
        //     this.el.removeEventListener('click', this.clicked);
        //   }
          
        //   Button.prototype.clickHandler = function () {
          
        //   }





    })  
    backTiles.forEach(backTile=> {
        let color = Math.floor(Math.random()* gameArray.length);
        backTile.classList.add(gameArray[color]);
        gameArray.splice(color, 1);

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
    
    // clean();
    // startGame();
    resetGame();
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