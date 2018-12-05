const fs = require('fs');

class AnagramChecker {
  static check(subject, filePath) {
    let errorMessage = this.checkForErrors(...arguments);
    if (errorMessage != '') {
      throw errorMessage;
    }

    let fileString = this.getFileString(filePath);
    
    let splitter = this.getSplitterFromExtension(filePath);

    return this.getFilteredWords(subject, fileString, splitter);
  }

  static getFilteredWords(subject, fileString, splitter) {
    let cleanSubject = this.cleanWord(subject);
    let charCodeProductOfSubject = this.getProductFromWord(cleanSubject);
    let words = fileString.split(splitter);
    let filteredWords = words.filter((word) => {
      let charCodeProductOfWord = this.getProductFromWord(word);
      return charCodeProductOfSubject == charCodeProductOfWord;
    });
    return filteredWords.join(splitter);
  }

  static getFileString(filePath) {
    return fs.readFileSync(filePath).toString();
  }

  static getSplitterFromExtension(filePath) {
    let ext = filePath.substr(filePath.lastIndexOf('.'));
    if (ext == '.csv') {
      return ',';
    }
    if (ext == '.txt') {
      return '\n';
    }
  }

  static getProductFromWord(word) {
    let cleanWord = this.cleanWord(word);
    let charCodeArray = cleanWord.split('').map((char, index) => cleanWord.charCodeAt(index));
    return charCodeArray.reduce((a, b) => a * b);
  }

  static cleanWord(word) {
    return word.toLowerCase().trim();
  }

  static checkForErrors(subject, filePath) {
    if (arguments.length != 2) {
      return 'Error: incorrect number of arguments, expecting 2';
    }

    if (typeof subject != 'string') {
      return 'Error: subject is not a string';
    }

    if (!fs.existsSync(filePath)) {
      return 'Error: file does not exist';
    }

    return '';
  }
}

module.exports = AnagramChecker;