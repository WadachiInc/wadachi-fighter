/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'wadachi-fighter',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicyHeader: 'Content-Security-Policy',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com connect.facebook.net apis.google.com",
      'font-src': "'self' fonts.gstatic.com data: connect.facebook.net",
      'connect-src': "'self' api.github.com",
      'img-src': "'self' www.google-analytics.com apis.google.com csi.gstatic.com avatars.githubusercontent.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'frame-src': "*.facebook.com *.google.com"
    },
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Array: false,  // BabylonJS‚Ì•´‘ˆ
        Function: true,
        String: true,
      },

      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      facebookInit: {
        appId: "",
        cookie: false,
        status: true,
        xfbml: false,
        version: "v2.2"
      },

      googleAnalytics: {
        account: ""
      },

      googlePlusSignin: {
        clientid: "",
        cookiepolicy: "single_host_origin",
        scope: "profile",
        height: "tall",
        width: "wide"
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy['script-src'] += ' localhost:35729 ';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
