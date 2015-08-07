import Point from './Point.js';
import MultiPoint from './MultiPoint.js';
import LineString from './LineString.js';
import MultiLineString from './MultiLineString.js';
import Polygon from './Polygon.js';
import MultiPolygon from './MultiPolygon.js';

function geometry(g) {
  switch(g.type) {
    case 'Point':
      return Point(g);
    case 'MultiPoint':
      return MultiPoint(g);
    case 'LineString':
      return LineString(g);
    case 'MultiLineString':
      return MultiLineString(g);
    case 'Polygon':
      return Polygon(g);
    case 'MultiPolygon':
      return MultiPolygon(g);
  }
}

export default geometry;
