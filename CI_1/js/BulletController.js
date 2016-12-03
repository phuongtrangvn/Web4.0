class BulletController {
  constructor(x, y, spriteName){
    this.bullet = new Nakama.bulletGroup.create(x,y,'assets',spriteName);
    this.bullet.anchor = new Phaser.Point(0.5,0.5);
  }
}
