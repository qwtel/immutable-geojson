'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _immutable = require('immutable');

function CoordList(values) {
  var coord = (0, _immutable.List)(values);
  coord[0] = values[0];
  coord[1] = values[1];
  return coord;
}

exports['default'] = CoordList;
module.exports = exports['default'];