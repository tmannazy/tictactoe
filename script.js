const Player = (playerName, playerMark) => {
    return { playerName, playerMark };
};

const emma = Player('Emmanuel', 'x');
const nev = Player('Nevis', 'o');


const gameBoard = (() => {

    const gameBoardObject = {
        gameBoardArr: ['x', 'o'],
        storeUserSelect: '',
        init() {
            this.cacheBoardDOM();
            this.cacheMarkDOM();
            this.bindEvents();
            this.render();
        },
        cacheBoardDOM() {
            this.getBoardContainer = document.querySelector('.game-board');
            // this.squares = this.getBoardContainer.querySelectorAll('.box');
        },
        cacheMarkDOM() {
            this.markContainer = document.querySelector('.marks');
            // this.getUserSelect = this.markContainer.querySelectorAll('.selectMark');
        },
        bindEvents() {
            this.markContainer.addEventListener('click', this.pickUserMark);
            this.getBoardContainer.addEventListener('click', this.displayMark);
        },
        render() {
            const el = gameBoardObject.gameBoardArr.some(item => {
                if (item === this.storeUserSelect) {
                    e.target.textContent = item;
                }
            });
        },
        pickUserMark(e) {
            if (e.target !== e.currentTarget) {
                storeUserSelect = e.target.textContent.toLowerCase();
            } e.stopPropagation();
        },
        displayMark(e) {
            if (e.target !== e.currentTarget && e.target.textContent === '') {
                this.render();
            } e.stopPropagation();
        },

        // this.marking



    }

    // cache DOM

    //     const getMarkSelect = document.querySelector('.marks');
    //     const getSquares = document.querySelector('.game-board');
    //     let storeUserSelect;

    //     const isPlayerChoice = (suppliedPlayerLetter) => {
    //         getMarkSelect.addEventListener('click', e => {
    //             if (e.target !== e.currentTarget) {
    //                 if (e.target.textContent.toLowerCase() === suppliedPlayerLetter) {
    //                     storeUserSelect = e.target.textContent.toLowerCase();
    //                     cacheBoardDOM();
    //                 }
    //             } e.stopPropagation();
    //         });
    //     }

    //     const squares = e => {
    //         const el = gameBoardArr.some(item => {
    //             if (e.target !== e.currentTarget && e.target.textContent === '') {
    //                 // const divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
    //                 if (item === storeUserSelect) {
    //                     return e.target.textContent = item;
    //                     // nextBoard(item);
    //                 }
    //             } e.stopPropagation();
    //         });
    //     }

    //     const cacheBoardDOM = () => {
    //         getSquares.addEventListener('click', squares);
    //     };

    //     const nextSquares = e => {
    //         const nextEl = gameBoardArr.some(item => {
    //             if (e.target !== e.currentTarget && e.target.textContent === '') {
    //                 cacheBoardDOM(item);
    //             }
    //             else if (e.target !== e.currentTarget) {
    //                 if (!(item === storeUserSelect)) {
    //                     return e.target.textContent = item;
    //                 }
    //             } e.stopPropagation();
    //         });
    //     }

    //     const nextBoard = () => {
    //         if (storeUserSelect) {
    //             gameBoardArr.some(item => {

    //             })
    //         }
    //         getSquares.addEventListener('click', nextSquares);
    //     }

    //     return { isPlayerChoice };
    // })();

    // const displayController = (() => {
    //     const players = () => {
    //         gameBoard.isPlayerChoice(emma.playerMark);
    //         gameBoard.isPlayerChoice(nev.playerMark);
    //     };

    //     return {
    //         players
    //     };
    gameBoardObject.init();
})();


// displayController.players();
