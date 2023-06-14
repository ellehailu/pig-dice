function Game(){
    this.gamePlay = {}
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.activePlayer = playerOne;
    this.scoreTotalPlayerOne = 0;
    this.scoreTotalPlayerTwo = 0;
}

function GamePlay(){
    //player rolls
    //or player holds
}

GamePlay.prototype.Roll() = function (){
    let diceRoll = Math.floor(Math.random() * 7)
        if (diceRoll === 1) {
            if (activePlayer === playerOne){
                scoreTotalPlayerOne = 0;
            }
            else if (activePlayer === playerTwo){
                scoreTotalPlayerTwo = 0;
            }
            //switches the active player, it is now the other player's turn
            this.SwitchPlayer()
        }
        else if (diceRoll !== 1) {
            if (activePlayer === playerOne){
                scoreTotalPlayerOne = scoreTotalPlayerOne + diceRoll;
                return scoreTotalPlayerOne;
            }
    
            else if (activePlayer === playerTwo){
                scoreTotalPlayerTwo = scoreTotalPlayerTwo + diceRoll;
                return scoreTotalPlayerTwo;
            }
            //player can roll again
        }
       
        
    }

GamePlay.prototype.Hold = function (){
    //needs to be responsive to the user clicking 'hold'
    this.SwitchPlayer();
}

GamePlay.prototype.SwitchPlayer = function (){
    if(activePlayer === playerOne){
        activePlayer = playerTwo;
    }
    else if(activePlayer === playerTwo){
        activePlayer = playerOne;
    }
}


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

