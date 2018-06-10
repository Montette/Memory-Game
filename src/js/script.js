







// let tiles = document.querySelectorAll('.tile');
// tiles = [...tiles];
let tiles = [];
let backTiles = [];

let images = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f'];
let imagesMedium = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h'];
let imagesHard = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j'];
let gameArray = [];
let activeTile = [];
let visibleTiles = [];
let pairs = 0;
let score = 0;
const resetButton = document.querySelector('.resetGameButton');
const mediumButton = document.querySelector('.mediumGameButton');
const easyButton = document.querySelector('.easyGameButton');
const hardButton = document.querySelector('.hardGameButton');
const playAgainButton = document.querySelector('.playAgain');
const pauseButton = document.querySelector('.pauseGameButton');
const modal = document.querySelector('.modal');
const resultText = document.querySelector('.result');
const resultInformation = document.querySelector('.resultInformation');
const container = document.querySelector('.container');

let clicksCounter = 0;
const clicksCounterOutput = document.querySelector('.clicksCounter');
let running = false;
let time = 0;
let timeResult = '';
let secunds = 0;

const timeOutput = document.querySelector('.timer');





const enableListener = ()=> {
    let actualTiles = [...document.querySelectorAll('.card')];
    let enabledTiles = [...document.querySelectorAll('.card__face--back')].filter(el => !el.children[0].classList.contains("disabled"));
    console.log(enabledTiles);

enabledTiles.forEach(el=> {
    
    el.parentElement.addEventListener('click', clicked)

})

}


const increment=()=> {
    if (running == true) {
      setTimeout(function() {
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
        timeResult = hours + ' : ' + mins + ' : ' + secs;
        timeOutput.innerHTML = timeResult;
        
        increment();
      }, 100)
    }
  }
  

const startTimer =()=> {
  if (running == false) {
    running = true;
    increment();
  }
}

const resetTimer =()=> {
  running = false;
  time = 0;
  timeOutput.innerText = '00 : 00 : 00';
}

const pauseTimer = ()=> {
    pauseButton.classList.toggle('active');
    running = !running;
    console.log(running);
    if(!running) {
        tiles.forEach(el=> el.removeEventListener('click', clicked))
    } else {
        enableListener();
    }
    increment();
    // tiles.forEach(el=> el.removeEventListener('click', clicked));
  }
  










