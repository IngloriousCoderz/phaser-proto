/// <reference path="../bower_components/phaser/typescript/phaser.d.ts" />

window.onload = function() {
  var game: Phaser.Game,
    animalNames: string[],
    foodNames: string[],
    cursors: Phaser.CursorKeys,
    animals: Phaser.Group,
    food: Phaser.Group,
    score: number,
    scoreText: Phaser.Text;

  game = new Phaser.Game(320, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
  });

  animalNames = ['cow', 'sheep', 'horse', 'chicken'];
  foodNames = ['flower', 'grass', 'carrot', 'worm'];
  score = 0;

  function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('star', 'assets/star.png');
    for (var i = 0; i < animalNames.length; i++) {
      game.load.image(animalNames[i], 'assets/animals/' + animalNames[i] + '.png');
    }
    for (var i = 0; i < foodNames.length; i++) {
      game.load.image(foodNames[i], 'assets/food/' + foodNames[i] + '.png');
    }
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'sky');

    animals = game.add.group();
    var hOffset = 16;
    var vOffset = game.world.height - 64 - 16;
    for (var i = 0; i < animalNames.length; i++) {
      animals.create(8 + i * (hOffset + 64), vOffset, animalNames[i]);
    }

    food = game.add.group();
    for (var i = 0; i < foodNames.length; i++) {
      food.create(8 + i * (hOffset + 64), 64, foodNames[i]);
    }

    cursors = game.input.keyboard.createCursorKeys();

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
  }

  function update() {
  }

  function collectStar(player, star) {
    star.kill();
    score += 10;
    scoreText.text = 'score: ' + score;
  }
};
