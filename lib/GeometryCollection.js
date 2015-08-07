'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _geometriesJs = require('./geometries.js');

var _geometriesJs2 = _interopRequireDefault(_geometriesJs);

var DEFAULT_VALUES = {
  type: 'GeometryCollection',
  geometries: (0, _immutable.List)()
};

var _GeometryCollection = (0, _immutable.Record)(DEFAULT_VALUES, 'GeometryCollection');

function GeometryCollection() {
  var values = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_VALUES : arguments[0];

  var geometryCollection = _extends({}, values);

  geometryCollection.geometries = (0, _geometriesJs2['default'])(values.geometries);

  return _GeometryCollection(geometryCollection);
}

GeometryCollection.prototype = _GeometryCollection.prototype;
GeometryCollection.prototype.constructor = GeometryCollection;

exports['default'] = GeometryCollection;
module.exports = exports['default'];