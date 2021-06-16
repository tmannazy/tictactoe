const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];
    // const storePlayerOneLetter = [];
    // const storePlayerTwoLetter = [];
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

    const getLetterChoice = e => {
        if (e.target.closest('button')) {
            if (e.target.textContent.toLowerCase() === getPlayerOne.playerMark) {
                currentPlayer(e.target.textContent.toLowerCase());
            } else if (e.target.textContent.toLowerCase() === getPlayerTwo.playerMark) {
                currentPlayer(e.target.textContent.toLowerCase());
            }
        }
    };


    // bindEvents
    markContainer.addEventListener('click', getLetterChoice);


    return {
        currentPlayer,
        // storePlayerOneLetter,
        // storePlayerTwoLetter,
        gameBoardArr,
    };
})();


const displayController = (() => {
    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');



    const displayMark = e => {
        if (e.target.closest('div.box')) {
            const playerLet = gameBoard.currentPlayer();
            const el = gameBoard.gameBoardArr.some(item => {
                if (item === playerLet) {
                    if (playerLet === 'x') {
                        e.target.textContent = item;
                        gameBoard.currentPlayer('o');
                    }
                    else if (item === playerLet) {
                        if (playerLet === 'o') {
                            e.target.textContent = item;
                            gameBoard.currentPlayer('x');
                        }
                    }
                }
            });
            //             gameBoard.currentPlayer('x');
            //         });
            // } const el = gameBoard.gameBoardArr.some(item => {
            //     if (item === 'x') {
            //         e.target.textContent = item.target.textContent = item;
            //     }
            // });
            // gameBoard.currentPlayer('o');
            // //
            // if (item !== gameBoard.storeUserSelect[0]) {
            //     e.target.textContent = item;
            // }

            //     switch (item) {
            //         case 'gameBoard.currentPlayer':
            //             e.target.textContent = item;
            //             break;

            //     }
            // });
        }
    };

    // bindEvents
    // const outputMark = () => {
    getBoardContainer.addEventListener('click', displayMark);
    // };



    return {
        displayMark
    };

})();