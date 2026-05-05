/**
 * @type { import('jest').Config }
 */
const config = {
  "moduleNameMapper": {
    '\\.txt$': '<rootDir>/__mocks__/fileMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)",
  ],
};

module.exports = config;
