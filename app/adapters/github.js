import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  defaultSerializer: "github",
  host: "https://api.github.com",
  namespace: "repos/wdch-nseeley/wadachi-fighter",

  headers: {
    "Accept": "application/vnd.github.v3+json"
  }
});
