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

  //==> tao da dc chuyen qua thanh Object
  // //tau 1
  // Nakama.ship = Nakama.game.add.sprite(
  //   200,
  //   400,
  //   'assets',
  //   "Spaceship1-Player.png"
  // );
  // Nakama.game.physics.enable(Nakama.ship, Phaser.Physics.ARCADE);
  // //tau 2
  // Nakama.ship_2= Nakama.game.add.sprite(
  //   400,
  //   400,
  //   'assets',
  //   "Spaceship1-Partner.png"
  // );
  // Nakama.game.physics.enable(Nakama.ship_2, Phaser.Physics.ARCADE);

  Nakama.shipControllers = [];
  // Nakama.shipControllers.push(new ShipController(/* TODO */ ));
  var enemy = Nakama.enemyGroup.create(
    320,
    100,
    'assets',
    "EnemyType1.png"
  );
  enemy.health = 200;

  var player1 = new ShipController(200, 600, "Spaceship1-Player.png", {
    up : Phaser.Keyboard.W,
    down : Phaser.Keyboard.S,
    left : Phaser.Keyboard.A,
    right : Phaser.Keyboard.D,
    fire : Phaser.Keyboard.SPACEBAR,
    cooldown : 0.2 //0.2ms
  });
  Nakama.shipControllers.push(player1);

  var player2 = new ShipController(400, 600, "Spaceship1-Partner.png", {
    up : Phaser.Keyboard.UP,
    down : Phaser.Keyboard.DOWN,
    left : Phaser.Keyboard.LEFT,
    right : Phaser.Keyboard.RIGHT,
    fire : Phaser.Keyboard.SHIFT,
    cooldown : 0.2
  });
  Nakama.shipControllers.push(player2);

}
var update = function(){


//   //neu nut UP dc nhan xuong(isDown)
//   if(Phaser.Keyboard.isDown(Phaser.Keyboard.UP)){
//     Nakama.ship.body.velocity.y = -Nakama.configs.SHIP_SPEED;
//   }else if(Phaser.Keyboard.isDown(Phaser.Keyboard.DOWN)){
//     Nakama.ship.body.velocity.y = Nakama.configs.SHIP_SPEED;
//   }else {
//     Nakama.ship.body.velocity.y = 0;
//   }
//
//   if(Phaser.Keyboard.isDown(Phaser.Keyboard.LEFT)){
//     Nakama.ship.body.velocity.x = -Nakama.configs.SHIP_SPEED;
//   }else if(Phaser.Keyboard.isDown(Phaser.Keyboard.RIGHT)){
//     Nakama.ship.body.velocity.x = Nakama.configs.SHIP_SPEED;
//   }else {
//     Nakama.ship.body.velocity.x = 0;
//   }
// // tau 2
//   if(Phaser.Keyboard.isDown(Phaser.Keyboard.W)){
//     Nakama.ship_2.body.velocity.y = -Nakama.configs.SHIP_SPEED;
//   }else if(Phaser.Keyboard.isDown(Phaser.Keyboard.S)){
//     Nakama.ship_2.body.velocity.y = Nakama.configs.SHIP_SPEED;
//   }else {
//     Nakama.ship_2.body.velocity.y = 0;
//   }
//
//   if(Phaser.Keyboard.isDown(Phaser.Keyboard.A)){
//     Nakama.ship_2.body.velocity.x = -Nakama.configs.SHIP_SPEED;
//   }else if(Phaser.Keyboard.isDown(Phaser.Keyboard.D)){
//     Nakama.ship_2.body.velocity.x = Nakama.configs.SHIP_SPEED;
//   }else {
//     Nakama.ship_2.body.velocity.x = 0;
//   }
  Nakama.map.tilePosition.y += 2;

  for (var i = 0; i < Nakama.shipControllers.length; i++) {
    Nakama.shipControllers[i].update();
  }

  //check dan va dich va cham nhau
  Nakama.game.physics.arcade.overlap(Nakama.bulletGroup, Nakama.enemyGroup, onBulletHitActor);
}

function onBulletHitActor(bulletSprite, actorSprite) {
  actorSprite.damage(Nakama.configs.DAMAGE); //dua vao configs
  bulletSprite.kill();
}

var render = function(){

}
