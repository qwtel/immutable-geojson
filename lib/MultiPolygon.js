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
  type: 'MultiPolygon',
  coordinates: (0, _immutable.List)()
};

var _MultiPolygon = (0, _immutable.Record)(DEFAULT_VALUES, 'MultiPolygon');

function MultiPolygon() {
  var values = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_VALUES : arguments[0];

  var multiPolygon = _extends({}, values);

  multiPolygon.coordinates = (0, _immutable.List)(values.coordinates.map(function (pp) {
    return (0, _immutable.List)(pp.map(function (p) {
      return (0, _immutable.List)(p.map(_CoordListJs2['default']));
    }));
  }));

  return _MultiPolygon(multiPolygon);
}

MultiPolygon.prototype = _MultiPolygon.prototype;
MultiPolygon.prototype.constructor = MultiPolygon;

exports['default'] = MultiPolygon;
module.exports = exports['default'];