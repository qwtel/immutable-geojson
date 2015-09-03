import {List} from 'immutable';
import NestableRecord from 'immutable-nestable-record';

import CoordList from './CoordList.js';

const Polygon = NestableRecord({
  type: 'Polygon',
  coordinates: List(),
}, {
  coordinates: [List, List, CoordList],
}, 'Polygon');

export default Polygon;
