/*
 * Purpose:
 * Script that runs unit tests on the mathUtil library to ensure accuracy in
 * data.
 * Programmer: Matas Noreika 26/04/11 11:36:28
*/

import {jest, test} from '@jest/globals';
//import the MathUtil library
import MathUtil from '../src/Core/mathUtils.js';

//hav function testing
test.each([
  {angle: 0, expected: 0},
  {angle: 15*(Math.PI/180), expected: 0.017037086},
  {angle: 30*(Math.PI/180), expected: 0.066987298},
  {angle: 45*(Math.PI/180), expected: 0.146446609},
  {angle: 60*(Math.PI/180), expected: 0.25},
  {angle: 75*(Math.PI/180), expected: 0.370590477},
  {angle: 90*(Math.PI/180), expected: 0.5},
])('.hav($angle)',({angle, expected}) => {
  expect(Math.ceil(MathUtil.hav(angle)*1000000)).toBe(Math.ceil(expected*1000000));
});

//archav function testing
test.each([
  {angle: 0, expected: 0},
  {angle: 0.017037086, expected: 15*(Math.PI/180)},
  {angle: 0.066987298, expected: 30*(Math.PI/180)},
  {angle: 0.146446609, expected: 45*(Math.PI/180)},
  {angle: 0.25, expected: 60*(Math.PI/180)},
  {angle: 0.370590477, expected: 75*(Math.PI/180)},
  {angle: 0.5, expected: 90*(Math.PI/180)},
])('.archav($angle)', ({angle, expected}) => {
  expect(Math.ceil(MathUtil.archav(angle))).toBe(Math.ceil(expected));
});

//getRelativeDistance testing
test.each([
  [20,25,-20,-25, 7029.372001],
  [30,40,20,20, 2296.579726],
  [-15,20,40,20, 6115.720965]
])('.getRelativeDistance(%f, %f, %f, %f)',
(lat1, long1, lat2, long2, expected) => {
  expect(Math.ceil(MathUtil.getRelativeDistance(lat1,long1,lat2,long2)/1e3))
  .toBe(Math.ceil(expected));
});

//toLocal testing
test.each([
  [20, -20, 25, -25, {x: -4702007.342, y: 555974.6332}],
  [-40, 30, -40, 25, {x: -4702007.342, y: -8895594.132}],
  [-40, 30, -40, 30, {x: 0, y: 0}],
])('.toLocal(%f, %f, %f, %f)', (lat1, long1, lat2, long2, expected) => {
    expect(Math.ceil(MathUtil.toLocal(lat1,long1,lat2,long2))).toBe(Math.ceil(expected));
});
