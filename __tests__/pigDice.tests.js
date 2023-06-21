import { GamePlay } from "./../src/pigDice.js"
import { Game } from "./../src/pigDice.js";

describe('create a beforeEach()', () => {
    let game;
    beforeEach(() => {
    game = new Game("Suzanne", "Elle");
})
    test('should create a Game object with two players',()=> {
        expect(game.playerOne).toEqual("Suzanne");
        expect(game.playerTwo).toEqual("Elle");
    });
    test('should create a GamePlay object with a game', () => {
        const gamePlay = new GamePlay(game);
        expect(gamePlay.game).toEqual(game);
    });
});