/*
 * Purpose:
 * Serves as main entry that exposes all interfaces of the core.
 * This defines the general structure of exposed API that must be
 * implemented for higher level API to work.
 * Programmer: Matas Noreika 26/03/05 10:57:05
*/

//import vessel interface
import Vessel from './vessel';
import MathUtils from './mathUtils';

const Core = {// start of Core
  Vessel: Vessel,
  MathUtils: MathUtils
}//end of Core

//exports the Core object by default
export default Core;
