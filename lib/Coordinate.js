'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _immutable = require('immutable');

var DEFAULT_VALUES = {
  '0': undefined,
  '1': undefined
};

/*
[Symbol.iterator]() {
  return this._coordinate.iterator();
}
*/
var _Coordinate = (0, _immutable.Record)(DEFAULT_VALUES, 'Coordinate');

function Coordinate(coordinate) {

  var coord = _Coordinate({
    '0': coordinate[0],
    '1': coordinate[1]
  });

  coord._coordinate = coordinate;

  return coord;
}

Coordinate.prototype = _Coordinate.prototype;
Coordinate.prototype.constructor = Coordinate;

exports['default'] = Coordinate;
module.exports = exports['default'];