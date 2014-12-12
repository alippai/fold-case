var _ = require('lodash');

// From <http://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt>:
//
// The status field is:
// C: common case folding, common mappings shared by both simple and full
//    mappings.
// F: full case folding, mappings that cause strings to grow in length. Multiple
//    characters are separated by spaces.
// S: simple case folding, mappings to single characters where different from F.
// T: special case for uppercase I and dotted uppercase I
//    - For non-Turkic languages, this mapping is normally not used.
//    - For Turkic languages (tr, az), this mapping can be used instead of the
//      normal mapping for these characters. Note that the Turkic mappings do
//      not maintain canonical equivalence without additional processing.
//      See the discussions of case mapping in the Unicode Standard for more
//      information.
//
// Usage:
//  A. To do a simple case folding, use the mappings with status C + S.
//  B. To do a full case folding, use the mappings with status C + F.

var commonMappings = require('unicode-7.0.0/case-folding/C/symbols');
var fullMappings = require('unicode-7.0.0/case-folding/F/symbols');

// We want the common and full mappings
var allMappings = _.assign({},
	commonMappings,
	fullMappings
);

module.exports = allMappings;
