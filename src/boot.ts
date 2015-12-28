module FarmGame {
  export var config = {
    animals: ['cow', 'sheep', 'horse', 'chicken'],
    food: ['flower', 'grass', 'carrot', 'worm'],
    food2animals: {
      'flower': 'cow',
      'grass': 'sheep',
      'carrot': 'horse',
      'worm': 'chicken'
    }
  };

  export class Boot extends Phaser.State {
    preload() {
      this.load.image('preloadBar', 'assets/loader.png');
    }

    create() {
      this.input.maxPointers = 1;
      this.game.renderer.renderSession.roundPixels = true;

      this.stage.disableVisibilityChange = true;

      if (this.game.device.desktop) {
        this.game.scale.pageAlignHorizontally = true;
      }

      this.game.state.start('Preloader');
    }
  }
}
