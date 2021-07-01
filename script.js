const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const playerOne = Player()
const playerTwo = Player();

const gameBoard = (() => {
    const gameBoardArray = ['x', 'o'],
        getPlayerOne = playerOne,
        getPlayerTwo = playerTwo,
        displayPlayerPiece = document.createElement('div');
    let currentPlayerValue,
        compPiece;
    displayPlayerPiece.className = 'piece-div';

    // cacheDOM
    const markContainer = document.querySelector('.marks'),
        board = document.querySelector('.game-board'),
        formContainer = document.querySelector('.form-container'),
        formOneSubmitButton = document.querySelector('#form-one-button'),
        formTwoSubmitButton = document.querySelector('#form-two-button'),
        formPlayerComSubmitButton = document.querySelector('#form-player-com'),
        formOne = document.querySelector('#form-one'),
        formTwo = document.querySelector('#form-two'),
        playerCom = document.querySelector('#player-com'),
        buttonContainer = document.querySelector('.gamestart'),
        startButton = document.querySelector('.start-game'),
        newGameButton = document.querySelector('.new-game'),
        computerButton = document.querySelector('.computer-game'),
        getPlayerOneName = document.getElementById('player-one'),
        getPlayerTwoName = document.getElementById('player-two'),
        getPlayerVsCompName = document.getElementById('player-computer'),
        userFocus = [getPlayerOneName, getPlayerTwoName, getPlayerVsCompName],
        keyEvents = [formOneSubmitButton, formTwoSubmitButton];


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
        buttonContainer.style.display = 'flex';
        buttonContainer.style.position = 'absolute';
        buttonContainer.style.left = '50px';
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
            displayPlayerPiece.innerHTML = `<span>${playerOne.playerName}</span> gamepiece is <span>${playerOne.playerMark}</span>
            while <span>${playerTwo.playerName}</span> gamepiece is <span>${playerTwo.playerMark}</span>`;
            board.prepend(displayPlayerPiece);
            markContainer.style.display = 'none';
            newGameButton.style.display = 'block';
        }
    };

    const _loadContents = () => {
        board.style.display = 'none';
        markContainer.style.display = 'none';
        formTwo.style.display = 'none';
        startButton.style.display = 'none';
        playerCom.style.display = 'none';
        computerButton.style.display = 'none';
        buttonContainer.style.display = 'none';
    }

    const _openFormTwo = (event) => {
        playerOne.playerName = getPlayerOneName.value;
        formOne.style.display = 'none';
        formTwo.style.display = 'block';
    }

    const _showStartButton = () => {
        playerTwo.playerName = getPlayerTwoName.value;
        formTwo.style.display = 'none';
        formContainer.style.display = 'none';
        buttonContainer.style.display = 'block';
        startButton.style.display = 'block';
    }

    const _choosePiece = () => {
        startButton.style.display = 'none';
        buttonContainer.style.display = 'none';
        markContainer.style.display = 'block';
    }

    const _resetGame = () => {
        displayController.clearBoard();
        displayPlayerPiece.textContent = '';
        newGameButton.style.display = 'none';
        _loadContents();
        formContainer.style.display = 'block';
        formOne.style.display = 'block';
        buttonContainer.style.display = 'none';
        buttonContainer.style.position = 'static';
        _playersLetter();
        displayController.addHandler();
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

    // const computerMove = () => {
    //     playerCom.style.display = 'block';
    //     playerOne.playerName = 'Computer';
    //     formOne.style.display = 'none';
    //     formTwo.style.display = 'none';
    //     const randomPick = Math.floor(Math.random() * 2);
    //     switch (randomPick) {
    //         case 0:
    //             compPiece = gameBoardArray[0];
    //             playerOne.playerMark = compPiece;
    //             playerTwo.playerMark = gameBoardArray[1];
    //             break;
    //         case 1:
    //             compPiece = gameBoardArray[1];
    //             playerOne.playerMark = compPiece;
    //             playerTwo.playerMark = gameBoardArray[0];
    //             break;
    //     }
    //     return compPiece;
    // }

    // const _playerVsCom = () => {
    //     playerTwo.playerName = getPlayerVsCompName.value;
    //     board.style.display = 'grid';
    //     displayPlayerPiece.textContent = `${playerOne.playerName} gamepiece is '${playerOne.playerMark}'
    //         while ${playerTwo.playerName} gamepiece is '${playerTwo.playerMark}'`;
    //     board.prepend(displayPlayerPiece);
    //     _currentPlayer(compPiece);
    //     displayController.addHandler();

    // }

    // bindEvents
    document.addEventListener('DOMContentLoaded', _loadContents);
    document.addEventListener('keydown', handleKeyDown);
    formOneSubmitButton.addEventListener('click', _openFormTwo);
    formTwoSubmitButton.addEventListener('click', _showStartButton);
    startButton.addEventListener('click', _choosePiece);
    newGameButton.addEventListener('click', _resetGame);
    // computerButton.addEventListener('click', computerMove);
    // formPlayerComSubmitButton.addEventListener('click', _playerVsCom);
    const _playersLetter = () => {
        markContainer.addEventListener('click', _getLetterChoice);
    };
    userFocus.forEach(item => {
        item.addEventListener('focus', () => {
            item.value = '';
        });
    });


    function handleKeyDown(event) {
        for (let i = 0; i < keyEvents.length; i++) {
            if (keyEvents[i] === formOneSubmitButton && event.key === 'Enter') {
                event.preventDefault();
                _openFormTwo();
                break;
            }
            else if (keyEvents[i] === formTwoSubmitButton && event.key === 'Enter') {
                event.preventDefault();
                _showStartButton();
                break;
            }
        }
    }

    _playersLetter();


    return {
        displayMark,
        // computerMove
    };
})();


