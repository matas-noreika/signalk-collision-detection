/*
 * Purpose:
 * React component that exposes a form that enables a user to add a vessel
 * to the signalk data model.
 * Programmer: Matas Noreika 26/04/16 00:32:16
*/

import React from 'react';
import Core from '../Core';


export default function AddVesselForm(props){
  const formHandler = async (event) => {
    try{
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const lat = Number.parseInt(formData.get('latitude'));
      const long = Number.parseInt(formData.get('longitude'));
      const cog = Number.parseInt(formData.get('cog'));
      const sog = Number.parseInt(formData.get('sog'));
      const response = await Core.Vessel.addVessel(lat, long, cog, sog);
      console.log(response);
    }catch(error){
      console.error("Error: ", error.message);
    }
  }

  return (
    <>
    <h2>Add Simulated Vessel</h2>
    <form onSubmit={formHandler}>
      <label>latitude in degress:
        <input type="number" name="latitude" />
      </label>
      <br />
      <label>longitude in degrees:
        <input type="number" name="longitude" />
      </label>
      <br />
      <label>COG in degrees from True North:
        <input type="number" name="cog" />
      </label>
      <br />
      <label>SOG in meters per second:
        <input type="number" name="sog" />
      </label>
      <br />
      <button type="submit">Add vessel</button>
    </form>
    </>
  );
}
