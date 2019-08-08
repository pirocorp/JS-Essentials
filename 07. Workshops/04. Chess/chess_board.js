let NUMBER_OF_COLS = 8,
    NUMBER_OF_ROWS = 8,
    BLOCK_SIZE = 100;

let BLOCK_COLOUR_WHITE = '#ffffff',
    BLOCK_COLOUR_BLACK = '#504f4f',
    HIGHLIGHT_COLOUR = '#fb0006';

let PIECE_PAWN = 0,
    PIECE_CASTLE = 1,
    PIECE_HORSE = 2,
    PIECE_BISHOP = 3,
    PIECE_QUEEN = 4,
    PIECE_KING = 5,
    pieces = null,
    ctx = null,
    allFigures = null,
    canvas = null,
    BLACK_TEAM = 0,
    WHITE_TEAM = 1,
    SELECT_LINE_WIDTH = 5,
    currentTurn = WHITE_TEAM,
    selectedPiece = null;

function draw() {
    canvas = document.getElementById('chess');

    if (canvas.getContext) { // Canvas supported?
        ctx = canvas.getContext('2d');

        BLOCK_SIZE = canvas.height / NUMBER_OF_ROWS;

        drawBoard(); // Draw the background

        defaultPositions(); // Initialize all figures

        // Draw pieces
        pieces = new Image();
        pieces.src = 'pieces.png';
        pieces.onload = drawPieces;

        canvas.addEventListener('click', boardClicked, false);
    } else {
        alert("Canvas not supported!");
    }
}

function drawBoard() {
    for (let row = 0; row < NUMBER_OF_ROWS; row++) {
        for (let col = 0; col < NUMBER_OF_COLS; col++) {
            drawColumn(row, col);
        }
    }

    // Draw outline
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, NUMBER_OF_ROWS * BLOCK_SIZE, NUMBER_OF_COLS * BLOCK_SIZE);
}

