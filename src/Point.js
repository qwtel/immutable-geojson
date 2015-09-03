import {List} from 'immutable';
import NestableRecord from 'immutable-nestable-record';

import CoordList from './CoordList.js';

const Point = NestableRecord({
  type: "Point",
  coordinates: List(),
}, {
  coordinates: CoordList,
}, 'Point');

export default Point;
