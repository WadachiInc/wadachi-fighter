import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo("commit-commit-author"),
  message: DS.attr("string"),
  url: DS.attr("string"),
  commentCount: DS.attr("number")
});
