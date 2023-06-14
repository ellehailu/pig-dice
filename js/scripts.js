function PigDice() {
this.dice = {}

}



function Players(playerOne, playerTwo){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
}

Players.prototype.PlayerRoll() = function(){
    let scoreTotal = 0;
    let diceRoll = Math.floor(Math.random() * 7)
        if (diceRoll === 1) {
            scoreTotal = scoreTotal * 0;
        }
        else if (diceRoll !== 1) {
            scoreTotal = scoreTotal + diceRoll;
        }
        return scoreTotal;
    }

    Players.prototype.PlayerPass() = function(){
        let activePlayer = playerOne
        if (playerOne.scoreTotal === 0 || playerOne.hold) {
            activePlayer = playerTwo
        }
        return activePlayer;
    }