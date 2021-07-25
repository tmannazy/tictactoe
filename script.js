const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const playerOne = Player(), playerTwo = Player();

const gameBoard = (() => {
    const gameBoardPiece = ['x', 'o'],
        getPlayerOne = playerOne,
        getPlayerTwo = playerTwo,
        displayPlayerPiece = document.createElement('div');
    let currentPlayerValue, compPiece;
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
        playerComputerForm = document.querySelector('#player-com'),
        startAndNewGameContainer = document.querySelector('.gamestart'),
        startButton = document.querySelector('.start-game'),
        newGameButton = document.querySelector('.new-game'),
        playerVsComputerGameButton = document.querySelector('.computer-game'),
        getPlayerOneName = document.getElementById('player-one'),
        getPlayerTwoName = document.getElementById('player-two'),
        getPlayerVsCompName = document.getElementById('player-computer'),
        focusNameInput = [getPlayerOneName, getPlayerTwoName, getPlayerVsCompName],
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
        startAndNewGameContainer.setAttribute('style', 'display: flex; position: absolute; left: 50px');
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
        playerComputerForm.style.display = 'none';
        playerVsComputerGameButton.style.display = 'block';
        startAndNewGameContainer.style.display = 'none';
    }

    const _openFormTwo = event => {
        playerOne.playerName = getPlayerOneName.value;
        formOne.style.display = 'none';
        playerVsComputerGameButton.style.display = 'none';
        formTwo.style.display = 'block';
    }

    const _showStartButton = () => {
        playerTwo.playerName = getPlayerTwoName.value;
        formTwo.style.display = 'none';
        formContainer.style.display = 'none';
        startAndNewGameContainer.style.display = 'block';
        startButton.style.display = 'block';
    }

    const _choosePiece = () => {
        startButton.style.display = 'none';
        startAndNewGameContainer.style.display = 'none';
        markContainer.style.display = 'block';
    }

    const _resetGame = () => {
        displayController.clearBoard();
        displayPlayerPiece.textContent = '';
        newGameButton.style.display = 'none';
        _loadContents();
        formContainer.style.display = 'block';
        formOne.style.display = 'block';
        startAndNewGameContainer.setAttribute('style', 'display: none; position: static;');
        _playersLetter();
        displayController.addHandler();
    }

    const displayMark = e => {
        if (e.target.closest('div.box') && e.target.textContent === '') {
            if (compPiece !== undefined) {
                e.target.textContent = playerTwo.playerMark;
                displayController.getSquaresIndex(playerTwo.playerMark);
                displayController.showPlayerVsComp(compPiece);
                return;
            } else {
                const getPlayerValue = _currentPlayer();
                const placeValues = gameBoardPiece.forEach(item => {
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
                        displayController.getSquaresIndex(getPlayerValue);
                    }
                });
            }
        }
    }

    const _computerMove = () => {
        playerVsComputerGameButton.style.display = 'none';
        playerComputerForm.style.display = 'block';
        playerOne.playerName = 'Computer';
        formOne.style.display = 'none';
        formTwo.style.display = 'none';
        const randomPick = Math.floor(Math.random() * 2);
        switch (randomPick) {
            case 0:
                compPiece = gameBoardPiece[0];
                playerOne.playerMark = compPiece;
                playerTwo.playerMark = gameBoardPiece[1];
                break;
            case 1:
                compPiece = gameBoardPiece[1];
                playerOne.playerMark = compPiece;
                playerTwo.playerMark = gameBoardPiece[0];
                break;
        }
        return compPiece;
    }

    const _playerVsCom = () => {
        playerTwo.playerName = getPlayerVsCompName.value;
        playerComputerForm.style.display = 'none';
        formContainer.style.display = 'none';
        newGameButton.style.display = 'block';
        startAndNewGameContainer.setAttribute('style', 'display: flex; position: absolute; left: 50px');
        board.style.display = 'grid';
        displayPlayerPiece.innerHTML = `<span>${playerOne.playerName}</span> gamepiece is <span>${playerOne.playerMark}</span>
            while <span>${playerTwo.playerName}</span> gamepiece is <span>${playerTwo.playerMark}</span>`;
        board.prepend(displayPlayerPiece);
        displayController.showPlayerVsComp(compPiece);
    }

    // bindEvents
    document.addEventListener('DOMContentLoaded', _loadContents);
    document.addEventListener('keydown', handleKeyDown);
    formOneSubmitButton.addEventListener('click', _openFormTwo);
    formTwoSubmitButton.addEventListener('click', _showStartButton);
    startButton.addEventListener('click', _choosePiece);
    newGameButton.addEventListener('click', _resetGame);
    playerVsComputerGameButton.addEventListener('click', _computerMove);
    formPlayerComSubmitButton.addEventListener('click', _playerVsCom);
    const _playersLetter = () => {
        markContainer.addEventListener('click', _getLetterChoice);
    };
    focusNameInput.forEach(item => {
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
    };
})();


const displayController = (() => {
    const winnerDiv = document.createElement('div');
    winnerDiv.className = 'winner-div';

    // cacheDOM
    const getBoardContainer = document.querySelector('.game-board'),
        squares = getBoardContainer.querySelectorAll('.box'),
        boardIndexArr = Array.from(squares);


    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    const getSquaresIndex = player => {
        let plays = boardIndexArr.reduce((acc, cur, iter) =>
            (cur.textContent === player) ? acc.concat(iter) : acc, []);
        for (let [index, value] of winCombos.entries()) {
            let checkArr = value.every(item => plays.includes(item));
            if (checkArr) {
                value.map(item => boardIndexArr[item].setAttribute('style', 'color: #B2D732; background-color: #34091C; border:5px outset #B2D732'));
                if (player === playerOne.playerMark) {
                    winnerDiv.textContent = `${playerOne.playerName} is the winner`;
                    _removeHandler();
                }
                else {
                    winnerDiv.textContent = `${playerTwo.playerName} is the winner`;
                    _removeHandler();
                }
            } else {
                _stalemateGame()
            }
        }
        winnerDiv.classList.add('winner-div');
        getBoardContainer.appendChild(winnerDiv);
    };

    const _stalemateGame = () => {
        for (let i = 0; i < 9; i++) {
            if (squares[i].textContent === '')
                return false;
        }
        winnerDiv.classList.add('winner-div');
        winnerDiv.textContent = 'The game is a tie';
        getBoardContainer.appendChild(winnerDiv);
        _removeHandler();
    }

    const clearBoard = () => {
        squares.forEach(item => {
            item.textContent = '';
            item.setAttribute('style', 'color:; background-color:; border:;');
        });
        playerOne.playerName = playerTwo.playerName = playerOne.playerMark = playerTwo.playerMark = winnerDiv.textContent = '';
        winnerDiv.classList.remove('winner-div');
    }

    const showPlayerVsComp = compSelection => {
        const randomPos = Math.floor(Math.random() * 9);
        squares.forEach((item, index) => {
            if (item.textContent === '' && index === randomPos) {
                item.textContent = compSelection;
                getSquaresIndex(compSelection);
            } else if (item.textContent !== '' && index === randomPos) {
                if (winnerDiv.textContent === '') {
                    getSquaresIndex(compSelection);
                    showPlayerVsComp(playerOne.playerMark);
                } else
                    return;
            } return;
        });
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
        addHandler,
        showPlayerVsComp
    };
})();