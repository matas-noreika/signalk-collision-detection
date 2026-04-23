/*
 * Purpose:
 * Module that exposes methods for calculating from spherical longitude
 * latitude angles to cartesian (x,y) form.
 * Programmer: Matas Noreika 26/04/10 17:12:46
*/

import Vessel from './vessel.js';
//Constant for earths radius in metres
const R = 6371e3;
//Constant for linear estimation of meters per degree of latitude or longitude
const METERS_PER_DEG = 111111;
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
  point.x = METERS_PER_DEG * (long2-long1) * Math.cos(lat1);
  point.y = METERS_PER_DEG * (lat2-lat1);
  return point;
};
/*
 * getCpa()
 * Function that calculates the cpa given the target cartesian coordinates
 * Arguments:
 * pos: Point object can be return value of toLocal()
 * selfSpeed: speed of own vessel
 * selfBearing: bearing of own vessel
 * targetSpeed: Speed of other vessel
 * targetBearing: bearing of other vesel
 * Returns: float value for CPA
*/
const getCpa = (pos, selfSpeed, selfBearing, targetSpeed, targetBearing) => {
  //Decompose bearing into X and Y components
  deltaVx = (targetSpeed * Math.sin(targetBearing)) - (selfSpeed * Math.sin(selfBearing));
  deltaVy = (targetSpeed * Math.cos(targetBearing)) - (selfSpeed * Math.cos(selfBearing));
  //we can assume values for difference of position are relative to our vessel
  //so we can just set to the pos x and y values
  return Math.abs(pos.x*deltaVy - pos.y*deltaVx)/Math.sqrt(deltaVy*deltaVy + deltaVx*deltaVx);
}

/*
 * getTcpa()
 * Function to calculate the time to closest point of approach.
 * Arguments:
 * pos: Point object can be return value of toLocal()
 * selfSpeed: speed of own vessel
 * selfBearing: bearing of own vessel
 * targetSpeed: Speed of other vessel
 * targetBearing: bearing of other vesel
 * Returns: float value for Tcpa
*/
const getTcpa = (pos, selfSpeed, selfBearing, targetSpeed, targetBearing) => {
  //Decompose bearing into X and Y components
  deltaVx = (targetSpeed * Math.sin(targetBearing)) - (selfSpeed * Math.sin(selfBearing));
  deltaVy = (targetSpeed * Math.cos(targetBearing)) - (selfSpeed * Math.cos(selfBearing));
  //we can assume values for difference of position are relative to our vessel
  //so we can just set to the pos x and y values
  return -(pos.y*deltaVy+pos.x*deltaVx)/(deltaVx*deltaVx+deltaVy*deltaVy);
}
// definition of component exposed by the module
const mathUtils = {
  R: R,
  METERS_PER_DEG: METERS_PER_DEG,
  hav: hav,
  archav: archav,
  getRelativeDistance: getRelativeDistance,
  toLocal: toLocal,
  getCpa: getCpa,
  getTcpa: getTcpa
};



export default mathUtils;
