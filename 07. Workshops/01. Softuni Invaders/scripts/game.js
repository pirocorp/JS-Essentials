(function (scope) {
    const { 
        Renderer, 
        GameObjectsFactory, 
        SIZES, 
        KEY_CODES,
        CollisionDetector,
    } = scope;

    const setupCanvas = function (gameContainer, width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        gameContainer.appendChild(canvas);
        return canvas;
    };

    const toCreate = (chance) => {
        const value = Math.random() * 100;
        return value <= chance;
    };

    class EventChecker {
        isGoLeftEvent(ev) {
            const { LEFT } = KEY_CODES;
            return ev.keyCode === LEFT;
        }

        isGpRightEvent(ev) {
            const { RIGHT } = KEY_CODES;
            return ev.keyCode === RIGHT;
        }

        isFireEvent(ev) {
            const { FIRE } = KEY_CODES;
            return ev.keyCode === FIRE;
        }
    }

    const getCollisionBox = ({ left, top }, { WIDTH, HEIGHT }) => {
        return {
            left: left,
            top: top,
            right: left + WIDTH,
            bottom: top + HEIGHT,
        };
    };

    class Game {
        constructor(selector, width, height) {
            this.gameContainer = document.querySelector(selector);
            this.canvas = setupCanvas(this.gameContainer, width, height);

            this.bounds = {
                width,
                height,
            };

            this.renderer = new Renderer(this.canvas, this.bounds);
            this.gameObjectsFactory = new GameObjectsFactory(width, height);
            this.eventChecker = new EventChecker();
            this.player = this.gameObjectsFactory.createPlayer();
            this.collisionDetector = new CollisionDetector();
            this.bullets = [];
            this.enemies = [];
            this._attachGameEvents();
        }

        start() {
            this._gameLoop();
        }

        _attachGameEvents() {
            window.addEventListener('keydown', (ev) => {
                this._handleMovementEvent(ev);
                this._handleFireEvent(ev);
            });

            window.addEventListener('keyup', (ev) => {
                this._handleRestoreEvent(ev);                
            });
        }

        _handleMovementEvent(ev) {
            const { SPEED, WIDTH } = SIZES.PLAYER;
            let alpha = 0;

            if(this.eventChecker.isGoLeftEvent(ev)) {
                alpha = -1;
                this.player.direction = 'left';
            } else if(this.eventChecker.isGpRightEvent(ev)) {
                alpha = +1;
                this.player.direction = 'right';
            }

            this.player.left += alpha * SPEED;
            this.player.left = Math.max(this.player.left, 0);
            this.player.left = Math.min(this.player.left, this.bounds.width - WIDTH);
        }

        _handleFireEvent(ev){
            if(!this.eventChecker.isFireEvent(ev)) {
                return;
            }

            const { top, left } = this.player;
            const leftBullet = this.gameObjectsFactory.createBullet(top, left);
            const leftOfRightBullet = left + SIZES.PLAYER.WIDTH - SIZES.BULLET.WIDTH;
            const rightBullet = this.gameObjectsFactory.createBullet(top, leftOfRightBullet);

            this.bullets.push(leftBullet, rightBullet);
        }

        _handleRestoreEvent(ev) {
            this.player.direction = null;
        }

        _render() {
            this.renderer.renderPlayer(this.player);
            this.renderer.renderBullets(this.bullets);
            this.renderer.renderEnemies(this.enemies);
        }

        _updatePositions() {
            const { SPEED: bulledSpeed } = SIZES.BULLET;
            const { SPEED: enemySpeed } = SIZES.ENEMY;
            const { height } = this.bounds;

            this.bullets.forEach(b => {
                b.top += bulledSpeed;
                b.isDead = b.top <= 0;
            });

            this.enemies.forEach(e => {
                e.top += enemySpeed;
                e.isDead = e.top >= height;
            });
        }

        _createNewGameObjects() {
            if (toCreate(3)) {
                const enemy = this.gameObjectsFactory.createEnemy();
                this.enemies.push(enemy);
            }
        }

        _checkForBulletsWithEnemiesCollisions() {
            const { bullets, enemies } = this;
            bullets.forEach(bullet => {
                const bulletCollisionBox = getCollisionBox(bullet, SIZES.BULLET);

                enemies.forEach(enemy => {
                    if(bullet.isDead || enemy.is) {
                        return;
                    }

                    const enemyCollisionBox = getCollisionBox(enemy, SIZES.ENEMY);
                    const hasCollision = this.collisionDetector.checkForCollision(bulletCollisionBox, enemyCollisionBox);

                    if(hasCollision) {
                        bullet.isDead = hasCollision;
                        enemy.isDead = hasCollision;
                    }
                });
            });
        }

        _checkForCollisions() {    
            //enemy with bullet
            this._checkForBulletsWithEnemiesCollisions();
            //player with enemy
        }

        _removeDeadGameObjects() {
            this.bullets = this.bullets.filter(x => !x.isDead);
            this.enemies = this.enemies.filter(y => !y.isDead);
        }

        //Creating game loop -> game loop update UI with objects changes
        _gameLoop() {
            this.renderer.clear();
            this._render();
            this._updatePositions();
            this._createNewGameObjects();
            this._checkForCollisions();
            this._removeDeadGameObjects();

            window.requestAnimationFrame(() => {
                this._gameLoop();
            });
        }
    }

    scope.Game = Game;
}(window));
