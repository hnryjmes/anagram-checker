describe('Word is a valid anagram', () => {
  const AnagramChecker = require('../../lib/AnagramChecker');

  xit('Checks if a given word, known as the subject, is an anagram, given a file containing a list of words to check against', () => {
    const fs = require('fs');
    const subject = 'silent';
    const filePath = './public/anagrams-of-silent.txt';
    const expectedOutput = fs.readFileSync(filePath).toString();

    expect(AnagramChecker.check(subject, filePath)).toEqual(expectedOutput);
  });
});
