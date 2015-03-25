import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import FacebookEventsMixin from '../mixins/facebook-events';
import GooglePlusEventsMixin from '../mixins/google-plus-events';
import ToastNotyMixin from '../mixins/toast-noty';

export default Ember.Route.extend(ApplicationRouteMixin, FacebookEventsMixin, GooglePlusEventsMixin, ToastNotyMixin, {

  // ---------------------------------- アクション

  actions: {
    // ログアウトする
    logout: function() {
      this.get("session").invalidate();
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

  // 認証ステータスが変更されたときにメッセージを表示する
  isAuthenticatedChanged: function() {
    if (this.get("session.isAuthenticated"))
      this.toast("ログインされました");
    else
      this.toast("ログアウトされました");
  }.observes("session.isAuthenticated")
});
