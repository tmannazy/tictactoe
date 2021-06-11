const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];

    // cacheDOM
    const markContainer = document.querySelector('.marks');
    const squares = getBoardContainer.querySelectorAll('.box');

    const userLetterChoice = playerLetter => {
        const storeUserSelect = [];
        storeUserSelect.push(playerLetter);
        return storeUserSelect[0];
    };

    const _getLetterChoice = e => {
        if (e.target.closest('button')) {
            userLetterChoice.push(e.target.textContent.toLowerCase());
        }
    };

    // const render = e => {
    //     squares.forEach(element => {
    //         element.textContent = e;
    //     });
    // };

    // bindEvents
    markContainer.addEventListener('click', _getLetterChoice);

    return {
        userLetterChoice,
        gameBoardArr,
    };
})();

const displayController = (() => {
    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');

    const displayMark = e => {
        if (e.target.closest('div.box') && e.target.textContent === '') {
            const el = gameBoardObject.gameBoardArr.some(item => {
                if (item === gameBoardObject.userLetterChoice()) {
                    // gameBoardObject.render(item);
                    e.target.textContent = item;
                }
            });
        }
    };

    // bindEvents
    getBoardContainer.addEventListener('click', displayMark);

    // const players = () => {
    //     if (gameBoard.userLetterChoice(emma.playerMark)) {
    //         gameBoard._getLetterChoice()
    //     } else if (gameBoard.userLetterChoice(nev.playerMark)) {
    //         gameBoard._getLetterChoice();
    //     }
    // };

    return {
        players
    };
})();

displayController.players();
