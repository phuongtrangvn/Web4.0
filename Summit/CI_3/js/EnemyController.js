class EnemyController{
  constructor(position, spriteName, configs){
    this.configs = configs;

    this.sprite = Nakama.enemyGroup.create(
      position.x,
      position.y,
      'assets',
      spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.sprite.health = configs.health;
  }
}
