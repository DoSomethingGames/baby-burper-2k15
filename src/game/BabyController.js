function BabyController() {

  console.log('baby made');

  function init() {}

  function preload() {
    console.log('baby preloaded');
    game.load.image('babyImg', 'assets/baby.png');
  }

  var baby;
  var leftBtn;
  var rightBtn;
  var spaceBtn;

  function create() {
    console.log('baby created');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 100;

    baby = game.add.sprite(game.width/2, game.height - this.height - 10, 'babyImg');
    game.physics.arcade.enable(baby);
    baby.body.velocity.set(0, 0);
    baby.body.bounce.y = 0;
    baby.body.bounce.x = 1;
    baby.body.collideWorldBounds = true;

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

  return {
    init: init,
    preload: preload,
    create: create,
    update: update
  }
}