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

    const isPlayerChoice = (suppliedPlayerLetter) => {
        getMarkSelect.addEventListener('click', e => {
            if (e.target !== e.currentTarget) {
                if (e.target.textContent.toLowerCase() === suppliedPlayerLetter) {
                    cacheBoardDOM(suppliedPlayerLetter);
                    // on('.game-board', 'click', 'box', e => {
                    //     const item = e.target
                    // });
                }
                // else if (e.target.textContent.toLowerCase() === secondPlayerLetter) {
                //     cacheBoardDOM(secondPlayerLetter);
                // }
            } e.stopPropagation();
        });
    }


    // const on = (selector, eventType, childSelector, eventHandler) => {
    //     const elements = document.querySelectorAll(selector)
    //     for (element of elements) {
    //         element.addEventListener(eventType, eventOnElement => {
    //             if (eventOnElement.target.matches(childSelector)) {
    //                 eventHandler(eventOnElement)
    //             }
    //         })
    //     }
    // }


    // const on = ('.game-board', 'click', 'box', e => {
    //     const getSquares = e.target;
    //     getSquares.forEach(element => {
    //         element.addEventListener('click', evt => {
    //             if (evt.target.matches(box)) {
    //                 alert('Box clicked!');
    //             }
    //         })
    //     });
    // })

    const squares = e => {
        const el = gameBoardArr.some(item => {
            if (e.target !== e.currentTarget && e.target.textContent == '') {
                // const divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
                if (item === isPlayerChoice(suppliedPlayerLetter)) {
                    return e.target.textContent = item;
                }
                // else {
                //     return e.target.textContent = item;
                // }
            } e.stopPropagation();
        });
    }

    const cacheBoardDOM = (playerLetter) => {
        getSquares.addEventListener('click', squares);
    };

    return { isPlayerChoice };
})();

const displayController = (() => {
    const players = () => {
        gameBoard.isPlayerChoice(emma.playerMark);
        gameBoard.isPlayerChoice(nev.playerMark);
    };

    return {
        players
    };
})();


displayController.players();
