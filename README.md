# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sbentley2019/lotide`

**Require it:**

`const _ = require('@sbentley2019/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Returns true if two arrays are equal.
* `assertEqual(...)`: Compares two values and prints out a comparison.
* `assertObjectsEqual(...)`: Returns true if two objects are equal.
* `countLetters(...)`: Returns a count given a string and a letter.
* `countOnly(...)`: Returns a count given an array and a value.
* `eqArrays(...)`: Returns true if two arrays are equal even if there are nested arrays.
* `head(...)`: Returns the head of the array.
* `findKey(...)`: Returns a key when a vlue meets a specified requirement.
* `findKeyByValue(...)`: Returns a key when given an object and a corresponding value.
* `flatten(...)`:  Returns an array that has its nested arrays converted into the initial array.
* `letterPositions(...)`: Returns an array of specified letter positions.
* `map(...)`: Returns an array after a function have run on each element.
* `middle(...)`: Returns the middle index of an array or the middle two if the length is even.
* `tail(...)`: Returns the tail of an array.
* `takeUntil(...)`: Takes in an array and a value and returns the first array until array[index] === value.
* `without(...)`: Takes in two arrays and returns the first array with any of second array.