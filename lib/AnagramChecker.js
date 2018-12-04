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

    let cleanSubject = this.cleanWord(subject);
    let charCodeProductOfSubject = this.getProductFromWord(cleanSubject);

    let fileString = fs.readFileSync(filePath).toString();

    // Assume file is a .txt file
    let words = fileString.split('\n');

    let filteredWords = words.filter((word) => {
      let charCodeProductOfWord = this.getProductFromWord(word);
      return charCodeProductOfSubject == charCodeProductOfWord;
    });

    return filteredWords.join('\n');
  }

  static getProductFromWord(word) {
    let cleanWord = this.cleanWord(word);
    let charCodeArray = cleanWord.split('').map((char, index) => cleanWord.charCodeAt(index));
    return charCodeArray.reduce((a, b) => a * b);
  }

  static cleanWord(word) {
    return word.toLowerCase().trim();
  }
}

module.exports = AnagramChecker;