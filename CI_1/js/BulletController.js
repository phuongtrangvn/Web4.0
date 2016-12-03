class BulletController {
  constructor(x, y, spriteName, configs){
      this.configs = configs;
      this.sprite = Nakama.bulletGroup.create(
      this.sprite.position.x,
      this.sprite.position.y,
      'assets',
      'BulletType1.png'
    );
    newBullet.anchor = new Phaser.Point(0.5, 0.5);
    //= new Phaser.Point(0, -10).setMagnitude(Nakama.configs.BULLET_SPEED);
    newBullet.body.velocity = new Phaser.Point().setMagnitude(Nakama.configs.BULLET_SPEED);
  }
}
