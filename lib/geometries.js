'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _geometryJs = require('./geometry.js');

var _geometryJs2 = _interopRequireDefault(_geometryJs);

function geometries() {
  var gs = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return (0, _immutable.List)(gs.map(_geometryJs2['default']));
}

exports['default'] = geometries;
module.exports = exports['default'];