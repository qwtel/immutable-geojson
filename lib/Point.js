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
  type: "Point",
  coordinates: (0, _immutable.List)()
};

var _Point = (0, _immutable.Record)(DEFAULT_VALUES, 'Point');

function Point() {
  var values = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_VALUES : arguments[0];

  var point = _extends({}, values);

  point.coordinates = (0, _CoordListJs2['default'])(values.coordinates);

  return _Point(point);
}

Point.prototype = _Point.prototype;
Point.prototype.constructor = Point;

exports['default'] = Point;
module.exports = exports['default'];