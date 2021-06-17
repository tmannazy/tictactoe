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
        switch (player) {
            case getPlayerOne.playerMark:
                currentPlayerValue = player;
                break;
            case getPlayerTwo.playerMark:
                currentPlayerValue = player;
                break;
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
    let pos1 = '', pos2 = '', pos3 = '';
    let posNum1, posNum2, posNum3;

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');


    const getSquaresIndex = (p1, p2, p3) => {

    }

    const gameWinner = (p1, p2, p3) => {
        squares.forEach((item, index) => {

            if (index === p1) {
                const first = item.charAt(p1);
                return first;
            } else if (index === p2) {
                const second = item.charAt(p2);
                return second;
            } else if (index === p3) {
                const third = item.charAt(p3);
                return third;
            }
        })
    }

    const displayMark = e => {
        if (e.target.closest('div.box') && e.target.textContent === '') {
            const getPlayerValue = gameBoard.currentPlayer();
            const placeValues = gameBoard.gameBoardArray.forEach(item => {
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

            const squaresIndex = squares.forEach((item, index) => {
                if (item.className === e.target.closest('div.box').className && e.target.textContent !== '') {
                    if (pos2 !== '' && pos2 === item.textContent) {
                        pos3 = item.textContent;
                        posNum3 = index;
                    }
                    else if (pos1 !== '' && pos1 === item.textContent) {
                        pos2 = item.textContent;
                        posNum2 = index;
                    }
                    else if (pos1 === '') {
                        pos1 = item.textContent;
                        posNum1 = index;
                    }
                }
            });
            getSquaresIndex(posNum1, posNum2, posNum3);
        };
    }


    // bindEvents
    getBoardContainer.addEventListener('click', displayMark);


    return {
        displayMark,
    };

})();