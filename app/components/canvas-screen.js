import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "canvas",

  // ---------------------------------- メソッド

  // イベントを初期化する
  initEvents: function() {
    this.triggerDidWindowResize = Ember.sendEvent.bind(Ember, this, "didWindowResize");
  }.on("init"),

  // キャンバスを初期化する
  initCanvas: function() {
    Ember.$(window).resize(this.triggerDidWindowResize);
    this.resizeCanvas();
  }.on("didInsertElement"),

  // キャンバスを破壊する
  destroyCanvas: function() {
    Ember.$(window).off("resize", this.triggerDidWindowResize);
  }.on("willDestroyElement"),

  // ウィンドウのサイズが変更されたときにキャンバスのサイズを変更する
  resizeCanvas: function() {
    this.$().width(this.$().parent().width());
    this.$().height(this.$().parent().height());
  }.on("didWindowResize")
});
