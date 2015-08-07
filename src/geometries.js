import {List} from 'immutable';

import geometry from './geometry.js';

function geometries(gs = []) {
  return List(gs.map(geometry));
}

export default geometries;
