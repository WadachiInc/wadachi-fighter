import Ember from 'ember';
import Computed from '../utils/computed';

export default Ember.Mixin.create({

  // ---------------------------------- プロパティ

  triggerDidFacebookStatusChange: Computed.eventTrigger("didFacebookStatusChange"),

  // ---------------------------------- メソッド

  // イベントを初期化する
  init: function() {
    this._super.apply(this, arguments);
    window.FB.Event.subscribe("auth.statusChange", this.get("triggerDidFacebookStatusChange"));
  },

  // イベントを破壊する
  willDestroy: function() {
    window.FB.Event.unsubscribe("auth.statusChange", this.get("triggerDidFacebookStatusChange"));
    this._super.apply(this, arguments);
  }
});
