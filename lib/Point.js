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

var Point = (0, _immutableNestableRecord2['default'])({
  type: "Point",
  coordinates: (0, _immutable.List)()
}, {
  coordinates: _CoordListJs2['default']
}, 'Point');

exports['default'] = Point;
module.exports = exports['default'];