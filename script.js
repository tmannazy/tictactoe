const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];
    const storePlayerOneLetter = [];
    const storePlayerTwoLetter = [];
    const getPlayerOne = () => emma;
    const getPlayerTwo = () => nev;


    // cacheDOM
    const markContainer = document.querySelector('.marks');


    const currentPlayer = player => {
        if (player === getPlayerOne().playerMark) {
            displayController.outputMark();
        } else if (player === getPlayerTwo().playerMark) {
            displayController.outputMark();
        }
    }

    const getLetterChoice = e => {
        if (e.target.closest('button')) {
            if (e.target.textContent.toLowerCase() === getPlayerOne().playerMark) {
                storePlayerOneLetter.push(e.target.textContent.toLowerCase());
                currentPlayer(e.target.textContent.toLowerCase());
            } else if (e.target.textContent.toLowerCase() === getPlayerTwo().playerMark) {
                storePlayerTwoLetter.push(e.target.textContent.toLowerCase());
                currentPlayer(e.target.textContent.toLowerCase());
            }
        }
    };


    // bindEvents
    markContainer.addEventListener('click', getLetterChoice);


    return {
        getPlayerOne,
        getPlayerTwo,
        // storeUserSelect,
        gameBoardArr,
    };
})();


const displayController = (() => {
    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');



    const displayMark = e => {
        if (e.target.closest('div.box')) {
            const el = gameBoard.gameBoardArr.some(item => {
                if (item === gameBoard.storeUserSelect[0]) {
                    e.target.textContent = item;
                }
                if (item !== gameBoard.storeUserSelect[0]) {
                    e.target.textContent = item;
                }
            });
        }
    };

    // bindEvents
    const outputMark = () => { getBoardContainer.addEventListener('click', displayMark.bind(null, displayMark)); };



    return {
        outputMark
    };

})();