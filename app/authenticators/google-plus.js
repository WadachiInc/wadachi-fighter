import Ember from 'ember';
import ENV from '../config/environment';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({

  // ---------------------------------- メソッド

  // ユーザを認証する
  // Ember.RSVP.Promiseを返す
  authenticate: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isNone(window.gapi.auth.getToken()))
        resolve(data);
      else
        reject();
    }.bind(this), "Authenticator: 'google-plus': Authenticate session");
  },

  // ユーザをログアウトする
  // Ember.RSVP.Promiseを返す
  invalidate: function(/*data*/) {
    return new Ember.RSVP.Promise(function(resolve) {
      window.gapi.auth.signOut();
      resolve();
    }, "Authenticator: 'google-plus': Invalidate session");
  },

  // 認証されたセッションを復元する
  // Ember.RSVP.Promiseを返す
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      window.gapi.auth.checkSessionState({
        client_id: ENV.APP.googlePlusSignin.clientId,
        session_state: data
      }, function(authorized) {
        if (authorized === true)
          resolve(data);
        else
          reject();
      });
    }.bind(this), "Authenticator: 'google-plus': Restore session");
  }
});
