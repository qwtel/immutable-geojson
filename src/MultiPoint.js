import {Record, List} from 'immutable';

const DEFAULT_VALUES = {
  type: "MultiPoint",
  coordinates: List(),
};

const _MultiPoint = Record(DEFAULT_VALUES, 'MultiPoint');

function MultiPoint(values = DEFAULT_VALUES) {
  const multiPoint = {...values};

  multiPoint.coordinates = List(values.coordinates.map(List));

  return _MultiPoint(multiPoint);
}

MultiPoint.prototype = _MultiPoint.prototype;
MultiPoint.prototype.constructor = MultiPoint;

export default MultiPoint;

