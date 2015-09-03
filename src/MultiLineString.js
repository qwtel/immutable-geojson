import {List} from 'immutable';
import NestableRecord from 'immutable-nestable-record';

import CoordList from './CoordList.js';

const MultiLineString = NestableRecord({
  type: 'MultiLineString',
  coordinates: List(),
}, {
  coordinates: [List, List, CoordList],
}, 'MultiLineString');

export default MultiLineString;
