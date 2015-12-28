var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FarmGame;
(function (FarmGame) {
    var animalNames, foodNames, cursors, animals, food, score, scoreText;
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.apply(this, arguments);
        }
        Main.prototype.preload = function () {
            this.game.load.image('sky', 'assets/sky.png');
            this.game.load.image('star', 'assets/star.png');
            for (var i = 0; i < FarmGame.config.animals.length; i++) {
                this.game.load.image(FarmGame.config.animals[i], 'assets/animals/' + FarmGame.config.animals[i] + '.png');
            }
            for (var i = 0; i < FarmGame.config.foods.length; i++) {
                this.game.load.image(FarmGame.config.foods[i], 'assets/food/' + FarmGame.config.foods[i] + '.png');
            }
        };
        Main.prototype.create = function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.add.sprite(0, 0, 'sky');
            animals = this.game.add.group();
            var hOffset = 16;
            var vOffset = this.game.world.height - 64 - 16;
            for (var i = 0; i < FarmGame.config.animals.length; i++) {
                animals.create(8 + i * (hOffset + 64), vOffset, FarmGame.config.animals[i]);
            }
            food = this.game.add.group();
            for (var i = 0; i < FarmGame.config.foods.length; i++) {
                food.create(8 + i * (hOffset + 64), 64, FarmGame.config.foods[i]);
            }
            cursors = this.game.input.keyboard.createCursorKeys();
            scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        };
        Main.prototype.update = function () {
        };
        return Main;
    })(Phaser.State);
    FarmGame.Main = Main;
})(FarmGame || (FarmGame = {}));
