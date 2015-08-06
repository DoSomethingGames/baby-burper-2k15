function FoodController() {
  var foodLibrary;
  var currFoods;
  var startTime;
  var lastSpawnTime;

  // Spawn delay in milliseconds
  var minSpawnDelay = 500;
  var maxSpawnDelay = 2000;
  var maxFoodAllowed = 5;

  function init() {
    currFoods = [];
    foodLibrary = [];

    lastSpawnTime = 0;
  }

  function preload() {
    var tmp;
    
    tmp = {name: 'food1', image: game.load.image('food1', 'assets/food1.png')};
    foodLibrary[foodLibrary.length] = tmp;
    tmp = {name: 'food2', image: game.load.image('food1', 'assets/food2.png')};
    foodLibrary[foodLibrary.length] = tmp;
    tmp = {name: 'food3', image: game.load.image('food1', 'assets/food3.png')};
    foodLibrary[foodLibrary.length] = tmp;
  }

  function startSpawn() {
    var d = new Date();
    startTime = d.getTime();
  }

  function update() {
    var currTime;

    currTime = (new Date()).getTime();

    // @todo destroy foods when they fall out of frame
    // @todo spawn new foods when able
    // if (currFoods.length < maxFoods) {
    if (currTime - lastSpawnTime > 1000) {
      spawnFood();
    }
  }

  function spawnFood() {
    var x;
    var y;
    var sprite;

    x = Math.floor(Math.random() * 700);
    x += 50;
    y = 0;

    // Create and position sprite
    sprite = game.add.sprite(x, y, foodLibrary[0].name);

    // Add physics to the sprite
    game.physics.enable([sprite], Phaser.Physics.ARCADE);
    sprite.body.gravity.y = 150;

    currFoods[currFoods.length] = sprite;

    lastSpawnTime = (new Date()).getTime();
  }

  return {
    init: init,
    preload: preload,
    startSpawn: startSpawn,
    update: update
  }  
}