import {Record, List} from 'immutable';

import CoordList from './CoordList.js';

const DEFAULT_VALUES = {
  type: 'MultiLineString',
  coordinates: List(),
};

const _MultiLineString = Record(DEFAULT_VALUES, 'MultiLineString');

function MultiLineString(values = DEFAULT_VALUES) {
  const multiLineString = {...values};

  multiLineString.coordinates = List(values.coordinates.map(lineString => List(lineString.map(CoordList))));

  return _MultiLineString(multiLineString);
}

MultiLineString.prototype = _MultiLineString.prototype;
MultiLineString.prototype.constructor = MultiLineString;

export default MultiLineString;

