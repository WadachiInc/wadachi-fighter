import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr("string"),
  url: DS.attr("string"),
  commentCount: DS.attr("number")
});
