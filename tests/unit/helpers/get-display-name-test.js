
import { getDisplayName } from 'dummy/helpers/get-display-name';
import { module, test } from 'qunit';

module('Unit | Helper | get display name');

test('username greater than 40 chars', function(assert) {
    const name = Array(40).join("a");
    let result = getDisplayName([name]);
    assert.strictEqual(result, 'aaaaaaaaaaaaaaaaaaaa...aaaaaaaaaaaaaaa');
});

test('username less than 40 chars', function(assert) {
    const name = Array(39).join("a");
    let result = getDisplayName([name]);
    assert.strictEqual(result, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
});
