'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _indexJs = require('../index.js');

var _indexJs2 = _interopRequireDefault(_indexJs);

describe('GeoJson', function () {
  it('should be defined', function () {
    expect(_indexJs2['default'].fromJS).toBeDefined();
  });

  describe('Point', function () {
    var point = _indexJs2['default'].fromJS({ "type": "Point", "coordinates": [100.0, 0.0] });

    it('should not be null', function () {
      expect(point).not.toBeNull();
    });

    it('should be an immutable collection', function () {
      expect(point instanceof _immutable.Collection).toBe(true);
      expect(point instanceof _immutable.Record).toBe(true);
    });

    it('should be able to access the fields in point notation or via `get`', function () {
      expect(point.type).toBe('Point');
      expect(point.get('type')).toBe('Point');

      var type = point.type;

      expect(type).toBe('Point');
    });

    it('should have a `coordinates` field of type List', function () {
      expect(point.coordinates).toBeDefined();
      expect(point.coordinates instanceof _immutable.Collection).toBe(true);
      expect(point.coordinates instanceof _immutable.List).toBe(true);
      expect(point.coordinates.size).toBe(2);
    });

    it('should have the correct coordinates', function () {
      var _point$coordinates = _slicedToArray(point.coordinates, 2);

      var lng = _point$coordinates[0];
      var lat = _point$coordinates[1];

      expect(lng).toEqual(100.0);
      expect(lat).toEqual(0.0);
    });

    it('should support access via bracket syntax', function () {
      expect(point.coordinates[0]).toEqual(100.0);
      expect(point.coordinates[1]).toEqual(0.0);
    });
  });

  describe('LineString', function () {
    var lineString = _indexJs2['default'].fromJS({
      "type": "LineString",
      "coordinates": [[100.0, 0.0], [101.0, 1.0]]
    });

    it('should not be null', function () {
      expect(lineString).not.toBeNull();
    });

    it('should have a `coordinates` field of type List of List', function () {
      expect(lineString.coordinates instanceof _immutable.List).toBe(true);
      expect(lineString.coordinates.first() instanceof _immutable.List).toBe(true);
      expect(lineString.coordinates.first().size).toBe(2);
    });

    it('should have the correct coordinates', function () {
      var _lineString$coordinates = _slicedToArray(lineString.coordinates, 2);

      var _lineString$coordinates$0 = _slicedToArray(_lineString$coordinates[0], 2);

      var lng1 = _lineString$coordinates$0[0];
      var lat1 = _lineString$coordinates$0[1];

      var _lineString$coordinates$1 = _slicedToArray(_lineString$coordinates[1], 2);

      var lng2 = _lineString$coordinates$1[0];
      var lat2 = _lineString$coordinates$1[1];

      expect(lng1).toEqual(100.0);
      expect(lat1).toEqual(0.0);

      expect(lng2).toEqual(101.0);
      expect(lat2).toEqual(1.0);
    });
  });

  describe('Polygon without holes', function () {
    var polygon = _indexJs2['default'].fromJS({
      "type": "Polygon",
      "coordinates": [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]]
    });

    it('should not be null', function () {
      expect(polygon).not.toBeNull();
    });

    it('should have a `coordinates` field of type List of List of List', function () {
      expect(polygon.coordinates instanceof _immutable.List).toBe(true);
      expect(polygon.coordinates.first() instanceof _immutable.List).toBe(true);
      expect(polygon.coordinates.first().first() instanceof _immutable.List).toBe(true);
      expect(polygon.coordinates.first().first().size).toBe(2);
    });

    it('should have the correct coordinates', function () {
      var _polygon$coordinates = _slicedToArray(polygon.coordinates, 1);

      var _polygon$coordinates$0 = _slicedToArray(_polygon$coordinates[0], 5);

      var _polygon$coordinates$0$0 = _slicedToArray(_polygon$coordinates$0[0], 2);

      var lng1 = _polygon$coordinates$0$0[0];
      var lat1 = _polygon$coordinates$0$0[1];

      var _polygon$coordinates$0$1 = _slicedToArray(_polygon$coordinates$0[1], 2);

      var lng2 = _polygon$coordinates$0$1[0];
      var lat2 = _polygon$coordinates$0$1[1];

      var _polygon$coordinates$0$2 = _slicedToArray(_polygon$coordinates$0[2], 2);

      var lng3 = _polygon$coordinates$0$2[0];
      var lat3 = _polygon$coordinates$0$2[1];

      var _polygon$coordinates$0$3 = _slicedToArray(_polygon$coordinates$0[3], 2);

      var lng4 = _polygon$coordinates$0$3[0];
      var lat4 = _polygon$coordinates$0$3[1];

      var _polygon$coordinates$0$4 = _slicedToArray(_polygon$coordinates$0[4], 2);

      var lng5 = _polygon$coordinates$0$4[0];
      var lat5 = _polygon$coordinates$0$4[1];

      expect(lng1).toEqual(100.0);
      expect(lat1).toEqual(0.0);

      expect(lng2).toEqual(101.0);
      expect(lat2).toEqual(0.0);

      expect(lng3).toEqual(101.0);
      expect(lat3).toEqual(1.0);

      expect(lng4).toEqual(100.0);
      expect(lat4).toEqual(1.0);

      expect(lng5).toEqual(100.0);
      expect(lat5).toEqual(0.0);
    });
  });

  describe('Polygon with holes', function () {
    var polygon = _indexJs2['default'].fromJS({
      "type": "Polygon",
      "coordinates": [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]], [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
    });

    it('should have the correct coordinates', function () {
      var _polygon$coordinates2 = _slicedToArray(polygon.coordinates, 2);

      var _polygon$coordinates2$0 = _slicedToArray(_polygon$coordinates2[0], 5);

      var _polygon$coordinates2$0$0 = _slicedToArray(_polygon$coordinates2$0[0], 2);

      var lng11 = _polygon$coordinates2$0$0[0];
      var lat11 = _polygon$coordinates2$0$0[1];

      var _polygon$coordinates2$0$1 = _slicedToArray(_polygon$coordinates2$0[1], 2);

      var lng12 = _polygon$coordinates2$0$1[0];
      var lat12 = _polygon$coordinates2$0$1[1];

      var _polygon$coordinates2$0$2 = _slicedToArray(_polygon$coordinates2$0[2], 2);

      var lng13 = _polygon$coordinates2$0$2[0];
      var lat13 = _polygon$coordinates2$0$2[1];

      var _polygon$coordinates2$0$3 = _slicedToArray(_polygon$coordinates2$0[3], 2);

      var lng14 = _polygon$coordinates2$0$3[0];
      var lat14 = _polygon$coordinates2$0$3[1];

      var _polygon$coordinates2$0$4 = _slicedToArray(_polygon$coordinates2$0[4], 2);

      var lng15 = _polygon$coordinates2$0$4[0];
      var lat15 = _polygon$coordinates2$0$4[1];

      var _polygon$coordinates2$1 = _slicedToArray(_polygon$coordinates2[1], 5);

      var _polygon$coordinates2$1$0 = _slicedToArray(_polygon$coordinates2$1[0], 2);

      var lng21 = _polygon$coordinates2$1$0[0];
      var lat21 = _polygon$coordinates2$1$0[1];

      var _polygon$coordinates2$1$1 = _slicedToArray(_polygon$coordinates2$1[1], 2);

      var lng22 = _polygon$coordinates2$1$1[0];
      var lat22 = _polygon$coordinates2$1$1[1];

      var _polygon$coordinates2$1$2 = _slicedToArray(_polygon$coordinates2$1[2], 2);

      var lng23 = _polygon$coordinates2$1$2[0];
      var lat23 = _polygon$coordinates2$1$2[1];

      var _polygon$coordinates2$1$3 = _slicedToArray(_polygon$coordinates2$1[3], 2);

      var lng24 = _polygon$coordinates2$1$3[0];
      var lat24 = _polygon$coordinates2$1$3[1];

      var _polygon$coordinates2$1$4 = _slicedToArray(_polygon$coordinates2$1[4], 2);

      var lng25 = _polygon$coordinates2$1$4[0];
      var lat25 = _polygon$coordinates2$1$4[1];

      expect(lng11).toEqual(100.0);
      expect(lat11).toEqual(0.0);

      expect(lng12).toEqual(101.0);
      expect(lat12).toEqual(0.0);

      expect(lng13).toEqual(101.0);
      expect(lat13).toEqual(1.0);

      expect(lng14).toEqual(100.0);
      expect(lat14).toEqual(1.0);

      expect(lng15).toEqual(100.0);
      expect(lat15).toEqual(0.0);

      expect(lng21).toEqual(100.2);
      expect(lat21).toEqual(0.2);

      expect(lng22).toEqual(100.8);
      expect(lat22).toEqual(0.2);

      expect(lng23).toEqual(100.8);
      expect(lat23).toEqual(0.8);

      expect(lng24).toEqual(100.2);
      expect(lat24).toEqual(0.8);

      expect(lng25).toEqual(100.2);
      expect(lat25).toEqual(0.2);
    });
  });

  describe('MultiPoint', function () {
    var multiPoint = _indexJs2['default'].fromJS({
      "type": "MultiPoint",
      "coordinates": [[100.0, 0.0], [101.0, 1.0]]
    });

    it('should have a `coordinates` field of type List of List', function () {
      expect(multiPoint.coordinates instanceof _immutable.List).toBe(true);
      expect(multiPoint.coordinates.first() instanceof _immutable.List).toBe(true);
      expect(multiPoint.coordinates.first().size).toBe(2);
    });
  });

  describe('MultiLineString', function () {
    var multiLineString = _indexJs2['default'].fromJS({
      "type": "MultiLineString",
      "coordinates": [[[100.0, 0.0], [101.0, 1.0]], [[102.0, 2.0], [103.0, 3.0]]]
    });

    it('should have a `coordinates` field of type List of List of List', function () {
      expect(multiLineString.coordinates instanceof _immutable.List).toBe(true);
      expect(multiLineString.coordinates.first() instanceof _immutable.List).toBe(true);
      expect(multiLineString.coordinates.first().first() instanceof _immutable.List).toBe(true);
      expect(multiLineString.coordinates.first().first().size).toBe(2);
    });

    it('should have the correct coordinates', function () {
      var _multiLineString$coordinates = _slicedToArray(multiLineString.coordinates, 1);

      var _multiLineString$coordinates$0 = _slicedToArray(_multiLineString$coordinates[0], 1);

      var _multiLineString$coordinates$0$0 = _slicedToArray(_multiLineString$coordinates$0[0], 2);

      var lng = _multiLineString$coordinates$0$0[0];
      var lat = _multiLineString$coordinates$0$0[1];

      expect(lng).toBe(100.0);
      expect(lat).toBe(0.0);
    });
  });

  describe('MultiPolygon', function () {
    var multiPolygon = _indexJs2['default'].fromJS({
      "type": "MultiPolygon",
      "coordinates": [[[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]], [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]], [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]]
    });

    it('should have a `coordinates` field of type List of List of List of List', function () {
      expect(multiPolygon.coordinates instanceof _immutable.List).toBe(true);
      expect(multiPolygon.coordinates.first() instanceof _immutable.List).toBe(true);
      expect(multiPolygon.coordinates.first().first() instanceof _immutable.List).toBe(true);
      expect(multiPolygon.coordinates.first().first().first() instanceof _immutable.List).toBe(true);
      expect(multiPolygon.coordinates.first().first().first().size).toBe(2);
    });

    it('should have the correct coordinates', function () {
      var _multiPolygon$coordinates = _slicedToArray(multiPolygon.coordinates, 1);

      var _multiPolygon$coordinates$0 = _slicedToArray(_multiPolygon$coordinates[0], 1);

      var _multiPolygon$coordinates$0$0 = _slicedToArray(_multiPolygon$coordinates$0[0], 1);

      var _multiPolygon$coordinates$0$0$0 = _slicedToArray(_multiPolygon$coordinates$0$0[0], 2);

      var lng = _multiPolygon$coordinates$0$0$0[0];
      var lat = _multiPolygon$coordinates$0$0$0[1];

      expect(lng).toBe(102.0);
      expect(lat).toBe(2.0);
    });
  });

  describe('GeometryCollection', function () {
    var geometryCollection = _indexJs2['default'].fromJS({
      "type": "GeometryCollection",
      "geometries": [{
        "type": "Point",
        "coordinates": [100.0, 0.0]
      }, {
        "type": "LineString",
        "coordinates": [[101.0, 0.0], [102.0, 1.0]]
      }]
    });

    it('should not be null', function () {
      expect(geometryCollection).not.toBeNull();
    });

    it('should have `geometries` field of type List', function () {
      expect(geometryCollection.geometries instanceof _immutable.List).toBe(true);
    });

    it('should have a point as first geometry', function () {
      expect(geometryCollection.geometries.first() instanceof _indexJs.Point).toBe(true);
    });

    it('should have a line string as second geometry', function () {
      expect(geometryCollection.geometries.get(1) instanceof _indexJs.LineString).toBe(true);
    });
  });

  describe('Feature', function () {
    var feature = _indexJs2['default'].fromJS({
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [102.0, 0.5] },
      "properties": { "prop0": "value0" }
    });

    it('should not be null', function () {
      expect(feature).not.toBeNull();
    });

    it('should have a Point geometry', function () {
      expect(feature.geometry instanceof _indexJs.Point).toBe(true);
    });

    it('should have a properties of type Map', function () {
      expect(feature.properties instanceof _immutable.Collection).toBe(true);
      expect(feature.properties instanceof _immutable.Map).toBe(true);
    });

    it('should have the correct property', function () {
      expect(feature.properties.get('prop0')).toBe('value0');
    });

    it('should no id by default', function () {
      expect(feature.id).not.toBeDefined();
    });

    it('should allow null values for `geometry` and `properties`', function () {
      var feature = _indexJs2['default'].fromJS({
        "type": "Feature",
        "geometry": null,
        "properties": null
      });

      expect(feature).toBeDefined();
      expect(feature.geometry).toBeNull();
      expect(feature.properties).toBeNull();
    });

    it('should have an id if defined in the original JSON', function () {
      var feature = _indexJs2['default'].fromJS({
        "type": "Feature",
        "id": "test"
      });

      expect(feature.id).toBe('test');
    });
  });

  describe('Feature with property reviver', function () {
    var PropRecord = (0, _immutable.Record)({
      'prop0': undefined
    });

    function propertyReviver(key, value) {
      if (key === '') return PropRecord(value);
      return value;
    }

    var feature = _indexJs2['default'].fromJS({
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [102.0, 0.5] },
      "properties": { "prop0": "value0" }
    }, propertyReviver);

    it('should have properties of the correct type', function () {
      expect(feature.properties instanceof PropRecord).toBe(true);
    });

    it('should have properties with the correct value', function () {
      expect(feature.properties.prop0).toBe('value0');
    });
  });

  describe('FeatureCollection', function () {
    var PropRecord = (0, _immutable.Record)({
      'prop0': undefined,
      'prop1': undefined
    });

    function propertyReviver(key, value) {
      if (key === '') return PropRecord(value);
      return _immutable.Iterable.isIndexed(value) ? value.toList() : value.toMap();
    }

    var featureCollection = _indexJs2['default'].fromJS({
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": { "type": "Point", "coordinates": [102.0, 0.5] },
        "properties": { "prop0": "value0" }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": [[102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]]
        },
        "properties": {
          "prop0": "value0",
          "prop1": 0.0
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]]
        },
        "properties": {
          "prop0": "value0",
          "prop1": { "this": "that" }
        }
      }]
    }, propertyReviver);

    it('should not be null', function () {
      expect(featureCollection).not.toBeNull();
    });

    it('should have a features list', function () {
      expect(featureCollection.features).toBeDefined();
      expect(featureCollection.features instanceof _immutable.List).toBeTruthy();
      expect(featureCollection.features.size).toBe(3);
      expect(featureCollection.features.first() instanceof _indexJs.Feature).toBeTruthy();
    });

    it('should pass the property reviver', function () {
      expect(featureCollection.features.first().properties instanceof PropRecord).toBeTruthy();
      expect(featureCollection.features.first().properties.prop0).toBe('value0');
    });
  });

  it('should be comparable via `Immutable.is`', function () {
    var pointA = _indexJs2['default'].fromJS({ "type": "Point", "coordinates": [100.0, 0.0] });
    var pointB = _indexJs2['default'].fromJS({ "type": "Point", "coordinates": [100.0, 0.0] });
    expect(_immutable2['default'].is(pointA, pointB)).toBe(true);
  });
});