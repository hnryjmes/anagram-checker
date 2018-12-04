describe('AnagramChecker', () => {
  const AnagramChecker = require('../../lib/AnagramChecker');

  describe('.check', () => {
    it('returns an empty string when inputs are invalid', () => {
      expect(() => {
        AnagramChecker.check(); 
      }).toThrow('Error: incorrect number of arguments, expecting 2');
    });
  });
});