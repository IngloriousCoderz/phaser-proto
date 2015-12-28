/// <reference path="../bower_components/phaser/typescript/phaser.d.ts" />

module FarmGame {
  export class Game extends  Phaser.Game {
    constructor() {
      super(320, 480, Phaser.AUTO, '', null);

      this.state.add('Boot', Boot, false);
      this.state.add('Preloader', Preloader, false);
      this.state.add('Main', Main, false);

      this.state.start('Boot');
    }
  }
}

window.onload = function() {
  var game = new FarmGame.Game();
}
