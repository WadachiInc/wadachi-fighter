import Ember from 'ember';
import Computed from '../utils/computed';

export default Ember.Mixin.create({

  // ---------------------------------- プロパティ

  triggerDidFacebookStatusChange: Computed.eventTrigger("didFacebookStatusChange"),

  // ---------------------------------- メソッド

  // Facebookイベントを初期化する
  init: function() {
    this._super.apply(this, arguments);
    this.attachFacebookEvents();
  },

  willDestroy: function() {
    this.detatchFacebookEvents();
    this._super.apply(this, arguments);
  },

  // イベントを有効にする
  attachFacebookEvents: function() {
    this._super.apply(this, arguments);
    window.FB.Event.subscribe("auth.statusChange", this.get("triggerDidFacebookStatusChange"));
  },

  // イベントを無効にする
  detatchFacebookEvents: function() {
    window.FB.Event.unsubscribe("auth.statusChange", this.get("triggerDidFacebookStatusChange"));
    this._super.apply(this, arguments);
  }
});
