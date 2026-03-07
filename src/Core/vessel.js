/*
 * Purpose:
 * Interface module that implements core system interface to
 * perform operations related to own vessel.
 * This is the signalk server specific implementation.
 * This core also relies on a plugin which exposes the specific endpoints
 * Programmer: Matas Noreika 26/03/05 10:29:50
*/

const Vessel = {//start of Vessel
  /*
   * Getter method to retrieve self vessel position from core
  */
  getPos: async function(){//start of getPos
    //fetch is like XMLHttpRequest except uses promises
    //fetch is also asynchronous thats why we need async/await keywords
    //routes are attached by the plugin @ /plugins/<plugin-id>/endpoint
    try{
      const res = await fetch(
        '/plugins/signalk-collision-detection/pos',
        {credentials: 'include'}
      );
      if(res.ok){
        const data = await res.json();
        console.log(data);
        return data;
      }else{
        throw new Error("Data fetch failed!");
      }
    }catch(error){
      console.error("Error: ", error);
    }
  },//end of getPos
  /*
   * Setter method to set self vessel position to core
  */
  setPos: function(latitude, longitude){//start of setPos
    const response = fetch(
      '/plugins/signalk-collision-detection/pos',
      {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({
          longitude: longitude,
          latitude: latitude
        })
      }
    );
  }//end of setPos
};//end of Vessel

export default Vessel;

