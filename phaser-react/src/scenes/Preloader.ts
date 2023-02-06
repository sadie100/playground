import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }

  preload() {
    this.load.image("tiles", "assets/Isometric_MedievalFantasy_Tiles.png");
    this.load.tilemapTiledJSON("example", "assets/example.json");
  }

  create() {
    this.scene.start("game");
  }
}
