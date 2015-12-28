module FarmGame {
  var circle: Phaser.Circle,
    point: Phaser.Point,
    angle: number,
    cursors: Phaser.CursorKeys;

  export class Animals extends Phaser.Group {
    constructor(game: Phaser.Game, x: number, y: number) {
      super(game);

      var radius = game.world.centerX / 2;
      angle = 2 * Math.PI / config.animals.length;

      this.position = new Phaser.Point(x + radius / 2, y);
      this.pivot = this.position;

      point = new Phaser.Point(this.position.x + radius, this.position.y);
      point.rotate(this.position.x, this.position.y, Math.PI / 6);

      for (var i = 0; i < config.animals.length; i++) {
        point.rotate(this.position.x, this.position.y, angle);
        this.create(point.x, point.y, config.animals[i]);
      }
      this.setAll('anchor', {x: 0.5, y: 0.5});
      this.setAll('alpha', 0.5);
      this.setAll('scale', {x: 1.5, y: 1.5});

      cursors = this.game.input.keyboard.createCursorKeys();

      game.add.existing(this);
    }

    update() {
      var circle = this.position;
      if (cursors.left.isDown) {
        this.game.add.tween(this).to({rotation: this.rotation - angle}, 500, Phaser.Easing.Linear.None, true);
        this.forEach(function(animal: Phaser.Sprite) {
          this.game.add.tween(animal).to({rotation: animal.rotation + angle}, 500, Phaser.Easing.Linear.None, true);
        }, this);
      } else if (cursors.right.isDown) {
        this.game.add.tween(this).to({rotation: this.rotation + angle}, 500, Phaser.Easing.Linear.None, true);
        this.forEach(function(animal: Phaser.Sprite) {
          this.game.add.tween(animal).to({rotation: animal.rotation - angle}, 500, Phaser.Easing.Linear.None, true);
        }, this);
      }
    }
  }
}
