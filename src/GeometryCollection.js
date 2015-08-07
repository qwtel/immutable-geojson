import {Record, List} from 'immutable';

import geometries from './geometries.js';

const DEFAULT_VALUES = {
  type: 'GeometryCollection',
  geometries: List(),
};

const _GeometryCollection = Record(DEFAULT_VALUES, 'GeometryCollection');

function GeometryCollection(values = DEFAULT_VALUES) {
  const geometryCollection = {...values};

  geometryCollection.geometries = geometries(values.geometries);

  return _GeometryCollection(geometryCollection);
}

GeometryCollection.prototype = _GeometryCollection.prototype;
GeometryCollection.prototype.constructor = GeometryCollection;

export default GeometryCollection;

