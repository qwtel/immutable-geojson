'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _CoordListJs = require('./CoordList.js');

var _CoordListJs2 = _interopRequireDefault(_CoordListJs);

var DEFAULT_VALUES = {
  type: "MultiPoint",
  coordinates: (0, _immutable.List)()
};

var _MultiPoint = (0, _immutable.Record)(DEFAULT_VALUES, 'MultiPoint');

function MultiPoint() {
  var values = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_VALUES : arguments[0];

  var multiPoint = _extends({}, values);

  multiPoint.coordinates = (0, _immutable.List)(values.coordinates.map(_CoordListJs2['default']));

  return _MultiPoint(multiPoint);
}

MultiPoint.prototype = _MultiPoint.prototype;
MultiPoint.prototype.constructor = MultiPoint;

exports['default'] = MultiPoint;
module.exports = exports['default'];