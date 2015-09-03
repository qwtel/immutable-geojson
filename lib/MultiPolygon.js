'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _immutableNestableRecord = require('immutable-nestable-record');

var _immutableNestableRecord2 = _interopRequireDefault(_immutableNestableRecord);

var _CoordListJs = require('./CoordList.js');

var _CoordListJs2 = _interopRequireDefault(_CoordListJs);

var MultiPolygon = (0, _immutableNestableRecord2['default'])({
  type: 'MultiPolygon',
  coordinates: (0, _immutable.List)()
}, {
  coordinates: [_immutable.List, _immutable.List, _immutable.List, _CoordListJs2['default']]
}, 'MultiPolygon');

exports['default'] = MultiPolygon;
module.exports = exports['default'];