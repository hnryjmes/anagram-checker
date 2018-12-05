describe('Word is invalid in list', () => {
  const AnagramChecker = require('../../lib/AnagramChecker');
  const subject = 'silent';
  const fs = require('fs');

  it('Edge case where character code product matches anagram list but there is an invalid word', () => {
    const filePath = './public/anagrams-of-silent-plus-invalid-word.txt';
    const otherFilePath = './public/anagrams-of-silent.txt';
    const expectedOutput = fs.readFileSync(otherFilePath).toString();

    expect(AnagramChecker.check(subject, filePath)).toEqual(expectedOutput);
  });
});