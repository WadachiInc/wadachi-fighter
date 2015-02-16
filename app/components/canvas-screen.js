import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "canvas",

  // ---------------------------------- メソッド

  // バインディングを初期化する
  initBindings: function() {
    this.resize = this.resize.bind(this);
  }.on("init"),

  // キャンバスを初期化する
  initCanvas: function() {
    Ember.$(window).resize(this.resize);
    this.resize();
  }.on("didInsertElement"),

  // キャンバスを破壊する
  destroyCanvas: function() {
    Ember.$(window).off("resize", this.resize);
  }.on("willDestroyElement"),

  // ウィンドウのサイズが変更されたときにキャンバスのサイズを変更する
  resize: function() {
    this.$().width(this.$().parent().width());
    this.$().height(this.$().parent().height());
  }
});
