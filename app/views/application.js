import Ember from 'ember';

export default Ember.View.extend({
  classNames: ["application", "pushable"],

  // ---------------------------------- プロパティ

  sidebar: null,

  // ---------------------------------- アクション

  actions: {
    // サイドバーを表示
    showSidebar: function() {
      this.$(".sidebar.menu").sidebar("show");
    }
  },

  // ---------------------------------- メソッド

  // サイドバーを初期化する
  initSidebar: function() {
    this.set("sidebar", this.$(".sidebar.menu").sidebar({
      context: this.$(),
      transition: "uncover"
    }));
  }.on("didInsertElement"),

  // サイドバーを破壊する
  destroySidebar: function() {
    this.get("sidebar").sidebar("destroy");
  }.on("willDestroyElement"),

  // 選択を行った後、サイドバーを閉じる
  click: function() {
    if (this.get("sidebar").sidebar("is visible"))
      this.get("sidebar").sidebar("hide");
  }
});
