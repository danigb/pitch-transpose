var asInterval = require('interval-parser')
var asPitch = require('pitch-parser')
var op = require('pitch-op')

var isArray = Array.isArray

/**
 * Transposes pitch by an interval
 *
 * @param {String|Array} a - a pitch or interval in string or array notation
 * @param {String|Array} b - a pitch or interval in string or array notation
 * @return {String|Array} the transposed pitch
 *
 * @example
 * transpose('3m', 'C4') // => 'Eb4'
 * transpose('C4', '3m') // => 'Eb4'
 * tranpose([1, 0, 2], [3, -1, 0]) // => [3, 0, 2]
 */
function transpose (interval, pitch) {
  return op.add(interval, pitch)
}

function parse (src) {
  if (isArray(src)) return src
  return asPitch.parse(src) || asInterval.parse(src) || null
}

function translate (fn) {
  return function (i, p) {
    if (isArray(i) && isArray(p)) return fn(i, p)
    var ai = parse(i)
    var ap = parse(p)
    return i !== null & p !== null ? asPitch.stringify(fn(ai, ap)) : null
  }
}

function curry (fn) {
  return function (i, p) {
    switch (arguments.length) {
      case 0: return curry(fn)
      case 1: return function (p) { return fn(i, p) }
      default: return fn(i, p)
    }
  }
}

module.exports = curry(translate(transpose))
