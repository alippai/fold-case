var foldCase = require('../lib'),
    map = require('../src/map'),
    assert = require('assert');

describe('foldCase', function () {
  it('should fold each key to a value', function () {
    Object.keys(map).forEach(function (key) {
        var value = map[key];

        var regular = 'A' + key + 'B';
        var folded = 'a' + value + 'b';
      
        assert.equal(foldCase(regular), folded, regular + ' should fold to ' + folded);
    });
  });
  it('should convert some simple ASCII to lowercase', function () {
    var expected = 'correct horse battery staple';
    var actual = foldCase('CorrEct hOrse BattERY stapLE');
    
    assert.equal(actual, expected, actual + ' should fold to ' + expected);
  });
});
