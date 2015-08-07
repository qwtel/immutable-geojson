'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _FeatureJs = require('./Feature.js');

var _FeatureJs2 = _interopRequireDefault(_FeatureJs);

var DEFAULT_VALUES = {
  type: "FeatureCollection",
  features: (0, _immutable.List)()
};

var _FeatureCollection = (0, _immutable.Record)(DEFAULT_VALUES, 'FeatureCollection');

function FeatureCollection() {
  var values = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_VALUES : arguments[0];
  var propertiesReviver = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

  var featureCollection = _extends({}, values);

  featureCollection.features = (0, _immutable.List)(values.features.map(function (feature) {
    return (0, _FeatureJs2['default'])(feature, propertiesReviver);
  }));

  return _FeatureCollection(featureCollection);
}

FeatureCollection.prototype = _FeatureCollection.prototype;
FeatureCollection.prototype.constructor = FeatureCollection;

exports['default'] = FeatureCollection;
module.exports = exports['default'];