const gameBoard = (() => {
    const gameObj = {
        gameBoardArr: ['x', 'o', 'x', 'o', 'x', 'o', 'o', 'x', 'o'],
    };
    return gameObj;
})();

const displayController = (() => { })();

const Player = (playerName, playerLetter) => {
    const player = playerName;
    const getSquares = document.querySelector('.game-board');
    const squares = e => {
        if (e.target !== e.currentTarget) {
            const divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
            const el = gameBoard.gameBoardArr.forEach((item, index) => {
                if (item === 'o' && index === divIndex || item === 'x' && index === divIndex) {
                    e.target.textContent = `${item}`;
                } e.stopPropagation();
            });
        }
    };
    const cacheDOM = () => {
        getSquares.addEventListener('click', squares);
    };

    const addMark = divTgt => {
    };
    return { player, cacheDOM };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');

emma.cacheDOM();
nev.cacheDOM();