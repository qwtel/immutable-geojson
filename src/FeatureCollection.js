import {Record, List} from 'immutable';

import Feature from './Feature.js';

const DEFAULT_VALUES = {
  type: "FeatureCollection",
  features: List(),
};

const _FeatureCollection = Record(DEFAULT_VALUES, 'FeatureCollection');

function FeatureCollection(values = DEFAULT_VALUES, propertiesReviver = undefined) {
  const featureCollection = {...values};

  featureCollection.features = List(values.features.map(feature => Feature(feature, propertiesReviver)));

  return _FeatureCollection(featureCollection);
}

FeatureCollection.prototype = _FeatureCollection.prototype;
FeatureCollection.prototype.constructor = FeatureCollection;

export default FeatureCollection;

