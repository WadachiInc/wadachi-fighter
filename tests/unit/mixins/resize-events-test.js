import Ember from 'ember';
import ResizeEventsMixin from '../../../mixins/resize-events';
import { module, test } from 'qunit';

module('ResizeEventsMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ResizeEventsObject = Ember.Object.extend(ResizeEventsMixin);
  var subject = ResizeEventsObject.create();
  assert.ok(subject);
});
