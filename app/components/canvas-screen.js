import Ember from 'ember';
import ResizeEventsMixin from '../mixins/resize-events';

export default Ember.Component.extend(ResizeEventsMixin, {
  tagName: "canvas",

  // ---------------------------------- メソッド

  // ウィンドウのサイズが変更されたときにキャンバスのサイズを変更する
  resizeCanvas: function() {
    this.$().width(this.$().parent().width());
    this.$().height(this.$().parent().height());
  }.on("didWindowResize")
});
