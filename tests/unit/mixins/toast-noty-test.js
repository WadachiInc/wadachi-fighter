import Ember from 'ember';
import ToastNotyMixin from '../../../mixins/toast-noty';
import { module, test } from 'qunit';

module('ToastNotyMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ToastNotyObject = Ember.Object.extend(ToastNotyMixin);
  var subject = ToastNotyObject.create();
  assert.ok(subject);
});