const resetGame = ()=> {
    // colors = ['red', 'red', 'green', 'green', 'blue', 'blue', 'purple', 'purple', 'orange', 'orange', 'yellow', 'yellow'];

    // clean()
    resetTimer();
    pauseButton.classList.remove('active');
    // easyButton.classList.remove('active');
    // hardButton.classList.remove('active');
    // mediumButton.classList.remove('active');
    clicksCounter = 0;
    clicksCounterOutput.innerHTML = clicksCounter;
    activeTile = [];
    visibleTiles = [];
    score = 0;

    tiles.forEach(tile => {
       
        tile.classList.remove('is-flipped');
        // setTimeout((tile)=> tile.classList.add('hide'), 500)
        
        
    })

    // setTimeout( ()=>  {
        backTiles.forEach(tile => { 
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
        tile.children[0].classList.remove('color');
        
    })
// }, 500


 

    
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

// const enableListener = ()=> {
//     let actualTiles = [...document.querySelectorAll('.card')];
//     let enabledTiles = [...document.querySelectorAll('.card__face--back')].filter(el => !el.children[0].classList.contains("disabled"));
//     console.log(enabledTiles);

// enabledTiles.forEach(el=> {
    
//     el.parentElement.addEventListener('click', clicked)

// })

// }

const clicked = (event)=> {
    console.log(secunds);
    clicksCounter++;
    clicksCounterOutput.innerHTML = clicksCounter;
    
    // let clickedTile = event.target;
    // let tile = clickedTile.parentElement;
    let tile = event.currentTarget;
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
            document.getElementById(visibleTiles[0]).children[1].children[0].classList.add('color');
            document.getElementById(visibleTiles[0]).children[1].classList.add('disabled');
            
            
            tileBack.children[0].classList.add('color');
            tileBack.classList.add('disabled');

         
            activeTile = [];
            visibleTiles =[];
           
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
                if(pairs === 6 ) {
                   
                //      gameResult = {
                //         'easyTime': secunds,
                //         'easyTimeToDisplay': timeResult,
                //         'easyClicks': clicksCounter
                 
                // }
                    gameResult.easyTime = secunds;
                    gameResult.easyTimeToDisplay = timeResult;
                    gameResult.easyClicks = clicksCounter;
                

                } else if (pairs === 8 ) {
                   
                    gameResult.mediumTime = secunds;
                    gameResult.mediumTimeToDisplay = timeResult;
                    gameResult.mediumClicks = clicksCounter;
                } else if (pairs === 10) {
                 
                    gameResult.hardTime = secunds;
                    gameResult.hardTimeToDisplay = timeResult;
                    gameResult.hardClicks = clicksCounter;
                }


                
                setTimeout(()=> {
                    modal.classList.add('displayBlock');
                    let loadResults = JSON.parse(localStorage.getItem('myElement'));
                   
                    console.log(loadResults);
                    // resultText.innerHTML = `You won! Your time: ${timeResult}, your clickes: ${clicksCounter}.
                    // Your previous result: ${loadResults.easyTimeToDisplay}`;

                    // let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));

                    if(pairs === 6 ) {
                        
                        // let previousResult = loadResults.easyTime > secunds ? `Gratulation, you beat your record in easy level! Your previous record:${loadResults.easyTimeToDisplay}`: `Last time you was better! Your record on easy level: ${loadResults.easyTimeToDisplay}`;
                        let previousResult;
                         if (loadResults == null || loadResults.easyTime == '') {
                            previousResult = '';
                            let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                         } else if(loadResults.easyTime > secunds) {
                            previousResult = `Gratulation, you beat your record in the easy level! Your previous record:${loadResults.easyTimeToDisplay}`;
                            let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));

                        } else {
                            previousResult = `You don't beat your record! Your best time in the easy level: ${loadResults.easyTimeToDisplay}`;
                        }
                         resultText.innerHTML = `You won! Your time: ${timeResult}, your clickes: ${clicksCounter}.`;
                         resultInformation.innerHTML = previousResult;
   
                   } else if (pairs === 8 ) {
                     
                    let previousResult;
                    if (loadResults == null || loadResults.mediumTime == '') {
                       previousResult = '';
                       let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                    } else if(loadResults.mediumTime > secunds) {
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
                    } else if(loadResults.hardTime > secunds) {
                       previousResult = `Gratulation, you beat your record in the hard level! Your previous record: ${loadResults.hardTimeToDisplay}`;
                       let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));

                   } else {
                       previousResult = `You don't beat your record! Your best time in the hard level: ${loadResults.hardTimeToDisplay}`;
                   }
                    resultText.innerHTML = `You won! Your time: ${timeResult}, your clickes: ${clicksCounter}.`
                    resultInformation.innerHTML = previousResult;
                   }
                    
                //    let savedResults = localStorage.setItem('myElement', JSON.stringify(gameResult));
                }, 1000)
               
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
    let actualBackTiles = document.querySelectorAll('.card__face--back');
    backTiles = [...actualBackTiles];
    

    if(tiles.length === 12){
     
        gameArray = [...images];
        console.log('gameArray: ' + gameArray);
        easyButton.classList.add('active');
    } else if (tiles.length === 16) {
        gameArray = [...imagesMedium];
        console.log('gameArray: ' + gameArray);
        console.log(gameArray.length)
    } else if (tiles.length === 20) {
        gameArray = [...imagesHard];
        console.log('gameArray: ' + gameArray);
        console.log(gameArray.length)
    }
    pairs = gameArray.length/2;

    console.log(tiles.length);
    console.log('gameArray: ' + gameArray);
    console.log(pairs);

    // let shuffleArray = imagesHard.sort(function() { return 0.5 - Math.random() });

    //     if(tiles.length === 12){
    //      shuffleArray.length = 12;   
        
    //     console.log('gameArray: ' + gameArray)
    // } else if (tiles.length === 16) {
    //     shuffleArray.length = 16;  
    // } else if (tiles.length === 20) {
    //     shuffleArray.length = 20;  
    // }
    // gameArray = [...shuffleArray];
    // console.log('gameArray: ' + gameArray)
    // pairs = gameArray.length/2;




    tiles.forEach(tile=> {

        tile.addEventListener('click', clicked)

    })  
    backTiles.forEach(backTile=> {
        let randomImage = Math.floor(Math.random()* gameArray.length);
        backTile.classList.add(gameArray[randomImage]);
        gameArray.splice(randomImage, 1);

    })

    
    startTimer();
    

}







