"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var AnagramChecker = /** @class */ (function () {
    function AnagramChecker() {
    }
    AnagramChecker.check = function (subject, filePath) {
        var errorMessage = this.checkForErrors(subject, filePath);
        if (errorMessage != '')
            throw errorMessage;
        var fileString = this.getFileString(filePath);
        var splitter = this.getSplitterFromExtension(filePath);
        return this.getFilteredWords(subject, fileString, splitter);
    };
    AnagramChecker.getFilteredWords = function (subject, fileString, splitter) {
        var _this = this;
        var cleanSubject = this.cleanWord(subject);
        var charCodeProductOfSubject = this.getProductFromWord(cleanSubject);
        var words = fileString.split(splitter);
        var filteredWords = words.filter(function (word) {
            var cleanWord = _this.cleanWord(word);
            if (cleanSubject.length != cleanWord.length)
                return false;
            var charCodeProductOfWord = _this.getProductFromWord(cleanWord);
            return charCodeProductOfSubject == charCodeProductOfWord;
        });
        return filteredWords.join(splitter);
    };
    AnagramChecker.getFileString = function (filePath) {
        return fs.readFileSync(filePath).toString();
    };
    AnagramChecker.getSplitterFromExtension = function (filePath) {
        var ext = filePath.substr(filePath.lastIndexOf('.'));
        if (ext == '.csv')
            return ',';
        if (ext == '.txt')
            return '\n';
    };
    AnagramChecker.getCharCode = function (cleanWord, index) {
        if (cleanWord.charCodeAt(index) < 97 || cleanWord.charCodeAt(index) > 122) {
            return 0;
        }
        return cleanWord.charCodeAt(index);
    };
    AnagramChecker.getProductFromWord = function (word) {
        var _this = this;
        var charCodeArray = word.split('').map(function (char, index) {
            return _this.getCharCode(word, index);
        });
        return charCodeArray.reduce(function (a, b) { return a * b; });
    };
    AnagramChecker.cleanWord = function (word) {
        return word.toLowerCase().trim();
    };
    AnagramChecker.checkForErrors = function (subject, filePath) {
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
    };
    return AnagramChecker;
}());
module.exports = AnagramChecker;
