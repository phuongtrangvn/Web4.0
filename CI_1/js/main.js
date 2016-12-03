//alert('Hello world !');

//khoi tao Object
var Nakama = {};
Nakama.configs = {
  SHIP_SPEED : 350, //quy uoc hang so
  BULLET_SPEED : 1200,
  DAMAGE : 1
}

window.onload = function(){
  Nakama.game = new Phaser.Game(
    640,
    960,
    Phaser.AUTO,
    '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    },
    false,
    false
  );
}
var preload = function(){
  //tao man hinh game
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  //load image
  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
  Nakama.game.time.advancedTiming = true;
}
var create = function(){
  //quan li gavity
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);

  Nakama.map = Nakama.game.add.tileSprite(
    0,
    0,
    640,
    960,
    "background"
  );

  Nakama.keyboard = Nakama.game.input.keyboard;

  //tao lop dan va tau, thu tu dan trc tau sau ==> dan nam duoi tau
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  Nakama.shipControllers = [];
  //Nakama.enemyList = [];
  // Nakama.shipControllers.push(new ShipController(/* TODO */ ));


  var player1 = new ShipController(200, 600, "Spaceship1-Player.png", {
    up : Phaser.Keyboard.W,
    down : Phaser.Keyboard.S,
    left : Phaser.Keyboard.A,
    right : Phaser.Keyboard.D,
    fire1 : Phaser.Keyboard.SPACEBAR,
    cooldown : 0.2 //0.2ms
  });
  Nakama.shipControllers.push(player1);

  var player2 = new ShipController(400, 600, "Spaceship1-Partner.png", {
    up : Phaser.Keyboard.UP,
    down : Phaser.Keyboard.DOWN,
    left : Phaser.Keyboard.LEFT,
    right : Phaser.Keyboard.RIGHT,
    fire2 : Phaser.Keyboard.ENTER,
    cooldown : 0.2
  });
  Nakama.shipControllers.push(player2);

  var enemy1 = new EnemyController(320, 100, "EnemyType1.png", {
    cooldown1 : 0.1
  });
  //Nakama.enemyList.push(enemy1);

  var enemy2 = new EnemyController(420, 200, "EnemyType2.png", {
    cooldown1 : 0.1
  });
  //Nakama.enemyList.push(enemy2);

  var enemy3 = new EnemyController(220, 200, "EnemyType3.png", {
    cooldown1 : 0.1
  });
  //Nakama.enemyList.push(enemy3);
}
var update = function(){
  Nakama.map.tilePosition.y += 2;

  for (var i = 0; i < Nakama.shipControllers.length; i++) {
    Nakama.shipControllers[i].update();
  }
  // for (var j = 0; j < Nakama.enemyList.length; j++) {
  //   Nakama.enemyList[j].update();
  // }

  //check dan va dich va cham nhau
  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup, Nakama.enemyGroup, onBulletHitActor);
}

function onBulletHitActor(bulletSprite, actorSprite) {
  actorSprite.damage(Nakama.configs.DAMAGE); //dua vao configs
  bulletSprite.kill();
}

var render = function(){

}
