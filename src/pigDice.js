export function Game(playerOne, playerTwo){
    this.gamePlay = {}
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.activePlayer = playerOne;
    this.scoreTotalPlayerOne = 0;
    this.scoreTotalPlayerTwo = 0;
}
export function GamePlay(game){
    //player rolls
    //or player holds
    this.game = game;
}

GamePlay.prototype.Roll = function(){
    let rollTotal = 0
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
         if (diceRoll === 1) {
            if (this.game.activePlayer === this.game.playerOne){
                rollTotal = 0
                this.game.scoreTotalPlayerOne = this.game.scoreTotalPlayerOne + rollTotal;
                console.log("condition 1 works")
             this.SwitchPlayer();
                return this.game.scoreTotalPlayerOne;
            }
            else if (this.game.activePlayer === this.game.playerTwo){
                rollTotal = 0
                this.game.scoreTotalPlayerTwo = this.game.scoreTotalPlayerTwo + rollTotal;
                console.log("condition 2 works")
                this.SwitchPlayer();
                return this.game.scoreTotalPlayerTwo;
            }
            
        }
        else if (diceRoll !== 1) {
            if (this.game.activePlayer === this.game.playerOne){
                rollTotal = diceRoll
                this.scoreTotalPlayerOne = this.scoreTotalPlayerOne + rollTotal;
                console.log("condition 3 works")
                //this.Win();
                return this.game.scoreTotalPlayerOne;
            }
            
            else if (this.game.activePlayer === this.game.playerTwo){
                rollTotal = diceRoll
                this.game.scoreTotalPlayerTwo = this.game.scoreTotalPlayerTwo + rollTotal;
                console.log("condition 4 works")
                //this.Win();
                return this.game.scoreTotalPlayerTwo;
            }
        }   
}

// GamePlay.prototype.Hold = function (){
//     //needs to be responsive to the user clicking 'hold'
//     this.SwitchPlayer();
// }

GamePlay.prototype.SwitchPlayer = function (){
    if(this.game.activePlayer === this.game.playerOne){
        this.game.activePlayer = this.game.playerTwo;
    }
    else if(this.game.activePlayer === this.game.playerTwo){
        this.game.activePlayer = this.game.playerOne;
    }
    return this.game.activePlayer;
}

// GamePlay.prototype.Win = function (){
//     if(this.game.scoreTotalPlayerOne >= 100 || this.game.scoreTotalPlayerTwo >= 100){
//         this.game.scoreTotalPlayerOne = 0;
//         this.game.scoreTotalPlayerTwo = 0;
//         this.game.activePlayer = this.game.playerOne;
//         console.log("game resets because one player got to 100")
//     }
// }

// //UI Logic

// let game = new Game();
// let gamePlay = new GamePlay(game);

// function handleForm(event) {
// event.preventDefault();
// const inputPlayerOne = document.querySelector("input#player-one-name").value;
// const inputPlayerTwo = document.querySelector("input#player-two-name").value;
// game.playerOne = inputPlayerOne;
// game.playerTwo = inputPlayerTwo;
// game.activePlayer = inputPlayerOne;
// }

// function results(resultsToDisplay) {
//     let resultsDiv = document.querySelector("div#results");
//     resultsDiv.innerText = null;
//     const p = document.createElement("p");
//     p.append("Player one Score", scoreTotalPlayerOne)
//     p.append("player two score", scoreTotalPlayerTwo)
//     // Object.keys(resultsToDisplay.gamePlay).forEach

// }

// window.addEventListener("load", function (){
//     this.document.getElementById("start-game").addEventListener('submit', handleForm)
//     this.document.getElementById("hold").addEventListener("click", gamePlay.Hold);
//     this.document.getElementById("roll").addEventListener("click", gamePlay.Roll);
// })
