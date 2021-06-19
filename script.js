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
                    displayController.getSquaresIndex();
                }
            });
        }
    }


    // bindEvents
    markContainer.addEventListener('click', _getLetterChoice);


    return {
        displayMark
    };
})();


const displayController = (() => {
    let pos1, pos2, pos3;

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');


    const getSquaresIndex = () => {
        // if (_stalemateGame()) {
        return _gameWinner(0, 1, 2) ||
            _gameWinner(3, 4, 5) ||
            _gameWinner(6, 7, 8) ||
            _gameWinner(0, 3, 6) ||
            _gameWinner(1, 4, 7) ||
            _gameWinner(2, 5, 8) ||
            _gameWinner(0, 4, 8) ||
            _gameWinner(2, 4, 6)
        // }
    }

    const _gameWinner = (p1, p2, p3) => {
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
        });
        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            const winnerDiv = document.createElement('div');
            const displayWinner = document.createElement('div');
            winnerDiv.className = 'winner';
            winnerDiv.appendChild(displayWinner);
            if (pos1 === pos2 && pos1 === pos3) {
                switch (pos1) {
                    case 'x':
                        displayWinner.textContent = `${emma.playerName} is the winner`;
                        break;
                    case 'o':
                        displayWinner.textContent = `${nev.playerName} is the winner`;
                        break;
                }
                getBoardContainer.appendChild(winnerDiv);
                pos1 = pos2 = pos3 = '';
            }
        } return false;
    }

    const _stalemateGame = () => {
        squares.forEach(item => {
            if (item.textContent !== '') {
                console.log('The game is a tie');
            }
        });
    }


    // bindEvents
    getBoardContainer.addEventListener('click', gameBoard.displayMark);


    return {
        getSquaresIndex
    };

})();