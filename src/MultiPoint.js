import {List} from 'immutable';
import NestableRecord from 'immutable-nestable-record';

import CoordList from './CoordList.js';

const MultiPoint = NestableRecord({
  type: "MultiPoint",
  coordinates: List(),
}, {
  coordinates: [List, CoordList],
}, 'MultiPoint');

export default MultiPoint;
