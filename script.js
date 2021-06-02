const gameBoard = (() => {
    const gameObj = {
        gameBoardArr: ['x', 'o', 'x', 'o', 'x', 'o'],
        getDOM() {
            const getSquares = document.getElementsByClassName('box');
            const squares = () => {
                getSquaresArr = Array.from(getSquares);
                getSquaresArr.forEach((item, index) => item.appendChild(this.gameBoardArr[index]));
            }
            getSquares.addEventListener('click', squares);
        }
    };
    return gameObj;
})();

const Player = (playerName) => {
    return { playerName };
};

const displayController = (() => {
    const playerOne = Player('Nevis');
    const playerTwo = Player('Tosman');
    return Object.assign({}, playerOne, playerTwo);
})();



