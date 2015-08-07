import {Record, List} from 'immutable';

import CoordList from './CoordList.js';

const DEFAULT_VALUES = {
  type: 'MultiPolygon',
  coordinates: List(),
};

const _MultiPolygon = Record(DEFAULT_VALUES, 'MultiPolygon');

function MultiPolygon(values = DEFAULT_VALUES) {
  const multiPolygon = {...values};

  multiPolygon.coordinates = List(values.coordinates.map(pp => List(pp.map(p => List(p.map(CoordList))))));

  return _MultiPolygon(multiPolygon);
}

MultiPolygon.prototype = _MultiPolygon.prototype;
MultiPolygon.prototype.constructor = MultiPolygon;

export default MultiPolygon;
