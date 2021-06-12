const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];
    const storeUserSelect = [];

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');


    const checkDivs = () => {
        const checkSquares = squares.forEach((item, index, squares) => {
            if (item.textContent === '' && squares[index] <= 8) {
                return squares[index];
            } else if (item.textContent !== '' && squares[index] >= 1) {
                return item
            }
        });
        return checkSquares;
    }


    const displayMark = e => {
        if (e.target.closest('div.box') && e.target.textContent === '') {
            const el = gameBoard.gameBoardArr.some(item => {
                if (item === gameBoard.userLetterChoice()) {
                    e.target.textContent = item;
                }
            });
        }
    };

    // bindEvents
    getBoardContainer.addEventListener('click', displayMark);

    return {
        checkDivs,
        gameBoardArr,
    };
})();

const displayController = (() => {
    // cacheDOM
    const markContainer = document.querySelector('.marks');
    // const squares = getBoardContainer.querySelectorAll('.box');

    // const userLetterChoice = () => {
    //     if (!storeUserSelect.length) {
    //         return storeUserSelect[0];
    //     } else {
    //         storeUserSelect = [];
    //     }
    // };

    const gamePlayers = (playerName, playerMark) => {
        const getPlayer = () => playerName;
        const getMark = () => playerMark;
    }

    const getLetterChoice = e => {
        if (e.target.closest('button')) {
            if (e.target.textContent.toLowerCase() === 'x') {
                emma.playAgainst(nev);
            } else {
                nev.playAgainst(emma);
            }
        }
    };


    const playAgainst = opponent => {
        // if ()
    }


    // bindEvents
    markContainer.addEventListener('click', getLetterChoice);


    return {
        // gamePlayers,
    };
})();

// displayController.players();
