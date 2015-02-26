import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr("string"),
  avatarUrl: DS.attr("string"),
  gravatarId: DS.attr("string"),
  url: DS.attr("string"),
  htmlUrl: DS.attr("string"),
  followersUrl: DS.attr("string"),
  followingUrl: DS.attr("string"),
  gistsUrl: DS.attr("string"),
  starredUrl: DS.attr("string"),
  subscriptionsUrl: DS.attr("string"),
  organizationsUrl: DS.attr("string"),
  reposUrl: DS.attr("string"),
  eventsUrl: DS.attr("string"),
  receivedEventsUrl: DS.attr("string"),
  type: DS.attr("string"),
  siteAdmin: DS.attr("boolean")
});
