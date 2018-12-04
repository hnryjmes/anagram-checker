class AnagramChecker {
  static check() {
    if (arguments.length != 2) {
      throw 'Error: incorrect number of arguments, expecting 2';
    }

    if (typeof subject != 'string') {
      throw 'Error: subject is not a string';
    }
  }
}

module.exports = AnagramChecker;