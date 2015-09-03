import {List} from 'immutable';
import NestableRecord from 'immutable-nestable-record';

import CoordList from './CoordList.js';

const LineString = NestableRecord({
  type: "LineString",
  coordinates: List(),
}, {
  coordinates: [List, CoordList],
}, 'LineString');

export default LineString;
