function BabyController() {

  console.log('baby made');

  function init() {}

  function preload() {
    game.load.image('babyImg', 'assets/baby.png');
  }

  var baby;
  var leftBtn;
  var rightBtn;
  var spaceBtn;

  var gameState;

  function create() {
    //enable physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 100;

    //instantiate gameState
    gameState = new GameState();

    //create baby sprite, add physics
    baby = game.add.sprite(game.width/2, game.height - game.cache.getImage('babyImg').height, 'babyImg');
    game.physics.arcade.enable(baby);
    baby.body.velocity.set(0, 0);
    baby.body.bounce.y = 0;
    baby.body.bounce.x = 1;
    baby.body.collideWorldBounds = true;

    //create KeyListeners
    leftBtn = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    leftBtn.onDown.add(moveLeft, this);

    rightBtn = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rightBtn.onDown.add(moveRight, this);

    spaceBtn = game.input.keyboard.addKey(Phaser.Keyboard.SPACE);
    spaceBtn.onDown.add(burp, this);

    game.input.keyboard.removeKeyCapture(Phaser.Keyboard.LEFT);
    game.input.keyboard.removeKeyCapture(Phaser.Keyboard.RIGHT);
    game.input.keyboard.removeKeyCapture(Phaser.Keyboard.SPACE);
  }

  function update() {
  }

  function moveLeft() {
    baby.body.velocity.set(-150, 0);
  }

  function moveRight() {
    baby.body.velocity.set(150, 0);
  }

  function burp() {

  }

  function checkCollision(food) {
    for (var i = 0; i < food.length; i++) {
      game.physics.arcade.collide(baby, food[i], gameState.foodEaten()); //need callback collision to remove food
    }
  }

  return {
    init: init,
    preload: preload,
    create: create,
    update: update
  }
}