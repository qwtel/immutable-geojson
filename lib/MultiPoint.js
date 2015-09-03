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

var MultiPoint = (0, _immutableNestableRecord2['default'])({
  type: "MultiPoint",
  coordinates: (0, _immutable.List)()
}, {
  coordinates: [_immutable.List, _CoordListJs2['default']]
}, 'MultiPoint');

exports['default'] = MultiPoint;
module.exports = exports['default'];