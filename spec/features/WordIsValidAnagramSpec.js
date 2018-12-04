describe('Word is a valid anagram', () => {
  const AnagramChecker = require('../../lib/AnagramChecker');

  xit('Checks if a given word, known as the subject, is an anagram, given a file containing a list of words to check against', () => {
    const SUBJECT = 'silent';
    const filePath = './public/anagrams-of-silent.txt';
    const expectedOutput = require('fs').readFileSync(filePath).toString();

    expect(AnagramChecker.check(SUBJECT, filePath)).toEqual(expectedOutput);
  });
});
