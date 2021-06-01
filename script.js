const gameBoard = {
    gameBoardArr: ['x', 'o', 'x', 'o', 'x', 'o'],
};

const playerOne = {};
const playerTwo = {};
const gameFlow = {};
const player = (playerName) => {
    // const playerObj = Object.create(playerBehaviour);
    // playerObj.playerName = playerName;
    // playerObj.playerLetter = playerLetter;
    return {
        playerName,
        playerLetter,
    };
    // playerObj;
};

playerBehaviour = {
    sayHello() {
        return `${this.playerLetter} ${this.playerName}`;
    }
};

// playerGoal = {
//     score() {
//         return sayHello;
//     }
// }