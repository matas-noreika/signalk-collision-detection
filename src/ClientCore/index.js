/*
 * Purpose:
 * Serves as main entry to Client-core.
 * This exposes all methods available by interface without depending
 * on Signalk serverAPI.
 * Programmer: Matas Noreika 26/03/05 11:01:58
*/

//import Vessel interface
import Vessel from './vessel.js';
//expose the whole interface as the ClientCore object
const ClientCore = {
  Vessel: Vessel
};
export default ClientCore;
