import {Record, List} from 'immutable';

const DEFAULT_VALUES = {
  type: 'Polygon',
  coordinates: List(),
};

const _Polygon = Record(DEFAULT_VALUES, 'Polygon');

function Polygon(values = DEFAULT_VALUES) {
  const polygon = {...values};

  polygon.coordinates = List(values.coordinates.map(polygon => List(polygon.map(List))));

  return _Polygon(polygon);
}

Polygon.prototype = _Polygon.prototype;
Polygon.prototype.constructor = Polygon;

export default Polygon;

