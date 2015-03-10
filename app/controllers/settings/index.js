import Ember from 'ember';

export default Ember.Controller.extend({

  // ---------------------------------- アクション

  actions: {
    // Facebook認証を処理する
    facebookLogin: function(response) {
      this.get("session").authenticate("authenticator:facebook", response);
    }
  }
});
