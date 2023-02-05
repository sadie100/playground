import Phaser from "phaser";
import Background from "./scenes/Background";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Background],
};

const phaserGame = new Phaser.Game(config);
window.game = phaserGame;
export default phaserGame;
