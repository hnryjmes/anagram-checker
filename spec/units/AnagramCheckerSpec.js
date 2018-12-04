describe('AnagramChecker', () => {
  const AnagramChecker = require('../../lib/AnagramChecker');

  describe('.check', () => {
    it('throws an error when number of arguments is not 2', () => {
      expect(() => {
        AnagramChecker.check(); 
      }).toThrow('Error: incorrect number of arguments, expecting 2');
    });
  });
});