var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FarmGame;
(function (FarmGame) {
    var cursors, food, animals, score, scoreText;
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
            var hOffset = 16;
            food = this.game.add.group();
            for (var i = 0; i < FarmGame.config.food.length; i++) {
                food.create(8 + i * (hOffset + 64), 64, FarmGame.config.food[i]);
            }
            animals = new FarmGame.Animals(this.game, this.world.centerX, this.world.height);
            scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        };
        Main.prototype.update = function () {
        };
        Main.prototype.render = function () {
        };
        return Main;
    })(Phaser.State);
    FarmGame.Main = Main;
})(FarmGame || (FarmGame = {}));
