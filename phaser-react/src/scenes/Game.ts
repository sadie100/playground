import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {}

  create() {
    const map = this.make.tilemap({
      key: "example",
    });

    map.layers.map((layer) => {
      layer.x += 400 / 2;
      layer.y += 250 / 4;
    });

    const tileset = map.addTilesetImage("sixteen", "tiles");
    const floorLayer = map.createLayer("floors", tileset);
    const objectLayer = map.createLayer("objects", tileset);

    objectLayer.setCollisionByProperty({ collides: true });

    const debugGraphics = this.add.graphics().setAlpha(0.7);
    objectLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    });

    const char = this.add.sprite(128, 264, "char");
  }
}
