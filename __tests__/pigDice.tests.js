import { Game } from "./../src/pigDice.js";

describe('Game', () => {
    test('should create a Game object with two players',()=> {
        const game = new Game("Suzanne", "Elle");
        expect(game.playerOne).toEqual("Suzanne");
        expect(game.playerTwo).toEqual("Elle");
    });
}); 


