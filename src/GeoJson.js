import {Record, List} from 'immutable';

import Feature from './Feature.js';
import FeatureCollection from './FeatureCollection.js';
import GeometryCollection from './GeometryCollection.js';

import geometry from './geometry.js';

function GeoJson(geoJson) {
  switch(geoJson.type) {
    case 'FeatureCollection':
      return FeatureCollection(geoJson);
    case 'Feature':
      return Feature(geoJson);
    case 'GeometryCollection':
      return GeometryCollection(geoJson);
    default:
      return geometry(geoJson)
  }
}

export default GeoJson;
