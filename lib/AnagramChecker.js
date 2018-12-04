class AnagramChecker {
  static check() {
    if (arguments.length != 2) {
      throw 'Error: incorrect number of arguments, expecting 2';
    }
  }
}

module.exports = AnagramChecker;