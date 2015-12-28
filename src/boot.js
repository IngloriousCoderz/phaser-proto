var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FarmGame;
(function (FarmGame) {
    FarmGame.config = {
        animals: ['cow', 'sheep', 'horse', 'chicken'],
        foods: ['flower', 'grass', 'carrot', 'worm'],
        score: 0
    };
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1;
            this.game.renderer.renderSession.roundPixels = true;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.game.scale.pageAlignHorizontally = true;
            }
            this.game.state.start('Preloader');
        };
        return Boot;
    })(Phaser.State);
    FarmGame.Boot = Boot;
})(FarmGame || (FarmGame = {}));
