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

var LineString = (0, _immutableNestableRecord2['default'])({
  type: "LineString",
  coordinates: (0, _immutable.List)()
}, {
  coordinates: [_immutable.List, _CoordListJs2['default']]
}, 'LineString');

exports['default'] = LineString;
module.exports = exports['default'];