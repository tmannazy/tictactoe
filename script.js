const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {
    const gameBoardArr = ['x', 'o'];

    // cache DOM
    const getMarkSelect = document.querySelector('.marks');
    const getSquares = document.querySelector('.game-board');

    const isPlayerChoice = (firstPlayerLetter, secondPlayerLetter) => {
        getMarkSelect.addEventListener('click', e => {
            if (e.target !== e.currentTarget) {
                if (e.target.textContent.toLowerCase() === firstPlayerLetter) {
                    cacheBoardDOM(firstPlayerLetter);
                } else if (e.target.textContent.toLowerCase() === secondPlayerLetter) {
                    cacheBoardDOM(secondPlayerLetter);
                }
            } e.stopPropagation();
        });
    }

    const squares = e => {
        if (e.target !== e.currentTarget && e.target.textContent == '') {
            // const divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
            const el = gameBoardArr.forEach(item => {
                if (item === cacheBoardDOM(item)) {
                    e.target.textContent = item;
                } else {
                    e.target.textContent = item;
                }
            });
        } e.stopPropagation();
    }

    const cacheBoardDOM = (playerLetter) => {
        getSquares.addEventListener('click', squares);
    };

    return { isPlayerChoice };
})();

const displayController = (() => {
    const players = () => {
        gameBoard.isPlayerChoice(emma.playerMark, nev.playerMark);
    };

    return {
        players
    };
})();


displayController.players();
