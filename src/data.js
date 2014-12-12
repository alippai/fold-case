var map = require('../src/map'),
    regex = require('../src/regex'),
    jsesc = require('jsesc');

module.exports.map = jsesc(map, {
	'compact': true,
	'quotes': 'single'
});

module.exports.regex = regex.toString();

module.exports.version = require('../package.json').version