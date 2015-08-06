function GameState() {
  var gameController;
  var babyController;
  var foodController;
  var burpController;

  var score;
  var lives;

  /**
   * init()
   */
  function init() {
    // @todo placeholder
    var text = "baby-burper-2l15";
    var style = { font: "24px Arial", fill: "#fff", align: "center" };
    var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
    t.anchor.setTo(0.5, 0.5);

    gameController = new GameController();
    babyController = new BabyController();
    foodController = new FoodController();
    burpController = new BurpController();

    gameController.setBaby(babyController);
    gameController.setFood(foodController);
    gameController.setBurp(burpController);
  }

  /**
   * preload()
   */
  function preload() {

  }

  /**
   * create()
   */
  function create() {

  }

  /**
   * update()
   */
  function update() {
    gameController.update();
  }

  return {
    init: init,
    preload: preload,
    create: create,
    update: update
  }
}

game.state.add('game', new GameState());
game.state.start('game');