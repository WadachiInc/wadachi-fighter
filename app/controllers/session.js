import Ember from 'ember';

export default Ember.Controller.extend({

  // ---------------------------------- プロパティ

  authAccessToken: null,
  authService: null,
  authUserId: null,
  isAuthenticated: Ember.computed.bool("authUserId"),

  triggerDidFacebookStatusChange: null,

  // ---------------------------------- メソッド

  // イベントを初期化する
  initEvents: function() {
    var fn = Ember.sendEventWithArgumentList.bind(Ember, this, "didFacebookStatusChange");
    this.set("triggerDidFacebookStatusChange", fn);
    window.FB.Event.subscribe("auth.statusChange", fn);
  }.on("init"),

  // セッションをリセットする
  resetController: function() {
    this.setProperties({
      authAccessToken: null,
      authService: null,
      authUserId: null
    });
  },

  // Facebookのログイン状態の変更を処理する
  facebookStatusChanged: function(response) {
    this.resetController();
    if (response.status === "connected")
      this.setProperties({
        authAccessToken: response.authResponse.accessToken,
        authService: "graph.facebook.com",
        authUserId: response.authResponse.userID,
      });
  }.on("didFacebookStatusChange")
});
