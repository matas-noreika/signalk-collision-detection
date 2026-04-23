/*
 * Purpose:
 * Component that renders a frontend interface for user to update own vessel parameters.
 * Programmer: Matas Noreika 26/04/15 23:36:47
*/

import React, { useState } from 'react';
import Core from '../Core';

export default function OwnVesselForm(props){
  const sendPosData = async (event) => { // start of sendPosData
    try{
      event.preventDefault();
      //generate a formdata object from event target
      const formData = new FormData(event.currentTarget);
      //obtain latitude and longitude values
      const lat = Number.parseInt(formData.get('latitude'));
      const long = Number.parseInt(formData.get('longitude'));
      console.log(`lat: ${lat}, long: ${long}`);
      //send request to server
      const response = await Core.Vessel.setPos({latitude: lat, longitude: long});
      console.log("request response: ", response.message);
    }catch(error){
      console.error("Error: ", error.message);
    }
  } // end of sendPosData
  const sendBearingData = async (event) => { // start of sendBearingData
    try{
      event.preventDefault();
      //generate a formdata object from event target
      const formData = new FormData(event.currentTarget);
      //obtain bearing value
      const cog = Number.parseInt(formData.get('cog'));
      console.log(`cog: ${cog}`);
      //send request to server
      const response = await Core.Vessel.setBearing(cog);
      console.log("request response: ", response.message);
    }catch(error){
      console.error("Error: ", error.message);
    }
  }// end of sendBearingData
  const sendVelocityData = async (event) => { // start of sendVelocityData
    try{
      event.preventDefault();
      //generate a formdata object from event target
      const formData = new FormData(event.currentTarget);
      //obtain bearing value
      const sog = Number.parseInt(formData.get('sog'));
      console.log(`sog: ${sog}`);
      //send request to server
      const response = await Core.Vessel.setVelocity(sog);
      console.log("request response: ", response.message);
    }catch(error){
      console.error("Error: ", error.message);
    }
  }// end of sendVelocityData
 
  return (
    <>
      <h2>Own Vessel Form</h2>
      <form onSubmit={sendPosData}>
        <label>latitude in degress:
          <input type="number" name="latitude" />
        </label>
        <br />
        <label>longitude in degress:
          <input type='number' name='longitude' />
        </label>
        <br />
        <button type="submit">send position data</button>
      </form>
      <form onSubmit={sendBearingData}>
        <label>COG in degrees from True North:
          <input type='number' name='cog' />
        </label>
        <br />
        <button type="submit">send bearing data</button>
      </form>
      <form onSubmit={sendVelocityData}>
        <label>SOG in meters per second:
          <input type='number' name='sog' />
        </label>
        <br />
        <button type="submit">send Velocity data</button>
      </form>
    </>
  );
}
