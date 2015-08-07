import Immutable, {Record, List, Map} from 'immutable';

import geometry from './geometry.js';

const DEFAULT_VALUES = {
  type: 'Feature',
  geometry: null,
  properties: null,
  id: undefined,
};

const _Feature = Record(DEFAULT_VALUES, 'Feature');

function Feature(values = DEFAULT_VALUES, propertiesReviver = undefined) {
  const feature = {...values};

  if (values.geometry) feature.geometry = geometry(values.geometry);
  if (values.properties) feature.properties = Immutable.fromJS(values.properties, propertiesReviver);

  return _Feature(feature);
}

Feature.prototype = _Feature.prototype;
Feature.prototype.constructor = Feature;

export default Feature;

