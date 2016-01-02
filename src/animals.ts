module FarmGame {
  var circle: Phaser.Circle,
    angle: number,
    animating: boolean,
    current: number,
    cursors: Phaser.CursorKeys;

  var modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  export class Animals extends Phaser.Group {
    constructor(game: Phaser.Game, x: number, y: number) {
      super(game);

      var radius = 20 * config.animals.length;
      angle = 2 * Math.PI / config.animals.length;
      animating = false;

      // this.pivot = new Phaser.Point(x, y);
      this.rotation = Math.PI / config.animals.length;

      this.position = new Phaser.Point(x + radius, y);
      this.pivot = this.position;

      var point: Phaser.Point = new Phaser.Point(this.position.x + radius, this.position.y);
      point.rotate(this.position.x, this.position.y, Math.PI - angle);
      for (var i = 0; i < config.animals.length; i++) {
        point.rotate(this.position.x, this.position.y, angle);
        var animal = this.game.add.sprite(point.x, point.y, config.animals[i], 0, this);
        animal.rotation = -angle / 2;
        this.game.physics.arcade.enable(animal);
        animal.animations.add('chew', [1, 2, 3, 2], 10, true);
        animal.animations.play('chew');
        // this.create(point.x, point.y, config.animals[i], 0);
      }
      this.setAll('anchor', { x: 0.5, y: 0.5 });
      current = 0;
      this.selectAnimal(current, false);

      cursors = this.game.input.keyboard.createCursorKeys();

      game.add.existing(this);
    }

    update() {
      if (cursors.left.isDown && !animating) {
        this.onKeyPressed(1);
      } else if (cursors.right.isDown && !animating) {
        this.onKeyPressed(-1);
      }
    }

    onKeyPressed(direction) {
      animating = true;
      current += direction;
      this.game.add.tween(this).to({ rotation: this.rotation - direction * angle }, 500, Phaser.Easing.Linear.None, true).onComplete.add(this.onTweenComplete, this);
      this.forEach(function(animal: Phaser.Sprite) {
        this.game.add.tween(animal).to({ rotation: animal.rotation + direction * angle }, 500, Phaser.Easing.Linear.None, true);
      }, this);

      this.selectAnimal(current, true);
    }

    selectAnimal(index: number, animated?: boolean) {
      if (animated) {
        this.forEach(function(animal) {
          this.game.add.tween(animal).to({alpha: 0.5}, 500, Phaser.Easing.Linear.None, true);
          this.game.add.tween(animal.scale).to({x: 1.5, y: 1.5}, 500, Phaser.Easing.Linear.None, true);
        }, this);
      } else {
        this.setAll('alpha', 0.5);
        this.setAll('scale.x', 1.5);
        this.setAll('scale.y', 1.5);
      }

      index = modulo(index, config.animals.length);
      var animal = this.getChildAt(index);
      if (animated) {
        this.game.add.tween(animal).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
        this.game.add.tween(animal.scale).to({ x: 2, y: 2 }, 500, Phaser.Easing.Linear.None, true);
      } else {
        animal.alpha = 1;
        animal.scale.x = 2;
        animal.scale.y = 2;
      }
    }

    onTweenComplete() {
      animating = false;
    }
  }
}
