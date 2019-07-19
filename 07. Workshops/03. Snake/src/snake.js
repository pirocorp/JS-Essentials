; const snake = (function () {
    let snakeData = {
        headPositionX: null,
        headPositionY: null,
        body: [],
        move: null,
    };

    function generateSnakeUI(boardSize, snakeSize) {
        snakeData.headPositionX = parseInt(boardSize / 2);
        snakeData.headPositionY = parseInt(boardSize / 2);

        for (let i = 0; i < snakeSize; i++) {
            snakeData.body.push(`${snakeData.headPositionX - i}x${snakeData.headPositionY}`);         
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

    //Pure function example
    function getPotentialSnakePosition(snake) {
        const snakeClone = JSON.parse(JSON.stringify(snake));        
        
        const head = `${snakeClone.headPositionX}x${snakeClone.headPositionY}`;
        const tail = snakeClone.body.pop();

        return {
            head,
            tail
        };
    }

    //Another pure function
    function getUpdateSnakePosition() {
        const snakePotentialInfo = getPotentialSnakePosition(snakeData);

        const snakeClone = JSON.parse(JSON.stringify(snakeData));
        snakeClone.move = snakeData.move;

        snakeClone.body.unshift(snakePotentialInfo.head);
        snakeClone.body.pop();

        uiDrawer.draw(snakePotentialInfo.head, "snake");
        uiDrawer.draw(snakePotentialInfo.tail, "");

        return snakeClone;
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

    function setSnake(snake) {
        snakeData = snake;

        return snakeData;
    }

    function grow() {
        snakeData.body.unshift(`${snakeData.headPositionX}x${snakeData.headPositionY}`);
        document.getElementById(`${snakeData.headPositionX}x${snakeData.headPositionY}`).classList.add('snake');
        
        //This lead to imideatly growing snake but if food is on corner you cant get it
        //Without it growth happens when new elemet goes to end of the snacke
        //snakeData.move();
    }

    return {
        createSnake,
        moveHead,
        setMoveDirection,
        getSnake,
        setSnake,
        getUpdateSnakePosition,
        grow
    }
})();