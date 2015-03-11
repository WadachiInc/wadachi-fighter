import ENV from '../config/environment';

export function initialize(/* container, application */) {
  window.ga("create", ENV.APP.googleAnalytics.account, "auto");
  window.ga("send", "pageview");
}

export default {
  name: 'google-analytics',
  initialize: initialize
};
