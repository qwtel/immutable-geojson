import {Collection, Record, List} from 'immutable';

import GeoJson from '../GeoJson.js'

import Point from '../Point.js';
import LineString from '../LineString.js';

describe('GeoJson', () => {
  const GeoJson = require('../GeoJson.js');

  it('should be defined', () => {
    expect(GeoJson).toBeDefined();
  });

  describe('Point', () => {
    const point = GeoJson({"type": "Point", "coordinates": [100.0, 0.0]});

    it('should not be null', () => {
      expect(point).not.toBeNull();
    });

    it('should be an immutable collection', () => {
      expect(point instanceof Collection).toBe(true);
      expect(point instanceof Record).toBe(true);
    });

    it('should be able to access the fields in point notation or via `get`', () => {
      expect(point.type).toBe('Point');
      expect(point.get('type')).toBe('Point');

      const {type} = point;
      expect(type).toBe('Point')
    });

    it('should have a `coordinates` field of type List', () => {
      expect(point.coordinates).toBeDefined();
      expect(point.coordinates instanceof Collection).toBe(true);
      expect(point.coordinates instanceof List).toBe(true);
      expect(point.coordinates.size).toBe(2);
    });

    it('should have the correct coordinates', () => {
      const [lng, lat] = point.coordinates;
      expect(lng).toEqual(100.0);
      expect(lat).toEqual(0.0);
    });
  });

  describe('LineString', () => {
    const lineString = GeoJson({
      "type": "LineString",
      "coordinates": [[100.0, 0.0], [101.0, 1.0]],
    });

    it('should not be null', () => {
      expect(lineString).not.toBeNull();
    });

    it('should have a `coordinates` field of type List of List', () => {
      expect(lineString.coordinates instanceof List).toBe(true);
      expect(lineString.coordinates.first() instanceof List).toBe(true);
      expect(lineString.coordinates.first().size).toBe(2);
    });

    it('should have the correct coordinates', () => {
      const [[lng1, lat1], [lng2, lat2]] = lineString.coordinates;

      expect(lng1).toEqual(100.0);
      expect(lat1).toEqual(0.0);

      expect(lng2).toEqual(101.0);
      expect(lat2).toEqual(1.0);
    });
  });

  describe('Polygon without holes', () => {
    const polygon = GeoJson({
      "type": "Polygon",
      "coordinates": [
        [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
      ],
    });

    it('should not be null', () => {
      expect(polygon).not.toBeNull();
    });

    it('should have a `coordinates` field of type List of List of List', () => {
      expect(polygon.coordinates instanceof List).toBe(true);
      expect(polygon.coordinates.first() instanceof List).toBe(true);
      expect(polygon.coordinates.first().first() instanceof List).toBe(true);
      expect(polygon.coordinates.first().first().size).toBe(2);
    });

    it('should have the correct coordinates', () => {
      const [[[lng1, lat1], [lng2, lat2], [lng3, lat3], [lng4, lat4], [lng5, lat5]]] = polygon.coordinates;

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

  describe('Polygon with holes', () => {
    const polygon = GeoJson({
      "type": "Polygon",
      "coordinates": [
        [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
        [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]],
      ],
    });

    it('should have the correct coordinates', () => {
      const [
        [[lng11, lat11], [lng12, lat12], [lng13, lat13], [lng14, lat14], [lng15, lat15]],
        [[lng21, lat21], [lng22, lat22], [lng23, lat23], [lng24, lat24], [lng25, lat25]],
        ] = polygon.coordinates;

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

  describe('MultiPoint', () => {
    const multiPoint = GeoJson({
      "type": "MultiPoint",
      "coordinates": [[100.0, 0.0], [101.0, 1.0]],
    });

    it('should have a `coordinates` field of type List of List', () => {
      expect(multiPoint.coordinates instanceof List).toBe(true);
      expect(multiPoint.coordinates.first() instanceof List).toBe(true);
      expect(multiPoint.coordinates.first().size).toBe(2);
    });
  });

  describe('MultiLineString', () => {
    const multiLineString = GeoJson({
      "type": "MultiLineString",
      "coordinates": [
        [[100.0, 0.0], [101.0, 1.0]],
        [[102.0, 2.0], [103.0, 3.0]]
      ],
    });

    it('should have a `coordinates` field of type List of List of List', () => {
      expect(multiLineString.coordinates instanceof List).toBe(true);
      expect(multiLineString.coordinates.first() instanceof List).toBe(true);
      expect(multiLineString.coordinates.first().first() instanceof List).toBe(true);
      expect(multiLineString.coordinates.first().first().size).toBe(2);
    });

    it('should have the correct coordinates', () => {
      const [[[lng, lat]]] = multiLineString.coordinates;
      expect(lng).toBe(100.0);
      expect(lat).toBe(0.0);
    });
  });

  describe('MultiPolygon', () => {
    const multiPolygon = GeoJson({
      "type": "MultiPolygon",
      "coordinates": [
        [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
        [
          [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
          [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]
        ],
      ],
    });

    it('should have a `coordinates` field of type List of List of List of List', () => {
      expect(multiPolygon.coordinates instanceof List).toBe(true);
      expect(multiPolygon.coordinates.first() instanceof List).toBe(true);
      expect(multiPolygon.coordinates.first().first() instanceof List).toBe(true);
      expect(multiPolygon.coordinates.first().first().first() instanceof List).toBe(true);
      expect(multiPolygon.coordinates.first().first().first().size).toBe(2);
    });

    it('should have the correct coordinates', () => {
      const [[[[lng, lat]]]] = multiPolygon.coordinates;
      expect(lng).toBe(102.0);
      expect(lat).toBe(2.0);
    });
  });

  describe('GeometryCollection', () => {
    const geometryCollection = GeoJson({
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [100.0, 0.0],
        },
        {
          "type": "LineString",
          "coordinates": [[101.0, 0.0], [102.0, 1.0]],
        },
      ],
    });

    it('should not be null', () => {
      expect(geometryCollection).not.toBeNull();
    });

    it('should have `geometries` field of type List', () => {
      expect(geometryCollection.geometries instanceof List).toBe(true);
    });

    it('should have a point as first geometry', () => {
      expect(geometryCollection.geometries.first() instanceof Point).toBe(true);
    });

    it('should have a line string as second geometry', () => {
      expect(geometryCollection.geometries.get(1) instanceof LineString).toBe(true);
    });
  });
});