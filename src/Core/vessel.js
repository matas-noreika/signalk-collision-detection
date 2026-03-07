/*
 * Purpose:
 * Interface module that implements core system interface to
 * perform operations related to own vessel.
 * Programmer: Matas Noreika 26/03/05 10:29:50
*/

const Vessel = {//start of Vessel
  /*
   * Getter method to retrieve self vessel position from core
  */
  getPos: async function(){//start of getPos
    const data = {longitude: 56.6, latitude: 25.4};
    console.log(data);
    return data;
  },//end of getPos
  /*
   * Setter method to set self vessel position to core
  */
  setPos: function(latitude, longitude){//start of setPos
    
  }//end of setPos
};//end of Vessel

export default Vessel;

