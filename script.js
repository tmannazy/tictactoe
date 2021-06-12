const Player = (playerMark) => {
    return { playerMark };
};

const emma = Player('x');
const nev = Player('o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];
    const getPlayerOne = playerOne => playerOne;
    const getPlayerTwo = playerTwo => playerTwo;
    // const storeUserSelect = [];


    // cacheDOM
    const markContainer = document.querySelector('.marks');

    // const gamePlayers = (playerOne, playerTwo) => {
    // };


    const playAgainst = opponent => {
        // gameBoard.checkDivs();
        if (getPlayerOne(emma.playerMark) !== opponent) {
            displayController.outputMark();
        } else if (getPlayerTwo(nev.playerMark) !== opponent) {
            displayController.outputMark();
        }
    }

    const getLetterChoice = e => {
        if (e.target.closest('button')) {
            if (e.target.textContent.toLowerCase() === 'x') {
                getPlayerOne(emma.playerMark);
                playAgainst(nev.playerMark);
            } else {
                getPlayerTwo(nev.playerMark);
                playAgainst(emma.playerMark);
            }
        }
    };



    // bindEvents
    markContainer.addEventListener('click', getLetterChoice);


    return {
        getPlayerOne,
        getPlayerTwo,
        gameBoardArr,
    };
})();


const displayController = (() => {
    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');


    const checkDivs = () => {
        const checkSquares = squares.forEach((item, index, squares) => {
            if (item.textContent === '' && squares.length <= 9) {
                return squares;
            } else if (item.textContent !== '' && squares[index] >= 1) {
                return item
            }
        });
        return checkSquares;
    }

    const displayMark = e => {
        // if (e.target.closest('div.box') && e.target.textContent === '') {
        if (e.target.closest('div.box')) {
            const el = gameBoard.gameBoardArr.some(item => {
                if (item === gameBoard.getPlayerOne()) {
                    e.target.textContent = item;
                } else if (item === gameBoard.getPlayerTwo()) {
                    e.target.textContent = item;
                }
            });
        }
    };

    // bindEvents
    const outputMark = () => { getBoardContainer.addEventListener('click', displayMark); };



    return {
        outputMark
        // gamePlayers
    };
})();

// displayController.gamePlayers(nev);
// gameBoard.gamePlayers(emma.playerMark, nev.playerMark);