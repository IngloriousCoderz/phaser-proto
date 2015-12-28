var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FarmGame;
(function (FarmGame) {
    var circle, angle, animating, current, cursors;
    var modulo = function (a, b) { return (+a % (b = +b) + b) % b; };
    var Animals = (function (_super) {
        __extends(Animals, _super);
        function Animals(game, x, y) {
            _super.call(this, game);
            var radius = 20 * FarmGame.config.animals.length;
            angle = 2 * Math.PI / FarmGame.config.animals.length;
            animating = false;
            this.rotation = Math.PI / FarmGame.config.animals.length;
            this.position = new Phaser.Point(x + radius, y);
            this.pivot = this.position;
            var point = new Phaser.Point(this.position.x + radius, this.position.y);
            point.rotate(this.position.x, this.position.y, Math.PI - angle);
            for (var i = 0; i < FarmGame.config.animals.length; i++) {
                point.rotate(this.position.x, this.position.y, angle);
                var animal = this.game.add.sprite(point.x, point.y, FarmGame.config.animals[i], 0, this);
                animal.rotation = -angle / 2;
                this.game.physics.arcade.enable(animal);
                animal.animations.add('chew', [1, 2, 3, 2], 10, true);
                animal.animations.play('chew');
            }
            this.setAll('anchor', { x: 0.5, y: 0.5 });
            current = 0;
            this.selectAnimal(current, false);
            cursors = this.game.input.keyboard.createCursorKeys();
            game.add.existing(this);
        }
        Animals.prototype.update = function () {
            if (cursors.left.isDown && !animating) {
                this.onKeyPressed(1);
            }
            else if (cursors.right.isDown && !animating) {
                this.onKeyPressed(-1);
            }
        };
        Animals.prototype.onKeyPressed = function (direction) {
            animating = true;
            current += direction;
            this.game.add.tween(this).to({ rotation: this.rotation - direction * angle }, 500, Phaser.Easing.Linear.None, true).onComplete.add(this.onTweenComplete, this);
            this.forEach(function (animal) {
                this.game.add.tween(animal).to({ rotation: animal.rotation + direction * angle }, 500, Phaser.Easing.Linear.None, true);
            }, this);
            this.selectAnimal(current, true);
        };
        Animals.prototype.selectAnimal = function (index, animated) {
            if (animated) {
                this.forEach(function (animal) {
                    this.game.add.tween(animal).to({ alpha: 0.5 }, 500, Phaser.Easing.Linear.None, true);
                    this.game.add.tween(animal.scale).to({ x: 1.5, y: 1.5 }, 500, Phaser.Easing.Linear.None, true);
                }, this);
            }
            else {
                this.setAll('alpha', 0.5);
                this.setAll('scale.x', 1.5);
                this.setAll('scale.y', 1.5);
            }
            index = modulo(index, FarmGame.config.animals.length);
            var animal = this.getChildAt(index);
            if (animated) {
                this.game.add.tween(animal).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
                this.game.add.tween(animal.scale).to({ x: 2, y: 2 }, 500, Phaser.Easing.Linear.None, true);
            }
            else {
                animal.alpha = 1;
                animal.scale.x = 2;
                animal.scale.y = 2;
            }
        };
        Animals.prototype.onTweenComplete = function () {
            animating = false;
        };
        return Animals;
    })(Phaser.Group);
    FarmGame.Animals = Animals;
})(FarmGame || (FarmGame = {}));
