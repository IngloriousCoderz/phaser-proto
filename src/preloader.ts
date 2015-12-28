module FarmGame {
  export class Preloader extends Phaser.State {
    preloadBar: Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
      this.load.setPreloadSprite(this.preloadBar);

      this.game.load.image('sky', 'assets/sky.png');
      this.game.load.image('star', 'assets/star.png');
      for (var i = 0; i < config.animals.length; i++) {
        this.game.load.image(config.animals[i], 'assets/animals/' + config.animals[i] + '.png');
      }
      for (var i = 0; i < config.foods.length; i++) {
        this.game.load.image(config.foods[i], 'assets/food/' + config.foods[i] + '.png');
      }
    }

    create() {
      var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
      tween.onComplete.add(function() {
        this.game.state.start('Main');
      }, this);
    }
  }
}
