import Ember from 'ember';
import FacebookEventsMixin from 'wadachi-fighter/mixins/facebook-events';

module('FacebookEventsMixin');

// Replace this with your real tests.
test('it works', function() {
  var FacebookEventsObject = Ember.Object.extend(FacebookEventsMixin);
  var subject = FacebookEventsObject.create();
  ok(subject);
});
