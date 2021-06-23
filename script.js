const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const playerOne = Player();
const playerTwo = Player();

const gameBoard = (() => {
    const gameBoardArray = ['x', 'o'];
    const getPlayerOne = playerOne;
    const getPlayerTwo = playerTwo;
    const displayPlayerPiece = document.createElement('div');
    let currentPlayerValue;
    displayPlayerPiece.className = 'piece-div';

    // cacheDOM
    const markContainer = document.querySelector('.marks');
    const board = document.querySelector('.game-board');
    const formOneSubmitButton = document.querySelector('#form-one-button');
    const formTwoSubmitButton = document.querySelector('#form-two-button');
    const formOne = document.querySelector('#form-one');
    const formTwo = document.querySelector('#form-two');
    const startButton = document.querySelector('#start-game');
    playerOne.playerName = document.getElementById('player-one').value;
    playerTwo.playerName = document.getElementById('player-two').value;


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
        board.style.display = 'grid';
        if (e.target.closest('button')) {
            if (e.target.textContent.toLowerCase() === 'x') {
                playerOne.playerMark = e.target.textContent.toLowerCase();
                playerTwo.playerMark = e.target.nextElementSibling.textContent.toLowerCase();
                _currentPlayer(e.target.textContent.toLowerCase());
            } else if (e.target.textContent.toLowerCase() === 'o') {
                playerOne.playerMark = e.target.textContent.toLowerCase();
                playerTwo.playerMark = e.target.previousElementSibling.textContent.toLowerCase();
                _currentPlayer(e.target.textContent.toLowerCase());
            }
            displayPlayerPiece.textContent = `${playerOne.playerName} gamepiece is '${playerOne.playerMark}'
            while ${playerTwo.playerName} gamepiece is '${playerTwo.playerMark}'`;
            board.prepend(displayPlayerPiece);
            markContainer.style.display = 'none';
            startButton.textContent = 'New Game';
            startButton.style.display = 'block';
            // _resetGame();
        }
    };

    const _loadContents = () => {
        board.style.display = 'none';
        markContainer.style.display = 'none';
        formTwo.style.display = 'none';
        startButton.style.display = 'none';
    }

    const _openFormTwo = () => {
        formOne.style.display = 'none';
        formTwo.style.display = 'block';
    }

    const _showStartButton = () => {
        formTwo.style.display = 'none';
        startButton.style.display = 'block';
    }

    const _choosePiece = () => {
        startButton.style.display = 'none';
        markContainer.style.display = 'block';
    }

    const _resetGame = () => {
        displayController.clearBoard();
        displayPlayerPiece.textContent = '';
    }

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
    document.addEventListener('DOMContentLoaded', _loadContents);
    markContainer.addEventListener('click', _getLetterChoice);
    formOneSubmitButton.addEventListener('click', _openFormTwo);
    formTwoSubmitButton.addEventListener('click', _showStartButton);
    startButton.addEventListener('click', () => {
        _choosePiece();
        _resetGame();
    });


    return {
        displayMark
    };
})();


const displayController = (() => {
    let pos1, pos2, pos3;
    const winnerDiv = document.createElement('div');
    winnerDiv.className = 'winner-div';

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board');
    const squares = getBoardContainer.querySelectorAll('.box');


    const getSquaresIndex = () => {
        return _gameWinner(0, 1, 2) ||
            _gameWinner(3, 4, 5) ||
            _gameWinner(6, 7, 8) ||
            _gameWinner(0, 3, 6) ||
            _gameWinner(1, 4, 7) ||
            _gameWinner(2, 5, 8) ||
            _gameWinner(0, 4, 8) ||
            _gameWinner(2, 4, 6) ||
            _stalemateGame();
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
            if (pos1 === pos2 && pos1 === pos3) {
                switch (pos1) {
                    case playerOne.playerMark:
                        winnerDiv.textContent = `${playerOne.playerName} is the winner`;
                        break;
                    case playerTwo.playerMark:
                        winnerDiv.textContent = `${playerTwo.playerName} is the winner`;
                        break;
                }
                pos1 = pos2 = pos3 = '';
                getBoardContainer.appendChild(winnerDiv);
                _removeHandler();
            }
        }
    }

    const _stalemateGame = () => {
        for (let i = 0; i < 9; i++) {
            if (squares[i].textContent === '')
                return false;
        }
        winnerDiv.textContent = 'The game is a tie';
        getBoardContainer.appendChild(winnerDiv);
        return true;
    }

    const clearBoard = () => {
        squares.forEach(item => {
            item.textContent = '';
        });
        playerOne.playerName = '';
        playerTwo.playerName = '';
        playerOne.playerMark = '';
        playerTwo.playerMark = '';
        getBoardContainer.removeChild(getBoardContainer.childNodes[getBoardContainer.childNodes.length - 1]);
        _addHandler();
    }

    // bindEvents
    const _addHandler = () => {
        getBoardContainer.addEventListener('click', gameBoard.displayMark);
    }

    // removeEvents
    const _removeHandler = () => {
        getBoardContainer.removeEventListener('click', gameBoard.displayMark);
    }

    _addHandler();

    return {
        getSquaresIndex,
        clearBoard
    };

})();