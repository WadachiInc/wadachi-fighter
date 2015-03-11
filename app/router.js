import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,

  // ページ遷移の分析エンジンに通知する
  notifyGoogleAnalytics: function() {
    if (window.ga) {
      window.ga("send", "pageview", {
        page: this.get("url"),
        title: this.get("url")
      });
    }
  }.on("didTransition")
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
