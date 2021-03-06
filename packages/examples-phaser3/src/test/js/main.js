import Phaser from "phaser";
import Load from "./scenes/load";
import Start from "./scenes/start";
import NavMeshPlugin from "phaser-navmesh";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: "game-container",
  width: 750,
  height: 750,
  backgroundColor: "#fff",
  pixelArt: false,
  plugins: {
    scene: [
      {
        key: "NavMeshPlugin", // Key to store the plugin class under in cache
        plugin: NavMeshPlugin, // Class that constructs plugins
        mapping: "navMeshPlugin", // Property mapping to use for the scene, e.g. this.navMeshPlugin
        start: true,
      },
    ],
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: 0,
    },
  },
});

game.scene.add("load", Load);
game.scene.add("start", Start);
game.scene.start("load");
