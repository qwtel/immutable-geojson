import {Record, List} from 'immutable';

import CoordList from './CoordList.js';

const DEFAULT_VALUES = {
  type: 'Polygon',
  coordinates: List(),
};

const _Polygon = Record(DEFAULT_VALUES, 'Polygon');

function Polygon(values = DEFAULT_VALUES) {
  const polygon = {...values};

  polygon.coordinates = List(values.coordinates.map(polygon => List(polygon.map(CoordList))));

  return _Polygon(polygon);
}

Polygon.prototype = _Polygon.prototype;
Polygon.prototype.constructor = Polygon;

export default Polygon;

