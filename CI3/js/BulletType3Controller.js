class BulletType3Controller extends BulletController{
  constructor(position, direction, configs, master){
    var spriteName = "BulletType3.png";
    super(position, spriteName, direction, configs);
    this.master = master;
    this.sprite.anchor = new Phaser.Point(0.5, 1);
    this.sprite.body.velocity.setTo(0, 0);
    this.sprite.update = this.update.bind(this);
  }
  update() {
    if(this.sprite._exists && this.master) {
      this.sprite.x = this.master.x;
      this.sprite.y = this.master.y - 25;
    }

  }
}
