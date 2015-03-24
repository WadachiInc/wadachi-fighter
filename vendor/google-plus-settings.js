// 初期化設定
window.___gcfg = {
  lang: "ja",
  parsetags: "explicit"
};

// サイン　ステータス　イベントの宣言
window.jQuery("head").append('<meta name="google-signin-callback" content="googleSigninCallback">');

// サイン　ステータス　イベント
Object.defineProperty(window, "googleSigninCallback", {
  value: (function(e, $) {
    return function() {
      $(e).trigger("google-signin-callback", arguments);
    };
  })(window.document, jQuery)
});
