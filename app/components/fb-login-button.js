import Ember from 'ember';
import FacebookEventsMixin from '../mixins/facebook-events';

export default Ember.Component.extend(FacebookEventsMixin, {
  tagName: "fb:login-button",
  attributeBindings: ["scope", "canLogout:data-auto-logout-link", "size:data-size"],

  // ---------------------------------- プロパティ

  canLogout: "false",
  scope: "public_profile,email",
  size: "xlarge",
  triggerLoginAction: null,
  triggerLogoutAction: null,

  // ---------------------------------- メソッド

  // トリガーを初期化する
  initTriggers: function() {
    this.set("triggerLoginAction", this.sendAction.bind(this, "login"));
    this.set("triggerLogoutAction", this.sendAction.bind(this, "logout"));
  }.on("init"),

  // ボタンを初期化する
  initButton: function() {
    window.FB.XFBML.parse(this.$().parent()[0]);
  }.on("didInsertElement"),

  // ログインおよびログアウトのアクションをトリガする
  statusChanged: function(response) {
    if (response.status === "connected")
      this.get("triggerLoginAction")(response);
    else
      this.get("triggerLogoutAction")(response);
  }.on("didFacebookStatusChange")
});
