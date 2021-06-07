const gameBoard = (() => {
    const gameObj = {
        gameBoardArr: ['x', 'o'],
    };
    return gameObj;
})();

const displayController = (() => {
    const playerOne = () => emma.cacheMarkDOM();
    const playerTwo = () => nev.cacheMarkDOM();
    return {
        playerOne,
        playerTwo
    };
})();

const Player = (playerName, playerLetter) => {
    // const player = playerName;

    // cache DOM
    const getSquares = document.querySelector('.game-board');
    const getMarkSelect = document.querySelector('.marks');

    const squares = e => {
        if (e.target !== e.currentTarget && e.target.textContent == '') {
            // const divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
            const el = gameBoard.gameBoardArr.forEach(item => {
                if (item === playerLetter) {
                    e.target.textContent = `${item}`;
                }
            });
        } e.stopPropagation();
    }

    const cacheBoardDOM = () => {
        getSquares.addEventListener('click', squares);
    };

    const cacheMarkDOM = () => {
        getMarkSelect.addEventListener('click', e => {
            if (e.target !== e.currentTarget && e.target.textContent.toLowerCase() === playerLetter) {
                cacheBoardDOM();
            } e.stopPropagation();
        });
    }
    return { cacheMarkDOM };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');

displayController.playerOne();
displayController.playerTwo();