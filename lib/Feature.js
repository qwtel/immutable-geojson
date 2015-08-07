'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _geometryJs = require('./geometry.js');

var _geometryJs2 = _interopRequireDefault(_geometryJs);

var DEFAULT_VALUES = {
  type: 'Feature',
  geometry: null,
  properties: null,
  id: undefined
};

var _Feature = (0, _immutable.Record)(DEFAULT_VALUES, 'Feature');

function Feature() {
  var values = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_VALUES : arguments[0];
  var propertiesReviver = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

  var feature = _extends({}, values);

  if (values.geometry) feature.geometry = (0, _geometryJs2['default'])(values.geometry);
  if (values.properties) feature.properties = _immutable2['default'].fromJS(values.properties, propertiesReviver);

  return _Feature(feature);
}

Feature.prototype = _Feature.prototype;
Feature.prototype.constructor = Feature;

exports['default'] = Feature;
module.exports = exports['default'];