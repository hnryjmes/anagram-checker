const fs = require('fs');

class AnagramChecker {
  static check(subject, filePath) {
    const errorMessage = this.checkForErrors(...arguments);
    if (errorMessage != '') throw errorMessage;

    const fileString = this.getFileString(filePath);
    const splitter = this.getSplitterFromExtension(filePath);

    return this.getFilteredWords(subject, fileString, splitter);
  }

  static getFilteredWords(subject, fileString, splitter) {
    const cleanSubject = this.cleanWord(subject);
    const charCodeProductOfSubject = this.getProductFromWord(cleanSubject);
    const words = fileString.split(splitter);
    const filteredWords = words.filter((word) => {
      const charCodeProductOfWord = this.getProductFromWord(word);
      return charCodeProductOfSubject == charCodeProductOfWord;
    });
    return filteredWords.join(splitter);
  }

  static getFileString(filePath) {
    return fs.readFileSync(filePath).toString();
  }

  static getSplitterFromExtension(filePath) {
    const ext = filePath.substr(filePath.lastIndexOf('.'));
    if (ext == '.csv') return ',';
    if (ext == '.txt') return '\n';
  }

  static getCharCode(cleanWord, index) {
    if (cleanWord.charCodeAt(index) < 97 || cleanWord.charCodeAt(index) > 122) {
      return 0;
    }
    return cleanWord.charCodeAt(index);
  }

  static getProductFromWord(word) {
    const cleanWord = this.cleanWord(word);
    const charCodeArray = cleanWord.split('').map((char, index) => {
      return this.getCharCode(cleanWord, index);
    });
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