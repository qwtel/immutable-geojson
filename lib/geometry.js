'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _PointJs = require('./Point.js');

var _PointJs2 = _interopRequireDefault(_PointJs);

var _MultiPointJs = require('./MultiPoint.js');

var _MultiPointJs2 = _interopRequireDefault(_MultiPointJs);

var _LineStringJs = require('./LineString.js');

var _LineStringJs2 = _interopRequireDefault(_LineStringJs);

var _MultiLineStringJs = require('./MultiLineString.js');

var _MultiLineStringJs2 = _interopRequireDefault(_MultiLineStringJs);

var _PolygonJs = require('./Polygon.js');

var _PolygonJs2 = _interopRequireDefault(_PolygonJs);

var _MultiPolygonJs = require('./MultiPolygon.js');

var _MultiPolygonJs2 = _interopRequireDefault(_MultiPolygonJs);

function geometry(g) {
  switch (g.type) {
    case 'Point':
      return (0, _PointJs2['default'])(g);
    case 'MultiPoint':
      return (0, _MultiPointJs2['default'])(g);
    case 'LineString':
      return (0, _LineStringJs2['default'])(g);
    case 'MultiLineString':
      return (0, _MultiLineStringJs2['default'])(g);
    case 'Polygon':
      return (0, _PolygonJs2['default'])(g);
    case 'MultiPolygon':
      return (0, _MultiPolygonJs2['default'])(g);
  }
}

exports['default'] = geometry;
module.exports = exports['default'];