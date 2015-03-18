import Ember from 'ember';
import Computed from '../utils/computed';

export default Ember.Mixin.create({

  // ---------------------------------- プロパティ

  triggerWillShowToast: Computed.eventTrigger("willShowToast"),
  triggerDidShowToast: Computed.eventTrigger("didShowToast"),
  triggerWillCloseToast: Computed.eventTrigger("willCloseToast"),
  triggerDidCloseToast: Computed.eventTrigger("didCloseToast"),

  // ---------------------------------- メソッド

  // トーストメッセージを表示する
  toast: function(text, options) {
    options = Ember.merge({
      text: text,
      onShow: this.get("triggerWillShowToast"),
      afterShow: this.get("triggerDidShowToast"),
      onClose: this.get("triggerWillCloseToast"),
      afterClose: this.get("triggerDidCloseToast"),
      onCloseClick: this.get("triggerCloseToast"),
    }, options);

    window.noty(options);
  }
});
