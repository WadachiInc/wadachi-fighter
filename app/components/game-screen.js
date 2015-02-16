import CanvasScreenComponent from './canvas-screen';
import config from '../config/environment';

export default CanvasScreenComponent.extend({

  // ---------------------------------- プロパティ

  engine: null,

  // ---------------------------------- メソッド

  // ゲームエンジンを初期化する
  initEngine: function() {
    this.set("engine", new window.BABYLON.Engine(this.get("element"), true));
    if (config.environment === "development")
      window.engine = this.get("engine");
  }.on("didInsertElement"),

  // ゲーム画面のサイズを変更する
  resizeEngine: function() {
    this.get("engine").resize();
  }.on("didWindowResize")
});
