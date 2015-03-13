import Ember from 'ember';
import Computed from '../utils/computed';

export default Ember.Mixin.create({

  // ---------------------------------- プロパティ

  triggerDidWindowResize: Computed.eventTrigger("didWindowResize"),

  // ---------------------------------- メソッド

  // イベントを初期化する
  init: function() {
    this._super.apply(this, arguments);
    Ember.$(window).resize(this.get("triggerDidWindowResize"));
  },

  // イベントを破壊する
  willDestroy: function() {
    Ember.$(window).off("resize", this.get("triggerDidWindowResize"));
    this._super.apply(this, arguments);
  },

  // 要素が挿入されたときにサイズ変更イベントをトリガする
  didInsertElement: function() {
    this._super.apply(this, arguments);
    this.get("triggerDidWindowResize")();
  }
});
