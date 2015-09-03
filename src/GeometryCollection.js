import {List} from 'immutable';
import NestableRecord from 'immutable-nestable-record';

import geometries from './geometries.js';

const GeometryCollection = NestableRecord({
  type: 'GeometryCollection',
  geometries: List(),
}, {
  geometries: geometries,
}, 'GeometryCollection');

export default GeometryCollection;
