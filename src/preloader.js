var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FarmGame;
(function (FarmGame) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.game.load.image('sky', 'assets/sky.png');
            this.game.load.image('star', 'assets/star.png');
            for (var i = 0; i < FarmGame.config.animals.length; i++) {
                this.game.load.image(FarmGame.config.animals[i], 'assets/animals/' + FarmGame.config.animals[i] + '.png');
            }
            for (var i = 0; i < FarmGame.config.foods.length; i++) {
                this.game.load.image(FarmGame.config.foods[i], 'assets/food/' + FarmGame.config.foods[i] + '.png');
            }
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(function () {
                this.game.state.start('Main');
            }, this);
        };
        return Preloader;
    })(Phaser.State);
    FarmGame.Preloader = Preloader;
})(FarmGame || (FarmGame = {}));
