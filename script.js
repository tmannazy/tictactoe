const gameBoard = (() => {
    const gameObj = {
        gameBoardArr: ['x', 'o', 'x', 'o', 'x', 'o'],
    };
    return gameObj;
})();

const displayController = (() => { })();

const Player = (playerName) => {
    const player = playerName;
    const getSquares = document.querySelector('.game-board');
    // const cacheDOM = () => {
    // getSquaresArr = Array.from(getSquares);
    // getSquaresArr.forEach(item => {
    const squares = e => {
        if (e.target !== e.currentTarget) {
            e.target.appendChild(gameBoard.gameObj);
        } e.stopPropagation();
    };
    const cacheDOM = () => {
        getSquares.addEventListener('click', squares);
    };

    const addMark = () => {

    };
    return { player, cacheDOM };
};

const emma = Player('Emmanuel');

emma.cacheDOM();