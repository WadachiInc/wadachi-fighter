import Ember from 'ember';

export default Ember.Route.extend({

  // ---------------------------------- メソッド

  // データモデルを検索する
  model: function(/*params, transition, queryParams*/) {
    var date = new Date();
    date.setDate(date.getDate() - 30);
    return this.modelFor("news.index") || this.get("store").find("commit", { since: date });
  }
});
