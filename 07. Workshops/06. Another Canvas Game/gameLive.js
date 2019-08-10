(function app() {
    //Game config
    const catSpeed = 5;
    let mouseSpeed = 1;

    //Initialize
    let resources = 2;

    function onResourceLoad() {
        resources--;

        if(resources === 0) {
            main();
        }
    }

    let theCat = new Image();
    theCat.onload = onResourceLoad;
    theCat.src = './images/cat.png';

    let theMouse = new Image();
    theMouse.onload = onResourceLoad;
    theMouse.src = './images/mouse.png';

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.font = "24px monospace";
    ctx.textBaseline = 'top';

    //Attach event listeners
    function keyboardHandler(event) {
        if (event.type === 'keydown') {
            keysPressed[event.code] = true;
        } else if (event.type === 'keyup') {
            delete keysPressed[event.code];
        }
    }

    window.addEventListener('keydown', keyboardHandler);
    window.addEventListener('keyup', keyboardHandler);
    let keysPressed = {};

    //Game Objects
    let cat = { x: 400, y: 300 };
    let mouse = { x: 100, y: 100, dirX: true, dirY: true};
    let score = 0;

    function randomizeMouseDirection(mouse) {
        mouse.dirX = Math.random() < 0.5 ? true : false;
        mouse.dirY = Math.random() < 0.5 ? true : false;
    }

    randomizeMouseDirection(mouse);

    function moveCat(direction) {
        switch (direction) {
            case 'ArrowLeft':
                cat.x -= catSpeed;
                break;
            case 'ArrowRight':
                cat.x += catSpeed;
                break;
            case 'ArrowUp':
                cat.y -= catSpeed;
                break;
            case 'ArrowDown':
                cat.y += catSpeed;
                break;
        }

        if (cat.y < -theCat.height / 2) {
            cat.y = canvas.height + theCat.height / 2;
        }

        if (cat.y > canvas.height + theCat.height / 2) {
            cat.y = -theCat.height / 2;
        }

        if (cat.x < -theCat.width / 2) {
            cat.x = canvas.width + theCat.width / 2;
        }

        if (cat.x > canvas.width + theCat.width / 2) {
            cat.x = -theCat.width / 2;
        }
    }

    function moveMouse() {
        if(mouse.dirX) {
            mouse.x += mouseSpeed;

            if(mouse.x >= canvas.width - theMouse.width / 2) {
                mouse.dirX = false;
            }
        } else {
            mouse.x -= mouseSpeed;

            if(mouse.x <= theMouse.width / 2) {
                mouse.dirX = true;
            }
        }

        if(mouse.dirY) {
            mouse.y += mouseSpeed;

            if(mouse.y >= canvas.height - theMouse.height / 2) {
                mouse.dirY = false;
            }
        } else {
            mouse.y -= mouseSpeed;

            if(mouse.y <= theMouse.height / 2) {
                mouse.dirY = true;
            }
        }
    }

    function detectCollision() {
        let distance = Math.sqrt((cat.x - mouse.x) ** 2 + (cat.y - mouse.y) ** 2);
        
        if(distance < 50) {
            score++;
            let modifier = Math.ceil(score / 10);
            if(mouseSpeed < modifier) mouseSpeed++;
            mouse.x = Math.random() * canvas.width;
            mouse.y = Math.random() * canvas.height;
            randomizeMouseDirection(mouse);
        }
    }

    function draw() {
        ctx.clearRect(0, 0, 800, 600);
        ctx.drawImage(theMouse, mouse.x - theMouse.width / 2, mouse.y - theMouse.height / 2);
        ctx.drawImage(theCat, cat.x - theCat.width / 2, cat.y - theCat.height / 2);        
        ctx.fillText(`Score: ${score}`, 25, 25);
        ctx.fillText(`Level: ${mouseSpeed}`, 25, 50);
    }

    function main() {
        for (const key in keysPressed) {
            moveCat(key);
        }

        moveMouse();
        detectCollision();

        draw();
        requestAnimationFrame(main);
    }   
}) ();