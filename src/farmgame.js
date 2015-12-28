var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FarmGame;
(function (FarmGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 320, 480, Phaser.AUTO, '', null);
            this.state.add('Boot', FarmGame.Boot, false);
            this.state.add('Preloader', FarmGame.Preloader, false);
            this.state.add('Main', FarmGame.Main, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    FarmGame.Game = Game;
})(FarmGame || (FarmGame = {}));
window.onload = function () {
    var game = new FarmGame.Game();
};
