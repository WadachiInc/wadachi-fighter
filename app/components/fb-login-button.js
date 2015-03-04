import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "fb:login-button",
  attributeBindings: ["scope", "canLogout:data-auto-logout-link", "size:data-size"],

  // ---------------------------------- プロパティ

  canLogout: true,
  scope: "public_profile,email",
  size: "xlarge",
  triggerDidFacebookLogin: null,

  // ---------------------------------- メソッド

  // イベントを初期化する
  initEvents: function() {
    this.triggerDidFacebookLogin = Ember.sendEvent.bind(Ember, this.get("controller"), "didFacebookLogin");
  }.on("init"),

  // ボタンを初期化する
  initButton: function() {
    this.$().on("login", this.triggerDidFacebookLogin);
    window.FB.XFBML.parse(this.$().parent()[0]);
  }.on("didInsertElement"),

  // ボタンを破壊する
  destroyButton: function() {
    this.$().off("login", this.triggerDidFacebookLogin);
  }.on("willDestroyElement")
});
