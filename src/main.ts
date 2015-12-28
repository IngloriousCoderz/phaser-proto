module FarmGame {
  var cursors: Phaser.CursorKeys,
    food: Phaser.Group,
    animals: Phaser.Group,
    score: number,
    scoreText: Phaser.Text;

  export class Main extends Phaser.State {
    init() {
      this.physics.startSystem(Phaser.Physics.ARCADE);
    }

    create() {
      var bg: Phaser.Sprite = this.game.add.sprite(0, 0, 'bg');

      var hOffset = 16;
      food = this.game.add.group();
      for (var i = 0; i < config.food.length; i++) {
        food.create(8 + i * (hOffset + 64), 64, config.food[i]);
      }

      animals = new Animals(this.game, this.world.centerX, this.world.height);

      scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    }

    update() {

    }

    render() {

    }
  }
}
