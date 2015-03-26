import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import FacebookEventsMixin from '../mixins/facebook-events';
import GooglePlusEventsMixin from '../mixins/google-plus-events';
import ToastNotyMixin from '../mixins/toast-noty';

export default Ember.Route.extend(ApplicationRouteMixin, FacebookEventsMixin, GooglePlusEventsMixin, ToastNotyMixin, {

  // ---------------------------------- アクション

  actions: {
    // ログインされたときにメッセージを表示する
    sessionAuthenticationSucceeded: function() {
      this.toast("ログインされました");
      // this._super を呼び出さず
    },

    // 認証が失敗したときにアクションがトリガされる
    sessionAuthenticationFailed: function() {
      this.toast("ログインが失敗しました");
      // this._super を呼び出さず
    },

    // ログアウトされたときにメッセージを表示する
    sessionInvalidationSucceeded: function() {
      this.toast("ログアウトされました");
      // this._super を呼び出さず
    }
  },

  // ---------------------------------- メソッド

  // ログインおよびログアウトのアクションをトリガする
  didFacebookStatusChange: function(response) {
    if (response.status === "connected")
      this.get("session").authenticate("authenticator:facebook", response);
    else
      this.get("session").invalidate();
  }.on("didFacebookStatusChange"),

  // ログインおよびログアウトのアクションをトリガする
  didGooglePlusStatusChange: function(e, response) {
    if (response.status.signed_in)
      this.get("session").authenticate("authenticator:google-plus", response);
    else
      this.get("session").invalidate();
  }.on("didGooglePlusStatusChange"),

  // 帰国プレイヤーを歓迎メッセージを表示する
  showWelcomeMessage: function() {
    if (this.get("session.isAuthenticated"))
      this.toast("お帰り");
  }.on("init")
});
