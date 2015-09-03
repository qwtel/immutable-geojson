# Immutable GeoJSON
Immutable.js Record for GeoJSON

This library defines a [Immutable.js Record][record] for GeoJSON data.
It will handle all the internal nesting of the relevant geometry records,
so that it can almost (see Appendix) be used as a drop-in replacement for regular GeoJSON,
while maintaining all the goodness of immutable data structures.

## Install

`npm install immutable-geojson`

## Usage

```js
import Immutable from 'immutable';
import ImmutableGeoJSON, {Point} from 'immutable-geojson';

const pointA = ImmutableGeoJSON.fromJS({"type": "Point", "coordinates": [100.0, 0.0]});
const type = pointA.type // access to fields via dot syntax thanks to immutable records

const pointB = ImmutableGeoJSON.fromJS({"type": "Point", "coordinates": [100.0, 0.0]});
Immutable.is(pointA, pointB); // true
pointA instanceof Point // true
```

## Caveats

There are two issues that prevent if from being a complete replacement:

### Access to coordinates
Since coordinates are arrays in the GeoJSON spec, they are converted to `Immutable.List`s.
However, immutable lists are not equivalent to arrays.
Most notably their fields can't be accesed via bracket syntax (i.e. `geometry.coordinates[0]`).

However, since `Immutable.List` implements ES6 iterators,
it is possible to access the coordinates via destructuring in ES6:

```js
for (let lineString of geometry.coordinates) {
  for (let [lng, lat] of lineString) {
    // ...
  }
}
```

### Feature properties
Since the structure of the `properties` field of [GeoJSON Features][feature] can't be known in advance,
it uses a generic `Immutable.Map` to store the values as an `Immutable.Collection`
(so that comparisons via `Immutable.is` don't depend on identical references).

If you want to use records for the properties as well, you can provide a `reviver` as second parameter to `fromJS`
(similar to `fromJS` in Immutable.js)


[record]: https://facebook.github.io/immutable-js/docs/#/Record
[feature]: http://geojson.org/geojson-spec.html#feature-objects
