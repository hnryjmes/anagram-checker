describe('AnagramChecker', () => {
  const AnagramChecker = require('../../lib/AnagramChecker');

  describe('.check', () => {
    it('throws an error when number of arguments is not 2', () => {
      expect(() => {
        AnagramChecker.check(); 
      }).toThrow('Error: incorrect number of arguments, expecting 2');
    });

    it('throws an error when subject is not a string', () => {
      expect(() => {
        AnagramChecker.check(0, './public/a.txt');
      }).toThrow('Error: subject is not a string');
    });

    it('throws an error when filePath does not resolve to a file that exists', () => {
      expect(() => {
        AnagramChecker.check('silent', 'badFilePath');
      }).toThrow('Error: file does not exist');
    });
  });
});