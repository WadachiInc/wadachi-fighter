import Ember from 'ember';
import FacebookEventsMixin from '../mixins/facebook-events';
import ToastNotyMixin from '../mixins/toast-noty';

export default Ember.Route.extend(FacebookEventsMixin, ToastNotyMixin, {

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

  // 認証ステータスが変更されたときにメッセージを表示する
  isAuthenticatedChanged: function() {
    if (this.get("session.isAuthenticated"))
      this.toast("ログインされました");
    else
      this.toast("ログアウトされました");
  }.observes("session.isAuthenticated")
});
