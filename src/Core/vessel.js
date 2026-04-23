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
   * Getter method to retriev e self vessel position from core
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
  setPos: async function(posData){//start of setPos
    console.log("setPos() -> posData: ", posData);
    try{
      const res = await fetch(
        '/plugins/signalk-collision-detection/pos',
        {
          credentials: 'include',
          headers: {
          'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(posData)
        }
      );
      if(res.ok){
        const data = await res.json();
        console.log(data);
        return data;
      }else{
        throw new Error('Data POST failed!');
      }
    }catch(error){
      console.error("Error", error);
    }
  },//end of setPos
  getBearing: async function() { // start of getBearing
    try{
      const res = await fetch(
        '/plugins/signalk-collision-detection/bearing',
        {credentials: 'include'}
      );
      if(res.ok){
        const data = await res.json();
        console.log(data);
        return data;
      }else{
        throw new Error('Data fetch failed!');
      }
    }catch(error){
      console.error("Error", error);
    }
  },// end of setBearing
  setBearing: async function(bearing) { // start of setBearing
    console.log("setBearing() -> bearing: ", bearing);
    try{
      const res = await fetch(
        '/plugins/signalk-collision-detection/bearing',
        {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({bearing: bearing})
        }
      );
      if(res.ok){
        const data = await res.json();
        console.log(data);
        return data;
      }else{
        throw new Error('Data POST failed!');
      }
    }catch(error){
      console.error("Error", error);
    }
  },// end of setBearing
  setVelocity: async function(velocity){ // start of setVelocity
    console.log("setVelocity() -> velocity: ", velocity);
    try{
      const res = await fetch(
        '/plugins/signalk-collision-detection/velocity',
        {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({velocity: velocity})
        }
      );
      if(res.ok){
        const data = await res.json();
        console.log(data);
        return data;
      }else{
        throw new Error('Data POST failed!');
      }
    }catch(error){
      console.error("Error", error);
    }
  },// end of setVelocity
  addVessel: async function(lat, long, cog, sog){ // start of addVessel
    console.log(`addVessel() -> ${lat}, ${long}, ${cog}, ${sog}`);
    try{
      const res = await fetch(
        '/plugins/signalk-collision-detection/vessel/add',
        {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({lat: lat, long: long, cog: cog, sog: sog})
        }
      );
      if(res.ok){
        const data = await res.json();
        console.log(data);
        return data;
      }else{
        throw new Error('Data POST failed!');
      }
    }catch(error){
      console.error("Error: ", error.message);
    }
  } // end of addVessel
};//end of Vessel

export default Vessel;

