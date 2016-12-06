class ShipType1Controller extends ShipController{
  constructor(x, y, isPlayer1, configs){
    var spriteName = "Spaceship1-" + (isPlayer1 ? "Player" : "Partner") + ".png";
    configs.cooldown = 0.1;
    configs.health = 5;
    configs.hitBoxRadius = 15;
    configs.hitBoxOffset = new Phaser.Point(25, 20);

    super(x, y, spriteName, configs);
  }

  fire(){
    new BulletType1Controller(this.sprite.position, new Phaser.Point(0, -10),{ power : 20 });
    new BulletType1Controller(this.sprite.position, new Phaser.Point(1, -10),{ power : 20 });
    new BulletType1Controller(this.sprite.position, new Phaser.Point(-1, -10),{ power : 20 });
    new BulletType1Controller(this.sprite.position, new Phaser.Point(5, -10),{ power : 20 });
    new BulletType1Controller(this.sprite.position, new Phaser.Point(-5, -10),{ power : 20 });
  }
}
