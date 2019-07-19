; const snake = (function () {
    const snakeData = {
        headPositionX: null,
        headPositionY: null,
        body: [],
        move: null,
    };

    function generateSnakeUI(boardSize, snakeSize) {
        snakeData.headPositionX = parseInt(boardSize / 2);
        snakeData.headPositionY = parseInt(boardSize / 2);

        for (let i = 0; i < snakeSize; i++) {
            snakeData.body.push(`${snakeData.headPositionX - i}-${snakeData.headPositionY}`);         
        }

        snakeData.body.forEach(item => {
            document.getElementById(item).classList.add('snake');
        });
    }

    function createSnake(config) {
        generateSnakeUI(config.boardSize, config.snakeSize)
    }

    function moveHead() {
        snakeData.move();
    }

    function updateSnakePosition() {
        const head = `${snakeData.headPositionX}-${snakeData.headPositionY}`;

        snakeData.body.unshift(head);
        const tail = snakeData.body.pop();

        document.getElementById(tail).classList.remove('snake');
        document.getElementById(head).classList.add('snake');
    }

    function setMoveDirection(direction) {
        if (direction === 'right') {
            snakeData.move = () => snakeData.headPositionX += 1;
        } else if (direction === 'left') {
            snakeData.move = () => snakeData.headPositionX -= 1;
        } else if (direction === 'down') {
            snakeData.move = () => snakeData.headPositionY += 1;
        } else if (direction === 'up') {
            snakeData.move = () => snakeData.headPositionY -= 1;
        }
    }

    function getSnake() {
        return snakeData;
    }

    function grow() {
        snakeData.body.unshift(`${snakeData.headPositionX}-${snakeData.headPositionY}`);
        document.getElementById(`${snakeData.headPositionX}-${snakeData.headPositionY}`).classList.add('snake');
        
        //This lead to imideatly growing snake but if food is on corner you cant get it
        //Without it growth happens when new elemet goes to end of the snacke
        //snakeData.move();
    }

    return {
        createSnake,
        moveHead,
        setMoveDirection,
        getSnake,
        updateSnakePosition,
        grow
    }
})();