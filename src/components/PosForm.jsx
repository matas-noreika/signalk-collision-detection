/*
 * Purpose:
 * Implementation of position form that is used to render a react
 * component to render a form for submitting data to core.
 * Programmer: Matas Noreika 26/03/07 17:20:10
*/

import React from 'react';
import Core from '../Core';

export default function PosForm(props){//start of PosForm
  const sendData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const latitude = formData.get('latitude');
    console.log(latitude);
    Core.Vessel.setPos({latitude: latitude, longitude: 0});
  }
  return (
    <form onSubmit={sendData}>
      <label>latitude:
        <input type="number" name="latitude" />
      </label>
      <button type="submit">send data</button>
    </form>
  );
};//end of PosForm

