// 初期化設定
window.___gcfg = {
  lang: "ja",
  parsetags: "explicit"
};

Object.defineProperty(window, "googlePlusOnLoad", {
  value: (function(e, $) {
    return function() {
      window.googlePlusOnLoad.loaded = true;
      $(e).trigger("google-plus-onload", arguments);
    }
  })(window.document, jQuery)
});

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
