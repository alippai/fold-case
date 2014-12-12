_foldCase_ is a letter case folder with full Unicode support, i.e. based on [the official Unicode case folding mappings](http://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt).

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install fold-case
```

## API

### `foldCase.version`

A string representing the semantic version number.

### `foldCase(text)`

This function takes a string of text and folds the case for each letter. All the [Unicode ‘Full’ case folding mappings](http://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) are used.

## Unit tests & code coverage

After cloning this repository, run `npm install` to install the dependencies needed for development and testing.

Once that’s done, you can run the unit tests in Node using `npm test`.

## Author

This work is based on a stripped down version of _swapcase_ by Mathias Bynens:

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_foldCase_ is available under the [MIT](https://mths.be/mit) license.
