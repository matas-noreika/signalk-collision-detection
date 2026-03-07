/*
 * Purpose:
 * Interface module that implements core system interface to
 * perform operations related to own vessel.
 * Programmer: Matas Noreika 26/03/05 10:29:50
*/

// defines an object container for Vessel interface
const Vessel = {
  getPos: function(){
    const data = {longitude: 0, latitude: 0};
    //just a simple test build
    console.log(data);
    return data;
  }
}

export default Vessel;
