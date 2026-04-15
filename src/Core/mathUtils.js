/*
 * Purpose:
 * Module that exposes methods for calculating from spherical longitude
 * latitude angles to cartesian (x,y) form.
 * Programmer: Matas Noreika 26/04/10 17:12:46
*/

import Vessel from './vessel.js';
//Constant for earths radius in metres
const R = 6371e3;
/*
   * hav(theta)
   * Function that calculates haversine of an angle input theta.
   * Arguments:
   * theta: angle given in radians
   * Returns: floating point value
*/
const hav = (theta) => {
  //sin^2(theta/2)
  return Math.pow(Math.sin(theta/2),2);
};
/*
  * archav(x)
  * Function that calculates inverse haversine of an input x.
  * Arguments:
  * x: floating point value
  * Returns: theta angle given in radians
*/
const archav = (x) => {
  //2*asin(sqrt(x))
  return 2*Math.asin(Math.sqrt(x));
}
/*
   * getRelativeDistance()
   * Function that calculates the relative distance using spherical geometry.
   * Arguments:
   * lat1: vessel 1 latitude in degrees
   * long2: vessel 1 longitude in degrees
   * lat2: vessel 2 latitude in degress
   * long2: vessel 2 longitude in degrees
   * Returns: distance given in metres
*/
const getRelativeDistance = (lat1, long1, lat2, long2) => {
  //calculate angle between points on spherical plane
  //great-circle distance
  //convert angles deg to rad
  lat1 *= Math.PI/180;
  lat2 *= Math.PI/180;
  //calculate delta latitutde and longitude
  const deltaLat = (lat2-lat1);
  const deltaLong = (long2 - long1) * (Math.PI/180);
  //calculate haversine (half cord length squared connecting our two points)
  const c = hav(deltaLat) + Math.cos(lat1) * Math.cos(lat2) * hav(deltaLong);
  //calculate the angle between cord end points
  const theta = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1-c));
  //return the distance in metres
  return R * theta;
}
/*
 * tolocal()
 * Function to convert latitude and longitude to local cartesian coordinates.
 * Arguments:
 * lat1: vessels 1 latitude given in decimal degrees
 * long1: vessels 1 longitude given in decimal degrees
 * lat2: vessels 2 latitude given in decimal degrees
 * long2: vessels 2 longitude given in decimal degrees
 * Returns: Point object {x,y} in ENU-East North Up format relative to vessel 1
*/
const toLocal = (lat1, long1, lat2, long2) => {
  //convert angles to radians
  lat1 *= Math.pi/180;
  long1 *= Math.pi/180;
  lat2 *= Math.pi/180;
  long2 *= Math.pi/180;
  //using sphere equation
  let point = {x: 0,y: 0};
  point.x = R * (long2-long1) * Math.cos(lat1);
  point.y = R * (lat2-lat1);
  return point;
};
// definition of component exposed by the module
const mathUtils = {
  R: R,
  hav: hav,
  archav: archav,
  getRelativeDistance: getRelativeDistance,
  toLocal: toLocal
};

export default mathUtils;
