import ENV from '../config/environment';
import FacebookAuthenticator from '../authenticators/facebook';

export function initialize(container /*, application */) {
  container.register("authenticator:facebook", FacebookAuthenticator);
  window.FB.init(ENV.APP.facebookInit);
}

export default {
  name: 'facebook-authenticator',
  before: 'simple-auth',
  initialize: initialize
};
