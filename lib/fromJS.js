'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _FeatureJs = require('./Feature.js');

var _FeatureJs2 = _interopRequireDefault(_FeatureJs);

var _FeatureCollectionJs = require('./FeatureCollection.js');

var _FeatureCollectionJs2 = _interopRequireDefault(_FeatureCollectionJs);

var _GeometryCollectionJs = require('./GeometryCollection.js');

var _GeometryCollectionJs2 = _interopRequireDefault(_GeometryCollectionJs);

var _geometryJs = require('./geometry.js');

var _geometryJs2 = _interopRequireDefault(_geometryJs);

function fromJS(geoJson, propertiesReviver) {
  switch (geoJson.type) {
    case 'FeatureCollection':
      return (0, _FeatureCollectionJs2['default'])(geoJson, propertiesReviver);
    case 'Feature':
      return (0, _FeatureJs2['default'])(geoJson, propertiesReviver);
    case 'GeometryCollection':
      return (0, _GeometryCollectionJs2['default'])(geoJson);
    default:
      return (0, _geometryJs2['default'])(geoJson);
  }
}

exports['default'] = fromJS;
module.exports = exports['default'];