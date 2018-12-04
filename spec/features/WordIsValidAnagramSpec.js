describe('Word is a valid anagram', () => {
  const AnagramChecker = require('../../lib/AnagramChecker');

  xit('Checks if a given word, known as the subject, is an anagram, given a file containing a list of words to check against', () => {
    const SUBJECT = 'silent';
    const FILE_PATH = './public/anagrams-of-silent.txt';
    const EXPECTED_OUTPUT = require('fs').readFileSync(FILE_PATH).toString();

    expect(AnagramChecker.check(SUBJECT, FILE_PATH)).toEqual(EXPECTED_OUTPUT);
  });
});
