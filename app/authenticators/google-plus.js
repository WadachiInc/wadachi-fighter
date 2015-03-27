import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from '../config/environment';

export default Base.extend({

  // ---------------------------------- メソッド

  // ユーザを認証する
  // Ember.RSVP.Promiseを返す
  authenticate: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if ("g-oauth-window" in data)
        window.Object.defineProperty(data, "g-oauth-window", {
          configurable: true,
          enumerable: false,  // cross-origin frameからディープ·コピーはだめだ！
          value: data["g-oauth-window"],
          writable: true
        });

      if (!Ember.isNone(window.gapi.auth.getToken()))
        resolve(data);
      else
        reject();
    }.bind(this), "Authenticator: 'google-plus': Authenticate session");
  },

  // セッションの有効性を確認する
  // Ember.RSVP.Promiseを返す
  checkSessionState: function(sessionState) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      window.gapi.auth.checkSessionState({
        client_id: ENV.APP.googlePlusSignin.clientid,
        session_state: sessionState
      }, function(authorized) {
        if (authorized === true)
          resolve();
        else
          reject();
      });
    }, "Authenticator: 'google-plus': Check session state");
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
      this.waitLoad()
        .then(this.checkSessionState.bind(this, data.session_state))
        .then(resolve.bind(window, data), reject);
    }.bind(this), "Authenticator: 'google-plus': Restore session");
  },

  // Google+ APIがロードするを待つ
  // Ember.RSVP.Promiseを返す
  waitLoad: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      var asyncResolver, doc, onload;

      if (window.googlePlusOnLoad.loaded === true) {
        resolve();
        return;
      }

      doc = Ember.$(document);
      onload = "google-plus-onload";
      asyncResolver = function() {
        doc.off(onload, asyncResolver);
        resolve();
      };

      doc.on(onload, asyncResolver);
    }, "Authenticator: 'google-plus': Wait for load");
  }
});
