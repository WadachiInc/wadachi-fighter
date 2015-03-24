import Ember from 'ember';
import GooglePlusEventsMixin from '../../../mixins/google-plus-events';
import { module, test } from 'qunit';

module('GooglePlusEventsMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var GooglePlusEventsObject = Ember.Object.extend(GooglePlusEventsMixin);
  var subject = GooglePlusEventsObject.create();
  assert.ok(subject);
});
