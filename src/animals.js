var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FarmGame;
(function (FarmGame) {
    var circle, point, angle, cursors;
    var Animals = (function (_super) {
        __extends(Animals, _super);
        function Animals(game, x, y) {
            _super.call(this, game);
            var radius = game.world.centerX / 2;
            angle = 2 * Math.PI / FarmGame.config.animals.length;
            this.position = new Phaser.Point(x + radius / 2, y);
            this.pivot = this.position;
            point = new Phaser.Point(this.position.x + radius, this.position.y);
            point.rotate(this.position.x, this.position.y, Math.PI / 6);
            for (var i = 0; i < FarmGame.config.animals.length; i++) {
                point.rotate(this.position.x, this.position.y, angle);
                this.create(point.x, point.y, FarmGame.config.animals[i]);
            }
            this.setAll('anchor', { x: 0.5, y: 0.5 });
            this.setAll('alpha', 0.5);
            this.setAll('scale', { x: 1.5, y: 1.5 });
            cursors = this.game.input.keyboard.createCursorKeys();
            game.add.existing(this);
        }
        Animals.prototype.update = function () {
            var circle = this.position;
            if (cursors.left.isDown) {
                this.game.add.tween(this).to({ rotation: this.rotation - angle }, 500, Phaser.Easing.Linear.None, true);
                this.forEach(function (animal) {
                    this.game.add.tween(animal).to({ rotation: animal.rotation + angle }, 500, Phaser.Easing.Linear.None, true);
                }, this);
            }
            else if (cursors.right.isDown) {
                this.game.add.tween(this).to({ rotation: this.rotation + angle }, 500, Phaser.Easing.Linear.None, true);
                this.forEach(function (animal) {
                    this.game.add.tween(animal).to({ rotation: animal.rotation - angle }, 500, Phaser.Easing.Linear.None, true);
                }, this);
            }
        };
        return Animals;
    })(Phaser.Group);
    FarmGame.Animals = Animals;
})(FarmGame || (FarmGame = {}));
