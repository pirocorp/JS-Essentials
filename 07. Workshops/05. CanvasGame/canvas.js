let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Background image
let bgReady = false;
let bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "./images/background.png";

// Hero image
let heroReady = false;
let heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "./images/hero.png";

// Monster image
let monsterReady = false;
let monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "./images/monster.png";

// Game objects
let hero = {
    speed: 256, // movement in pixels per second
    x: 0,
    y: 0
};

let monster = {
    x: 0,
    y: 0
};

let monstersCaught = 0;

// Handle keyboard controls
let keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
let reset = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    // Throw the monster somewhere on the screen randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};

let monsterMove = function(modifier) {
    let mod = Math.random() < 0.6  ? 1 : -1;

    let direction = Math.random() * 10;

    if (direction > 2) {
        monster.x += mod * hero.speed * modifier;
        
    } else if (direction > 1) {
        monster.y += mod * hero.speed * modifier;
    }   else {
        monster.x += mod * hero.speed * modifier;
        monster.y += mod * hero.speed * modifier;
    }

    if (monster.y < -32) {
        monster.y = 480;
    }

    if (monster.y > 480) {
        monster.y = -32;
    }

    if (monster.x < -32) {
        monster.x = 512;
    }

    if (monster.x > 512) {
        monster.x = -32;
    }
}

// Update game objects
let update = function (modifier) {
    if (38 in keysDown) { // Player holding up
        hero.y -= hero.speed * modifier;
        monsterMove(modifier);
    }
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed * modifier;
        monsterMove(modifier);
    }
    if (37 in keysDown) { // Player holding left
        hero.x -= hero.speed * modifier;
        monsterMove(modifier);
    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed * modifier;
        monsterMove(modifier);
    }

    if (hero.y < -32) {
        hero.y = 480;
    }

    if(hero.y > 480) {
        hero.y = -32;
    }

    if(hero.x < -32) {
        hero.x = 512;
    }

    if(hero.x > 512) {
        hero.x = -32;
    }


    // Are they touching?
    if (
        hero.x <= (monster.x + 32)
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)
    ) {
        ++monstersCaught;
        reset();
    }
};

// Draw everything
let render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Monsters caught: " + monstersCaught, 32, 32);
};

// The main game loop
let main = function () {
    let now = Date.now();
    let delta = now - then;

    update(delta / 1000);

    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
let then = Date.now();
reset();
main();