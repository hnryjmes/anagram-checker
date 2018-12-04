describe('Word is a valid anagram', () => {
  it('Checks if a given word (known as the subject) is an anagram, given a file containing a list of words to check against', () => {
    const SUBJECT = 'silent';

    require('fs').readFileSync('./public/anagrams-of-silent.txt').toString().split('\n').forEach((word) => {
      console.log(word);
    });
  });
});