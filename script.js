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


    const currentPlayer = () => {
        if (emma.playerMark === opponent) {
            displayController.outputMark();
        } else if (nev.playerMark === opponent) {
            displayController.outputMark();
        }
    }

    const getLetterChoice = e => {
        if (e.target.closest('button')) {
            if (e.target.textContent.toLowerCase() === getPlayerOne.playerMark) {
                storePlayerOneLetter.push(getPlayerOne.playerMark);
            } else if (e.target.textContent.toLowerCase() === getPlayerTwo.playerMark) {
                storePlayerTwoLetter.push(getPlayerTwo.playerMark);
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
    const outputMark = () => { getBoardContainer.addEventListener('click', displayMark); };



    return {
        outputMark
    };

})();