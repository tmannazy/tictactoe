const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArray = ['x', 'o'];
    const getPlayerOne = emma;
    const getPlayerTwo = nev;
    let currentPlayerValue;

    // cacheDOM
    const markContainer = document.querySelector('.marks');


    const currentPlayer = player => {
        if (player === getPlayerOne.playerMark) {
            currentPlayerValue = player;
        } else if (player === getPlayerTwo.playerMark) {
            currentPlayerValue = player;
        }
        return currentPlayerValue;
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
        gameBoardArray,
    };
})();


const displayController = (() => {
    let pos1, pos2, pos3;

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');


    const getSquaresIndex = (p1, p2, p3) => {

    }


    const displayMark = e => {
        if (e.target.closest('div.box') && e.target.textContent === '') {
            const getPlayerValue = gameBoard.currentPlayer();
            const el = gameBoard.gameBoardArray.forEach(item => {
                if (item === getPlayerValue) {
                    switch (getPlayerValue) {
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

            // const pos1 = el;
            const squaresIndex = squares.forEach((item, index) => {
                pos1 = index;

                // .forEach((item, index) => {
                //     // if(pos1)
                // });
            });
            getSquaresIndex(pos1, pos2, pos3);
        };
    }


    // bindEvents
    getBoardContainer.addEventListener('click', displayMark);


    return {
        displayMark,
        squares
    };

})();