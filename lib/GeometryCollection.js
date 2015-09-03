'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _immutableNestableRecord = require('immutable-nestable-record');

var _immutableNestableRecord2 = _interopRequireDefault(_immutableNestableRecord);

var _geometriesJs = require('./geometries.js');

var _geometriesJs2 = _interopRequireDefault(_geometriesJs);

var GeometryCollection = (0, _immutableNestableRecord2['default'])({
  type: 'GeometryCollection',
  geometries: (0, _immutable.List)()
}, {
  geometries: _geometriesJs2['default']
}, 'GeometryCollection');

exports['default'] = GeometryCollection;
module.exports = exports['default'];