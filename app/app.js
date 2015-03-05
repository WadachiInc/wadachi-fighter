import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

// パラメータとして引数を指定して、イベントを送信する
Ember.sendEventWithArgumentList = function(obj, eventName) {
  var args = Array.prototype.slice.call(arguments, 2);
  return Ember.sendEvent(obj, eventName, args);
};

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
