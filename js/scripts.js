function PigDice() {
this.dice = {}

}

function PlayerMove(){
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