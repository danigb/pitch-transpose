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
  if (arguments.length === 1) return function (p) { return transpose(interval, p) }
  var iArr = isArray(interval)
  var pArr = isArray(pitch)
  var i = iArr ? interval : parse(interval)
  var p = pArr ? pitch : parse(pitch)
  var sum = op.add(i, p)
  return iArr && pArr ? sum : asPitch(sum)
}

function parse (p) { return asPitch(p) || asInterval(p) }

module.exports = transpose
