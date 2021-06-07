const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];
    return { gameBoardArr };
})();

const displayController = (() => {
    // const playerOne = () => emma.cacheMarkDOM();
    // const playerTwo = () => nev.cacheMarkDOM();

    // cache DOM
    const getSquares = document.querySelector('.game-board');

    const squares = e => {
        if (e.target !== e.currentTarget && e.target.textContent == '') {
            // const divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
            const el = gameBoard.gameBoardArr.forEach(item => {
                if (item === playerLetter) {
                    e.target.textContent = item;
                }
            });
        } e.stopPropagation();
    }

    const cacheBoardDOM = () => {
        getSquares.addEventListener('click', squares);
    };

    return {
        cacheBoardDOM
    };

})();

const Player = (playerName, playerLetter) => {
    const getMarkSelect = document.querySelector('.marks');

    const cacheMarkDOM = () => {
        getMarkSelect.addEventListener('click', e => {
            if (e.target !== e.currentTarget && e.target.textContent.toLowerCase() === playerLetter) {
                displayController.cacheBoardDOM();
            } e.stopPropagation();
        });
    }

    return { cacheMarkDOM };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');

emma.cacheMarkDOM();
nev.cacheMarkDOM();