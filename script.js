const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];
    const getPlayerOne = emma;
    const getPlayerTwo = nev;
    let val;

    // cacheDOM
    const markContainer = document.querySelector('.marks');


    const currentPlayer = player => {
        if (player === getPlayerOne.playerMark) {
            val = player;
        } else if (player === getPlayerTwo.playerMark) {
            val = player;
        }
        return val;
    };

    const _getLetterChoice = e => {
        if (e.target.closest('button')) {
            if (e.target.textContent.toLowerCase() === getPlayerOne.playerMark) {
                currentPlayer(e.target.textContent.toLowerCase());
            } else if (e.target.textContent.toLowerCase() === getPlayerTwo.playerMark) {
                currentPlayer(e.target.textContent.toLowerCase());
            }
        }
    };


    // bindEvents
    markContainer.addEventListener('click', _getLetterChoice);


    return {
        currentPlayer,
        gameBoardArr,
    };
})();


const displayController = (() => {
    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');


    const displayMark = e => {
        if (e.target.closest('div.box') && e.target.textContent === '') {
            const playerLet = gameBoard.currentPlayer();
            const el = gameBoard.gameBoardArr.forEach(item => {
                if (item === playerLet) {
                    switch (playerLet) {
                        case 'x':
                            e.target.textContent = item;
                            gameBoard.currentPlayer('o');
                            break;
                        case 'o':
                            e.target.textContent = item;
                            gameBoard.currentPlayer('x');
                            break;
                    }
                }
            });
        }
    };


    // bindEvents
    getBoardContainer.addEventListener('click', displayMark);


    return {
        displayMark
    };

})();