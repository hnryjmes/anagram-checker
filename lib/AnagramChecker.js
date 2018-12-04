class AnagramChecker {
  static check(subject, filePath) {
    const fs = require('fs');

    if (arguments.length != 2) {
      throw 'Error: incorrect number of arguments, expecting 2';
    }

    if (typeof subject != 'string') {
      throw 'Error: subject is not a string';
    }

    if (!fs.existsSync(filePath)) {
      throw 'Error: file does not exist';
    }

    let cleanSubject = subject.toLowerCase().trim();
    let charCodeArraySubject = cleanSubject.split('').map((char, index) => cleanSubject.charCodeAt(index));
    let charCodeProductSubject = charCodeArraySubject.reduce((a, b) => a * b);

    let fileString = fs.readFileSync(filePath).toString();

    // Assume file is a .txt file
    let words = fileString.split('\n');

    let filteredWords = words.filter((word) => {
      let cleanWord = word.toLowerCase().trim();
      let charCodeArrayWord = cleanWord.split('').map((char, index) => cleanWord.charCodeAt(index));
      let charCodeProductWord = charCodeArrayWord.reduce((a, b) => a * b);
      return charCodeProductSubject == charCodeProductWord;
    });

    return filteredWords.join('\n');
  }
}

module.exports = AnagramChecker;