function drawColumn(indexRow, indexCol) {
    // Set the background
    ctx.fillStyle = getBlockColour(indexRow, indexCol);
    // Draw rectangle for the background
    ctx.fillRect(indexRow * BLOCK_SIZE, indexCol * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

    ctx.stroke();
}

function getBlockColour(indexRow, indexCol) {
    if (indexRow % 2) {
        return (indexCol % 2 ? BLOCK_COLOUR_WHITE : BLOCK_COLOUR_BLACK);
    } else {
        return (indexCol % 2 ? BLOCK_COLOUR_BLACK : BLOCK_COLOUR_WHITE);
    }
}

function drawPieces() {
    drawTeamOfPieces(allFigures.black, true);
    drawTeamOfPieces(allFigures.white, false);
}

function drawTeamOfPieces(teamFigures, isBlackTeam) {
    // Loop through each pieceCode and draw it on the canvas
    for (let i = 0; i < teamFigures.length; i++) {
        drawFigure(teamFigures[i], isBlackTeam);
    }
}

function drawFigure(figure, isBlackTeam) {
    let imageX = figure.pieceCode * BLOCK_SIZE;
    let imageY = isBlackTeam ? 0 : BLOCK_SIZE;

    // Draw the pieceCode onto the canvas
    ctx.drawImage(pieces, imageX, imageY, BLOCK_SIZE, BLOCK_SIZE, figure.col * BLOCK_SIZE,
        figure.row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

function boardClicked(ev) {
    let x = ev.clientX - canvas.offsetLeft;
    let y = ev.clientY - canvas.offsetTop;
    let clickedBlock = {
        "row": Math.floor(y / BLOCK_SIZE),
        "col": Math.floor(x / BLOCK_SIZE)
    };

    if (selectedPiece === null) {
        checkIfPieceClicked(clickedBlock);
    } else {
        processMove(clickedBlock);
    }
}

function checkIfPieceClicked(clickedBlock) {
    let activeTeamFigures = (currentTurn === BLACK_TEAM ? allFigures.black : allFigures.white);
    let pieceAtBlock = getPieceAtBlockForTeam(activeTeamFigures, clickedBlock);

    if (pieceAtBlock !== null) {
        selectPiece(pieceAtBlock);
    }
}

function getPieceAtBlockForTeam(teamFigures, clickedBlock) {
    let curPiece = null;
    let pieceAtBlock = null;

    for (let i = 0; i < teamFigures.length; i++) {
        curPiece = teamFigures[i];
        if (curPiece.active && curPiece.col === clickedBlock.col && curPiece.row === clickedBlock.row) {
            curPiece.position = i;
            pieceAtBlock = curPiece;
            i = teamFigures.length;
        }
    }
    return pieceAtBlock;
}

function processMove(clickedBlock) {
    let activeTeamFigures = (currentTurn === BLACK_TEAM ? allFigures.black : allFigures.white);
    let pieceAtBlock = getPieceAtBlockForTeam(activeTeamFigures, clickedBlock);
    let enemyPiece = blockOccupiedByEnemy(clickedBlock);

    if (pieceAtBlock !== null) {
        removeSelection(selectedPiece);
        checkIfPieceClicked(clickedBlock);
    } else if (canSelectedMoveToBlock(selectedPiece, clickedBlock, enemyPiece)) {
        movePiece(clickedBlock, enemyPiece);
    }
}

function blockOccupiedByEnemy(clickedBlock) {
    let team = (currentTurn === BLACK_TEAM ? allFigures.white : allFigures.black);
    return getPieceAtBlockForTeam(team, clickedBlock);
}

function removeSelection(selectedPiece) {
    drawColumn(selectedPiece.col, selectedPiece.row);
    drawFigure(selectedPiece, (currentTurn === BLACK_TEAM));
}

function blockOccupied(clickedBlock) {
    let pieceAtBlock = getPieceAtBlockForTeam(allFigures.black, clickedBlock);

    if (pieceAtBlock === null) {
        pieceAtBlock = getPieceAtBlockForTeam(allFigures.white, clickedBlock);
    }

    return (pieceAtBlock !== null);
}

function canPawnMoveToBlock(selectedPiece, clickedBlock, enemyPiece) {
    let iRowToMoveTo = (currentTurn === WHITE_TEAM ? selectedPiece.row + 1 : selectedPiece.row - 1),
        bAdjacentEnemy = (clickedBlock.col === selectedPiece.col - 1 ||
            clickedBlock.col === selectedPiece.col + 1) &&
            enemyPiece !== null,
        bNextRowEmpty = (clickedBlock.col === selectedPiece.col &&
            blockOccupied(clickedBlock) === false);

    if (clickedBlock.row === iRowToMoveTo && (bNextRowEmpty === true || bAdjacentEnemy === true)) {
        return true;
    }

    let iRowToMoveToSkip = (currentTurn === WHITE_TEAM ? 3 : 4),
        bNextSkipRowEmpty = (clickedBlock.col === selectedPiece.col && blockOccupied(clickedBlock) === false);

    if (bNextSkipRowEmpty) {
        return clickedBlock.row === iRowToMoveToSkip;
    }

    return false;
}

function canHorseMoveToBlock(selectedPiece, clickedBlock) {
    let canMoveLeft = clickedBlock.col === selectedPiece.col - 2 && clickedBlock.row === selectedPiece.row + 1;
    let canMoveLeftDown = clickedBlock.col === selectedPiece.col - 1 && clickedBlock.row === selectedPiece.row + 2;
    
    let canMoveRight = clickedBlock.col === selectedPiece.col + 2 && clickedBlock.row === selectedPiece.row + 1;
    let canMoveRightDown = clickedBlock.col === selectedPiece.col + 1 && clickedBlock.row === selectedPiece.row + 2;

    let canMoveUpLeftDown = clickedBlock.col === selectedPiece.col - 2 && clickedBlock.row === selectedPiece.row - 1;
    let canMoveUpLeft = clickedBlock.col === selectedPiece.col - 1 && clickedBlock.row === selectedPiece.row - 2;

    let canMoveUpRightDown = clickedBlock.col === selectedPiece.col + 2 && clickedBlock.row === selectedPiece.row - 1;
    let canMoveUpRight = clickedBlock.col === selectedPiece.col + 1 && clickedBlock.row === selectedPiece.row - 2;

    return canMoveLeft || canMoveLeftDown || canMoveRight || canMoveRightDown
        || canMoveUpLeftDown || canMoveUpLeft || canMoveUpRightDown || canMoveUpRight;
}

function chekcHorizontal(left, right, currentFigure) {
    let row = right.row;

    if (currentFigure.row === row &&
        currentFigure.col > left.col &&
        currentFigure.col < right.col) {

        return true;
    }

    return false;
}

function noFiguresBetweenHorizontal(selectedPiece, clickedBlock) {
    let left, right;

    if (clickedBlock.col < selectedPiece.col) {
        left = clickedBlock;
        right = selectedPiece;
    } else if (clickedBlock.col > selectedPiece.col){
        left = selectedPiece;
        right = clickedBlock;
    }

    let figures = allFigures.white
                    .concat(allFigures.black)
                    .filter(x => x.active);

    for (let x = 0; x < figures.length; x++) {
        let currentFigure = figures[x];        

        if (chekcHorizontal(left, right, currentFigure)) {
            return false
        }
    }

    return true;
}

function checkVertical(top, bottom, currentFigure) {
    let col = bottom.col;

    if (currentFigure.col === col &&
        currentFigure.row < top.row &&
        currentFigure.row > bottom.row) {

        return true;
    }

    return false;
}

function noFiguresBetweenVertical(selectedPiece, clickedBlock) {
    
    let top, bottom;

    if (clickedBlock.row < selectedPiece.row) {
        top = selectedPiece;
        bottom = clickedBlock;
    } else if (clickedBlock.row > selectedPiece.row) {
        top = clickedBlock;
        bottom = selectedPiece;
    }

    let figures = allFigures.white
                    .concat(allFigures.black)
                    .filter(x => x.active);

    for (let x = 0; x < figures.length; x++) {
        let currentFigure = figures[x];

        if (checkVertical(top, bottom, currentFigure)) {
            return false
        }
    }

    return true;
}

function canCastleMoveToBlock(selectedPiece, clickedBlock) {
    let canMoveHorizontal = selectedPiece.row === clickedBlock.row && noFiguresBetweenHorizontal(selectedPiece, clickedBlock);
    let canMoveVertical = selectedPiece.col === clickedBlock.col && noFiguresBetweenVertical(selectedPiece, clickedBlock);

    return canMoveHorizontal || canMoveVertical;
}

function clickedBlockIsOnDiagonal(selectedPiece, clickedBlock) {
    let dx = clickedBlock.col - selectedPiece.col;
    let dy = clickedBlock.row - selectedPiece.row;

    return Math.abs(dx) === Math.abs(dy);
}

function checkForFigureOnCordinates(row, col) {
    let figures = allFigures.white
        .concat(allFigures.black)
        .filter(x => x.active);

    for (let x = 0; x < figures.length; x++) {
        const currentFigure = figures[x];

        if (currentFigure.col === col && currentFigure.row === row) {
            return true;
        }
    }

    return false;
}

function noFiguresOnUpperLeftDiagonal(selectedPiece, clickedBlock) {

    let mutator = Math.abs(selectedPiece.row - clickedBlock.row);
    
    for (let i = 1; i < mutator; i++) {
        let currentCol = selectedPiece.col - i;
        let currentRow = selectedPiece.row - i;

        if (checkForFigureOnCordinates(currentRow, currentCol)) {
            return false;
        }
    }

    return true;
}

function noFiguresOnLowerLeftDiagonal(selectedPiece, clickedBlock) {
    let mutator = Math.abs(selectedPiece.row - clickedBlock.row);

    for (let i = 1; i < mutator; i++) {
        let currentCol = selectedPiece.col - i;
        let currentRow = selectedPiece.row + i;

        if (checkForFigureOnCordinates(currentRow, currentCol)) {
            return false;
        }
    }

    return true;
}

function noFiguresOnLowerRightDiagonal(selectedPiece, clickedBlock) {
    let mutator = Math.abs(selectedPiece.row - clickedBlock.row);

    for (let i = 1; i < mutator; i++) {
        let currentCol = selectedPiece.col + i;
        let currentRow = selectedPiece.row + i;

        if (checkForFigureOnCordinates(currentRow, currentCol)) {
            return false;
        }
    }

    return true;
}

function noFiguresOnUpperRightDiagonal(selectedPiece, clickedBlock) {
    let mutator = Math.abs(selectedPiece.row - clickedBlock.row);

    for (let i = 1; i < mutator; i++) {
        let currentCol = selectedPiece.col + i;
        let currentRow = selectedPiece.row - i;

        if (checkForFigureOnCordinates(currentRow, currentCol)) {
            return false;
        }
    }

    return true;
}

function noFiguresOnDiagonal(selectedPiece, clickedBlock) {
    let dx = clickedBlock.col - selectedPiece.col;
    let dy = clickedBlock.row - selectedPiece.row;

    if(dx < 0 && dy < 0) {
        return noFiguresOnUpperLeftDiagonal(selectedPiece, clickedBlock);
    } else if(dx < 0 && dy > 0) {
        return noFiguresOnLowerLeftDiagonal(selectedPiece, clickedBlock);
    } else if(dx > 0 && dy > 0) {
        return noFiguresOnLowerRightDiagonal(selectedPiece, clickedBlock);
    } else if(dx > 0 && dy < 0) {
        return noFiguresOnUpperRightDiagonal(selectedPiece, clickedBlock);
    }
}

function canBishopMoveToBlock(selectedPiece, clickedBlock) {
    let blockIsOnDiagonal = clickedBlockIsOnDiagonal(selectedPiece, clickedBlock);
    let canMoveDiagonaly = noFiguresOnDiagonal(selectedPiece, clickedBlock);

    return blockIsOnDiagonal && canMoveDiagonaly;
}

function canKingMoveToBlock(selectedPiece, clickedBlock) {
    let dx = Math.abs(selectedPiece.col - clickedBlock.col);
    let dy = Math.abs(selectedPiece.row - clickedBlock.row);

    return dx <= 1 && dy <= 1;
}

function canSelectedMoveToBlock(selectedPiece, clickedBlock, enemyPiece) {
    switch (selectedPiece.pieceCode) {
        case PIECE_PAWN:
            return canPawnMoveToBlock(selectedPiece, clickedBlock, enemyPiece);
        case PIECE_CASTLE:
            return canCastleMoveToBlock(selectedPiece, clickedBlock);
        case PIECE_HORSE:
            return canHorseMoveToBlock(selectedPiece, clickedBlock);
        case PIECE_BISHOP:
            return canBishopMoveToBlock(selectedPiece, clickedBlock);
        case PIECE_QUEEN:
            return canBishopMoveToBlock(selectedPiece, clickedBlock) || canCastleMoveToBlock(selectedPiece, clickedBlock);
        case PIECE_KING:
            return canKingMoveToBlock(selectedPiece, clickedBlock);
    }
}

function selectPiece(pieceAtBlock) {
    // Draw outline
    ctx.lineWidth = SELECT_LINE_WIDTH;
    ctx.strokeStyle = HIGHLIGHT_COLOUR;
    ctx.strokeRect((pieceAtBlock.col * BLOCK_SIZE) + SELECT_LINE_WIDTH,
        (pieceAtBlock.row * BLOCK_SIZE) + SELECT_LINE_WIDTH,
        BLOCK_SIZE - (SELECT_LINE_WIDTH * 2),
        BLOCK_SIZE - (SELECT_LINE_WIDTH * 2));

    selectedPiece = pieceAtBlock;
}

function movePiece(clickedBlock, enemyPiece) {
    // Clear the block in the original position
    drawColumn(selectedPiece.col, selectedPiece.row);

    let team = (currentTurn === WHITE_TEAM ? allFigures.white : allFigures.black),
        opposite = (currentTurn !== WHITE_TEAM ? allFigures.white : allFigures.black);

    team[selectedPiece.position].col = clickedBlock.col;
    team[selectedPiece.position].row = clickedBlock.row;

    if (enemyPiece !== null) { // Clear the pieceCode your about to take
        drawColumn(enemyPiece.col, enemyPiece.row);
        opposite[enemyPiece.position].active = false;
    }

    // Draw the pieceCode in the new position
    drawFigure(selectedPiece, (currentTurn === BLACK_TEAM));

    currentTurn = (currentTurn === WHITE_TEAM ? BLACK_TEAM : WHITE_TEAM);

    selectedPiece = null;
}