const displayController = (() => {
    let pos1, pos2, pos3;
    const winnerDiv = document.createElement('div');
    winnerDiv.className = 'winner-div';

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board'),
        squares = getBoardContainer.querySelectorAll('.box');


    const getSquaresIndex = () => {
        if (_stalemateGame()) {
            return true;
        }
        return _gameWinner(0, 1, 2) ||
            _gameWinner(3, 4, 5) ||
            _gameWinner(6, 7, 8) ||
            _gameWinner(0, 3, 6) ||
            _gameWinner(1, 4, 7) ||
            _gameWinner(2, 5, 8) ||
            _gameWinner(0, 4, 8) ||
            _gameWinner(2, 4, 6)
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
                        squares.forEach((item, index) => {
                            if (index === p1 || index === p2 || index === p3) {
                                item.style.backgroundColor = ' #34091C';
                                item.style.color = '#B2D732';
                                item.style.borderColor = '#B2D732';
                                item.style.borderWidth = '5px';
                                item.style.borderStyle = 'outset';
                            }
                        });
                        winnerDiv.textContent = `${playerOne.playerName} is the winner`;
                        break;
                    case playerTwo.playerMark:
                        squares.forEach((item, index) => {
                            if (index === p1 || index === p2 || index === p3) {
                                item.style.backgroundColor = '#34091C';
                                item.style.color = '#B2D732';
                                item.style.borderColor = '#B2D732';
                                item.style.borderWidth = '5px';
                                item.style.borderStyle = 'outset';
                            }
                        });
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
        _removeHandler();
    }

    const clearBoard = () => {
        squares.forEach(item => {
            item.textContent = '';
        });
        playerOne.playerName = '';
        playerTwo.playerName = '';
        playerOne.playerMark = '';
        playerTwo.playerMark = '';
        winnerDiv.textContent = '';
    }

    // bindEvents
    const addHandler = () => {
        getBoardContainer.addEventListener('click', gameBoard.displayMark);
    }

    // removeEvents
    const _removeHandler = () => {
        getBoardContainer.removeEventListener('click', gameBoard.displayMark);
    }

    addHandler();


    return {
        getSquaresIndex,
        clearBoard,
        addHandler
    };
})();