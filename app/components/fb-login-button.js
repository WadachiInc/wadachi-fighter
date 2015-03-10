import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "fb:login-button",
  attributeBindings: ["scope", "canLogout:data-auto-logout-link", "size:data-size"],

  // ---------------------------------- プロパティ

  canLogout: "false",
  scope: "public_profile,email",
  size: "xlarge",
  triggerDidStatusChange: null,
  triggerLoginAction: null,
  triggerLogoutAction: null,

  // ---------------------------------- メソッド

  // イベントを初期化する
  initEvents: function() {
    this.triggerDidStatusChange = Ember.sendEventWithArgumentList.bind(Ember, this, "didStatusChange");
    this.triggerLoginAction = this.sendAction.bind(this, "login");
    this.triggerLogoutAction = this.sendAction.bind(this, "logout");
  }.on("init"),

  // ボタンを初期化する
  initButton: function() {
    window.FB.XFBML.parse(this.$().parent()[0]);
    window.FB.Event.subscribe("auth.statusChange", this.triggerDidStatusChange);
  }.on("didInsertElement"),

  // ボタンを破壊する
  destroyButton: function() {
    window.FB.Event.unsubscribe("auth.statusChange", this.triggerDidStatusChange);
  }.on("willDestroyElement"),

  // ログインおよびログアウトのアクションをトリガする
  statusChanged: function(response) {
    if (response.status === "connected")
      this.triggerLoginAction(response);
    else
      this.triggerLogoutAction(response);
  }.on("didStatusChange")
});
