import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({

  // ---------------------------------- メソッド

  // ユーザを認証する
  // Ember.RSVP.Promiseを返す
  authenticate: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      window.FB.getLoginStatus(function(response) {
        if (response && response.status === "connected")
          resolve(response);
        else {
          window.FB.login(function(response) {
            if (response && response.status === "connected")
              resolve(response);
            else
              reject();
          }, options);
        }
      });
    }.bind(this), "Authenticator: 'facebook': Authenticate session");
  },

  // ユーザをログアウトする
  // Ember.RSVP.Promiseを返す
  invalidate: function(/*data*/) {
    return new Ember.RSVP.Promise(function(resolve) {
      window.FB.getLoginStatus(function(response) {
        if (response && response.status === "connected")
          window.FB.logout(function(response) { resolve(response); });
        else
          resolve(response);
      });
    }, "Authenticator: 'facebook': Invalidate session");
  },

  // 認証されたセッションを復元する
  // Ember.RSVP.Promiseを返す
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      window.FB.getLoginStatus(function(response) {
        if (response && response.status === "connected")
          resolve(data);
        else
          reject();
      });
    }.bind(this), "Authenticator: 'facebook': Restore session");
  }
});
