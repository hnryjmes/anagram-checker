describe('Checks if subject is an anagram and returns matches', () => {
  const AnagramChecker = require('../../built/AnagramChecker');
  const fs = require('fs');
  let subject = 'silent';

  it('Word has a valid anagram in given .txt list', () => {
    const filePath = './public/anagrams-of-silent.txt';
    const expectedOutput = fs.readFileSync(filePath).toString();

    expect(AnagramChecker.check(subject, filePath)).toEqual(expectedOutput);
  });

  it('Word has a valid anagram in given .csv list', () => {
    const filePath = './public/anagrams-of-silent.csv';
    const expectedOutput = fs.readFileSync(filePath).toString();

    expect(AnagramChecker.check(subject, filePath)).toEqual(expectedOutput);
  });

  it('Word has mixed capitalisation and spacing but has a valid anagram', () => {
    subject = '  SILENT  ';
    const filePath = './public/anagrams-of-silent.txt';
    const expectedOutput = fs.readFileSync(filePath).toString();

    expect(AnagramChecker.check(subject, filePath)).toEqual(expectedOutput);
  });
});
