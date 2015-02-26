import DS from 'ember-data';

export default DS.Model.extend({
  sha: DS.attr("string"),
  commit: DS.belongsTo("commit-commit"),
  url: DS.attr("string"),
  htmlUrl: DS.attr("string"),
  commentsUrl: DS.attr("string"),
  author: DS.belongsTo("commit-author")
});
