var vows = require('vows')
var assert = require('assert')
var transpose = require('../')

vows.describe('transpose').addBatch({
  'simple transposition': {
    'using arrays': function () {
      assert.deepEqual(transpose([0, 0, 0], [1, 0, 0]), [1, 0, 0])
      assert.deepEqual(transpose([4, 0, 0], [4, 0, 0]), [1, 0, 1])
    },
    'transpose pitches': function () {
      assert.equal(transpose('C4', '8P'), 'C5')
      assert.equal(transpose('C4', '2M'), 'D4')
      assert.equal(transpose('C4', '4P'), 'F4')
      assert.equal(transpose('C2', '5P'), 'G2')
      assert.equal(transpose('D5', '3M'), 'F#5')
    },
    'transpose edge cases': function () {
      assert.equal(transpose('Gb4', '4P'), 'Cb5')
      assert.equal(transpose('F4', '-5P'), 'Bb3')
      assert.equal(transpose('E4', '2M'), 'F#4')
      assert.equal(transpose('F4', '-2M'), 'Eb4')
      assert.equal(transpose('B#2', '5P'), 'F##3')
    },
    'transpose pitch classes': function () {
      assert.equal(transpose('C', '3m'), 'Eb')
      assert.equal(transpose('C#', '3m'), 'E')
      assert.equal(transpose('D', '3M'), 'F#')
    }
  },
  'partial applied': {
    'transpose from a list of intervals': function () {
      var intervals = '1P 2M 3M 4P 5P 6M 7M 8P'.split(' ')
      assert.deepEqual(intervals.map(transpose('C')),
      ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
      assert.deepEqual(intervals.map(transpose('C#6')),
      ['C#6', 'D#6', 'E#6', 'F#6', 'G#6', 'A#6', 'B#6', 'C#7'])
      assert.deepEqual(intervals.map(transpose('Db6')),
      ['Db6', 'Eb6', 'F6', 'Gb6', 'Ab6', 'Bb6', 'C7', 'Db7'])
      assert.deepEqual(intervals.map(transpose('F2')),
      ['F2', 'G2', 'A2', 'Bb2', 'C3', 'D3', 'E3', 'F3'])
    },
    'from a list of descending intervals': function () {
      var intervals = '-1P -2M -3M -4P -5P -6M -7M -8P'.split(' ')
      assert.deepEqual(intervals.map(transpose('C4')),
      ['C4', 'Bb3', 'Ab3', 'G3', 'F3', 'Eb3', 'Db3', 'C3'])
      assert.deepEqual(intervals.map(transpose('C')),
      ['C', 'Bb', 'Ab', 'G', 'F', 'Eb', 'Db', 'C'])
    },
    'transpose pitches by an interval': function () {
      var notes = 'C4 D4 E4 F4 G4 A4 B4'.split(' ')
      assert.deepEqual(notes.map(transpose('9M')),
      ['D5', 'E5', 'F#5', 'G5', 'A5', 'B5', 'C#6'])
      assert.deepEqual(notes.map(transpose('-9M')),
      ['Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'A3'])
    }
  }
}).export(module)
