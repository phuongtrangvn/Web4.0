class ShipController{
  //dua ra nhung gtri khoi tao
  constructor(x, y, spriteName, configs){
    this.configs = configs;
    this.sprite = Nakama.playerGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    //Nakama.game.physics.enable(this.sprite, Phaser.Physics.ARCADE); ko can nua vi co physicsGroup
    //this.fire();
    this.timeSinceLastFire = 0;

  }

  update() {
    this.timeSinceLastFire += Nakama.game.time.physicsElapsed; // physicsElapsed tinh theo s (giay)

    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -Nakama.configs.SHIP_SPEED;
    }else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = Nakama.configs.SHIP_SPEED;
    }else {
      this.sprite.body.velocity.y = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -Nakama.configs.SHIP_SPEED;
    }else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = Nakama.configs.SHIP_SPEED;
    }else {
      this.sprite.body.velocity.x = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.fire1) && this.timeSinceLastFire >= this.configs.cooldown){
      this.fire1();
      this.timeSinceLastFire = 0;
    }
    if(Nakama.keyboard.isDown(this.configs.fire2) && this.timeSinceLastFire >= this.configs.cooldown){
      this.fire2();
      this.timeSinceLastFire = 0;
    }
  }

  fire1() {
    var bullet1 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType1.png');
    bullet1.bullet.body.velocity = new Phaser.Point(0, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var bullet2 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType1.png');
    bullet2.bullet.body.velocity = new Phaser.Point(-1, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var bullet3 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType1.png');
    bullet3.bullet.body.velocity = new Phaser.Point(1, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var bullet4 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType1.png');
    bullet4.bullet.body.velocity = new Phaser.Point(-2, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var bullet5 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType1.png');
    bullet5.bullet.body.velocity = new Phaser.Point(2, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

  }

  fire2() {
    var bullet1 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType2.png');
    bullet1.bullet.body.velocity = new Phaser.Point(0, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var bullet2 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType2.png');
    bullet2.bullet.body.velocity = new Phaser.Point(-1, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var bullet3 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType2.png');
    bullet3.bullet.body.velocity = new Phaser.Point(1, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var bullet4 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType2.png');
    bullet4.bullet.body.velocity = new Phaser.Point(-2, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var bullet5 = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType2.png');
    bullet5.bullet.body.velocity = new Phaser.Point(2, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

  }
}
