import {Record, List} from 'immutable';

const DEFAULT_VALUES = {
  type: "Point",
  coordinates: List(),
};

const _Point = Record(DEFAULT_VALUES, 'Point');

function Point(values = DEFAULT_VALUES) {
  const point = {...values};

  point.coordinates = List(values.coordinates);

  return _Point(point);
}

Point.prototype = _Point.prototype;
Point.prototype.constructor = Point;

export default Point;

