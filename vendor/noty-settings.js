window.$.noty.defaults = {
  layout: "topCenter",
  theme: "relax",
  type: "alert",
  text: "",
  dismissQueue: true,
  template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
  animation: {
    open: "animated flipInX",
    close: "animated flipOutX",
    easing: "swing",
    speed: 500
  },
  timeout: 3000,
  force: false,
  modal: false,
  maxVisible: 1,
  killer: false,
  closeWith: ["click"],
  callback: {
    onShow: function() {},
    afterShow: function() {},
    onClose: function() {},
    afterClose: function() {},
    onCloseClick: function() {}
  },
  buttons: false
};
