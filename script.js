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


    const _currentPlayer = player => {
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
                _currentPlayer(e.target.textContent.toLowerCase());
            } else if (e.target.textContent.toLowerCase() === getPlayerTwo.playerMark) {
                _currentPlayer(e.target.textContent.toLowerCase());
            }
        }
    };

    const displayMark = e => {
        if (e.target.closest('div.box') && e.target.textContent === '') {
            const getPlayerValue = _currentPlayer();
            const placeValues = gameBoardArray.forEach(item => {
                if (item === getPlayerValue) {
                    switch (getPlayerValue) {
                        case 'x':
                            e.target.textContent = item;
                            _currentPlayer('o');
                            break;
                        case 'o':
                            e.target.textContent = item;
                            _currentPlayer('x');
                            break;
                    }
                }
                else if (e.target.closest('div.box').textContent !== '') {
                    displayController.getSquaresIndex();
                }
            });
        };
    }


    // bindEvents
    markContainer.addEventListener('click', _getLetterChoice);


    return {
        displayMark
    };
})();


const displayController = (() => {
    let pos1, pos2, pos3;
    let posNum1, posNum2, posNum3;

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');


    const getSquaresIndex = () => {
        if (gameWinner(0, 1, 2) ||
            gameWinner(3, 4, 5) ||
            gameWinner(6, 7, 8) ||
            gameWinner(0, 3, 6) ||
            gameWinner(1, 4, 7) ||
            gameWinner(2, 5, 8) ||
            gameWinner(0, 4, 8) ||
            gameWinner(2, 4, 6)
        ) {

        }
    }

    const gameWinner = (p1, p2, p3) => {
        squares.forEach((item, index) => {
            switch (index) {
                case p1:
                    pos1 = item.textContent;
                    break;
                case p2:
                    pos2 = item.textContent;
                    break;
                case p3:
                    pos3 = item.textContent;
                    break;
            }
            if (pos1 === pos2 && pos1 === pos3) {
                return `${pos1} is winner`
            }
        })
    }




    // bindEvents
    getBoardContainer.addEventListener('click', gameBoard.displayMark);


    return {
        getSquaresIndex
    };

})();