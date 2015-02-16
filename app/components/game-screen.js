import CanvasScreenComponent from './canvas-screen';

var BABYLON = window.BABYLON;

export default CanvasScreenComponent.extend({

  // ---------------------------------- プロパティ

  engine: null,
  scene: null,

  // ---------------------------------- メソッド

  // バインディングを初期化する
  initBindings: function() {
    this.renderLoop = this.renderLoop.bind(this);
  }.on("init"),

  // ゲームエンジンを初期化する
  initEngine: function() {
    var engine = new BABYLON.Engine(this.get("element"), true);
    this.set("engine", engine);
    this.createScene();
    engine.runRenderLoop(this.renderLoop);
  }.on("didInsertElement"),

  // ゲームエンジンを破壊する
  destroyEngine: function() {
    if (this.get("engine"))
      this.get("engine").dispose();
  },

  // シーンを作成する
  createScene: function() {
    var scene = new BABYLON.Scene(this.get("engine"));
    scene.clearColor = new BABYLON.Color3(0, 0, 0.2);

    var camera = new BABYLON.ArcRotateCamera("Camera", 1, 1, 12, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(this.get("element"), false);

    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);
    light.groundColor = new BABYLON.Color3(0.5, 0, 0.5);

    var material = new BABYLON.StandardMaterial("std", scene);
    material.diffuseColor = new BABYLON.Color3(0.5, 0, 0.5);

    var box = BABYLON.Mesh.CreateBox("mesh", 3, scene);
    box.showBoundingBox = true;
    box.material = material;

    this.set("scene", scene);
  },

  // シーンをレンダーする
  renderLoop: function() {
    this.get("scene").render();
  },

  // ゲーム画面のサイズを変更する
  resizeEngine: function() {
    this.get("engine").resize();
  }.on("didWindowResize")
});
