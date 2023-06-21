import { directive } from "@babel/types";
import { GamePlay } from "./../src/pigDice.js"
import { Game } from "./../src/pigDice.js";

describe('create a beforeEach()', () => {
    let game;
    let gamePlay;
    beforeEach(() => {
    game = new Game("Suzanne", "Elle");
    gamePlay = new GamePlay(game);
})
    test('should create a Game object with two players',()=> {
        expect(game.playerOne).toEqual("Suzanne");
        expect(game.playerTwo).toEqual("Elle");
    });
    test('should create a GamePlay object with a game', () => {
        
        expect(gamePlay.game).toEqual(game);
    });
    test('should test rolling', () => {
        let randomNumber = gamePlay.Roll();
        expect(randomNumber).toBeLessThanOrEqual(6);
    })
});

