import Ember from 'ember';
import sendEvent from '../utils/send-event';

export default Ember.Mixin.create({

  // ---------------------------------- プロパティ

  triggerDidFacebookStatusChange: null,

  // ---------------------------------- メソッド

  // Facebookイベントを初期化する
  init: function() {
    this._super.apply(this, arguments);
    this.set("triggerDidFacebookStatusChange", sendEvent.bind(Ember, this, "didFacebookStatusChange"));
    this.attachFacebookEvents();
  },

  willDestroy: function() {
    this.detatchFacebookEvents();
    this._super.apply(this, arguments);
  },

  // イベントを有効にする
  attachFacebookEvents: function() {
    window.FB.Event.subscribe("auth.statusChange", this.get("triggerDidFacebookStatusChange"));
  },

  // イベントを無効にする
  detatchFacebookEvents: function() {
    window.FB.Event.unsubscribe("auth.statusChange", this.get("triggerDidFacebookStatusChange"));
  }
});
