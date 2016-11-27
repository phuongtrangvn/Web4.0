//alert('Hello world !');

//khoi tao Object
var Nakama = {};
Nakama.configs = {
  SHIP_SPEED : 350 //quy uoc hang so
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

  Nakama.keyboard = Nakama.game.input.keyboard;
  //tau 1
  Nakama.ship = Nakama.game.add.sprite(
    200,
    400,
    'assets',
    "Spaceship1-Player.png"
  );
  Nakama.game.physics.enable(Nakama.ship, Phaser.Physics.ARCADE);
  //tau 2
  Nakama.ship_2= Nakama.game.add.sprite(
    400,
    400,
    'assets',
    "Spaceship1-Partner.png"
  );
  Nakama.game.physics.enable(Nakama.ship_2, Phaser.Physics.ARCADE);
}
var update = function(){
  //neu nut UP dc nhan xuong(isDown)
  if(Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
    Nakama.ship.body.velocity.y = -Nakama.configs.SHIP_SPEED;
  }else if(Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
    Nakama.ship.body.velocity.y = Nakama.configs.SHIP_SPEED;
  }else {
    Nakama.ship.body.velocity.y = 0;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
    Nakama.ship.body.velocity.x = -Nakama.configs.SHIP_SPEED;
  }else if(Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    Nakama.ship.body.velocity.x = Nakama.configs.SHIP_SPEED;
  }else {
    Nakama.ship.body.velocity.x = 0;
  }
// tau 2
  if(Nakama.keyboard.isDown(Phaser.Keyboard.W)){
    Nakama.ship_2.body.velocity.y = -Nakama.configs.SHIP_SPEED;
  }else if(Nakama.keyboard.isDown(Phaser.Keyboard.S)){
    Nakama.ship_2.body.velocity.y = Nakama.configs.SHIP_SPEED;
  }else {
    Nakama.ship_2.body.velocity.y = 0;
  }

  if(Nakama.keyboard.isDown(Phaser.Keyboard.A)){
    Nakama.ship_2.body.velocity.x = -Nakama.configs.SHIP_SPEED;
  }else if(Nakama.keyboard.isDown(Phaser.Keyboard.D)){
    Nakama.ship_2.body.velocity.x = Nakama.configs.SHIP_SPEED;
  }else {
    Nakama.ship_2.body.velocity.x = 0;
  }
}
var render = function(){

}
