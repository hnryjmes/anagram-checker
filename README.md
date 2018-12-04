# anagram-checker

Simple command-line application in Node.js to check if a word is an anagram given a file with a list of words.

## Design

I used TDD and wrote tests first before production code. My approach was to write a static `.check` function, a pure function with no side effects, wrapped in a class object `AnagramChecker`. The `.check` function tests for a few edge cases, such as invalid arguments and bad inputs. I assumed that the subject word to check would be a string, and that the input file would be in `.txt` or `.csv` format. In future designs I could extend this app to handle a wider range of file formats.

## Usage

To use the app, clone the repository, run `npm install` to install dependencies, then run `node` to start a Node.js REPL. 

// TODO

## Tests

To run tests, clone the repository, run `npm install` to install dependencies, then run `jasmine`.

## User Story

```
As an investigator,
I would like to check whether a word is an anagram of any of the words in a given list,
So I can solve the mystery of the crime, given the clues left behind
```