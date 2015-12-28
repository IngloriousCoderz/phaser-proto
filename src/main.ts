/// <reference path="../bower_components/phaser/typescript/phaser.d.ts" />

module FarmGame {
  var animalNames: string[],
    foodNames: string[],
    cursors: Phaser.CursorKeys,
    animals: Phaser.Group,
    food: Phaser.Group,
    score: number,
    scoreText: Phaser.Text;

  export class Main extends Phaser.State {
    preload() {
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
      this.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.sprite(0, 0, 'sky');

      animals = this.game.add.group();
      var hOffset = 16;
      var vOffset = this.game.world.height - 64 - 16;
      for (var i = 0; i < config.animals.length; i++) {
        animals.create(8 + i * (hOffset + 64), vOffset, config.animals[i]);
      }

      food = this.game.add.group();
      for (var i = 0; i < config.foods.length; i++) {
        food.create(8 + i * (hOffset + 64), 64, config.foods[i]);
      }

      cursors = this.game.input.keyboard.createCursorKeys();

      scoreText = this.game.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});
    }

    update() {

    }
  }
}
