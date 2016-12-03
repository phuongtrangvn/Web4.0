class EnemyController{
  constructor(x, y, spriteName, configs){
    this.configs = configs;
    this.enemy = Nakama.enemyGroup.create(
      x,
      y,
      'assets',
      spriteName
    );
    this.enemy.anchor = new Phaser.Point(0.5, 0.5);
    this.enemy.health = 200;
    this.timeSinceLastFireE = 0;
  }
}
