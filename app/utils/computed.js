import Ember from 'ember';
import sendEvent from '../utils/send-event';

export default {

  // ---------------------------------- メソッド

  // アクションをトリガーする関数
  actionTrigger: function(actionName) {
    return Ember.computed(function() {
      return this.sendAction.bind(this, actionName);
    }).readOnly();
  },

  // イベントをトリガする関数
  eventTrigger: function(eventName) {
    return Ember.computed(function() {
      return sendEvent.bind(this, this, eventName);
    }).readOnly();
  }
};
