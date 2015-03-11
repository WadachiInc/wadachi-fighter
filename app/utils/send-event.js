import Ember from 'ember';

// パラメータとして引数を指定して、イベントを送信する
export default function sendEvent(obj, eventName) {
  var args = Array.prototype.slice.call(arguments, 2);
  return Ember.sendEvent(obj, eventName, args);
}
