/*
 * Purpose:
 * Implementation of position form that is used to render a react
 * component to render a form for submitting data to core.
 * Programmer: Matas Noreika 26/03/07 17:20:10
*/

import React from 'react';
import Core from '../Core';

export default function PosForm(props){//start of PosForm
  const sendData = async (event) => {//start of sendData
    try{
      //ensure that any default handlers are disabled (we manual configure the requests)
      event.preventDefault();
      //generate a FormData object from the event.currentTarget (Form element)
      const formData = new FormData(event.currentTarget);
      //Obtain individual components of the positional data
      const latitude = Number.parseInt(formData.get('latitude'));
      const longitude = Number.parseInt(formData.get('longitude'));
      console.log("Form Latitude data: ", latitude);
      console.log("Form Longitude data: ", longitude);
      //Send data
      //TODO: fix and handle the resturn response of request
      const response = await Core.Vessel.setPos({latitude: latitude, longitude: longitude});
      console.log("request condition: ", response.message);
    }catch(error){
      console.error("Error: ", error.message);
    }
  }//end of sendData
  return (
    <form onSubmit={sendData}>
      <label>latitude: 
        <input type="number" name="latitude" />
      </label>
      <label>longitude: 
        <input type='number' name='longitude' />
      </label>
      <button type="submit">send data</button>
    </form>
  );
};//end of PosForm

