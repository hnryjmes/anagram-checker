import fs = require('fs');

class AnagramChecker {
  static check(subject: string, filePath: string) {
    const errorMessage = this.checkForErrors(subject, filePath);
    if (errorMessage != '') throw errorMessage;

    const fileString = this.getFileString(filePath);
    const splitter = this.getSplitterFromExtension(filePath);

    return this.getFilteredWords(subject, fileString, splitter);
  }

  static getFilteredWords(subject: string, fileString: string, splitter: string) {
    const cleanSubject = this.cleanWord(subject);
    const charCodeProductOfSubject = this.getProductFromWord(cleanSubject);
    const words = fileString.split(splitter);
    const filteredWords = words.filter((word) => {
      const cleanWord = this.cleanWord(word);
      if (cleanSubject.length != cleanWord.length) return false;
      const charCodeProductOfWord = this.getProductFromWord(cleanWord);
      return charCodeProductOfSubject == charCodeProductOfWord;
    });
    return filteredWords.join(splitter);
  }

  static getFileString(filePath: string) {
    return fs.readFileSync(filePath).toString();
  }

  static getSplitterFromExtension(filePath: string) {
    const ext = filePath.substr(filePath.lastIndexOf('.'));
    if (ext == '.csv') return ',';
    if (ext == '.txt') return '\n';
  }

  static getCharCode(cleanWord: string, index: number) {
    if (cleanWord.charCodeAt(index) < 97 || cleanWord.charCodeAt(index) > 122) {
      return 0;
    }
    return cleanWord.charCodeAt(index);
  }

  static getProductFromWord(word: string) {
    const charCodeArray = word.split('').map((char, index) => {
      return this.getCharCode(word, index);
    });
    return charCodeArray.reduce((a, b) => a * b);
  }

  static cleanWord(word: string) {
    return word.toLowerCase().trim();
  }

  static checkForErrors(subject: string, filePath: string) {
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