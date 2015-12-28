/// <reference path="../bower_components/phaser/typescript/phaser.d.ts" />

module FarmGame {
  var cursors: Phaser.CursorKeys,
    food: Phaser.Group,
    animals: Phaser.Group,
    circle: Phaser.Circle,
    point: Phaser.Point,
    score: number,
    scoreText: Phaser.Text;

  export class Main extends Phaser.State {
    init() {
      this.physics.startSystem(Phaser.Physics.ARCADE);
    }

    create() {
      var bg: Phaser.Sprite = this.game.add.sprite(0, 0, 'bg');
      bg.scale = new Phaser.Point(0.5, 0.5);

      var hOffset = 16;
      food = this.game.add.group();
      for (var i = 0; i < config.foods.length; i++) {
        food.create(8 + i * (hOffset + 64), 64, config.foods[i]);
      }

      var radius = this.world.centerX;
      circle = new Phaser.Circle(this.world.centerX + radius / 2, this.world.height, radius);
      point = new Phaser.Point(circle.x + circle.radius, circle.y);
      point.rotate(circle.x, circle.y, Math.PI / 6);
      // circle.empty = true;

      var angle = 2 * Math.PI / config.animals.length;
      animals = this.game.add.group();
      // animals.pivot = new Phaser.Point(circle.x, circle.y);
      for (var i = 0; i < config.animals.length; i++) {
        point.rotate(circle.x, circle.y, angle);
        animals.create(point.x, point.y, config.animals[i]);
        animals.alpha = 0.5;
      }
      animals.setAll('anchor', {x: 0.5, y: 0.5});

      cursors = this.game.input.keyboard.createCursorKeys();

      scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    }

    update() {
      if (cursors.left.isDown) {
        animals.forEach(function(animal: Phaser.Sprite) {
          point = new Phaser.Point(animal.x, animal.y);
          point.rotate(circle.x, circle.y, -0.05);
          animal.position = point;
        }, this);
      } else if (cursors.right.isDown) {
        animals.forEach(function(animal: Phaser.Sprite) {
          point = new Phaser.Point(animal.x, animal.y);
          point.rotate(circle.x, circle.y, 0.05);
          animal.position = point;
        }, this);
      }
    }

    render() {
      this.game.debug.geom(circle, '#cfffff', false);
      this.game.debug.geom(point, '#ffff00', false)
    }
  }
}
