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
  }
}

module.exports = AnagramChecker;