class BulletController {
  constructor(position, spriteName, direction, configs){
    this.configs = configs;

    this.sprite = Nakama.bulletGroup.create(
      position.x,
      position.y,
      'assets',
      spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.power = this.configs.power;
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;

    this.sprite.body.velocity = direction.setMagnitude(Nakama.configs.BULLET_SPEED);
    this.sprite.angle = Math.atan2(direction.x, -direction.y) * (180/Math.PI);

    // Call explode when the sprite is killed
    // this.sprite.events.onKilled.add(this.explode, this);
  }

  update(){

  }
  //
  // explode(){
  //   var index = Nakama.bulletList.indexOf(this);
  //   if(index > -1){
  //     Nakama.bulletList.splice(index, 1);
  //   }
  // }
}
