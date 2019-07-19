const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');

gameStart.addEventListener('click', onGameStart);
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let keys = {};

let player = {
    y: 20,
    x: 20,
    width: 0,
    height: 0,
    lastFireballTimestamp: 0,
};

let game = {
    speed: 2,
    moveMultilier: 4,
    fireBallMultiplier: 5,
    bugSpeedMultiplier: 3,
    fireInterval: 500,
    cloudSpawnInterval: 3000,
    bugSpawnInterval: 300,
    bugKillScore: 100,
};

let scene = {
    isActive: true,
    score: 0,
    lascCloudTimestamp: 0,
    lasctBugTimestamp: 0,
};

function onGameStart() {
    gameStart.classList.add('hide');

    const wizard = document.createElement('div');
    wizard.classList.add('wizard');

    wizard.style.left = player.x + 'px';
    wizard.style.top = player.y + 'px';

    gameArea.appendChild(wizard);

    player.width = wizard.offsetWidth;
    player.height = wizard.offsetHeight;

    window.requestAnimationFrame(gameAction);
}

function gameAction(timestamp) {   
    const wizard = document.querySelector('.wizard');
    scene.score += 0.005;

    function addBugs() {
        if (timestamp - scene.lasctBugTimestamp > game.bugSpawnInterval + 10000 * Math.random()) {
            let bug = document.createElement('div');
            bug.classList.add('bug');

            gameArea.appendChild(bug);

            bug.x = gameArea.offsetWidth - bug.offsetWidth;
            bug.style.left = bug.x + 'px';
            bug.style.top = (gameArea.offsetHeight - bug.offsetHeight) * Math.random() + 'px';

            scene.lasctBugTimestamp = timestamp;
        }
    }

    function addClouds() {
        if (timestamp - scene.lascCloudTimestamp > game.cloudSpawnInterval + 50000 * Math.random()) {
            let cloud = document.createElement('div');
            cloud.classList.add('cloud');

            gameArea.appendChild(cloud);

            cloud.x = gameArea.offsetWidth - cloud.offsetWidth;
            cloud.style.left = cloud.x + 'px';
            cloud.style.top = (gameArea.offsetHeight - cloud.offsetHeight) * Math.random() + 'px';

            scene.lascCloudTimestamp = timestamp;
        }
    }

    function addFireBall() {
        let fireBall = document.createElement('div');

        if (player.x + player.width + 40 < gameArea.offsetWidth) {
            fireBall.classList.add('fire-ball');
            fireBall.x = player.x + player.width;
            fireBall.style.left = fireBall.x + 'px';
            fireBall.y = player.y + 28;
            fireBall.style.top = fireBall.y + 'px';
        }

        gameArea.appendChild(fireBall);
    }

    function modifyBugPositions() {
        let bugs = document.querySelectorAll('.bug');
        bugs.forEach(b => {
            b.x -= game.speed * game.bugSpeedMultiplier;
            b.style.left = b.x + 'px';

            if (b.x + b.offsetWidth <= 0) {
                b.parentElement.removeChild(b);
            }
        });
    }

    function modifyCloudsPositions() {
        let clouds = document.querySelectorAll('.cloud');
        clouds.forEach(c => {
            c.x -= game.speed;
            c.style.left = c.x + 'px';

            if (c.x + c.offsetWidth <= 0) {
                c.parentElement.removeChild(c);
            }
        });
    }

    function modifyFireballsPositions() {
        let fireBalls = document.querySelectorAll('.fire-ball');
        fireBalls.forEach(f => {
            f.x += game.speed * game.fireBallMultiplier;
            f.style.left = f.x + 'px';

            if (f.x + f.offsetWidth >= gameArea.offsetWidth) {
                f.parentElement.removeChild(f);
            }
        });
    }

    function applyGravity() {
        if (!isAtBottom(player, gameArea)) {
            player.y += game.speed;
        }
    }

    function isAtBottom(player, gameAreaElement) {
        return !(player.y + player.height < gameAreaElement.offsetHeight)
    }

    function registerUserInput() {
        if (keys.ArrowUp && player.y > 0) {
            player.y -= game.speed * game.moveMultilier;
        }

        if (keys.ArrowDown && !isAtBottom(player, gameArea)) {
            player.y += game.speed * game.moveMultilier;
        }

        if (keys.ArrowLeft && player.x > 0) {
            player.x -= game.speed * game.moveMultilier;
        }

        if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
            player.x += game.speed * game.moveMultilier;
        }

        if (keys.Space) {
            wizard.classList.add('wizard-fire');
            if (timestamp - player.lastFireballTimestamp > game.fireInterval) {
                addFireBall();
                player.lastFireballTimestamp = timestamp;
            }
        } else {
            wizard.classList.remove('wizard-fire');
        }
    }

    function gameOverAction() {
        scene.isActive = false;
        gameOver.classList.remove('hide');
    }

    function isCollision(firstElement, secondElement) {
        let firstRect = firstElement.getBoundingClientRect();
        let secondRect = secondElement.getBoundingClientRect();

        return !(firstRect.top > secondRect.bottom ||
            firstRect.bottom < secondRect.top ||
            firstRect.right < secondRect.left ||
            firstRect.left > secondRect.right
        );
    }

    function collisionDetection() {
        let bugs = document.querySelectorAll('.bug');
        let fireBalls = document.querySelectorAll('.fire-ball');

        let collison = Array.from(bugs).some(b => isCollision(wizard, b));

        if (collison) {
            gameOverAction();
        }

        bugs.forEach(b => {
            fireBalls.forEach(f => {
                if (isCollision(f, b)) {
                    f.parentElement.removeChild(f);
                    b.parentElement.removeChild(b);
                    scene.score += game.bugKillScore;
                }
            });
        });
    }    

    function applyMovement() {
        wizard.style.left = player.x + 'px';
        wizard.style.top = player.y + 'px';
    }

    function applyScore() {
        gamePoints.textContent = Math.round(scene.score);

        if (scene.isActive) {
            window.requestAnimationFrame(gameAction);
        }
    }    

    addBugs();   
    addClouds(); 
    modifyBugPositions();
    modifyCloudsPositions();  
    modifyFireballsPositions();    
    applyGravity();
    registerUserInput();
    collisionDetection();
    applyMovement();
    applyScore();    
}

function onKeyDown(e) {
    keys[e.code] = true;
}

function onKeyUp(e) {
    keys[e.code] = false;
}