import Ember from 'ember';
import ENV from '../config/environment';

export function initialize(/* container, application */) {
  // FacebookSDKは横柄にすべてのウィンドウメッセージが、自体に向けられていることを前提としている
  Ember.Logger.debug("DEBUG: Ignore this warning: Received message of type object from (domain), expected a string.");
  window.FB.init(ENV.APP.facebookInit);
}

export default {
  name: 'facebook',
  initialize: initialize
};
