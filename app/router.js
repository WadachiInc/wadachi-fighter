import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // サイドバー
  this.resource("news", function() {
  });

  this.resource("help", function() {
  });

  this.resource("settings", function() {
  });

  this.resource("about", function() {
  });

  // 親指メニュー
  this.resource("dojo", function() {
  });

  this.resource("town", function() {
  });

  this.resource("map", function() {
  });
});

export default Router;
