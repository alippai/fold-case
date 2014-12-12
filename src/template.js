var regex = /<%= regex %>/g;
var map = <%= map %>;

module.exports = function(string) {
    return string.replace(regex, function($0) {
        // Note: there is no need to check `hasOwnProperty($0)` here.
        return map[$0];
    });
};

module.exports.version = '<%= version %>';