const mediumGame = () => {
    let tiles = document.querySelectorAll('.scene');
    if(tiles.length === 12)   {
    for(i=0; i < 4; i++) {
        let mediumTile = document.createElement('div');
        mediumTile.className = 'scene';
        let mediumTileBackId = 13 + i;
        mediumTile.id = `scene${1 + i}`;
        mediumTile.innerHTML = `
        
            <div class="card" id=${mediumTileBackId}>
                <div class="card__face card__face--front">
                    <span class="corner"></span>
                    <span class="corner"></span>
                    <span class="corner"></span>
                    <span class="corner"></span>
                </div>
                <div class="card__face card__face--back">
                    <div class="layer"></div>
                </div>
            </div>
    
        `;
  


    
        let aaa = document.querySelector('.container').appendChild(mediumTile);
    }
} else if (tiles.length === 20) {
    for(i = 5; i <= 8; i++) {
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
        if(tiles.length === 12) {
            counter = 8;
            backIdCounter = 13;
            sceneId = 1;
        } else if(tiles.length === 16) {
            counter = 4;
            backIdCounter = 17;
            sceneId = 5;
        } else if(tiles.length === 20) {
            return
        }


        for(i = 0; i < counter; i++) {
            let hardTile = document.createElement('div');
            hardTile.className = 'scene';
            let hardTileBackId = backIdCounter + i;
            hardTile.id = `scene${sceneId + i}`;
            hardTile.innerHTML = `
            
                <div class="card" id=${hardTileBackId}>
                    <div class="card__face card__face--front">
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                        <span class="corner"></span>
                    </div>
                    <div class="card__face card__face--back">
                        <div class="layer"></div>
                    </div>
                </div>
        
            `;
        
            let bbb = document.querySelector('.container').appendChild(hardTile);
        }
    // let MediumArray = document.querySelectorAll('.tile');
    // MediumArray = [...MediumArray];

    

    // colors.push('brown', 'brown', 'grey', 'grey');
    // console.log(colors)
    
    // clean();
    // startGame();

 
    resetGame();
    // mediumButton.removeEventListener('click', mediumGame);
    // easyButton.addEventListener('click', easyGame);
    // resetGame();

    
hardButton.classList.add('active');
easyButton.classList.remove('active');
mediumButton.classList.remove('active');


}

const easyGame = () => {
    let tiles = document.querySelectorAll('.scene');
    let IdCounter = 0;
    let counter = 0;
    let sceneId = 0;
    console.log(tiles.length);
    if (tiles.length === 16) {
     counter = 1;
     idCounter = 4;
        
     for(let i = 1; i <=4; i++) {
        let elId = `scene${i}`;
        console.log(elId);
        let removeEl = document.getElementById(elId);
        container.removeChild(removeEl);
    }
        // easyButton.removeEventListener('click', easyGame);
        // mediumButton.addEventListener('click', mediumGame)
    } else if(tiles.length === 20) {
        counter = 17;
     idCounter = 20;
     for(let i = 1; i <= 8; i++) {
        let elId = `scene${i}`
        let removeEl = document.getElementById(elId);
        container.removeChild(removeEl);
    }
    } else {
        return
    }

    // for(i = counter; i <= IdCounter; i++) {
    //     let elId = `scene${i}`;
    //     let removeEl = document.getElementById(elId);
    //     container.removeChild(removeEl);
    // }
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



playAgainButton.addEventListener('click', ()=> {
    // modal.className = '';
    // modal.classList.add('modal', 'displayNone')
    modal.classList.remove('displayBlock');
    resetGame();
   
})


// startGame() 