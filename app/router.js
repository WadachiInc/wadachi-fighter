import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("dojo", function() {
  });

  this.resource("town", function() {
  });

  this.resource("map", function() {
  });
});

export default Router;
