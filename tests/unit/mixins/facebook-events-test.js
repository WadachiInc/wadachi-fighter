import Ember from 'ember';
import FacebookEventsMixin from '../../../mixins/facebook-events';
import { module, test } from 'qunit';

module('FacebookEventsMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var FacebookEventsObject = Ember.Object.extend(FacebookEventsMixin);
  var subject = FacebookEventsObject.create();
  assert.ok(subject);
});
