var map = require('./map'),
    regenerate = require('regenerate');

var symbols = Object.keys(map);

module.exports = regenerate(symbols);
