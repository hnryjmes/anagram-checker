const fs = require('fs');

class AnagramChecker {
  static check(subject, filePath) {
    if (arguments.length != 2) {
      throw 'Error: incorrect number of arguments, expecting 2';
    }

    if (typeof subject != 'string') {
      throw 'Error: subject is not a string';
    }

    if (!fs.existsSync(filePath)) {
      throw 'Error: file does not exist';
    }

    let fileString = this.getFileString(filePath);
    
    // Default assumption that file is a .txt file
    let splitter = this.getSplitterFromExtension(filePath);

    let filteredWords = this.getFilteredWords(subject, fileString, splitter);

    return filteredWords.join(splitter);
  }

  static getFilteredWords(subject, fileString, splitter) {
    let cleanSubject = this.cleanWord(subject);
    let charCodeProductOfSubject = this.getProductFromWord(cleanSubject);
    let words = fileString.split(splitter);
    return words.filter((word) => {
      let charCodeProductOfWord = this.getProductFromWord(word);
      return charCodeProductOfSubject == charCodeProductOfWord;
    });
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
}

module.exports = AnagramChecker;