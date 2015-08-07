import Immutable, {Record, List, Map} from 'immutable';

import Geometry from './Geometry.js';

const DEFAULT_VALUES = {
  type: 'Feature',
  geometry: null,
  properties: null,
  id: undefined,
};

const _Feature = Record(DEFAULT_VALUES, 'Feature');

function Feature(values = DEFAULT_VALUES) {
  const feature = {...values};

  feature.geometry = Geometry(values.geometry);
  feature.properties = Immutable.fromJS(values.properties);

  return _Feature(feature);
}

Feature.prototype = _Feature.prototype;
Feature.prototype.constructor = Feature;

export default Feature;

