import {List} from 'immutable';
import NestableRecord from 'immutable-nestable-record';

import CoordList from './CoordList.js';

const MultiPolygon = NestableRecord({
  type: 'MultiPolygon',
  coordinates: List(),
}, {
  coordinates: [List, List, List, CoordList],
}, 'MultiPolygon');

export default MultiPolygon;
