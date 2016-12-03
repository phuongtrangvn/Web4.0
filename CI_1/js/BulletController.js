class BulletController {
  constructor(x, y, spriteName){
    this.bullet = Nakama.bulletGroup.create(x,y,'assets',spriteName);
    this.bullet.anchor = new Phaser.Point(0.5,0.5);
    //this.bullet.body.velocity = new Phaser.Point(0, 0).setMagnitude(Nakama.configs.BULLET_SPEED);
  }
}
