import Ember from 'ember';
import Computed from '../utils/computed';

export default Ember.Mixin.create({

  // ---------------------------------- プロパティ

  triggerDidGooglePlusStatusChange: Computed.eventTrigger("didGooglePlusStatusChange"),

  // ---------------------------------- メソッド

  // イベントを初期化する
  init: function() {
    this._super.apply(this, arguments);
    Ember.$(window.document).on("google-signin-callback", this.get("triggerDidGooglePlusStatusChange"));
  },

  // イベントを破壊する
  willDestroy: function() {
    Ember.$(window.document).off("google-signin-callback", this.get("triggerDidGooglePlusStatusChange"));
    this._super.apply(this, arguments);
  }
});
