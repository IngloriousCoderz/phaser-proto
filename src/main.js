var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FarmGame;
(function (FarmGame) {
    var cursors, food, animals, circle, point, score, scoreText;
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.apply(this, arguments);
        }
        Main.prototype.init = function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);
        };
        Main.prototype.create = function () {
            var bg = this.game.add.sprite(0, 0, 'bg');
            bg.scale = new Phaser.Point(0.5, 0.5);
            var hOffset = 16;
            food = this.game.add.group();
            for (var i = 0; i < FarmGame.config.foods.length; i++) {
                food.create(8 + i * (hOffset + 64), 64, FarmGame.config.foods[i]);
            }
            var radius = this.world.centerX;
            circle = new Phaser.Circle(this.world.centerX + radius / 2, this.world.height, radius);
            point = new Phaser.Point(circle.x + circle.radius, circle.y);
            point.rotate(circle.x, circle.y, Math.PI / 6);
            var angle = 2 * Math.PI / FarmGame.config.animals.length;
            animals = this.game.add.group();
            for (var i = 0; i < FarmGame.config.animals.length; i++) {
                point.rotate(circle.x, circle.y, angle);
                animals.create(point.x, point.y, FarmGame.config.animals[i]);
                animals.alpha = 0.5;
            }
            animals.setAll('anchor', { x: 0.5, y: 0.5 });
            cursors = this.game.input.keyboard.createCursorKeys();
            scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        };
        Main.prototype.update = function () {
            if (cursors.left.isDown) {
                animals.forEach(function (animal) {
                    point = new Phaser.Point(animal.x, animal.y);
                    point.rotate(circle.x, circle.y, -0.05);
                    animal.position = point;
                }, this);
            }
            else if (cursors.right.isDown) {
                animals.forEach(function (animal) {
                    point = new Phaser.Point(animal.x, animal.y);
                    point.rotate(circle.x, circle.y, 0.05);
                    animal.position = point;
                }, this);
            }
        };
        Main.prototype.render = function () {
            this.game.debug.geom(circle, '#cfffff', false);
            this.game.debug.geom(point, '#ffff00', false);
        };
        return Main;
    })(Phaser.State);
    FarmGame.Main = Main;
})(FarmGame || (FarmGame = {}));
