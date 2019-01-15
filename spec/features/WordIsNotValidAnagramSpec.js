describe('Word does not have a valid anagram in given list', () => {
  const AnagramChecker = require('../../built/AnagramChecker');

  it('Checks if a given word, known as the subject, is an anagram, given a file containing a list of words to check against', () => {
    const subject = 'silent';
    const filePath = './public/a.txt';
    const expectedOutput = '';

    expect(AnagramChecker.check(subject, filePath)).toEqual(expectedOutput);
  });
});
