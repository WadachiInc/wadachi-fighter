import GooglePlusAuthenticator from '../authenticators/google-plus';

export function initialize(container /*, application */) {
  container.register("authenticator:google-plus", GooglePlusAuthenticator);
}

export default {
  name: 'google-plus-authenticator',
  before: 'simple-auth',
  initialize: initialize
};
