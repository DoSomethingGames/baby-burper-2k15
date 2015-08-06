function GameController() {
  var babyController;
  var burpController;
  var foodController;

  function setBaby(controller) {
    babyController = controller;
  }

  function setBurp(controller) {
    burpController = controller;
  }

  function setFood(controller) {
    foodController = controller;
  }

  function update() {
    babyController.update();
    burpController.update();
    foodController.update();
  }

  return {
    update: update,
    setBaby: setBaby,
    setBurp: setBurp,
    setFood: setFood
  }
}