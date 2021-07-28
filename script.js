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
        playerVsComputerButton = document.querySelector('.computer-game'),
        easyPlayerVsComputerButton = document.querySelector('.easy'),
        hardPlayerVsComputerButton = document.querySelector('.hard'),
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
        playerVsComputerButton.style.display = 'block';
        startAndNewGameContainer.style.display = 'none';
        easyPlayerVsComputerButton.style.display = 'none';
        hardPlayerVsComputerButton.style.display = 'none';
    }

    const _openFormTwo = event => {
        playerOne.playerName = getPlayerOneName.value;
        formOne.style.display = 'none';
        playerVsComputerButton.style.display = 'none';
        easyPlayerVsComputerButton.style.display = 'none';
        hardPlayerVsComputerButton.style.display = 'none';
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
                displayController.gameWinner(playerTwo.playerMark);
                displayController.easyLevelGame(compPiece);
                return;
            }
            else if (compPiece !== undefined && !_easyLevel.called) {
                e.target.textContent = playerTwo.playerMark;
                displayController.hardLevelGame(playerTwo.playerMark);
            }
            else {
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
                        displayController.gameWinner(getPlayerValue);
                    }
                });
            }
        }
    }

    const _displayPlayerLevelsVsComputer = () => {
        playerVsComputerButton.style.display = 'none';
        easyPlayerVsComputerButton.style.display = 'inline';
        hardPlayerVsComputerButton.style.display = 'inline';
    }

    const _computerPieceChoice = () => {
        easyPlayerVsComputerButton.style.display = 'none';
        hardPlayerVsComputerButton.style.display = 'none';
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
        if (_easyLevel.called)
            displayController.easyLevelGame(compPiece);
        else
            displayController.hardLevelGame(compPiece);
    }

    const _easyLevel = () => _easyLevel.called = true;


    // bindEvents
    document.addEventListener('DOMContentLoaded', _loadContents);
    document.addEventListener('keydown', handleKeyDown);
    formOneSubmitButton.addEventListener('click', _openFormTwo);
    formTwoSubmitButton.addEventListener('click', _showStartButton);
    startButton.addEventListener('click', _choosePiece);
    newGameButton.addEventListener('click', _resetGame);
    playerVsComputerButton.addEventListener('click', _displayPlayerLevelsVsComputer);
    formPlayerComSubmitButton.addEventListener('click', _playerVsCom);
    easyPlayerVsComputerButton.addEventListener('click', () => { _computerPieceChoice(); _easyLevel(); });
    hardPlayerVsComputerButton.addEventListener('click', () => _computerPieceChoice());
    const _playersLetter = () => markContainer.addEventListener('click', _getLetterChoice);
    focusNameInput.forEach(item => item.addEventListener('focus', () => item.value = ''));


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

    const gameWinner = player => {
        let storeWinner = player;

        const plays = boardIndexArr.reduce((acc, cur, iter) =>
            (cur.textContent === player) ? acc.concat(iter) : acc, []);

        for (let [index, value] of winCombos.entries()) {
            let checkArr = value.every(item => plays.includes(item));
            if (checkArr) {
                value.map(item => boardIndexArr[item].setAttribute('style', 'color: #B2D732; background-color: #34091C; border:5px outset #B2D732'));
                if (player === playerOne.playerMark) {
                    winnerDiv.textContent = `${playerOne.playerName} is the winner`;
                    storeWinner = player;
                    _removeHandler();
                }
                else {
                    winnerDiv.textContent = `${playerTwo.playerName} is the winner`;
                    storeWinner = player;
                    _removeHandler();
                }
            } else {
                _stalemateGame()
            }
        }
        winnerDiv.classList.add('winner-div');
        getBoardContainer.appendChild(winnerDiv);
        return storeWinner;
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

    const easyLevelGame = compSelection => {
        const randomPos = Math.floor(Math.random() * 9);
        squares.forEach((item, index) => {
            if (item.textContent === '' && index === randomPos) {
                item.textContent = compSelection;
                gameWinner(compSelection);
            } else if (item.textContent !== '' && index === randomPos) {
                if (winnerDiv.textContent === '') {
                    gameWinner(compSelection);
                    easyLevelGame(playerOne.playerMark);
                } else
                    return;
            } return;
        });
    }

    const hardLevelGame = compSelection => {
        const randomPos = Math.floor(Math.random() * 9);
        squares.forEach((item, index) => {
            if (item.textContent === '' && index === randomPos) {
                item.textContent = compSelection;
                minimax(compSelection);
            }
            // else if (item.textContent !== '' && index === randomPos) {
            //     if (winnerDiv.textContent === '') {
            //         gameWinner(compSelection);
            //         easyLevelGame(playerOne.playerMark);
            //     } else
            //         return;
            // } return;
        });
    }

    const emptyIndexies = () => boardIndexArr.filter(item => item.textContent !== 'x' && item.textContent !== 'o');

    const minimax = player => {
        let availSpots = emptyIndexies();
        if (gameWinner(player) === playerOne.playerMark)
            return { score: 10 };
        else if (gameWinner(player) === playerTwo.playerMark)
            return { score: -10 };
        else if (!availSpots.length)
            return { score: 0 };


        const moves = [];

        for (let i = 0; i < availSpots.length; i++) {
            const move = {};
            move.index = availSpots.indexOf(availSpots[i]);
            boardIndexArr[i].textContent = player;
            if (player = playerOne.playerMark) {
                let result = minimax(playerTwo.playerMark);
                move.score = result.score;
            } else {
                let result = minimax(playerOne.playerMark);
                move.score = result.score;
            }
            boardIndexArr[i] = move.index;
            moves.push(move);
        }

        let bestMove;
        if (player === playerOne.playerMark) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        return moves[bestMove];
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
        gameWinner,
        clearBoard,
        addHandler,
        easyLevelGame,
        hardLevelGame
    };
})();