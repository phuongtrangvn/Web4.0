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

    if(Nakama.keyboard.isDown(this.configs.fire) && this.timeSinceLastFire >= this.configs.cooldown){
      this.fire();
      this.timeSinceLastFire = 0;
    }
  }

  fire() {
    var newBullet = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      'BulletType1.png'
    );
    newBullet.anchor = new Phaser.Point(0.5, 0.5);
    //= new Phaser.Point(0, -10).setMagnitude(Nakama.configs.BULLET_SPEED);
    newBullet.body.velocity.y = -Nakama.configs.BULLET_SPEED;

    var newBullet1 = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      'BulletType1.png'
    );
    newBullet1.anchor = new Phaser.Point(0.5, 0.5);
    // (1,-10) la toa do cua dinh? vecto
    newBullet1.body.velocity = new Phaser.Point(1, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

    var newBullet2 = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      'BulletType1.png'
    );
    newBullet2.anchor = new Phaser.Point(0.5, 0.5);
    newBullet2.body.velocity = new Phaser.Point(-1, -10).setMagnitude(Nakama.configs.BULLET_SPEED);

  }
}
