function Game(playerOne, playerTwo){
    this.gamePlay = {}
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.activePlayer = playerOne;
    this.scoreTotalPlayerOne = 0;
    this.scoreTotalPlayerTwo = 0;
}

function GamePlay(game){
    //player rolls
    //or player holds
    this.game = game;
}

GamePlay.prototype.Roll = function(){
    let diceRoll = Math.floor(Math.random() * 7)
    let rollTotal = 0
        if (diceRoll === 1) {
            if (this.game.activePlayer === this.game.playerOne){
                rollTotal = 0
                this.game.scoreTotalPlayerOne = this.game.scoreTotalPlayerOne + rollTotal;
            }
            else if (this.game.activePlayer === this.game.playerTwo){
                rollTotal = 0
                this.game.scoreTotalPlayerTwo = this.game.scoreTotalPlayerTwo + rollTotal;
            }
            //switches the active player, it is now the other player's turn
            this.SwitchPlayer()
        }
        else if (diceRoll !== 1) {
            if (this.game.activePlayer === this.game.playerOne){
                rollTotal = diceRoll
                this.game.scoreTotalPlayerOne = this.game.scoreTotalPlayerOne + rollTotal;
                return this.game.scoreTotalPlayerOne;
            }
    
            else if (this.game.activePlayer === playerTwo){
                rollTotal = diceRoll
                this.game.scoreTotalPlayerTwo = this.game.scoreTotalPlayerTwo + rollTotal;
                return this.game.scoreTotalPlayerTwo;
            }
            //player can roll again
        } 
        
    }

GamePlay.prototype.Hold = function (){
    //needs to be responsive to the user clicking 'hold'
    this.SwitchPlayer();
}

GamePlay.prototype.SwitchPlayer = function (){
    if(this.game.activePlayer === this.game.playerOne){
        this.gamae.activePlayer = this.game.playerTwo;
    }
    else if(this.game.activePlayer === this.game.playerTwo){
        this.game.activePlayer = this.game.playerOne;
    }
}

//UI Logic

function handleForm(event) {
event.preventDefault();
const inputPlayerOne = document.querySelector("input#player-one-name").value;
const inputPlayerTwo = document.querySelector("input#player-two-name").value;
let newGamePlay = new GamePlay(game);


}

function results(resultsToDisplay) {
    let resultsDiv = document.querySelector("div#results");
    resultsDiv.innerText = null;
    const p = document.createElement("p");
    p.append("Player one Score", scoreTotalPlayerOne)
    p.append("player two score", scoreTotalPlayerTwo)
    // Object.keys(resultsToDisplay.gamePlay).forEach

}

window.addEventListener("load", function (){
    this.document.getElementById("hold").addEventListener("click", GamePlay.prototype.Hold);
    this.document.getElementById("roll").addEventListener("click", GamePlay.prototype.Roll);
})








// function PigDice() {
// this.dice = {}

// }
// function Players(playerOne, playerTwo){
//     this.playerOne = playerOne;
//     this.playerTwo = playerTwo;
//     this.activePlayer = playerOne;
    
// }

// Players.prototype.PlayerRoll() = function(){
//     let scoreTotal = 0;
//     let diceRoll = Math.floor(Math.random() * 7)
//         if (diceRoll === 1) {
//             scoreTotal = scoreTotal * 0;
//             this.PlayerPass();
//         }
//         else if (diceRoll !== 1) {
//             scoreTotal = scoreTotal + diceRoll;
//         }
//         return scoreTotal;
//     }

// Players.prototype.PlayerPass() = function(){

//     if (activePlayer === playerOne && activePlayer.scoreTotal === 0 || activePlayer.hold) {
//         activePlayer = playerTwo
//     }
//     else if (activePlayer === playerTwo && activePlayer.scoreTotal === 0 || activePlayer.hold){
//         activePlayer = playerOne
//     }

//     return activePlayer ;
// }

