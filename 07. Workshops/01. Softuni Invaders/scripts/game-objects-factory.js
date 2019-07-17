(function (scope){
    const { SIZES } = scope;
    class GameObjectsFactory{
        constructor(containerWidth, containerHeight){
            this.bounds = { containerWidth, containerHeight };
        }

        createPlayer() {
            const { containerWidth, containerHeight } = this.bounds;
            const { WIDTH, HEIGHT } = SIZES.PLAYER;
            const left = (containerWidth - WIDTH) / 2;
            const top = (containerHeight - HEIGHT);
            const player = { top, left };

            return player;
        }

        createBullet(top, left) {
            const bullet = { top, left };
            return bullet;
        }

        createEnemy() {
            const { containerWidth } = this.bounds;
            const top = 0;
            const left = parseInt(Math.random() * containerWidth);

            return {
                left,
                top,
            };
        }
    }
    scope.GameObjectsFactory = GameObjectsFactory;
}(window));
