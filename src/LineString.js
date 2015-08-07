import {Record, List} from 'immutable';

import CoordList from './CoordList.js';

const DEFAULT_VALUES = {
  type: "LineString",
  coordinates: List(),
};

const _LineString = Record(DEFAULT_VALUES, 'LineString');

function LineString(values = DEFAULT_VALUES) {
  const lineString = {...values};

  lineString.coordinates = List(values.coordinates.map(CoordList));

  return _LineString(lineString);
}

LineString.prototype = _LineString.prototype;
LineString.prototype.constructor = LineString;

export default LineString;

