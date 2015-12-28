module FarmGame {
  export class Preloader extends Phaser.State {
    preloadBar: Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(this.world.centerX - 100, this.world.centerY, 'preloadBar');
      this.preloadBar.anchor = new Phaser.Point(0.5, 0.5);
      this.preloadBar.scale = new Phaser.Point(0.5, 0.5);
      this.load.setPreloadSprite(this.preloadBar);

      this.game.load.image('bg', 'assets/bg320.png');

      for (var i = 0; i < config.food.length; i++) {
        this.game.load.image(config.food[i], 'assets/food/' + config.food[i] + '.png');
      }

      for (var i = 0; i < config.animals.length; i++) {
        this.game.load.image(config.animals[i], 'assets/animals/' + config.animals[i] + '.png');
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
