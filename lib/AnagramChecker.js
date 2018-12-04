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

    let charCodeProductSubject = this.getProductFromWord(subject);

    let fileString = fs.readFileSync(filePath).toString();

    // Assume file is a .txt file
    let words = fileString.split('\n');

    let filteredWords = words.filter((word) => {
      let charCodeProductWord = this.getProductFromWord(word);
      return charCodeProductSubject == charCodeProductWord;
    });

    return filteredWords.join('\n');
  }

  static getProductFromWord(word) {
    let cleanWord = word.toLowerCase().trim();
    let charCodeArray = cleanWord.split('').map((char, index) => cleanWord.charCodeAt(index));
    return charCodeArray.reduce((a, b) => a * b);
  }
}

module.exports = AnagramChecker;