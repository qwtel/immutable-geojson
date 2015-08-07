import {List} from 'immutable';

function CoordList(values) {
  const coord = List(values);
  coord[0] = values[0];
  coord[1] = values[1];
  return coord;
}

export default CoordList;
