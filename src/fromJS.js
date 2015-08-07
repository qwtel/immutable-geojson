import {Record, List} from 'immutable';

import Feature from './Feature.js';
import FeatureCollection from './FeatureCollection.js';
import GeometryCollection from './GeometryCollection.js';

import geometry from './geometry.js';

function fromJS(geoJson, propertiesReviver) {
  switch(geoJson.type) {
    case 'FeatureCollection':
      return FeatureCollection(geoJson, propertiesReviver);
    case 'Feature':
      return Feature(geoJson, propertiesReviver);
    case 'GeometryCollection':
      return GeometryCollection(geoJson);
    default:
      return geometry(geoJson)
  }
}

export default fromJS;
